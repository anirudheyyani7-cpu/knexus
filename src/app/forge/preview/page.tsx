"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Edit2, Cpu, ShieldCheck, Zap, BookOpen } from "lucide-react";
import { useForge } from "@/components/forge/ForgeContext";

export default function ForgePreviewPage() {
  const router = useRouter();
  const { draft, reset, log } = useForge();
  const [deployed, setDeployed] = useState(false);

  function handleDeploy() {
    log("Agent deployed", draft.name);
    setDeployed(true);
  }

  if (deployed) {
    return (
      <section className="px-6 py-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-md"
        >
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
            Agent Deployed
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-8">
            <span className="font-semibold text-slate-700">{draft.name}</span> has been saved to
            your agent library. You can access and manage it from the Command Center.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              onClick={() => reset()}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors"
            >
              Back to Command Center
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => {
                reset();
                router.push("/forge");
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Build Another Agent
            </button>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-1.5">Preview Your Agent</h2>
          <p className="text-sm text-slate-500">
            Review your configuration before deploying to the marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Agent Card Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="lg:col-span-2"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
              Card Preview
            </p>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-card">
              <div className="flex justify-end mb-3">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-soft text-brand-blue border border-blue-200">
                  Custom Agent
                </span>
              </div>
              <h3 className="text-sm font-semibold text-slate-800 mb-1.5 leading-snug">
                {draft.name || "Unnamed Agent"}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                {draft.description || "No description provided."}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                  {draft.domain}
                </span>
              </div>
              <div className="flex justify-end mt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-blue text-white">
                  Access Agent
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-3 space-y-4"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Configuration Summary
            </p>

            {[
              {
                icon: Cpu,
                label: "Model",
                value: draft.baseModel,
              },
              {
                icon: Zap,
                label: "Tools",
                value: draft.tools.length
                  ? draft.tools.join(", ")
                  : "None configured",
              },
              {
                icon: BookOpen,
                label: "Knowledge Sources",
                value: draft.knowledgeSources.length
                  ? draft.knowledgeSources.join(", ")
                  : "None configured",
              },
              {
                icon: ShieldCheck,
                label: "Guardrails",
                value: draft.guardrails.length
                  ? draft.guardrails.join(", ")
                  : "None configured",
              },
            ].map((row) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.label}
                  className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <Icon className="h-4 w-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400 mb-0.5">
                      {row.label}
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">{row.value}</p>
                  </div>
                </div>
              );
            })}

            {draft.persona && (
              <div className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3">
                <BookOpen className="h-4 w-4 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400 mb-0.5">
                    Persona
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed line-clamp-3">
                    {draft.persona}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="mt-8 flex items-center gap-3"
        >
          <button
            onClick={handleDeploy}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors"
          >
            Deploy Agent
            <ArrowRight className="h-4 w-4" />
          </button>
          <Link
            href="/forge/configure"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Edit2 className="h-3.5 w-3.5" />
            Edit Configuration
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
