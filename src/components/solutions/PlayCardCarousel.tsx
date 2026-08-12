"use client";

// Playcards link through to a dedicated play detail page. Content here is
// still lightweight (kicker/title/blurb) — flesh out with real playbook
// material as it's produced.

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PlayCard } from "@/data/tmtSolutions";
import { useCarouselScroll } from "@/components/solutions/useCarouselScroll";
import { cn } from "@/lib/utils";

interface PlayCardCarouselProps {
  plays: PlayCard[];
  solutionId: string;
}

// Abstract, brand-palette-only "art" standing in for a playcard image.
// (background-image only accepts <image> values, so the navy base lives on
// the card itself via `bg-brand-navy` — mixing a plain color into this list
// would invalidate the whole gradient stack.)
const PLAY_ART = [
  "radial-gradient(circle at 30% 20%, rgba(139,92,246,0.9), transparent 60%), radial-gradient(circle at 80% 80%, rgba(26,58,143,0.9), transparent 60%)",
  "radial-gradient(circle at 75% 25%, rgba(26,58,143,0.9), transparent 60%), radial-gradient(circle at 20% 85%, rgba(139,92,246,0.9), transparent 60%)",
  "radial-gradient(circle at 25% 80%, rgba(22,163,74,0.75), transparent 60%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.85), transparent 60%)",
];

export function PlayCardCarousel({ plays, solutionId }: PlayCardCarouselProps) {
  const { trackRef, canScrollPrev, canScrollNext, scroll } = useCarouselScroll<HTMLDivElement>();

  return (
    <div>
      <div className="flex items-center justify-end gap-2 mb-6">
        <button
          type="button"
          onClick={() => scroll("prev")}
          disabled={!canScrollPrev}
          aria-label="Scroll to previous plays"
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
          aria-label="Scroll to next plays"
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
        {plays.map((play, i) => (
          <Link
            key={play.id}
            href={`/solutions/${solutionId}/plays/${play.id}`}
            className={cn(
              "group relative h-[280px] w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl bg-brand-navy",
              "transition-all duration-[220ms] ease-out motion-reduce:transition-none",
              "hover:-translate-y-1 hover:shadow-card-hover focus-within:-translate-y-1 focus-within:shadow-card-hover",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            )}
          >
            {/* Background art */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ backgroundImage: PLAY_ART[i % PLAY_ART.length] }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-brand-navy/55 via-transparent to-transparent"
            />

            {/* Default state: kicker + title over the art */}
            <div className="absolute inset-0 flex flex-col p-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/80">{play.kicker}</p>
              <p className="mt-3 text-lg font-bold text-white leading-snug">{play.title}</p>
            </div>

            {/* Hover/focus reveal: light panel with the description + Expand affordance */}
            <div
              className={cn(
                "absolute inset-0 flex flex-col p-6 bg-white",
                "opacity-0 translate-y-2 motion-reduce:translate-y-0",
                "transition-all duration-[220ms] ease-out motion-reduce:transition-none",
                "group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
              )}
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-violet">{play.kicker}</p>
              <p className="mt-3 text-lg font-bold text-slate-900 leading-snug">{play.title}</p>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{play.blurb}</p>
              <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                <span>Expand</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
