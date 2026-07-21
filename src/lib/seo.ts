import type { Metadata } from "next";

import { appLinks, socialLinks } from "@/data/links";
import { faqs } from "@/data/faq";

export const SITE_URL = "https://predictxsports.com";
export const SITE_NAME = "PredictX";
export const ORGANIZATION_NAME = "Inside Edge Dev";
export const SUPPORT_EMAIL = "support@predictxsports.com";
export const DEFAULT_DESCRIPTION =
  "PredictX provides AI-powered football and cricket predictions, transparent confidence signals, live scores, match alerts, and analyst context for sports fans.";
export const SOCIAL_IMAGE = "/illustrations/predictx-hero.png";
export const BRAND_ICON = "/predictx-icon-512.png";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  keywords?: string[];
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const canonicalUrl = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: absoluteUrl(SOCIAL_IMAGE),
          alt: "PredictX AI sports prediction app interface",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      creator: "@predictxsports",
      images: [absoluteUrl(SOCIAL_IMAGE)],
    },
  };
}

export function createHomeStructuredData() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const appId = `${SITE_URL}/#software-application`;
  const googlePlayUrl = appLinks.googlePlay.split("&")[0];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        alternateName: "PredictX Sports",
        legalName: ORGANIZATION_NAME,
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(BRAND_ICON),
          contentUrl: absoluteUrl(BRAND_ICON),
          width: 512,
          height: 512,
          caption: "PredictX logo",
        },
        email: SUPPORT_EMAIL,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: SUPPORT_EMAIL,
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: socialLinks.map((profile) => profile.href),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: "PredictX Sports",
        description: DEFAULT_DESCRIPTION,
        inLanguage: "en-IN",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "SoftwareApplication",
        "@id": appId,
        name: SITE_NAME,
        alternateName: "PredictX Sports",
        description: DEFAULT_DESCRIPTION,
        url: SITE_URL,
        downloadUrl: googlePlayUrl,
        installUrl: googlePlayUrl,
        image: absoluteUrl(SOCIAL_IMAGE),
        operatingSystem: "Android",
        applicationCategory: "SportsApplication",
        applicationSubCategory: "Sports prediction and live scores",
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          url: googlePlayUrl,
        },
        featureList: [
          "AI-powered football and cricket match predictions",
          "Confidence signals and factor analysis",
          "Live scores and match alerts",
          "Expert analyst context",
          "Team, player, venue, and tournament insights",
        ],
        publisher: { "@id": organizationId },
        inLanguage: "en-IN",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        url: `${SITE_URL}/#faq`,
        inLanguage: "en-IN",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function createPageStructuredData({
  name,
  description,
  path,
  dateModified,
}: {
  name: string;
  description: string;
  path: `/${string}`;
  dateModified?: string;
}) {
  const pageUrl = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#software-application` },
        inLanguage: "en-IN",
        ...(dateModified ? { dateModified } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
