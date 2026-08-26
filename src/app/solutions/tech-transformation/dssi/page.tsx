import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { EngineHero } from "@/components/solutions/EngineHero";
import { MetricsRow } from "@/components/solutions/MetricsRow";
import { ExpertiseRows } from "@/components/solutions/ExpertiseRows";
import { CapabilityAccordion } from "@/components/solutions/CapabilityAccordion";
import { VerticalCard } from "@/components/solutions/VerticalCard";
import { CtaBand } from "@/components/solutions/CtaBand";
import { Reveal } from "@/components/solutions/Reveal";
import { StaggerItem } from "@/components/solutions/StaggerItem";
import {
  practiceHighlights,
  skills,
  services,
  verticals,
  expertisePrinciples,
  digitalStrategyCapabilities,
} from "@/data/dssi";

export default function DssiPage() {
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
                { label: "DSSI" },
              ]}
            />
          </div>
        </div>

        <EngineHero
          eyebrow="5 verticals inside"
          title="DSSI"
          tagline="Shaping enterprise transformation through strategy, data and AI."
          intro="Digital Strategy & Systems Integration brings sector-led transformation to five verticals — from TMT and Emerging Tech through Tech M&A, Consumer Markets, and Global Capability Centres — backed by one platform, strategy, and engineering bench."
        />

        <MetricsRow metrics={practiceHighlights} />

        {/* Digital strategy & transformation */}
        <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <Reveal className="max-w-2xl mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-3">
              Digital strategy & transformation
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              What we do
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <CapabilityAccordion items={digitalStrategyCapabilities} />
          </Reveal>
        </section>

        {/* Our expertise */}
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
            <Reveal className="max-w-2xl mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-3">
                Our expertise
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                What we bring to the table
              </h2>
            </Reveal>
            <ExpertiseRows />
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
                {expertisePrinciples.map((principle) => (
                  <span
                    key={principle}
                    className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue"
                  >
                    {principle}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Our skills */}
        <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <Reveal className="max-w-2xl mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-3">
              Our skills
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

        {/* Our services */}
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
            <Reveal className="max-w-2xl mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-3">
                Our services
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Five service categories
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

        {/* Verticals */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
            <Reveal className="max-w-2xl mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-3">
                Five verticals
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Where DSSI goes to market
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {verticals.map((vertical, i) => (
                <VerticalCard key={vertical.id} vertical={vertical} index={i} />
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <CtaBand
            heading="Want to talk through DSSI?"
            body="Tell us which vertical you're working in and we'll walk you through how we'd approach it."
          />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
