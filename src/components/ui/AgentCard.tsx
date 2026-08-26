"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AgentData } from "@/data/agents";
import { useIsRestricted } from "@/components/providers/SessionProvider";
import { agentSupportsSso } from "@/lib/sso";

interface AgentCardProps {
  agent: AgentData;
  index: number;
}

export function AgentCard({ agent, index }: AgentCardProps) {
  const isComingSoon = agent.accessLink === null;
  const isExternal =
    agent.accessLink !== null && agent.accessLink.startsWith("http");
  const isSso = agentSupportsSso(agent.accessLink);
  const isRestricted = useIsRestricted();
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      onClick={() => router.push(`/agents/${agent.id}`)}
      className={cn(
        "group bg-white border border-slate-200 rounded-xl p-5 flex flex-col",
        "shadow-card transition-shadow duration-300 cursor-pointer",
        isComingSoon
          ? "opacity-60"
          : "hover:shadow-card-hover hover:border-blue-200"
      )}
    >
      {/* Coming Soon badge */}
      {isComingSoon && (
        <div className="flex justify-end mb-3">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-400 border border-slate-200">
            Coming Soon
          </span>
        </div>
      )}

      {/* Title + description */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-slate-800 mb-1.5 leading-snug">
          {agent.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
          {agent.description}
        </p>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-1.5 mt-3">
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
      <div className="flex justify-end mt-4">
        {isComingSoon ? (
          <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 text-slate-400 cursor-not-allowed select-none">
            Coming Soon
          </span>
        ) : isRestricted ? (
          <span
            title="Not available for this account"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-400 cursor-not-allowed select-none"
          >
            Access Agent
          </span>
        ) : (
          <a
            href={isSso ? `/api/sso/launch?agent=${agent.id}` : agent.accessLink!}
            target={isSso || isExternal ? "_blank" : "_self"}
            rel={isSso || isExternal ? "noopener noreferrer" : undefined}
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
