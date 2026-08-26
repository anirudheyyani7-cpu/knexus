// Vertical landing pages for the four DSSI verticals without a dedicated
// content tree (TMT reaches the existing /solutions pages instead). These
// present the DSSI practice's services and capabilities as they apply to
// the vertical, so each page stands on its own.

import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { EngineHero } from "@/components/solutions/EngineHero";
import { CapabilityAccordion } from "@/components/solutions/CapabilityAccordion";
import { CtaBand } from "@/components/solutions/CtaBand";
import { Reveal } from "@/components/solutions/Reveal";
import { StaggerItem } from "@/components/solutions/StaggerItem";
import { verticals, services, skills, DssiVerticalId } from "@/data/dssi";

interface VerticalStubPageProps {
  verticalId: Exclude<DssiVerticalId, "tmt">;
}

export function VerticalStubPage({ verticalId }: VerticalStubPageProps) {
  const vertical = verticals.find((v) => v.id === verticalId);
  if (!vertical) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Breadcrumb
              crumbs={[
                { label: "Marketplace", href: "/" },
                { label: "Tech Transformation", href: "/solutions/tech-transformation" },
                { label: "DSSI", href: "/solutions/tech-transformation/dssi" },
                { label: vertical.title },
              ]}
            />
          </div>
        </div>

        <EngineHero
          eyebrow="DSSI vertical"
          title={vertical.title}
          tagline={vertical.summary}
          intro={`DSSI brings its full strategy, data, and AI bench to ${vertical.title} — the same platform ecosystem, delivery model, and value-realization discipline applied to the problems this sector actually faces.`}
        />

        {/* How we help */}
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
            <Reveal className="max-w-2xl mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-3">
                How we help
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Services we bring to {vertical.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <CapabilityAccordion
                defaultOpenIndex={null}
                items={services.map((service) => ({
                  title: service.category,
                  bullets: service.items,
                }))}
              />
            </Reveal>
          </div>
        </section>

        {/* Who you work with */}
        <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <Reveal className="max-w-2xl mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-3">
              Who you work with
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              The roles on the bench
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, i) => (
              <StaggerItem key={skill} index={i}>
                <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  {skill}
                </span>
              </StaggerItem>
            ))}
          </div>
        </section>

        <Reveal>
          <CtaBand
            heading={`Working in ${vertical.title}?`}
            body="Tell us what you're trying to move and we'll walk you through how DSSI would approach it."
          />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
