"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AgentTemplate } from "@/data/agents";

interface AgentCardProps {
  agent: AgentTemplate;
  index: number;
}

export function AgentCard({ agent, index }: AgentCardProps) {
  const isComingSoon = agent.accessLink === null;

  const isExternal =
    agent.accessLink !== null && agent.accessLink.startsWith("http");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative bg-white border border-slate-200 rounded-xl p-5 flex flex-col",
        "shadow-card transition-shadow duration-300",
        isComingSoon
          ? "opacity-60"
          : "cursor-pointer hover:shadow-card-hover hover:border-blue-200"
      )}
    >
      {/* Clickable overlay linking to detail page */}
      <Link href={`/agents/${agent.id}`} className="absolute inset-0 z-0 rounded-xl" aria-label={agent.title} />

      {/* Accuracy / Coming Soon badge */}
      <div className="flex justify-end mb-3 relative z-10">
        {isComingSoon ? (
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-400 border border-slate-200">
            Coming Soon
          </span>
        ) : (
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-soft text-brand-blue border border-blue-200">
            {agent.accuracy}% acc.
          </span>
        )}
      </div>

      {/* Title + description */}
      <div className="flex-1 relative z-10">
        <h3 className="text-sm font-semibold text-slate-800 mb-1.5 leading-snug">
          {agent.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
          {agent.description}
        </p>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-1.5 mt-3 relative z-10">
        {agent.categories.map((cat) => (
          <span
            key={cat}
            className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Access Agent button — bottom right */}
      <div className="flex justify-end mt-4 relative z-10">
        {isComingSoon ? (
          <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 text-slate-400 cursor-not-allowed select-none">
            Coming Soon
          </span>
        ) : (
          <a
            href={agent.accessLink!}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-blue text-white hover:bg-brand-blue-dark transition-colors"
          >
            Access Agent
            <ArrowRight className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
