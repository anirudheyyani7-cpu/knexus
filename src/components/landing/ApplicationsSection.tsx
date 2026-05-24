import { IndustryCard } from "@/components/ui/IndustryCard";
import { verticals } from "@/data/verticals";

const FEATURED_IDS = ["telecom", "media", "technology"];

export function ApplicationsSection() {
  const visible = verticals.filter((v) => FEATURED_IDS.includes(v.id));

  return (
    <section className="bg-slate-50/70 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Browse by pre-built agents
          </h2>
          <p className="text-slate-500 text-sm">
            Explore pre-built AI solutions tailored to specific industry domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {visible.map((v, i) => (
            <IndustryCard key={v.id} vertical={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
