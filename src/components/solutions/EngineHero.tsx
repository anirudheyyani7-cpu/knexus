// Lighter sibling of DetailHero for engine pages.
//
// DetailHero renders `solution.heroStat` unconditionally (the filled
// brand-blue callout). Engines carry no stat, so rather than making that
// optional — and adding dead branching to the component the 5 pillar detail
// pages depend on — this mirrors DetailHero's layout and type scale minus
// the stat column.

interface EngineHeroProps {
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string;
}

export function EngineHero({ eyebrow, title, tagline, intro }: EngineHeroProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
      <div className="max-w-2xl animate-fade-in motion-reduce:animate-none">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-4">
          {eyebrow}
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">
          {title}
        </h1>
        <p className="italic text-lg text-slate-600 mb-5">{tagline}</p>
        <p className="text-base text-slate-600 leading-relaxed">{intro}</p>
      </div>
    </div>
  );
}
