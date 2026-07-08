import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBento } from "@/components/StatsBento";
import { FeatureGrid } from "@/components/FeatureGrid";
import { AppShowcase } from "@/components/AppShowcase";
import { DownloadCta } from "@/components/DownloadCta";
import { Footer } from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";
import { ScrollTextReveal } from "@/components/ScrollTextReveal";

export default function Home() {
  return (
    <>
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
          <AppShowcase />
        </SectionReveal>
        <SectionReveal>
          <DownloadCta />
        </SectionReveal>
      </main>
      <SectionReveal>
        <Footer />
      </SectionReveal>
    </>
  );
}
