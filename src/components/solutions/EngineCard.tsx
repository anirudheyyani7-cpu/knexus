"use client";

import Link from "next/link";
import { ArrowUpRight, Database, Layers, Zap, LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import { Engine } from "@/data/techTransformation";
import { StaggerItem } from "@/components/solutions/StaggerItem";
import { cn } from "@/lib/utils";

const ENGINE_ROUTES: Record<Engine["id"], string> = {
  dssi: "/solutions/tech-transformation/dssi",
  "digital-next": "/solutions/tech-transformation/digital-next",
  deq: "/solutions/tech-transformation/deq",
};

const engineIconMap: Record<string, ComponentType<LucideProps>> = {
  Layers,
  Zap,
  Database,
};

// Same brand-palette "art" treatment as SolutionCard — no photography.
const CARD_ART = [
  "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.55), transparent 55%), radial-gradient(circle at 85% 75%, rgba(26,58,143,0.6), transparent 55%)",
  "radial-gradient(circle at 80% 15%, rgba(26,58,143,0.55), transparent 55%), radial-gradient(circle at 15% 80%, rgba(139,92,246,0.5), transparent 55%)",
  "radial-gradient(circle at 25% 75%, rgba(22,163,74,0.4), transparent 55%), radial-gradient(circle at 80% 20%, rgba(26,58,143,0.6), transparent 55%)",
];

interface EngineCardProps {
  engine: Engine;
  index: number;
}

export function EngineCard({ engine, index }: EngineCardProps) {
  const art = CARD_ART[index % CARD_ART.length];
  const Icon = engineIconMap[engine.iconName];

  return (
    <StaggerItem index={index} className="h-full">
      <Link
        href={ENGINE_ROUTES[engine.id]}
        className={cn(
          "group relative flex h-full min-h-[240px] flex-col justify-between overflow-hidden rounded-2xl bg-brand-navy p-7",
          "transition-all duration-[220ms] ease-out motion-reduce:transition-none",
          "hover:-translate-y-0.5 hover:shadow-card-hover focus-within:-translate-y-0.5 focus-within:shadow-card-hover",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        )}
      >
        {/* Background art — fades and eases in on hover/focus; inert under reduced motion */}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 scale-100 opacity-0",
            "transition-all duration-[220ms] ease-out",
            "group-hover:opacity-100 group-hover:scale-105 group-focus-within:opacity-100 group-focus-within:scale-105",
            "motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-within:scale-100"
          )}
          style={{ backgroundImage: art }}
        />

        <div className="relative z-10">
          {Icon && (
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <Icon className="h-5 w-5 text-white" />
            </div>
          )}

          <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
            {engine.tagline}
          </p>
          <h3 className="mt-3 text-xl font-bold text-white leading-snug">{engine.title}</h3>

          <p
            className={cn(
              "mt-3 text-sm text-slate-300 leading-relaxed",
              "opacity-0 translate-y-2",
              "transition-all duration-[220ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
              "group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
            )}
          >
            {engine.summary}
          </p>
        </div>

        <div
          className={cn(
            "relative z-10 mt-6 flex h-10 w-10 items-center justify-center self-end rounded-full bg-brand-blue text-white",
            "transition-transform duration-[220ms] ease-out motion-reduce:transition-none",
            "group-hover:translate-x-1 group-focus-within:translate-x-1"
          )}
        >
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </Link>
    </StaggerItem>
  );
}
