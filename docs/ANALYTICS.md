# PredictX analytics

PredictX uses the official `posthog-js` SDK for landing-page conversion analytics. The root App Router layout is wrapped by `PostHogProvider`, while initialization, event definitions, tracking helpers, and React access are kept in separate modules.

## Installation

The SDK is installed as a production dependency:

```bash
npm install posthog-js
```

Copy `.env.example` to `.env.local`, then add the project key from PostHog project settings. Restart the Next.js process after changing public environment variables.

## Environment variables

```dotenv
NEXT_PUBLIC_POSTHOG_KEY=phc_your_project_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

Keys are never hardcoded. Analytics is active only in production and only when a key is present. To test a non-production build explicitly, set `NEXT_PUBLIC_POSTHOG_ENABLED=true`. Set `NEXT_PUBLIC_POSTHOG_DEBUG=true` only during diagnostics.

Public PostHog project keys are designed for client-side use. Never put personal API keys or other secrets in a `NEXT_PUBLIC_` variable.

## How events work

PostHog automatically captures pageviews (including App Router history changes), page leaves, sessions, referrers, browser/device/OS information, and server-derived geography. Autocapture, session replay, and heatmap collection are explicitly enabled. Basic pageviews are not captured manually.

Every custom event includes:

- `page`: current pathname
- `url`: current full page URL
- `button_text`: visible or accessible control label
- `timestamp`: ISO 8601 client timestamp
- `destination_url`: outbound destination, where applicable

The provider uses a single delegated listener to track interactive elements without adding analytics logic to presentation components. A valid `data-analytics-event` value takes priority; otherwise the provider recognizes CTA placement, link destination, and common labels. Every external link also produces `outbound_link_clicked`.

Scroll events (`scroll_25`, `scroll_50`, `scroll_75`, `scroll_100`) and time events (`time_30s`, `time_60s`, `time_120s`) fire once per pathname in the browser tab session. The landing page also emits `returning_visitor` once in a later browser session when the browser has visited before.

For the landing conversion funnel, configure these PostHog steps:

1. `$pageview`, filtered to `$pathname = /`
2. `hero_cta_clicked`
3. `prediction_clicked`
4. `signup_clicked`
5. `returning_visitor`

## Adding a new event

1. Add its reusable name to `ANALYTICS_EVENTS` in `src/utils/track.ts`.
2. The exported union type updates automatically.
3. Call `trackEvent(ANALYTICS_EVENTS.yourEvent, "Button label")`, or add a typed method to `useAnalytics`.

Client-component example:

```tsx
"use client";

import { useAnalytics } from "@/hooks/useAnalytics";

export function ExampleButton() {
  const analytics = useAnalytics();
  return <button onClick={() => analytics.signup("Sign up")}>Sign up</button>;
}
```

For markup that should use delegated tracking, add `data-analytics-event="signup_clicked"` and optionally `data-analytics-button-text="Sign up"`. Only event names declared in `ANALYTICS_EVENTS` are accepted.

## Debugging PostHog

1. Use a non-production build with `NEXT_PUBLIC_POSTHOG_ENABLED=true` and `NEXT_PUBLIC_POSTHOG_DEBUG=true`.
2. In browser developer tools, confirm requests reach the configured PostHog host.
3. Open PostHog **Activity > Live events** and trigger the relevant interaction.
4. Verify custom properties and the anonymous `distinct_id` on the event.
5. Confirm session replay and heatmaps are enabled for the PostHog project as well as in SDK configuration.

If no events appear, check that the key is present in the built client bundle's environment, the host matches the PostHog project region or proxy, tracking protection is not blocking requests, and the application was rebuilt after environment changes.

## Deployment notes

- Set both required variables in the deployment platform before building. `NEXT_PUBLIC_` values are embedded at build time.
- Use the ingestion host shown in PostHog project settings if it differs from the default in `.env.example`.
- For higher delivery reliability, configure a first-party reverse proxy and set `NEXT_PUBLIC_POSTHOG_HOST` to that endpoint.
- Review consent, privacy-policy, data-retention, input-masking, and session-replay requirements for every operating jurisdiction before launch.
- Call `posthog.identify(stableUserId)` after authentication is added, and `posthog.reset()` on logout, so landing and product events join the correct person without leaking identity between users.
