"use client";

import { X } from "lucide-react";
import { OntologyNode, CATEGORIES } from "@/data/tmtOntology";

interface Props {
  node: OntologyNode;
  onClose: () => void;
}

export function NodeDetailPanel({ node, onClose }: Props) {
  const cat = CATEGORIES.find((c) => c.id === node.category);
  const color = cat?.color ?? "#64748b";

  const typeBadge =
    node.type === "metric"
      ? "Metric"
      : node.type === "decision"
      ? "Decision Node"
      : "Ontology Node";

  const typeBg =
    node.type === "metric"
      ? "bg-teal-100 text-teal-800 border-teal-300"
      : node.type === "decision"
      ? "bg-red-100 text-red-800 border-red-300"
      : "bg-emerald-100 text-emerald-800 border-emerald-300";

  return (
    <div className="absolute top-0 right-0 h-full w-[380px] bg-white shadow-2xl border-l border-slate-200 flex flex-col z-40 overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between px-5 pt-5 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            {node.type === "decision" && (
              <svg width="12" height="12" viewBox="0 0 10 10">
                <polygon points="5,1 9,9 1,9" fill="white" />
              </svg>
            )}
            {node.type === "metric" && (
              <div className="w-3 h-3 rounded-full border-2 border-white" />
            )}
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-slate-900 leading-tight truncate">{node.label}</h2>
            <div className="flex items-center gap-1.5 mt-1 flex-wrap">
              <span
                className={`inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded border ${typeBg}`}
              >
                {typeBadge}
              </span>
              <span
                className="inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded border"
                style={{
                  backgroundColor: `${color}18`,
                  color,
                  borderColor: `${color}40`,
                }}
              >
                {cat?.label ?? node.category}
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 ml-2 p-1 rounded hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-700"
        >
          <X size={18} />
        </button>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
        {/* Business Intent */}
        <div>
          <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1.5">
            Business Intent
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">{node.businessIntent}</p>
        </div>

        {/* Type + Connections row */}
        <div className="flex gap-6">
          <div>
            <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">
              Type
            </p>
            <p className="text-sm font-semibold text-slate-800 capitalize">{node.type === "ontology" ? "Ontology" : node.type === "metric" ? "Metric" : "Decision"}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">
              Connections
            </p>
            <div
              className="inline-flex items-center justify-center w-7 h-7 rounded text-sm font-bold text-white"
              style={{ backgroundColor: color }}
            >
              {node.connections ?? 0}
            </div>
          </div>
        </div>

        {/* Default Grain */}
        {node.defaultGrain && (
          <div>
            <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1.5">
              Default Grain
            </p>
            <code className="text-sm text-slate-700 bg-slate-100 px-2 py-1 rounded font-mono">
              {node.defaultGrain}
            </code>
          </div>
        )}

        {/* Component Nodes */}
        {node.componentNodes && node.componentNodes.length > 0 && (
          <div>
            <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
              Component Nodes (Input)
            </p>
            <div className="space-y-2">
              {node.componentNodes.map((cn) => {
                const cnCat = CATEGORIES.find((c) => c.id === cn.category);
                return (
                  <div key={cn.label} className="flex items-center gap-2.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: cnCat?.color ?? "#64748b" }}
                    />
                    <span className="text-xs text-slate-400 font-mono">{cn.relationship}</span>
                    <span className="text-sm font-medium text-slate-800">{cn.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Dimensions */}
        {node.dimensions && node.dimensions.length > 0 && (
          <div>
            <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
              Dimensions (Grouped by)
            </p>
            <div className="space-y-1.5">
              {node.dimensions.map((dim) => (
                <div key={dim} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-slate-300 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{dim}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
