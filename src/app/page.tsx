import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { ApplicationsSection } from "@/components/landing/ApplicationsSection";
import { FunctionSection } from "@/components/landing/FunctionSection";
import { ForgeCtaBanner } from "@/components/landing/ForgeCtaBanner";
import { IntegrationsSection } from "@/components/landing/IntegrationsSection";
import { CtaSection } from "@/components/landing/CtaSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ApplicationsSection />
        <FunctionSection />
        <ForgeCtaBanner />
        <IntegrationsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
