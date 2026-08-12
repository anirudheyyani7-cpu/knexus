"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Solution } from "@/data/tmtSolutions";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "what-you-can-do", label: "What you can do" },
  { id: "what-youll-achieve", label: "What you'll achieve" },
  { id: "whats-trending", label: "What's trending" },
];

interface SolutionSubNavProps {
  solution: Solution;
}

export function SolutionSubNav({ solution }: SolutionSubNavProps) {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-16 z-30 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-14 items-center justify-between gap-4">
          <p className="truncate text-sm font-bold">{solution.title}</p>

          <ul className="hidden lg:flex items-center gap-6 flex-shrink-0">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={cn(
                    "text-sm font-semibold underline-offset-[6px] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                    activeId === section.id ? "text-white underline" : "text-blue-100 hover:text-white"
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            className="flex lg:hidden items-center gap-1.5 flex-shrink-0 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Jump to
            <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", mobileOpen && "rotate-180")} />
          </button>
        </div>

        {mobileOpen && (
          <ul className="lg:hidden flex flex-col gap-1 pb-4">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-lg px-2 py-2 text-sm font-semibold underline-offset-4 transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                    activeId === section.id ? "text-white underline" : "text-blue-100"
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
