"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Vertical } from "@/data/verticals";
import {
  TrendingUp,
  Headphones,
  Users,
  MonitorCheck,
  Radio,
  Clapperboard,
  LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  TrendingUp,
  Headphones,
  Users,
  MonitorCheck,
  Radio,
  Clapperboard,
};

interface IndustryCardProps {
  vertical: Vertical;
  index: number;
}

export function IndustryCard({ vertical, index }: IndustryCardProps) {
  const Icon = iconMap[vertical.iconName] ?? TrendingUp;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={`/verticals/${vertical.id}`}
        className={cn(
          "flex bg-white border border-slate-200 rounded-xl p-6",
          "shadow-card transition-all duration-300 block",
          "hover:shadow-card-hover hover:border-blue-200"
        )}
      >
        <div
          className={cn(
            "w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0",
            vertical.iconBgClass
          )}
        >
          <Icon className={cn("w-5 h-5", vertical.iconColorClass)} />
        </div>
        <div className="ml-4">
          <h3 className="text-base font-semibold text-slate-800 mb-1.5">{vertical.title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">{vertical.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
