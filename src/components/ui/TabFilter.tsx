"use client";

import { cn } from "@/lib/utils";
import { AgentCategory, agentCategories } from "@/data/agents";

interface TabFilterProps {
  activeTab: AgentCategory;
  onChange: (tab: AgentCategory) => void;
}

export function TabFilter({ activeTab, onChange }: TabFilterProps) {
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
      {agentCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
            activeTab === cat
              ? "bg-brand-blue text-white shadow-sm"
              : "text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
