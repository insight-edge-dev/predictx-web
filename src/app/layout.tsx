import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { InstallAppModal } from "@/components/modals/InstallAppModal";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import {
  BRAND_ICON,
  DEFAULT_DESCRIPTION,
  ORGANIZATION_NAME,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE,
} from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PredictX | AI Football & Cricket Predictions",
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: ORGANIZATION_NAME, url: SITE_URL }],
  creator: ORGANIZATION_NAME,
  publisher: ORGANIZATION_NAME,
  category: "sports",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/predictx-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: BRAND_ICON, sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/predictx-icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black-translucent",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "PredictX | AI Football & Cricket Predictions",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: SOCIAL_IMAGE,
        alt: "PredictX AI sports prediction app interface",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PredictX | AI Football & Cricket Predictions",
    description: DEFAULT_DESCRIPTION,
    images: [SOCIAL_IMAGE],
    creator: "@predictxsports",
  },
};

export const viewport: Viewport = {
  themeColor: "#2a1716",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text-2">
        <PostHogProvider>{children}</PostHogProvider>
        <InstallAppModal />
      </body>
    </html>
  );
}
