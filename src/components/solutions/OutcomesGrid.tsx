"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SolutionOutcome } from "@/data/tmtSolutions";
import { solutionIconMap } from "@/components/solutions/icon-map";
import { StaggerItem } from "@/components/solutions/StaggerItem";

interface OutcomesGridProps {
  items: SolutionOutcome[];
}

// Grid fits comfortably up to this many items; beyond that, switch to a carousel.
const CAROUSEL_THRESHOLD = 4;

function OutcomeTile({ item }: { item: SolutionOutcome }) {
  const Icon = solutionIconMap[item.iconName];
  return (
    <div
      className={
        "h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 " +
        "hover:-translate-y-1 hover:shadow-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      }
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft">
        {Icon && <Icon className="h-6 w-6 text-brand-blue" />}
      </div>
      <p className="text-base font-bold text-slate-900 leading-snug mb-2">{item.title}</p>
      <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
    </div>
  );
}

export function OutcomesGrid({ items }: OutcomesGridProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  if (items.length <= CAROUSEL_THRESHOLD) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <StaggerItem key={item.title} index={i}>
            <OutcomeTile item={item} />
          </StaggerItem>
        ))}
      </div>
    );
  }

  function scroll(direction: "prev" | "next") {
    const track = trackRef.current;
    if (!track) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const amount = track.clientWidth * 0.8 * (direction === "next" ? 1 : -1);
    track.scrollBy({ left: amount, behavior: reducedMotion ? "auto" : "smooth" });
  }

  return (
    <div>
      <div className="flex items-center justify-end gap-2 mb-6">
        <button
          type="button"
          onClick={() => scroll("prev")}
          aria-label="Scroll to previous outcomes"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-brand-blue hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll("next")}
          aria-label="Scroll to next outcomes"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-brand-blue hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div ref={trackRef} className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2">
        {items.map((item) => (
          <div key={item.title} className="snap-start shrink-0 w-[260px]">
            <OutcomeTile item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
