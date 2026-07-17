"use client";

import { usePathname } from "next/navigation";
import { PostHogProvider as ReactPostHogProvider } from "posthog-js/react";
import { useEffect, type ReactNode } from "react";

import {
  initializePostHog,
  isAnalyticsEnabled,
  posthog,
} from "@/lib/posthog";
import {
  ANALYTICS_EVENTS,
  trackEvent,
  trackOutboundLink,
  type AnalyticsEventName,
} from "@/utils/track";

const SCROLL_THRESHOLDS = [25, 50, 75, 100] as const;
const TIME_THRESHOLDS = [30, 60, 120] as const;
const STORAGE_PREFIX = "predictx:analytics";

const scrollEvents: Record<(typeof SCROLL_THRESHOLDS)[number], AnalyticsEventName> = {
  25: ANALYTICS_EVENTS.scroll25,
  50: ANALYTICS_EVENTS.scroll50,
  75: ANALYTICS_EVENTS.scroll75,
  100: ANALYTICS_EVENTS.scroll100,
};

const timeEvents: Record<(typeof TIME_THRESHOLDS)[number], AnalyticsEventName> = {
  30: ANALYTICS_EVENTS.time30s,
  60: ANALYTICS_EVENTS.time60s,
  120: ANALYTICS_EVENTS.time120s,
};

function readSessionSet(key: string): Set<string> {
  try {
    return new Set(JSON.parse(sessionStorage.getItem(key) ?? "[]") as string[]);
  } catch {
    return new Set();
  }
}

function writeSessionSet(key: string, values: Set<string>): void {
  try {
    sessionStorage.setItem(key, JSON.stringify([...values]));
  } catch {
    // Storage may be unavailable in privacy-focused browser modes.
  }
}

function buttonTextFor(element: HTMLElement): string {
  const label = [
    element.dataset.analyticsButtonText,
    element.innerText?.trim(),
    element.getAttribute("aria-label")?.trim(),
  ].find(Boolean);

  return (label ?? "Unlabelled control").replace(/\s+/g, " ");
}

function explicitEventFor(element: HTMLElement): AnalyticsEventName | null {
  const event = element.dataset.analyticsEvent;
  return event && Object.values(ANALYTICS_EVENTS).includes(event as AnalyticsEventName)
    ? (event as AnalyticsEventName)
    : null;
}

function inferredEventFor(
  element: HTMLElement,
  text: string,
  destination: URL | null,
): AnalyticsEventName | null {
  const normalizedText = text.toLowerCase();
  const hostname = destination?.hostname.toLowerCase() ?? "";

  if (element.closest("header") && destination?.hostname.includes("play.google.com")) {
    return ANALYTICS_EVENTS.navbarCtaClicked;
  }
  if (element.closest("footer") && destination?.hostname.includes("play.google.com")) {
    return ANALYTICS_EVENTS.footerCtaClicked;
  }
  if (element.closest("main > *:first-child") && destination?.hostname.includes("play.google.com")) {
    return ANALYTICS_EVENTS.heroCtaClicked;
  }
  if (element.closest("#download") && destination?.hostname.includes("play.google.com")) {
    return ANALYTICS_EVENTS.getStartedClicked;
  }
  if (normalizedText.includes("prediction") || normalizedText.includes("predict now")) {
    return ANALYTICS_EVENTS.predictionClicked;
  }
  if (/sign[ -]?up|create account/.test(normalizedText)) {
    return ANALYTICS_EVENTS.signupClicked;
  }
  if (/log[ -]?in|sign[ -]?in/.test(normalizedText)) {
    return ANALYTICS_EVENTS.loginClicked;
  }
  if (hostname === "discord.com" || hostname.endsWith(".discord.com") || hostname === "discord.gg") {
    return ANALYTICS_EVENTS.discordClicked;
  }
  if (hostname === "x.com" || hostname.endsWith(".x.com") || hostname === "twitter.com") {
    return ANALYTICS_EVENTS.twitterXClicked;
  }
  if (destination?.protocol === "mailto:") {
    return normalizedText.includes("contact")
      ? ANALYTICS_EVENTS.contactClicked
      : ANALYTICS_EVENTS.emailClicked;
  }
  if (normalizedText.includes("contact")) {
    return ANALYTICS_EVENTS.contactClicked;
  }

  return null;
}

function useClickTracking(): void {
  useEffect(() => {
    if (!isAnalyticsEnabled) return;

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const control = event.target.closest<HTMLElement>(
        "a, button, [role='button'], [data-analytics-event]",
      );
      if (!control) return;

      const text = buttonTextFor(control);
      const href = control instanceof HTMLAnchorElement ? control.href : null;
      const destination = href ? new URL(href, window.location.href) : null;
      const customEvent =
        explicitEventFor(control) ?? inferredEventFor(control, text, destination);

      if (customEvent) trackEvent(customEvent, text);

      if (destination && destination.origin !== window.location.origin) {
        trackOutboundLink(text, destination.href);
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);
}

function useEngagementTracking(pathname: string): void {
  useEffect(() => {
    if (!isAnalyticsEnabled) return;

    const storageKey = `${STORAGE_PREFIX}:engagement:${pathname}`;
    const fired = readSessionSet(storageKey);

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage =
        scrollableHeight <= 0
          ? 100
          : Math.min(100, (window.scrollY / scrollableHeight) * 100);

      for (const threshold of SCROLL_THRESHOLDS) {
        const marker = `scroll_${threshold}`;
        if (percentage >= threshold && !fired.has(marker)) {
          fired.add(marker);
          trackEvent(scrollEvents[threshold], `${threshold}% scroll`);
        }
      }

      writeSessionSet(storageKey, fired);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const timers = TIME_THRESHOLDS.map((seconds) =>
      window.setTimeout(() => {
        const marker = `time_${seconds}s`;
        if (fired.has(marker)) return;

        fired.add(marker);
        writeSessionSet(storageKey, fired);
        trackEvent(timeEvents[seconds], `${seconds} seconds`);
      }, seconds * 1000),
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      timers.forEach(window.clearTimeout);
    };
  }, [pathname]);
}

function useReturningVisitor(pathname: string): void {
  useEffect(() => {
    if (!isAnalyticsEnabled || pathname !== "/") return;

    const visitorKey = `${STORAGE_PREFIX}:has-visited`;
    const sessionKey = `${STORAGE_PREFIX}:landing-session`;

    try {
      const hasVisited = localStorage.getItem(visitorKey) === "true";
      const seenThisSession = sessionStorage.getItem(sessionKey) === "true";

      if (hasVisited && !seenThisSession) {
        trackEvent(ANALYTICS_EVENTS.returningVisitor, "Returning visitor");
      }

      localStorage.setItem(visitorKey, "true");
      sessionStorage.setItem(sessionKey, "true");
    } catch {
      // Returning-visitor detection is optional when storage is unavailable.
    }
  }, [pathname]);
}

export function PostHogProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    initializePostHog();
  }, []);

  useClickTracking();
  useEngagementTracking(pathname);
  useReturningVisitor(pathname);

  return (
    <ReactPostHogProvider client={posthog}>{children}</ReactPostHogProvider>
  );
}
