"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useForge } from "@/components/forge/ForgeContext";

const DOMAIN_HINTS: Record<string, string> = {
  network: "Network Ops",
  ran: "Network Ops",
  core: "Network Ops",
  billing: "Revenue Assurance",
  revenue: "Revenue Assurance",
  churn: "Customer Experience",
  customer: "Customer Experience",
  spectrum: "Strategic Planning",
  strategy: "Strategic Planning",
  field: "Network Ops",
  dispatch: "Network Ops",
  content: "Customer Experience",
  ott: "Customer Experience",
};

function inferDomain(text: string): string {
  const lower = text.toLowerCase();
  for (const [keyword, domain] of Object.entries(DOMAIN_HINTS)) {
    if (lower.includes(keyword)) return domain;
  }
  return "Network Ops";
}

function inferName(text: string): string {
  const words = text.trim().split(/\s+/).slice(0, 5);
  return words
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ")
    .replace(/[^A-Za-z0-9 ]/g, "")
    .trim();
}

export default function ForgeDescribePage() {
  const router = useRouter();
  const { setDraft, log } = useForge();
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit() {
    if (text.trim().length < 20) {
      setError("Please provide at least 20 characters describing your agent.");
      return;
    }
    setError("");
    const name = inferName(text);
    const domain = inferDomain(text);
    setDraft({ name, description: text.trim(), domain });
    log("Description submitted", text.trim().slice(0, 60) + (text.length > 60 ? "…" : ""));
    router.push("/forge/configure");
  }

  return (
    <section className="px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-blue mb-6">
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-1.5">Describe Your Agent</h2>
          <p className="text-sm text-slate-500 mb-8 leading-relaxed">
            In plain language, tell us what you need your agent to do. We&apos;ll infer a starting
            configuration that you can refine in the next step.
          </p>

          <div className="space-y-4">
            <textarea
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                if (error) setError("");
              }}
              rows={6}
              placeholder="e.g. I need an agent that monitors network KPIs across our APAC clusters, detects anomalies in real time, and automatically opens tickets when latency exceeds SLA thresholds."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none"
            />
            {error && <p className="text-xs text-red-500">{error}</p>}

            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors"
            >
              Continue to Configure
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
