"use client";

import { useMemo } from "react";

import {
  ANALYTICS_EVENTS,
  trackEvent,
  trackOutboundLink,
  type AnalyticsEventName,
} from "@/utils/track";

export type Analytics = {
  track: (event: AnalyticsEventName, buttonText: string) => void;
  heroCta: (buttonText: string) => void;
  navbarCta: (buttonText: string) => void;
  prediction: (buttonText: string) => void;
  getStarted: (buttonText: string) => void;
  signup: (buttonText: string) => void;
  login: (buttonText: string) => void;
  footerCta: (buttonText: string) => void;
  discord: (buttonText: string) => void;
  twitterX: (buttonText: string) => void;
  email: (buttonText: string) => void;
  contact: (buttonText: string) => void;
  outboundLink: (buttonText: string, destinationUrl: string) => void;
};

export function useAnalytics(): Analytics {
  return useMemo(
    () => ({
      track: trackEvent,
      heroCta: (text) => trackEvent(ANALYTICS_EVENTS.heroCtaClicked, text),
      navbarCta: (text) =>
        trackEvent(ANALYTICS_EVENTS.navbarCtaClicked, text),
      prediction: (text) =>
        trackEvent(ANALYTICS_EVENTS.predictionClicked, text),
      getStarted: (text) =>
        trackEvent(ANALYTICS_EVENTS.getStartedClicked, text),
      signup: (text) => trackEvent(ANALYTICS_EVENTS.signupClicked, text),
      login: (text) => trackEvent(ANALYTICS_EVENTS.loginClicked, text),
      footerCta: (text) =>
        trackEvent(ANALYTICS_EVENTS.footerCtaClicked, text),
      discord: (text) => trackEvent(ANALYTICS_EVENTS.discordClicked, text),
      twitterX: (text) => trackEvent(ANALYTICS_EVENTS.twitterXClicked, text),
      email: (text) => trackEvent(ANALYTICS_EVENTS.emailClicked, text),
      contact: (text) => trackEvent(ANALYTICS_EVENTS.contactClicked, text),
      outboundLink: trackOutboundLink,
    }),
    [],
  );
}
