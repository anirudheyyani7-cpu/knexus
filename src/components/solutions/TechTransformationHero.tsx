export function TechTransformationHero() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-center">
          <div className="max-w-2xl animate-fade-in motion-reduce:animate-none">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-4">
              One practice &middot; Three engines
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">
              Tech Transformation
            </h1>
            <p className="text-xl font-semibold text-slate-700 mb-5">
              Strategy, systems, and data — run as one practice, not three handoffs.
            </p>
            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              Whatever brings you here — adoption, growth, operations, or experience — the work
              lands through three engines that share a single delivery model. DSSI leads
              sector-specific transformation, Digital Next rebuilds the front office, and DEQ
              provides the data and engineering foundation both run on.
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
