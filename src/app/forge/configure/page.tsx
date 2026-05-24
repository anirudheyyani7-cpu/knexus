"use client";

import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Plus, X, ArrowRight } from "lucide-react";
import { useForge } from "@/components/forge/ForgeContext";

const DOMAINS = [
  "Network Ops",
  "Customer Experience",
  "Revenue Assurance",
  "Strategic Planning",
  "IT & Cloud",
  "Finance & Risk",
  "Operations",
  "Marketing",
];

const BASE_MODELS = [
  { label: "Best Reasoning", value: "claude-opus-4-7" },
  { label: "Balanced", value: "claude-sonnet-4-6" },
  { label: "Fastest", value: "google/gemini-2.5-flash" },
  { label: "Open Source", value: "meta/llama-3.3-70b" },
];

const SUGGESTED_TOOLS = [
  "KPI ingestion",
  "Anomaly scoring",
  "Auto-ticketing",
  "Slack alerts",
  "CDR reconciliation",
  "Geo routing",
  "Churn scoring",
  "Offer generation",
  "Scenario modelling",
  "ROI projection",
  "CRM sync",
];

function TagInput({
  label,
  items,
  onChange,
  placeholder,
}: {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  placeholder: string;
}) {
  const [input, setInput] = useState("");

  function add() {
    const val = input.trim();
    if (val && !items.includes(val)) {
      onChange([...items, val]);
    }
    setInput("");
  }

  function onKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      add();
    }
  }

  return (
    <div>
      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
        {label}
      </label>
      <div className="flex gap-2 mb-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder={placeholder}
          className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
        />
        <button
          type="button"
          onClick={add}
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-1 rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-medium text-brand-blue"
          >
            {item}
            <button
              type="button"
              onClick={() => onChange(items.filter((i) => i !== item))}
              className="text-brand-blue/60 hover:text-brand-blue"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ForgeConfigurePage() {
  const router = useRouter();
  const { draft, setDraft, log } = useForge();

  const [name, setName] = useState(draft.name);
  const [description, setDescription] = useState(draft.description);
  const [domain, setDomain] = useState(draft.domain);
  const [baseModel, setBaseModel] = useState(draft.baseModel);
  const [tools, setTools] = useState<string[]>(draft.tools);
  const [knowledgeSources, setKnowledgeSources] = useState<string[]>(draft.knowledgeSources);
  const [guardrails, setGuardrails] = useState<string[]>(draft.guardrails);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Agent name is required.";
    if (!description.trim()) errs.description = "Description is required.";
    return errs;
  }

  function handleNext() {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setDraft({ name, description, domain, baseModel, tools, knowledgeSources, guardrails });
    log("Configuration saved", `${name} — ${domain}`);
    router.push("/forge/onboarding");
  }

  function toggleSuggestedTool(tool: string) {
    setTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
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
          <h2 className="text-2xl font-bold text-slate-800 mb-1.5">Configure Your Agent</h2>
          <p className="text-sm text-slate-500">
            Define what your agent knows, what it can do, and what limits it operates within.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
              Agent Name
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((p) => ({ ...p, name: "" }));
              }}
              placeholder="e.g. Network Health Sentinel"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (errors.description) setErrors((p) => ({ ...p, description: "" }));
              }}
              rows={3}
              placeholder="What does this agent do?"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none"
            />
            {errors.description && (
              <p className="mt-1 text-xs text-red-500">{errors.description}</p>
            )}
          </div>

          {/* Domain + Model row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Domain
              </label>
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
              >
                {DOMAINS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                Base Model
              </label>
              <select
                value={baseModel}
                onChange={(e) => setBaseModel(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
              >
                {BASE_MODELS.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Tools */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
              Tools
            </label>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {SUGGESTED_TOOLS.map((tool) => (
                <button
                  key={tool}
                  type="button"
                  onClick={() => toggleSuggestedTool(tool)}
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors ${
                    tools.includes(tool)
                      ? "bg-brand-blue text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-brand-soft hover:text-brand-blue"
                  }`}
                >
                  {tool}
                </button>
              ))}
            </div>
            <TagInput
              label=""
              items={tools.filter((t) => !SUGGESTED_TOOLS.includes(t))}
              onChange={(custom) =>
                setTools([
                  ...tools.filter((t) => SUGGESTED_TOOLS.includes(t)),
                  ...custom,
                ])
              }
              placeholder="Add a custom tool and press Enter"
            />
          </div>

          {/* Knowledge Sources */}
          <TagInput
            label="Knowledge Sources"
            items={knowledgeSources}
            onChange={setKnowledgeSources}
            placeholder="e.g. Network KPI database, CDR feed"
          />

          {/* Guardrails */}
          <TagInput
            label="Guardrails"
            items={guardrails}
            onChange={setGuardrails}
            placeholder="e.g. No PII in responses"
          />

          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors"
          >
            Continue to Onboard
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
