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

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Marketplace
          </Link>
          <a href="#integrations" className="hover:text-slate-900 transition-colors">
            Integrations
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            Docs
          </a>
        </nav>

        <button className="px-4 py-2 text-sm font-semibold text-white bg-brand-blue rounded-lg hover:bg-brand-blue-dark transition-colors shadow-sm">
          Login
        </button>
      </div>
    </header>
  );
}
