"use client";

import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { fy27Bets } from "@/data/tmtSolutions";
import { useCarouselScroll } from "@/components/solutions/useCarouselScroll";
import { cn } from "@/lib/utils";

export function FY27Carousel() {
  const { trackRef, canScrollPrev, canScrollNext, scroll } = useCarouselScroll<HTMLDivElement>();

  return (
    <div>
      <div className="flex items-center justify-end gap-2 mb-6">
        <button
          type="button"
          onClick={() => scroll("prev")}
          disabled={!canScrollPrev}
          aria-label="Scroll to previous bets"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-opacity duration-200",
            "hover:border-brand-blue hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
            "disabled:opacity-40 disabled:pointer-events-none"
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll("next")}
          disabled={!canScrollNext}
          aria-label="Scroll to next bets"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-opacity duration-200",
            "hover:border-brand-blue hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
            "disabled:opacity-40 disabled:pointer-events-none"
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div ref={trackRef} className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2">
        {fy27Bets.map((bet) => (
          <div
            key={bet.letter}
            className="snap-start shrink-0 w-[300px] sm:w-[340px] rounded-2xl border border-slate-200 bg-white shadow-card overflow-hidden"
          >
            <div className="bg-brand-navy px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                  {bet.letter}
                </span>
                <p className="text-base font-bold text-white leading-snug">{bet.title}</p>
              </div>
              <p className="mt-3 text-xs text-slate-300 leading-relaxed">{bet.note}</p>
            </div>
            <ul className="space-y-3 p-6">
              {bet.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-green" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
