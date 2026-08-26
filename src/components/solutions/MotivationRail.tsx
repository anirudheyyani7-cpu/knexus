"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { clientMotivations } from "@/data/techTransformation";
import { cn } from "@/lib/utils";

export function MotivationRail() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const active = clientMotivations[activeIndex];

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {clientMotivations.map((motivation, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={motivation.label}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold",
                "transition-colors duration-200 motion-reduce:transition-none",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
                isActive
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-brand-blue hover:text-brand-blue"
              )}
            >
              {motivation.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={active.label}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: "easeOut" }}
            className="text-base text-slate-600 leading-relaxed"
          >
            {active.description}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
