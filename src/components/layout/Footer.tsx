import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-navy py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center">
            <span className="text-base font-extrabold text-white tracking-tight">
              K-Nexus<span className="text-brand-blue">.AI</span>
            </span>
          </Link>

          <nav className="flex gap-6 text-sm text-slate-400">
            {["Privacy Policy", "Terms of Use", "Contact"].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </nav>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} K-Nexus.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
