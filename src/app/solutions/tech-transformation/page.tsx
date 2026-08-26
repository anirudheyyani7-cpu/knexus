import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TechTransformationHero } from "@/components/solutions/TechTransformationHero";
import { MotivationRail } from "@/components/solutions/MotivationRail";
import { CredsCarousel } from "@/components/solutions/CredsCarousel";
import { EngineCard } from "@/components/solutions/EngineCard";
import { CtaBand } from "@/components/solutions/CtaBand";
import { Reveal } from "@/components/solutions/Reveal";
import { engines } from "@/data/techTransformation";

export default function TechTransformationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Breadcrumb
              crumbs={[{ label: "Marketplace", href: "/" }, { label: "Tech Transformation" }]}
            />
          </div>
        </div>

        <TechTransformationHero />

        {/* Why clients come to us */}
        <section className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
            <Reveal className="max-w-2xl mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-3">
                Why clients come to us
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Four reasons transformation starts
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <MotivationRail />
            </Reveal>
          </div>
        </section>

        {/* Selected credentials */}
        <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <Reveal className="max-w-2xl mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-3">
              Selected credentials
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Work we&rsquo;ve delivered
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <CredsCarousel />
          </Reveal>
        </section>

        {/* Three engines */}
        <section className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
            <Reveal className="max-w-2xl mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-3">
                One practice, three engines
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Where the work gets delivered
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {engines.map((engine, i) => (
                <EngineCard key={engine.id} engine={engine} index={i} />
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <CtaBand
            heading="Ready to start a transformation program?"
            body="Talk to us about where your program needs the most help — or explore the agents already built to support it."
          />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
