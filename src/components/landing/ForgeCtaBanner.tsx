"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wrench, ShieldCheck } from "lucide-react";

const FEATURES = [
  { icon: Sparkles, label: "Template library" },
  { icon: Wrench, label: "Tool selection" },
  { icon: ShieldCheck, label: "Guardrails" },
];

export function ForgeCtaBanner() {
  return (
    <section className="py-6 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-blue via-[#1e4db7] to-brand-navy px-8 py-10 md:px-12"
        >
          {/* Content */}
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-white/50">
                Agent Forge — No Code Required
              </p>
              <h2 className="text-2xl font-extrabold leading-snug text-white md:text-3xl">
                Build Your Own AI Agent
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Define what your agent does, which tools it uses, and the guardrails it operates
                within. From template to deployed in minutes.
              </p>

              {/* Feature pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {FEATURES.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                  >
                    <Icon className="h-3 w-3" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/forge"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand-blue shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl md:self-auto"
            >
              Start Building
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
