"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LayoutTemplate, MessageSquarePlus, SlidersHorizontal, ArrowRight } from "lucide-react";

const PATHS = [
  {
    href: "/forge/templates",
    icon: LayoutTemplate,
    title: "Start from a Template",
    description:
      "Pick a pre-built agent template and customise it for your specific use case. The fastest path to a working agent.",
    cta: "Browse Templates",
  },
  {
    href: "/forge/describe",
    icon: MessageSquarePlus,
    title: "Describe with AI",
    description:
      "Tell us in plain language what you need your agent to do. We'll infer the configuration and get you to a working draft in seconds.",
    cta: "Start Describing",
  },
  {
    href: "/forge/configure",
    icon: SlidersHorizontal,
    title: "Build from Scratch",
    description:
      "Define every detail yourself — tools, knowledge sources, guardrails, persona, and triggers — with full control over every setting.",
    cta: "Configure Manually",
  },
];

export default function ForgeSetupPage() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
            Agent Forge
          </h1>
          <p className="text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
            Build a custom AI agent tailored to your team. No code required — configure tools,
            guardrails, and behaviour through a guided wizard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PATHS.map((path, i) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={path.href}
                  className="group flex flex-col h-full rounded-xl border border-slate-200 bg-white p-6 shadow-card hover:shadow-card-hover hover:border-blue-200 hover:-translate-y-1 transition-all"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-blue mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-sm font-semibold text-slate-800 mb-2 leading-snug">
                    {path.title}
                  </h2>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1">
                    {path.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-blue group-hover:gap-2.5 transition-all">
                    {path.cta}
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
