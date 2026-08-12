import { Plus } from "lucide-react";
import { Solution } from "@/data/tmtSolutions";

interface DetailHeroProps {
  solution: Solution;
}

export function DetailHero({ solution }: DetailHeroProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
        <div className="max-w-2xl animate-fade-in motion-reduce:animate-none">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-4">
            {solution.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">
            {solution.title}
          </h1>
          <p className="italic text-lg text-slate-600 mb-5">{solution.tagline}</p>
          <p className="text-base text-slate-600 leading-relaxed">{solution.intro}</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-brand-blue p-6 text-white">
          <div className="flex items-start justify-between mb-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/70">
              {solution.heroStat.label}
            </p>
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded bg-white/15">
              <Plus className="h-4 w-4 text-white" />
            </span>
          </div>
          <p className="text-4xl font-extrabold tracking-tight mb-2">{solution.heroStat.value}</p>
          <p className="text-sm text-white/85 leading-relaxed">{solution.heroStat.caption}</p>
        </div>
      </div>
    </div>
  );
}
