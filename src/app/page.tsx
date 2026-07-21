import type { Metadata } from "next";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBento } from "@/components/StatsBento";
import { FeatureGrid } from "@/components/FeatureGrid";
import { AppShowcase } from "@/components/AppShowcase";
import { DownloadCta } from "@/components/DownloadCta";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";
import { ScrollTextReveal } from "@/components/ScrollTextReveal";
import { Methodology } from "@/components/Methodology";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { createHomeStructuredData, createPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: "AI Football & Cricket Predictions",
    description:
      "Explore PredictX AI-powered football and cricket predictions, confidence signals, live scores, match alerts, transparent methodology, and analyst context.",
    path: "/",
    keywords: [
      "AI football predictions",
      "AI cricket predictions",
      "sports prediction app",
      "live match insights",
      "PredictX",
    ],
  });
}

export default function Home() {
  return (
    <>
      <JsonLd data={createHomeStructuredData()} />
      <Navbar />
      <main>
        <SectionReveal>
          <Hero />
        </SectionReveal>
        <SectionReveal>
          <StatsBento />
        </SectionReveal>
        <ScrollTextReveal />
        <FeatureGrid />
        <SectionReveal>
          <Methodology />
        </SectionReveal>
        <SectionReveal>
          <AppShowcase />
        </SectionReveal>
        <SectionReveal>
          <DownloadCta />
        </SectionReveal>
        <SectionReveal>
          <FaqSection />
        </SectionReveal>
        <SectionReveal>
          <ContactForm />
        </SectionReveal>
      </main>
      <SectionReveal>
        <Footer />
      </SectionReveal>
    </>
  );
}
