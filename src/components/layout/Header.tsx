import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — text only, no icon */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">
            K-Nexus<span className="text-brand-blue">.AI</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/ai-stack"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold text-brand-dark-blue border border-brand-dark-blue/40 rounded-full bg-brand-dark-blue/5 hover:bg-brand-dark-blue/10 hover:border-brand-dark-blue/70 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-dark-blue opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-dark-blue" />
            </span>
            AI Stack
          </Link>

          {/* <button className="px-4 py-2 text-sm font-semibold text-white bg-brand-blue rounded-lg hover:bg-brand-blue-dark transition-colors shadow-sm">
            Login
          </button> */}
        </div>
      </div>
    </header>
  );
}
