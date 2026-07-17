import posthog, { type PostHog } from "posthog-js";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://app.posthog.com";
const explicitlyEnabled = process.env.NEXT_PUBLIC_POSTHOG_ENABLED === "true";

export const isAnalyticsEnabled =
  Boolean(posthogKey) &&
  (process.env.NODE_ENV === "production" || explicitlyEnabled);

let initialized = false;

export function initializePostHog(): PostHog | null {
  if (!isAnalyticsEnabled || !posthogKey) return null;

  if (!initialized) {
    posthog.init(posthogKey, {
      api_host: posthogHost,
      defaults: "2026-05-30",
      autocapture: true,
      capture_pageview: "history_change",
      capture_pageleave: true,
      capture_heatmaps: true,
      disable_session_recording: false,
      debug: process.env.NEXT_PUBLIC_POSTHOG_DEBUG === "true",
    });
    initialized = true;
  }

  return posthog;
}

export function getPostHog(): PostHog | null {
  return initialized ? posthog : null;
}

export { posthog };
