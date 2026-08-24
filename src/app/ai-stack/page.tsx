"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bot,
  Workflow,
  Brain,
  Database,
  Shield,
  Cloud,
  Cpu,
  Network,
  Sparkles,
  Layers,
  Zap,
  Lock,
  GitBranch,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import GovernanceModel from "@/components/GovernanceModel";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

interface StackLayer {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  components: { name: string; desc: string; icon: React.ElementType }[];
}

const stackLayers: StackLayer[] = [
  {
    id: "experience",
    name: "Experience Layer",
    tagline: "Agent Marketplace & Conversational UI",
    description:
      "The user-facing surface of K-NEXUS.AI — a unified marketplace where business users discover, launch, and converse with specialised agents through a streaming chat interface.",
    icon: Sparkles,
    components: [
      { name: "Agent Marketplace", desc: "Discover & launch domain agents", icon: Bot },
      { name: "Streaming Chat", desc: "Real-time SSE responses", icon: Zap },
      { name: "Conversation History", desc: "Persisted multi-turn context", icon: GitBranch },
    ],
  },
  {
    id: "agents",
    name: "Agentic Layer",
    tagline: "Specialised Domain Agents",
    description:
      "Purpose-built agents — Customer Intelligence Sentinal, Ticket Dispatch, Platform Calibre and more — each with curated system prompts, domain knowledge and tool access.",
    icon: Bot,
    components: [
      { name: "System Prompts", desc: "Domain-tuned agent personas", icon: Brain },
      { name: "Tool Use", desc: "Function calling & APIs", icon: Workflow },
      { name: "Multi-Agent Routing", desc: "Hand-off between specialists", icon: Network },
    ],
  },
  {
    id: "orchestration",
    name: "Orchestration Layer",
    tagline: "Workflow & Reasoning Engine",
    description:
      "Coordinates agent reasoning, manages context windows, executes tool chains and routes requests across the right model for each task.",
    icon: Workflow,
    components: [
      { name: "Edge Functions", desc: "Serverless agent runtime", icon: Cpu },
      { name: "Prompt Pipelines", desc: "Context assembly & routing", icon: GitBranch },
      { name: "Model Gateway", desc: "Multi-LLM abstraction", icon: Network },
    ],
  },
  {
    id: "models",
    name: "Foundation Model Layer",
    tagline: "LLMs & Multimodal Intelligence",
    description:
      "A curated portfolio of frontier models — Claude, Gemini, GPT-5 and Perplexity — selected per task for the right balance of reasoning depth, real-time knowledge, multimodality and cost.",
    icon: Brain,
    components: [
      { name: "TMT-SLM Mini-2B", desc: "Domain-tuned telecom SLM (Phi-4 base)", icon: Sparkles },
      { name: "Claude Opus 4.7", desc: "Deep reasoning & long-context analysis", icon: Sparkles },
      { name: "Gemini 2.5 Flash", desc: "Fast multimodal inference at scale", icon: Sparkles },
      { name: "Perplexity", desc: "Real-time web-grounded research", icon: Sparkles },
      { name: "GPT-5 / GPT-5-mini", desc: "Complex reasoning & nuance", icon: Sparkles },
    ],
  },
  {
    id: "data",
    name: "Knowledge & Data Layer",
    tagline: "Vector Stores, RAG & Enterprise Data",
    description:
      "Grounds every agent in your enterprise reality — structured tables, document corpora and embeddings — so responses stay accurate, contextual and audit-ready.",
    icon: Database,
    components: [
      { name: "Postgres + RLS", desc: "Conversations & messages", icon: Database },
      { name: "Vector Search", desc: "RAG over enterprise docs", icon: Layers },
      { name: "Realtime Sync", desc: "Live conversation updates", icon: Zap },
    ],
  },
  {
    id: "infra",
    name: "Infrastructure & Trust Layer",
    tagline: "Cloud, Security & Governance",
    description:
      "Enterprise-grade foundation on Vercel managed services — authenticated access, row-level security, encrypted data, edge delivery and observability — so every agent interaction is safe, traceable and compliant.",
    icon: Shield,
    components: [
      { name: "Auth & RLS", desc: "Per-user data isolation", icon: Lock },
      { name: "Vercel Managed Services", desc: "Edge runtime, serverless & global CDN", icon: Cloud },
      { name: "Observability", desc: "Logs, traces & metrics", icon: Network },
    ],
  },
];

// Inline gradients — avoids Tailwind JIT dynamic-class scanning gaps
const bandGradients = [
  "linear-gradient(to right, #16a34a, rgba(22,163,74,0.8))",
  "linear-gradient(to right, hsl(160,60%,45%), hsl(180,55%,42%))",
  "linear-gradient(to right, hsl(190,65%,45%), hsl(205,70%,40%))",
  "linear-gradient(to right, hsl(210,75%,38%), hsl(216,85%,32%))",
  "linear-gradient(to right, #1a3a8f, hsl(220,70%,22%))",
  "linear-gradient(to right, hsl(222,55%,18%), #0f172a)",
];

export default function AIStackPage() {
  const [activeLayer, setActiveLayer] = useState<string>(stackLayers[0].id);
  const active = stackLayers.find((l) => l.id === activeLayer)!;
  const total = stackLayers.length;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Breadcrumb
            crumbs={[{ label: "Marketplace", href: "/" }, { label: "AI Stack" }]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-white to-brand-green/5" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#1a3a8f_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            The Agentic AI Stack,
            <br />
            <span className="bg-gradient-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent">
              built for the enterprise.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-500 md:text-lg">
            A layered architecture that powers every agent in the K-NEXUS marketplace — from the
            conversational surface down to the secure data foundation.
          </p>
        </div>
      </section>

      {/* The Missing Layer */}
      <section className="relative border-b border-slate-200 bg-gradient-to-b from-white to-brand-blue/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Enterprise AI&apos;s{" "}
            <span className="bg-gradient-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent">
              missing layer
            </span>
          </h2>

          <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:gap-2">
            {/* Foundation Models */}
            <div className="relative flex-1">
              <div className="flex h-44 flex-col items-center justify-center rounded-lg bg-brand-navy px-6 text-center shadow-[0_8px_24px_-12px_rgba(15,23,42,0.55)]">
                <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">Foundation Models</h3>
                <p className="text-sm text-white/60">GPT, Claude, Gemini</p>
              </div>
            </div>

            <div className="flex items-center justify-center text-3xl font-light text-slate-400 md:px-2">+</div>

            {/* Missing Layer */}
            <div className="relative flex-1">
              <div className="flex h-44 flex-col items-center justify-center rounded-lg border-2 border-dashed border-brand-green bg-brand-green/[0.04] px-6 text-center">
                <div className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-900">
                  Enterprise Intelligence
                </div>
                <div className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-green">
                  (Missing Layer)
                </div>
                <p className="text-sm leading-relaxed text-slate-500">
                  How the organisation works
                  <br />
                  What it measures
                  <br />
                  How it makes decisions
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center text-2xl text-slate-400 md:px-2">→</div>

            {/* Result */}
            <div className="relative flex-1">
              <div className="flex h-44 flex-col items-center justify-center rounded-lg bg-brand-blue/10 px-6 text-center ring-1 ring-brand-blue/20">
                <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
                  Enterprise AI
                  <br />
                  Transformation
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-r-md border-l-4 border-brand-green bg-slate-100/60 py-4 pl-6 pr-6">
            <p className="text-sm leading-relaxed text-slate-500 md:text-base">
              Without an enterprise context layer, AI agents hallucinate, give generic answers, and
              cannot power real business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Stack */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Left: 3D layer visualization */}
          <div className="relative">
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">
                <Layers className="h-3.5 w-3.5" />
                K-NEXUS.AI Stack
              </div>
            </div>

            <div
              className="relative mx-auto flex flex-col items-center"
              style={{ perspective: "1400px" }}
            >
              {stackLayers.map((layer, idx) => {
                const isActive = layer.id === activeLayer;
                const Icon = layer.icon;
                const bg = bandGradients[idx] ?? bandGradients[0];
                // Vertical variant for the slab thickness shadow
                const bgVertical = bg.replace("to right", "to bottom");

                return (
                  <button
                    key={layer.id}
                    onMouseEnter={() => setActiveLayer(layer.id)}
                    onClick={() => setActiveLayer(layer.id)}
                    aria-label={`${layer.name} – ${layer.tagline}`}
                    className="group relative w-full max-w-[460px] focus:outline-none"
                    style={{
                      marginTop: idx === 0 ? 0 : "-14px",
                      zIndex: isActive ? 100 : total - idx,
                      transform: isActive
                        ? "rotateX(0deg) translateY(-12px) scale(1.05)"
                        : "rotateX(38deg)",
                      transformStyle: "preserve-3d",
                      transformOrigin: "center center",
                      transition: "transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {/* Slab side */}
                    <div
                      aria-hidden
                      className={`absolute inset-x-3 -bottom-2 h-3 rounded-b-xl blur-[1px] transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-70"}`}
                      style={{ background: bgVertical }}
                    />

                    {/* Top face */}
                    <div
                      className={`relative flex items-center justify-between gap-4 overflow-hidden rounded-xl border px-5 py-4 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.45)] transition-all duration-300 ${
                        isActive
                          ? "border-white/40 ring-2 ring-brand-blue/40 shadow-[0_18px_40px_-14px_rgba(26,58,143,0.55)]"
                          : "border-white/15 group-hover:border-white/30"
                      }`}
                      style={{ background: bg }}
                    >
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent"
                      />

                      <div className="relative flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white backdrop-blur-sm ring-1 ring-white/20">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75">
                            Layer {total - idx}
                          </div>
                          <div className="text-base font-semibold leading-tight text-white drop-shadow-sm">
                            {layer.name}
                          </div>
                        </div>
                      </div>

                      <div className="relative hidden max-w-[180px] text-right text-xs font-medium text-white/85 sm:block">
                        {layer.tagline}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="mt-8 text-center text-xs text-slate-400">
              Hover or tap a layer to explore →
            </p>
          </div>

          {/* Right: Active layer details */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div
              key={active.id}
              className="animate-fade-in rounded-3xl border border-slate-200 bg-white p-8 shadow-card"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-navy text-white">
                  <active.icon className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{active.name}</h2>
                  <p className="text-sm text-brand-blue">{active.tagline}</p>
                </div>
              </div>

              <p className="mb-8 text-base leading-relaxed text-slate-500">{active.description}</p>

              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Core Components
              </div>
              <div className="grid gap-3">
                {active.components.map((comp) => {
                  const CompIcon = comp.icon;
                  const isTmt = comp.name === "TMT-SLM Mini-2B";

                  const inner = (
                    <>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                        <CompIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">
                          {comp.name}
                          {isTmt && (
                            <span className="ml-2 rounded-full bg-brand-green/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-green">
                              View →
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-slate-500">{comp.desc}</div>
                      </div>
                    </>
                  );

                  if (isTmt) {
                    return (
                      <Link
                        key={comp.name}
                        href="/ai-stack/tmt-slm"
                        className="flex items-start gap-3 rounded-xl border border-brand-green/40 bg-brand-green/[0.04] p-4 transition-colors hover:border-brand-green/70 hover:bg-brand-green/[0.08]"
                      >
                        {inner}
                      </Link>
                    );
                  }
                  return (
                    <div
                      key={comp.name}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-colors hover:border-brand-blue/40 hover:bg-brand-blue/[0.02]"
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Model */}
      <GovernanceModel />

      <Footer />
    </div>
  );
}
