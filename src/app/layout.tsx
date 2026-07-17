import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://predictxsports.com"),
  title: "PredictX | AI Sports Predictions for Cricket & Football",
  description:
    "Download PredictX for AI-powered cricket and football predictions, live match insights, confidence scores, and expert analysis for IPL, World Cup 2026, BBL, PSL, and T20.",
  alternates: {
    canonical: "/",
  },
  applicationName: "PredictX",
  keywords: [
    "PredictX",
    "AI sports predictions",
    "cricket predictions",
    "football predictions",
    "IPL predictions",
    "World Cup 2026 predictions",
    "sports intelligence app",
  ],
  openGraph: {
    title: "PredictX | AI Sports Predictions for Cricket & Football",
    description:
      "AI match predictions, live insights, and confidence scores for cricket and football fans.",
    url: "/",
    siteName: "PredictX",
    images: [
      {
        url: "/illustrations/predictx-hero.png",
        width: 1200,
        height: 630,
        alt: "PredictX AI sports prediction app",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PredictX | AI Sports Predictions for Cricket & Football",
    description:
      "Download PredictX for AI-powered cricket and football predictions, live match insights, and confidence scores.",
    images: ["/illustrations/predictx-hero.png"],
    creator: "@predictxsports",
  },
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
      </body>
    </html>
  );
}
