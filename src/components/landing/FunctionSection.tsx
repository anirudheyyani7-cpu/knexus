"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TabFilter } from "@/components/ui/TabFilter";
import { AgentCard } from "@/components/ui/AgentCard";
import { agents, AgentCategory } from "@/data/agents";

const PAGE_SIZE = 8; // 2 rows × 4 columns

export function FunctionSection() {
  const [activeTab, setActiveTab] = useState<AgentCategory>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered =
    activeTab === "All"
      ? agents
      : agents.filter((a) => a.categories.includes(activeTab));

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const hasLess = visibleCount > PAGE_SIZE;

  function handleTabChange(tab: AgentCategory) {
    setActiveTab(tab);
    setVisibleCount(PAGE_SIZE); // reset pagination on tab change
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Browse by Function</h2>
          <p className="text-slate-500 text-sm">
            AI agents for teams across your business.
          </p>
        </div>

        <div className="mb-8">
          <TabFilter activeTab={activeTab} onChange={handleTabChange} />
        </div>

        {filtered.length === 0 ? (
          <div className="py-16 text-center text-slate-400 text-sm">
            No agents found for this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {visible.map((agent, i) => (
              <AgentCard key={agent.id} agent={agent} index={i} />
            ))}
          </div>
        )}

        {/* View more / less controls */}
        {filtered.length > PAGE_SIZE && (
          <div className="mt-8 flex items-center justify-center gap-4">
            {hasMore && (
              <button
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-brand-blue text-brand-blue rounded-lg hover:bg-brand-soft transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
                View More ({filtered.length - visibleCount} remaining)
              </button>
            )}
            {hasLess && (
              <button
                onClick={() => setVisibleCount(PAGE_SIZE)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                <ChevronUp className="w-4 h-4" />
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
