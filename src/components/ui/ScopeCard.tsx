"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScopeCardProps {
  label: "AGENT SCOPE" | "AUTONOMY LEVEL";
  level: number;
  type: string;
  summary: string;
  detail: string;
  accent: "blue" | "orange";
}

const SCOPE_LEVELS = [
  {
    level: 1,
    name: "Task",
    subtitle: "Single task execution",
    description: "Completes one clearly defined task using available inputs and tools reliably.",
  },
  {
    level: 2,
    name: "Workflow",
    subtitle: "Multi-step workflow execution",
    description: "Executes a structured sequence of tasks to complete a defined workflow outcome.",
  },
  {
    level: 3,
    name: "Process",
    subtitle: "Business process orchestration",
    description: "Coordinates workflows across systems to automate a broader business process end-to-end.",
  },
  {
    level: 4,
    name: "Journey",
    subtitle: "End-to-end lifecycle orchestration",
    description: "Manages long-running outcomes across processes, users, decisions, and contextual signals.",
  },
];

const AUTONOMY_LEVELS = [
  {
    level: 1,
    name: "Assistive",
    subtitle: "Advisory only",
    description: "Provides suggestions or insights but never takes actions without explicit user initiation.",
  },
  {
    level: 2,
    name: "Guided",
    subtitle: "User-approved execution",
    description: "Prepares actions or decisions and executes only after user confirmation or approval.",
  },
  {
    level: 3,
    name: "Guardrailed Autonomy",
    subtitle: "Independent within guardrails",
    description: "Executes actions independently within defined guardrails, escalating uncertain situations to humans.",
  },
  {
    level: 4,
    name: "Full Autonomy",
    subtitle: "Outcome ownership",
    description: "Independently plans, decides, and executes tasks while monitoring outcomes and applying safeguards.",
  },
];

export function ScopeCard({ label, level, type, summary, detail, accent }: ScopeCardProps) {
  const [open, setOpen] = useState(false);

  const accentText = accent === "blue" ? "text-brand-blue" : "text-orange-500";
  const accentBorder = accent === "blue" ? "border-brand-blue" : "border-orange-400";
  const accentBg = accent === "blue" ? "bg-brand-soft" : "bg-orange-50";

  const levels = label === "AGENT SCOPE" ? SCOPE_LEVELS : AUTONOMY_LEVELS;
  const modalTitle = label === "AGENT SCOPE" ? "Agent Scope" : "Autonomy Level";

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col gap-4">
        <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">{label}</p>

        <div className="flex items-start gap-4">
          <div
            className={cn(
              "w-14 h-14 rounded-full border-2 flex flex-col items-center justify-center flex-shrink-0",
              accentBorder,
              accentBg
            )}
          >
            <span className="text-[10px] font-semibold text-slate-500 leading-none">Lvl</span>
            <span className={cn("text-xl font-extrabold leading-none", accentText)}>{level}</span>
          </div>

          <div>
            <p className={cn("text-base font-bold", accentText)}>{type}</p>
            <p className="text-xs font-medium text-slate-600 mt-0.5">{summary}</p>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed">{detail}</p>

        <button
          onClick={() => setOpen(true)}
          className="text-xs font-semibold text-brand-blue hover:underline mt-auto text-left"
        >
          Learn more →
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 pb-4">
              <h2 className="text-lg font-bold text-slate-900">{modalTitle}</h2>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 transition-colors text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 pb-6 space-y-3">
              {levels.map((lvl) => {
                const isActive = lvl.level === level;
                return (
                  <div
                    key={lvl.level}
                    className={cn(
                      "rounded-xl border p-4 flex items-start gap-4 transition-colors",
                      isActive
                        ? accent === "blue"
                          ? "border-brand-blue bg-brand-soft"
                          : "border-orange-400 bg-orange-50"
                        : "border-slate-200 bg-white"
                    )}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full border-2 flex flex-col items-center justify-center flex-shrink-0",
                        isActive
                          ? accent === "blue"
                            ? "border-brand-blue"
                            : "border-orange-400"
                          : "border-slate-300"
                      )}
                    >
                      <span className="text-[9px] font-semibold text-slate-400 leading-none">Lvl</span>
                      <span
                        className={cn(
                          "text-lg font-extrabold leading-none",
                          isActive
                            ? accent === "blue"
                              ? "text-brand-blue"
                              : "text-orange-500"
                            : "text-slate-500"
                        )}
                      >
                        {lvl.level}
                      </span>
                    </div>
                    <div>
                      <p
                        className={cn(
                          "text-sm font-bold",
                          isActive
                            ? accent === "blue"
                              ? "text-brand-blue"
                              : "text-orange-500"
                            : "text-slate-800"
                        )}
                      >
                        {lvl.name}
                      </p>
                      <p className="text-xs font-medium text-slate-600 mt-0.5">{lvl.subtitle}</p>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{lvl.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
