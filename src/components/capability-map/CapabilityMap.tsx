"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { solutions, challenges, priorities } from "@/data/tmtSolutions";
import { credentials, type Credential } from "@/data/credentials";
import { cn } from "@/lib/utils";

type ColumnKey = "priorities" | "challenges" | "pillars" | "solutions" | "proof";

interface MapNode {
  id: string;
  column: ColumnKey;
  title: string;
  caption?: string;
  pillarIds: string[];
}

const COLUMN_LABELS: Record<ColumnKey, string> = {
  priorities: "Strategic Priorities",
  challenges: "Challenges",
  pillars: "Pillars",
  solutions: "Solutions",
  proof: "Proof points",
};

const COLUMN_DOTS: Partial<Record<ColumnKey, string>> = {
  priorities: "bg-brand-blue",
  pillars: "bg-brand-violet",
};

function buildNodes(): MapNode[] {
  const priorityNodes: MapNode[] = priorities.map((p) => ({
    id: `priority:${p.id}`,
    column: "priorities",
    title: p.title,
    pillarIds: p.pillarIds,
  }));

  const challengeNodes: MapNode[] = challenges.map((c) => ({
    id: `challenge:${c.id}`,
    column: "challenges",
    title: c.title,
    caption: c.source,
    pillarIds: c.pillarIds,
  }));

  const pillarNodes: MapNode[] = solutions.map((s) => ({
    id: `pillar:${s.id}`,
    column: "pillars",
    title: s.title,
    caption: `${s.number} · ${s.eyebrow}`,
    pillarIds: [s.id],
  }));

  const solutionNodes: MapNode[] = solutions.flatMap((s) =>
    s.canDo.map((capability, i) => ({
      id: `solution:${s.id}:${i}`,
      column: "solutions" as const,
      title: capability.title,
      caption: s.title,
      pillarIds: [s.id],
    }))
  );

  // Only creds carrying pillarIds surface here; `descriptor` is the anonymized
  // client string, so no real client name ever reaches the map.
  const proofNodes: MapNode[] = credentials
    .filter((c): c is Credential & { pillarIds: string[] } => Boolean(c.pillarIds?.length))
    .map((c) => ({
      id: `proof:${c.id}`,
      column: "proof" as const,
      title: c.descriptor,
      caption: c.solution,
      pillarIds: c.pillarIds,
    }));

  return [...priorityNodes, ...challengeNodes, ...pillarNodes, ...solutionNodes, ...proofNodes];
}

function sharesPillar(a: MapNode, b: MapNode): boolean {
  return a.pillarIds.some((id) => b.pillarIds.includes(id));
}

interface Line {
  id: string;
  d: string;
}

const DESKTOP_BREAKPOINT = 1024;

export function CapabilityMap() {
  const allNodes = useMemo(buildNodes, []);
  const nodeById = useMemo(() => new Map(allNodes.map((n) => [n.id, n])), [allNodes]);
  const columns = useMemo(
    () =>
      (Object.keys(COLUMN_LABELS) as ColumnKey[]).map((key) => ({
        key,
        nodes: allNodes.filter((n) => n.column === key),
        dot: COLUMN_DOTS[key],
      })),
    [allNodes]
  );

  const [hoverId, setHoverId] = useState<string | null>(null);
  const [lockedId, setLockedId] = useState<string | null>(null);
  const activeId = lockedId ?? hoverId;
  const prefersReducedMotion = useReducedMotion();

  const connectedIds = useMemo(() => {
    if (!activeId) return null;
    const activeNode = nodeById.get(activeId);
    if (!activeNode) return null;
    const set = new Set<string>([activeId]);
    for (const n of allNodes) {
      if (n.id !== activeId && sharesPillar(activeNode, n)) set.add(n.id);
    }
    return set;
  }, [activeId, allNodes, nodeById]);

  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(new Map<string, HTMLButtonElement>());
  const [lines, setLines] = useState<Line[]>([]);

  const recomputeLines = useCallback(() => {
    if (!activeId || !connectedIds || typeof window === "undefined" || window.innerWidth < DESKTOP_BREAKPOINT) {
      setLines([]);
      return;
    }
    const container = containerRef.current;
    const activeNode = nodeById.get(activeId);
    const activeEl = nodeRefs.current.get(activeId);
    if (!container || !activeNode || !activeEl) {
      setLines([]);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    const next: Line[] = [];

    connectedIds.forEach((targetId) => {
      if (targetId === activeId) return;
      const targetNode = nodeById.get(targetId);
      if (!targetNode || targetNode.column === activeNode.column) return;
      const targetEl = nodeRefs.current.get(targetId);
      if (!targetEl) return;

      const targetRect = targetEl.getBoundingClientRect();
      const activeIsLeft = activeRect.left < targetRect.left;
      const x1 = (activeIsLeft ? activeRect.right : activeRect.left) - containerRect.left;
      const y1 = activeRect.top + activeRect.height / 2 - containerRect.top;
      const x2 = (activeIsLeft ? targetRect.left : targetRect.right) - containerRect.left;
      const y2 = targetRect.top + targetRect.height / 2 - containerRect.top;
      const dx = (x2 - x1) / 2;

      next.push({
        id: `${activeId}->${targetId}`,
        d: `M ${x1},${y1} C ${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`,
      });
    });

    setLines(next);
  }, [activeId, connectedIds, nodeById]);

  useLayoutEffect(() => {
    recomputeLines();
  }, [recomputeLines]);

  useEffect(() => {
    if (!activeId) return;
    const scroller = containerRef.current?.parentElement;
    window.addEventListener("resize", recomputeLines);
    scroller?.addEventListener("scroll", recomputeLines, { passive: true });
    return () => {
      window.removeEventListener("resize", recomputeLines);
      scroller?.removeEventListener("scroll", recomputeLines);
    };
  }, [activeId, recomputeLines]);

  function handleHoverStart(id: string) {
    if (lockedId) return;
    setHoverId(id);
  }

  function handleHoverEnd() {
    if (lockedId) return;
    setHoverId(null);
  }

  function handleNodeClick(id: string) {
    setLockedId((current) => (current === id ? null : id));
  }

  function handleReset() {
    setLockedId(null);
    setHoverId(null);
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-5">
        <p className="text-sm text-slate-500">
          {lockedId
            ? "Trace locked — click the node again, click another node, or reset."
            : "Hover or focus any node to trace its connections."}
        </p>
        <button
          type="button"
          onClick={handleReset}
          disabled={!lockedId}
          className={cn(
            "text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors flex-shrink-0",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
            lockedId
              ? "border-brand-blue text-brand-blue hover:bg-brand-soft"
              : "border-slate-200 text-slate-300 cursor-not-allowed"
          )}
        >
          Reset
        </button>
      </div>

      <div className="overflow-x-auto pb-2">
        <div ref={containerRef} className="relative flex flex-col lg:flex-row gap-6 lg:min-w-[1376px]">
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            aria-hidden="true"
          >
            {lines.map((line) => (
              <path key={line.id} d={line.d} stroke="rgba(26,58,143,0.5)" strokeWidth={1} fill="none" />
            ))}
          </svg>

          {columns.map((column) => (
            <div
              key={column.key}
              className="flex flex-col lg:w-64 lg:flex-shrink-0 rounded-xl border border-slate-200 overflow-hidden lg:h-[600px]"
            >
              <div className="flex items-baseline justify-between gap-2 bg-brand-navy px-4 py-3 flex-shrink-0">
                <p className="text-sm font-bold text-white">{COLUMN_LABELS[column.key]}</p>
                <p className="text-xs font-semibold text-white/60 flex-shrink-0">{column.nodes.length}</p>
              </div>

              <div className="flex-1 lg:overflow-y-auto bg-slate-50 p-3 space-y-2">
                {column.nodes.map((node) => {
                  const status: "active" | "dimmed" | "normal" = !activeId || !connectedIds
                    ? "normal"
                    : connectedIds.has(node.id)
                      ? "active"
                      : "dimmed";

                  return (
                    <button
                      key={node.id}
                      ref={(el) => {
                        if (el) nodeRefs.current.set(node.id, el);
                        else nodeRefs.current.delete(node.id);
                      }}
                      type="button"
                      aria-pressed={lockedId === node.id}
                      onMouseEnter={() => handleHoverStart(node.id)}
                      onMouseLeave={handleHoverEnd}
                      onFocus={() => handleHoverStart(node.id)}
                      onBlur={handleHoverEnd}
                      onClick={() => handleNodeClick(node.id)}
                      className={cn(
                        "w-full text-left rounded-lg border bg-white p-3",
                        "transition-[transform,box-shadow,border-color,background-color] duration-200 motion-reduce:transition-none",
                        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
                        status === "active" &&
                          (prefersReducedMotion
                            ? "border-brand-blue bg-brand-soft"
                            : "border-brand-blue shadow-card-hover scale-[1.02]"),
                        status === "dimmed" &&
                          (prefersReducedMotion
                            ? "border-slate-100 bg-slate-50"
                            : "border-slate-200 opacity-30"),
                        status === "normal" && "border-slate-200"
                      )}
                    >
                      <div className="flex items-start gap-2">
                        {column.dot && (
                          <span className={cn("mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full", column.dot)} />
                        )}
                        <div>
                          <p className="text-sm font-semibold text-slate-900 leading-snug">{node.title}</p>
                          {node.caption && (
                            <p className="mt-1 text-xs text-slate-500 leading-snug">{node.caption}</p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-400 leading-relaxed max-w-3xl">
        Challenge citations reference published KPMG sources, while proof points are
        representative, anonymized KPMG engagements mapped to a pillar for illustration — not
        client-specific measurements of any cited figure.
      </p>
    </div>
  );
}
