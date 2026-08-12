export function SolutionsHero() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-center">
          <div className="max-w-2xl animate-fade-in motion-reduce:animate-none">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-4">
              Telecom &middot; Media &middot; Technology
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">
              TMT transformation, built on agents.
            </h1>
            <p className="text-xl font-semibold text-slate-700 mb-5">
              From strategy to execution, across every layer of the technology stack.
            </p>
            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              Knexus solutions bring structured transformation programs — not just point tools — to
              telecom, media, and technology enterprises. Five pillars span the full stack, from
              business model reinvention to the governance that keeps large programs accountable.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="hidden lg:block relative h-80 overflow-hidden rounded-3xl bg-brand-navy"
          >
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute top-8 right-8 h-36 w-36 rounded-full border border-brand-blue/40" />
            <div className="absolute top-20 right-20 h-20 w-20 rounded-full bg-brand-blue/25" />
            <div className="absolute bottom-10 left-10 h-24 w-24 rotate-45 border border-brand-violet/40" />
            <div className="absolute bottom-16 left-24 h-14 w-14 rounded-full bg-brand-violet/25" />
          </div>
        </div>
      </div>
    </section>
  );
}
