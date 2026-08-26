"use client";

// Anonymized credentials only — render `descriptor`, never a client name.

import { ChevronLeft, ChevronRight } from "lucide-react";
import { featuredCredentials } from "@/data/credentials";
import { useCarouselScroll } from "@/components/solutions/useCarouselScroll";
import { cn } from "@/lib/utils";

const ARROW_CLASSES = cn(
  "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-opacity duration-200",
  "hover:border-brand-blue hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
  "disabled:opacity-40 disabled:pointer-events-none"
);

export function CredsCarousel() {
  const { trackRef, canScrollPrev, canScrollNext, scroll } = useCarouselScroll<HTMLDivElement>();

  return (
    <div>
      <div className="flex items-center justify-end gap-2 mb-6">
        <button
          type="button"
          onClick={() => scroll("prev")}
          disabled={!canScrollPrev}
          aria-label="Scroll to previous credentials"
          className={ARROW_CLASSES}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll("next")}
          disabled={!canScrollNext}
          aria-label="Scroll to next credentials"
          className={ARROW_CLASSES}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div ref={trackRef} className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2">
        {featuredCredentials.map((credential) => (
          <div
            key={credential.id}
            className={cn(
              "flex w-[300px] shrink-0 snap-start flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card",
              "transition-all duration-[220ms] ease-out motion-reduce:transition-none",
              "hover:-translate-y-1 hover:border-blue-200 hover:shadow-card-hover motion-reduce:hover:translate-y-0"
            )}
          >
            <span className="self-start rounded-full bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand-blue">
              {credential.solution}
            </span>
            <p className="mt-4 text-base font-bold text-slate-900 leading-snug">
              {credential.descriptor}
            </p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{credential.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
