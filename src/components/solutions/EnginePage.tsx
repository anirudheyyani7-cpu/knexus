// Shared shell for the single-page engine details (Digital Next, DEQ).
// Both routes are structurally identical, so they render this with an id.

import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { EngineHero } from "@/components/solutions/EngineHero";
import { CapabilityAccordion } from "@/components/solutions/CapabilityAccordion";
import { CtaBand } from "@/components/solutions/CtaBand";
import { Reveal } from "@/components/solutions/Reveal";
import { engines, engineDetails } from "@/data/techTransformation";

interface EnginePageProps {
  engineId: "digital-next" | "deq";
}

export function EnginePage({ engineId }: EnginePageProps) {
  const engine = engines.find((e) => e.id === engineId);
  if (!engine) notFound();

  const detail = engineDetails[engineId];

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
                { label: engine.title },
              ]}
            />
          </div>
        </div>

        <EngineHero
          eyebrow={engine.tagline}
          title={engine.title}
          tagline={detail.tagline}
          intro={detail.intro}
        />

        {detail.groups.map((group, i) => (
          <section
            key={group.id}
            className={
              i % 2 === 0
                ? "bg-slate-50 border-y border-slate-200"
                : "bg-white border-b border-slate-200"
            }
          >
            <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
              <Reveal className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  {group.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <CapabilityAccordion items={group.items} />
              </Reveal>
            </div>
          </section>
        ))}

        <Reveal>
          <CtaBand
            heading={`Want to talk through ${engine.title}?`}
            body="Tell us where the gap is and we'll walk you through how this engine is delivered."
          />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
