"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Vertical } from "@/data/verticals";

interface IndustryCardProps {
  vertical: Vertical;
  index: number;
}

const ACCENT_CLASSES: Record<string, { bar: string; tag: string; tagText: string }> = {
  telecom: {
    bar: "from-cyan-400 to-cyan-600",
    tag: "bg-cyan-50 text-cyan-600",
    tagText: "Telecom",
  },
  media: {
    bar: "from-pink-400 to-rose-500",
    tag: "bg-pink-50 text-pink-600",
    tagText: "Media",
  },
  technology: {
    bar: "from-violet-400 to-violet-600",
    tag: "bg-violet-50 text-violet-600",
    tagText: "Technology",
  },
};

const DEFAULT_ACCENT = {
  bar: "from-slate-400 to-slate-600",
  tag: "bg-slate-50 text-slate-600",
  tagText: "Enterprise",
};

export function IndustryCard({ vertical, index }: IndustryCardProps) {
  const accent = ACCENT_CLASSES[vertical.id] ?? DEFAULT_ACCENT;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Link
        href={`/verticals/${vertical.id}`}
        className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-slate-300 h-full"
      >
        {/* Gradient top bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${accent.bar}`} />

        <div className="flex flex-col flex-1 p-6">
          {/* Tag */}
          <span className={`inline-block self-start text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-4 ${accent.tag}`}>
            {accent.tagText}
          </span>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
            {vertical.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-500 leading-relaxed flex-1">
            {vertical.description}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
            <span>Explore agents</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
