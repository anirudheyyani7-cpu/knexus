"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo, useEffect, useRef } from "react";
import { Search, ArrowRight, Sparkles, ChevronDown, Loader2 } from "lucide-react";
import Link from "next/link";
import { agents, agentCategories, AgentCategory } from "@/data/agents";
import { AgentCard } from "@/components/ui/AgentCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { cn } from "@/lib/utils";

const FILTERS = {
  Function: agentCategories.filter((c) => c !== "All"),
  "Agent Type": ["Task", "Process", "Enterprise"],
  Autonomy: ["Supervised", "Guided", "Automated"],
};

const FALLBACK_OVERVIEW = `Explore ${agents.length} AI agents across enterprise functions. Use the filters on the left to narrow by capability area, or search for a specific use case.`;

export function SearchResultsContent() {
  const searchParams = useSearchParams();
  const rawQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(rawQuery);
  const [inputValue, setInputValue] = useState(rawQuery);
  const [activeFilter, setActiveFilter] = useState<AgentCategory | null>(null);
  const [aiOverview, setAiOverview] = useState<string>(FALLBACK_OVERVIEW);
  const [loadingOverview, setLoadingOverview] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    let filtered = q
      ? agents.filter(
          (a) =>
            a.title.toLowerCase().includes(q) ||
            a.description.toLowerCase().includes(q) ||
            a.categories.some((c) => c.toLowerCase().includes(q)) ||
            // also match individual words so multi-word chips still find agents
            q.split(/\s+/).some(
              (word) =>
                word.length > 3 &&
                (a.title.toLowerCase().includes(word) ||
                  a.description.toLowerCase().includes(word))
            )
        )
      : agents;
    if (activeFilter) {
      filtered = filtered.filter((a) => a.categories.includes(activeFilter));
    }
    return filtered;
  }, [query, activeFilter]);

  // Fetch Claude AI overview whenever query or results change
  useEffect(() => {
    if (!query) {
      setAiOverview(FALLBACK_OVERVIEW);
      return;
    }
    if (abortRef.current) abortRef.current.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    setLoadingOverview(true);
    fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        agentTitles: results.map((a) => a.title),
      }),
      signal: ctrl.signal,
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.overview) setAiOverview(data.overview);
        else
          setAiOverview(
            `Showing ${results.length} agent${results.length !== 1 ? "s" : ""} relevant to "${query}". Refine with filters or search again to narrow further.`
          );
      })
      .catch(() => {/* aborted or failed — keep existing overview */})
      .finally(() => setLoadingOverview(false));
  }, [query, results]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setQuery(inputValue);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <Breadcrumb
        crumbs={[
          { label: "Marketplace", href: "/" },
          { label: "Search" },
        ]}
      />

      {/* Page title */}
      <h1 className="text-2xl font-bold text-slate-900 mb-1">
        Search Results{" "}
        {query && (
          <span className="text-brand-blue">&ldquo;{query}&rdquo;</span>
        )}
      </h1>
      <p className="text-sm text-slate-500 mb-6">{results.length} Results found</p>

      {/* Search bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-card max-w-2xl">
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search agents…"
            className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
          />
          <button
            type="submit"
            className="w-8 h-8 rounded-xl flex items-center justify-center bg-brand-blue text-white hover:bg-brand-blue-dark transition-colors flex-shrink-0"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar filters */}
        <aside className="w-full lg:w-56 flex-shrink-0 space-y-4">
          {Object.entries(FILTERS).map(([section, options]) => (
            <div key={section} className="bg-white rounded-xl border border-slate-200 p-4 shadow-card">
              <button className="w-full flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-700">{section}</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
              <div className="space-y-1">
                {options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() =>
                      setActiveFilter((prev) =>
                        prev === opt ? null : (opt as AgentCategory)
                      )
                    }
                    className={cn(
                      "w-full text-left text-xs px-2 py-1.5 rounded-lg transition-colors",
                      activeFilter === opt
                        ? "bg-brand-soft text-brand-blue font-semibold"
                        : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Main results */}
        <div className="flex-1 min-w-0 space-y-6">
          {/* AI Overview */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-card">
            <div className="flex items-center gap-2 mb-3">
              {loadingOverview ? (
                <Loader2 className="w-4 h-4 text-brand-violet animate-spin" />
              ) : (
                <Sparkles className="w-4 h-4 text-brand-violet" />
              )}
              <span className="text-sm font-bold text-slate-800">AI Overview</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{aiOverview}</p>
          </div>

          {/* Agents section */}
          <div>
            <h2 className="text-base font-bold text-slate-800 mb-4">
              Agents{" "}
              <span className="text-slate-400 font-normal text-sm ml-1">
                ({results.length})
              </span>
            </h2>

            {results.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-slate-400 text-sm mb-3">No agents match your search.</p>
                <Link href="/" className="text-sm font-semibold text-brand-blue hover:underline">
                  ← Browse all agents
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {results.map((agent, i) => (
                  <AgentCard key={agent.id} agent={agent} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
