import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/d/db/KPMG_blue_logo.svg"
            alt="KPMG"
            width={64}
            height={24}
            className="h-6 w-auto"
            unoptimized
          />
          <span className="text-xl font-extrabold text-slate-900 tracking-tight">
            K-Nexus<span className="text-brand-blue">.AI</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/tmt-ontology"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold rounded-full border transition-colors tmt-pill"
          >
            TMT Ontology
          </Link>
          <Link
            href="/ai-stack"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold text-brand-blue border border-brand-blue/40 rounded-full bg-brand-blue/5 hover:bg-brand-blue/10 hover:border-brand-blue/70 transition-colors"
          >
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
