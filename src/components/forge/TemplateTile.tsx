"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import type { AgentTemplate } from "@/data/templates";

interface TemplateTileProps {
  template: AgentTemplate;
  onClick: () => void;
}

export function TemplateTile({ template, onClick }: TemplateTileProps) {
  return (
    <button
      onClick={onClick}
      className="group flex h-full flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 text-left shadow-card transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-card-hover"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand-blue">
        <Sparkles className="h-5 w-5" />
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-semibold leading-tight text-slate-800">{template.title}</h3>
        <p className="line-clamp-2 text-xs text-slate-500 leading-relaxed">{template.description}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {template.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-brand-soft px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-blue"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-xs font-medium text-slate-400">{template.domain}</span>
        <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-brand-blue group-hover:gap-2 transition-all">
          Use Template
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </button>
  );
}
