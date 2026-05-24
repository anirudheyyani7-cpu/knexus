"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface AgentDraft {
  name: string;
  description: string;
  domain: string;
  baseModel: string;
  iconKey: string;
  templateId?: string;
  tools: string[];
  knowledgeSources: string[];
  guardrails: string[];
  triggers: string[];
  persona: string;
}

const EMPTY: AgentDraft = {
  name: "",
  description: "",
  domain: "Network Ops",
  baseModel: "claude-sonnet-4-6",
  iconKey: "sparkles",
  tools: [],
  knowledgeSources: [],
  guardrails: [],
  triggers: [],
  persona: "",
};

export interface ActivityEntry {
  id: string;
  ts: number;
  label: string;
  detail?: string;
}

interface ForgeCtxValue {
  draft: AgentDraft;
  setDraft: (patch: Partial<AgentDraft>) => void;
  reset: () => void;
  activity: ActivityEntry[];
  log: (label: string, detail?: string) => void;
}

const ForgeCtx = createContext<ForgeCtxValue | null>(null);

const STORAGE_KEY = "forge.draft.v1";

export function ForgeProvider({ children }: { children: ReactNode }) {
  const [draft, setDraftState] = useState<AgentDraft>(() => {
    if (typeof window === "undefined") return EMPTY;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? { ...EMPTY, ...JSON.parse(raw) } : EMPTY;
    } catch {
      return EMPTY;
    }
  });

  const [activity, setActivity] = useState<ActivityEntry[]>([
    { id: "init", ts: Date.now(), label: "Forge session started" },
  ]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  }, [draft]);

  function setDraft(patch: Partial<AgentDraft>) {
    setDraftState((d) => ({ ...d, ...patch }));
  }

  function reset() {
    setDraftState(EMPTY);
    localStorage.removeItem(STORAGE_KEY);
  }

  function log(label: string, detail?: string) {
    setActivity((a) =>
      [{ id: `${Date.now()}-${Math.random()}`, ts: Date.now(), label, detail }, ...a].slice(0, 50)
    );
  }

  return (
    <ForgeCtx.Provider value={{ draft, setDraft, reset, activity, log }}>
      {children}
    </ForgeCtx.Provider>
  );
}

export function useForge() {
  const ctx = useContext(ForgeCtx);
  if (!ctx) throw new Error("useForge must be used inside ForgeProvider");
  return ctx;
}
