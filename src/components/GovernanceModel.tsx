import { Shield, Lock, Eye, FileCheck, Users, Zap } from "lucide-react";

const pillars = [
  {
    icon: Lock,
    title: "Access Control",
    desc: "Row-level security ensures every agent only sees data its user is authorised to access.",
  },
  {
    icon: Eye,
    title: "Full Auditability",
    desc: "Every prompt, tool call, and response is logged with timestamps and user identity.",
  },
  {
    icon: FileCheck,
    title: "Policy Guardrails",
    desc: "System-level constraints prevent agents from taking actions outside their defined scope.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    desc: "High-stakes actions require human approval before execution — no silent automation.",
  },
  {
    icon: Zap,
    title: "Rate & Cost Controls",
    desc: "Per-user and per-agent token budgets prevent runaway inference spend.",
  },
  {
    icon: Shield,
    title: "Data Residency",
    desc: "Enterprise data never leaves your chosen region; model calls are stateless and ephemeral.",
  },
];

export default function GovernanceModel() {
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">
            <Shield className="h-3.5 w-3.5" />
            Governance Model
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Enterprise trust,{" "}
            <span className="bg-gradient-to-r from-brand-navy to-brand-blue bg-clip-text text-transparent">
              by design
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-500">
            Every layer of the K-NEXUS stack is built around the principle that AI agents must be
            controllable, auditable, and safe to deploy in regulated enterprises.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="mb-1 font-semibold text-slate-900">{pillar.title}</div>
                  <div className="text-sm leading-relaxed text-slate-500">{pillar.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
