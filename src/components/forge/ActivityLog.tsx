"use client";

import { useState } from "react";
import { Activity, X } from "lucide-react";
import { useForge } from "./ForgeContext";

export function ActivityLog() {
  const { activity } = useForge();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
      >
        <Activity className="h-3.5 w-3.5 text-brand-blue" />
        Activity Log
        <span className="rounded-full bg-brand-soft px-1.5 text-[10px] font-bold text-brand-blue">
          {activity.length}
        </span>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[360px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <h2 className="text-sm font-semibold text-slate-800">Activity Log</h2>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto p-4 space-y-2">
            {activity.map((entry) => (
              <li
                key={entry.id}
                className="rounded-lg border border-slate-100 bg-slate-50 p-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-medium text-slate-800">{entry.label}</span>
                  <span className="shrink-0 text-[10px] uppercase tracking-wider text-slate-400">
                    {new Date(entry.ts).toLocaleTimeString()}
                  </span>
                </div>
                {entry.detail && (
                  <p className="mt-1 text-xs text-slate-500">{entry.detail}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
