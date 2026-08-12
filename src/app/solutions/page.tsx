import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { MetricsRow } from "@/components/solutions/MetricsRow";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { FY27Carousel } from "@/components/solutions/FY27Carousel";
import { CtaBand } from "@/components/solutions/CtaBand";
import { Reveal } from "@/components/solutions/Reveal";
import { solutions, solutionMetrics, solutionMetricsSource } from "@/data/tmtSolutions";

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <SolutionsHero />
        <MetricsRow metrics={solutionMetrics} source={solutionMetricsSource} />

        <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <Reveal className="max-w-2xl mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-3">
              Five pillars, one program
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              How we help
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((solution, i) => (
              <SolutionCard key={solution.id} solution={solution} index={i} />
            ))}
          </div>
        </section>

        <section className="bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
            <Reveal className="max-w-2xl mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-violet mb-3">
                FY27 focus
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Where we&rsquo;re placing the next set of bets
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <FY27Carousel />
            </Reveal>
          </div>
        </section>

        <Reveal>
          <CtaBand
            heading="Ready to put a pillar to work?"
            body="Talk to us about where your transformation program needs the most help — or explore the agents already built for TMT operations."
          />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
