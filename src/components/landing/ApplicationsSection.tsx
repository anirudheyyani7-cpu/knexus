"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IndustryCard } from "@/components/ui/IndustryCard";
import { verticals } from "@/data/verticals";

export function ApplicationsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? verticals : verticals.slice(0, 4);

  return (
    <section className="bg-slate-50/70 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Browse by Pre-built Applications
          </h2>
          <p className="text-slate-500 text-sm">
            View use cases filtered by industries and functions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {visible.map((v, i) => (
            <IndustryCard key={v.id} vertical={v} index={i} />
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-blue-700 transition-colors"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show More
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
