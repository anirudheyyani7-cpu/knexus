import Link from "next/link";
import { ArrowLeft, Brain, Zap, Shield, Database } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TmtSlmPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-4xl px-6 pt-8 pb-16 md:pb-24">
        <Link
          href="/ai-stack"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to AI Stack
        </Link>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          TMT-SLM Mini-2B
        </h1>
        <p className="mb-12 text-lg text-slate-500">
          A domain-tuned small language model built on the Phi-4 base, purpose-engineered for
          telecom, media, and technology enterprise workloads.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: Brain,
              title: "Phi-4 Base",
              desc: "Built on Microsoft's Phi-4 architecture — exceptional reasoning at 2B parameters, fine-tuned on curated TMT corpora.",
            },
            {
              icon: Zap,
              title: "Low Latency",
              desc: "Sub-second inference on edge hardware. Ideal for real-time ticket triage, classification, and routing tasks.",
            },
            {
              icon: Database,
              title: "Domain Knowledge",
              desc: "Pre-trained on telecom standards, network operations data, and enterprise service management vocabulary.",
            },
            {
              icon: Shield,
              title: "Private Deployment",
              desc: "Runs entirely within your infrastructure boundary — no data leaves your environment during inference.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="mb-1 font-semibold text-slate-900">{item.title}</div>
                  <div className="text-sm leading-relaxed text-slate-500">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-blue/20 bg-brand-blue/[0.03] p-8 text-center">
          <p className="mb-4 text-slate-500">
            TMT-SLM is currently in private beta. Contact us to discuss deployment options.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors"
          >
            Request Access
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
