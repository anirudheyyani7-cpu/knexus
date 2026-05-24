"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useForge } from "@/components/forge/ForgeContext";

const TRIGGER_OPTIONS = [
  "Scheduled (cron)",
  "Webhook",
  "User message",
  "Alert threshold breach",
  "Ticket created",
  "Data pipeline event",
  "Manual invocation",
];

const INTEGRATION_OPTIONS = [
  { name: "ServiceNow", letter: "S", bg: "bg-green-100", text: "text-green-700" },
  { name: "Slack", letter: "Sl", bg: "bg-purple-100", text: "text-purple-700" },
  { name: "Jira", letter: "J", bg: "bg-blue-100", text: "text-blue-700" },
  { name: "PagerDuty", letter: "P", bg: "bg-red-100", text: "text-red-700" },
  { name: "Salesforce", letter: "SF", bg: "bg-sky-100", text: "text-sky-700" },
  { name: "Datadog", letter: "D", bg: "bg-orange-100", text: "text-orange-700" },
];

export default function ForgeOnboardingPage() {
  const router = useRouter();
  const { draft, setDraft, log } = useForge();

  const [persona, setPersona] = useState(draft.persona);
  const [triggers, setTriggers] = useState<string[]>(draft.triggers);
  const [integrations, setIntegrations] = useState<string[]>([]);

  function toggleTrigger(trigger: string) {
    setTriggers((prev) =>
      prev.includes(trigger) ? prev.filter((t) => t !== trigger) : [...prev, trigger]
    );
  }

  function toggleIntegration(name: string) {
    setIntegrations((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  }

  function handleNext() {
    setDraft({ persona, triggers });
    log("Onboarding complete", `Triggers: ${triggers.join(", ") || "none"}`);
    router.push("/forge/preview");
  }

  return (
    <section className="px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-1.5">Onboard Your Agent</h2>
          <p className="text-sm text-slate-500">
            Define how your agent presents itself, when it activates, and which systems it connects to.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="space-y-8"
        >
          {/* Persona */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
              Persona / System Prompt
            </label>
            <textarea
              value={persona}
              onChange={(e) => setPersona(e.target.value)}
              rows={5}
              placeholder={`e.g. You are a Network Health Sentinel for Telecom APAC. You monitor RAN and Core KPIs in real time, identify anomalies, and escalate issues before SLA breaches occur. Always be concise and action-oriented.`}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none"
            />
          </div>

          {/* Triggers */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-3 uppercase tracking-wide">
              Triggers
            </label>
            <div className="flex flex-wrap gap-2">
              {TRIGGER_OPTIONS.map((trigger) => (
                <button
                  key={trigger}
                  type="button"
                  onClick={() => toggleTrigger(trigger)}
                  className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${
                    triggers.includes(trigger)
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-brand-blue/40 hover:text-brand-blue"
                  }`}
                >
                  {trigger}
                </button>
              ))}
            </div>
          </div>

          {/* Integrations */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-3 uppercase tracking-wide">
              Integrations
            </label>
            <div className="grid grid-cols-3 gap-3">
              {INTEGRATION_OPTIONS.map((intg) => (
                <button
                  key={intg.name}
                  type="button"
                  onClick={() => toggleIntegration(intg.name)}
                  className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-left transition-all ${
                    integrations.includes(intg.name)
                      ? "border-brand-blue bg-brand-soft"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-md text-[10px] font-bold ${intg.bg} ${intg.text} shrink-0`}
                  >
                    {intg.letter}
                  </span>
                  <span className="text-xs font-medium text-slate-700">{intg.name}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors"
          >
            Continue to Preview
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
