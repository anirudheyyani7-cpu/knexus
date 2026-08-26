"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Structural type — `SolutionCapability` and `EngineCapability` ({title, detail})
 * both satisfy it. `bullets` is the alternative body for list-shaped content
 * (e.g. DSSI service categories); pass one or the other.
 */
export interface AccordionItem {
  title: string;
  detail?: string;
  bullets?: string[];
}

interface CapabilityAccordionProps {
  items: AccordionItem[];
  /** Index open on mount; pass `null` to start fully collapsed. Defaults to the first row. */
  defaultOpenIndex?: number | null;
}

export function CapabilityAccordion({ items, defaultOpenIndex = 0 }: CapabilityAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="max-w-3xl border-t-2 border-brand-blue divide-y divide-slate-200">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.title}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              <span className="text-base font-bold text-slate-900">{item.title}</span>
              <Plus
                className={cn(
                  "h-5 w-5 flex-shrink-0 text-brand-blue transition-transform duration-300 motion-reduce:transition-none",
                  isOpen && "rotate-45"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {item.detail && (
                    <p className="pb-5 text-sm text-slate-600 leading-relaxed max-w-2xl">
                      {item.detail}
                    </p>
                  )}
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="pb-5 space-y-2 max-w-2xl">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue"
                          />
                          <span className="text-sm text-slate-600 leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
