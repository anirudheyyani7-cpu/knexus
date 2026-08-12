import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBandProps {
  heading: string;
  body: string;
}

export function CtaBand({ heading, body }: CtaBandProps) {
  return (
    <section className="bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3 max-w-xl">
          {heading}
        </h2>
        <p className="text-slate-300 text-base mb-8 max-w-xl">{body}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Browse agents
          </Link>
        </div>
      </div>
    </section>
  );
}
