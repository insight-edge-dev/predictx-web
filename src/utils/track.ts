import { getPostHog } from "@/lib/posthog";

export const ANALYTICS_EVENTS = {
  heroCtaClicked: "hero_cta_clicked",
  navbarCtaClicked: "navbar_cta_clicked",
  predictionClicked: "prediction_clicked",
  getStartedClicked: "get_started_clicked",
  signupClicked: "signup_clicked",
  loginClicked: "login_clicked",
  footerCtaClicked: "footer_cta_clicked",
  discordClicked: "discord_clicked",
  twitterXClicked: "twitter_x_clicked",
  emailClicked: "email_clicked",
  contactClicked: "contact_clicked",
  outboundLinkClicked: "outbound_link_clicked",
  scroll25: "scroll_25",
  scroll50: "scroll_50",
  scroll75: "scroll_75",
  scroll100: "scroll_100",
  time30s: "time_30s",
  time60s: "time_60s",
  time120s: "time_120s",
  returningVisitor: "returning_visitor",
} as const;

export type AnalyticsEventName =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

export type AnalyticsEventProperties = {
  page: string;
  url: string;
  button_text: string;
  timestamp: string;
  destination_url?: string;
};

function currentPageProperties(buttonText: string): AnalyticsEventProperties | null {
  if (typeof window === "undefined") return null;

  return {
    page: window.location.pathname,
    url: window.location.href,
    button_text: buttonText,
    timestamp: new Date().toISOString(),
  };
}

export function trackEvent(
  event: AnalyticsEventName,
  buttonText: string,
  properties: Partial<Pick<AnalyticsEventProperties, "destination_url">> = {},
): void {
  const client = getPostHog();
  const commonProperties = currentPageProperties(buttonText);

  if (!client || !commonProperties) return;

  client.capture(event, { ...commonProperties, ...properties });
}

export function trackOutboundLink(
  buttonText: string,
  destinationUrl: string,
): void {
  trackEvent(ANALYTICS_EVENTS.outboundLinkClicked, buttonText, {
    destination_url: destinationUrl,
  });
}
