import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  Boxes,
  Brain,
  ChevronDown,
  Cloud,
  Cpu,
  Database,
  FileText,
  Filter,
  Gauge,
  GitBranch,
  Globe,
  HardDrive,
  KeyRound,
  Layers,
  Lock,
  Network,
  Route,
  ScanText,
  Search,
  Server,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

/* ---------- diagram primitives (KPMG blue / white) ---------- */

function BandHeader({
  icon: Icon,
  title,
  tone = "blue",
}: {
  icon: React.ElementType;
  title: string;
  tone?: "blue" | "navy";
}) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2.5 ${
        tone === "navy" ? "bg-brand-navy" : "bg-brand-blue"
      }`}
    >
      <Icon className="h-4 w-4 shrink-0 text-white/70" />
      <span className="text-[13px] font-semibold leading-snug tracking-wide text-white">
        {title}
      </span>
    </div>
  );
}

function Panel({
  icon,
  title,
  tone = "blue",
  className = "",
  children,
}: {
  icon: React.ElementType;
  title: string;
  tone?: "blue" | "navy";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-brand-blue/20 bg-brand-soft/40 ${className}`}
    >
      <BandHeader icon={icon} title={title} tone={tone} />
      <div className="space-y-2.5 p-3">{children}</div>
    </div>
  );
}

function Node({
  icon: Icon,
  title,
  sub,
  className = "",
}: {
  icon?: React.ElementType;
  title: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-brand-blue/20 bg-white px-3 py-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.05)] ${className}`}
    >
      <div className="flex items-start gap-2">
        {Icon && <Icon className="mt-[3px] h-3.5 w-3.5 shrink-0 text-brand-blue" />}
        <div className="min-w-0">
          <div className="text-[12.5px] font-semibold leading-snug text-slate-800">{title}</div>
          {sub && <div className="mt-0.5 text-[11px] leading-snug text-slate-500">{sub}</div>}
        </div>
      </div>
    </div>
  );
}

function Pipeline({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div className="rounded-lg border border-brand-blue/20 bg-white px-3 py-2.5">
      <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
        {label}
      </div>
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1.5">
        {steps.map((step, i) => (
          <span key={step} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-brand-blue/45">&rarr;</span>}
            <span className="rounded bg-brand-soft px-2 py-0.5 text-[11px] font-medium text-brand-blue">
              {step}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Connector({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-2">
      <div className="h-4 w-px bg-brand-blue/35" />
      {label && (
        <span className="my-1 rounded-full border border-brand-blue/20 bg-brand-soft px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-blue">
          {label}
        </span>
      )}
      <ChevronDown className="h-4 w-4 text-brand-blue/60" />
    </div>
  );
}

function FlowTitle({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-3 flex items-center justify-center gap-2">
      <Icon className="h-4 w-4 text-brand-blue" />
      <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
        {children}
      </h3>
    </div>
  );
}

/* ---------- page ---------- */

export default function TmtArchitecturePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <Breadcrumb
            crumbs={[
              { label: "Marketplace", href: "/" },
              { label: "AI Stack", href: "/ai-stack" },
              { label: "TMT Architecture" },
            ]}
          />
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 pt-8 pb-16 md:pb-24">
        <Link
          href="/ai-stack"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-brand-blue"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to AI Stack
        </Link>

        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-blue/25 bg-brand-blue/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
            <Layers className="h-3.5 w-3.5" />
            Knowledge &amp; Data Layer
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            TMT Reference Architecture
          </h1>
          <p className="text-lg leading-relaxed text-slate-500">
            The deployed topology behind the Knowledge &amp; Data Layer &mdash; document ingestion,
            knowledge-graph construction and hybrid graph + vector retrieval for Telecom, Media
            &amp; Technology, running inside a single Azure GenAI subscription.
          </p>
        </div>

        {/* Diagram */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white p-1 shadow-card">
          <div className="flex min-w-[980px] gap-3 p-3">
            {/* Subscription rail */}
            <div className="flex w-11 shrink-0 items-center justify-center rounded-xl bg-brand-navy">
              <span className="rotate-180 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.28em] text-white/85 [writing-mode:vertical-rl]">
                EA Azure &mdash; GenAI Subscription
              </span>
            </div>

            <div className="min-w-0 flex-1 space-y-3">
              {/* Entry flows */}
              <div className="grid grid-cols-[1.35fr_1fr] gap-3">
                <div>
                  <FlowTitle icon={Search}>Query / Retrieval Flow</FlowTitle>
                  <Panel icon={Shield} title="Edge & Network Security (Azure App Services)">
                    <div className="grid grid-cols-3 gap-2">
                      <Node icon={Globe} title="Azure Front Door" />
                      <Node icon={Route} title="API Gateway" />
                      <Node icon={Network} title="Internal Load Balancer" />
                      <Node icon={Shield} title="Firewall" />
                      <Node icon={KeyRound} title="Azure ID / SSO" />
                      <Node icon={Lock} title="Keycloak" sub="RBAC / domain rules" />
                    </div>
                  </Panel>
                </div>

                <div>
                  <FlowTitle icon={FileText}>Ingestion / KG Build Flow</FlowTitle>
                  <div className="rounded-xl border border-brand-blue/20 bg-brand-soft/40 p-3">
                    <Node icon={FileText} title="Source Documents" sub="SharePoint / shared drive" />
                    <div className="flex items-center justify-center gap-2 py-1.5">
                      <div className="h-4 w-px bg-brand-blue/35" />
                      <span className="rounded-full border border-brand-blue/20 bg-white px-2.5 py-0.5 text-[10px] font-semibold text-brand-blue">
                        Azure DevOps (CI/CD)
                      </span>
                    </div>
                    <Node
                      icon={HardDrive}
                      title="Azure Blob Storage"
                      sub="Raw PDFs &middot; generated markdown &middot; versioned artifacts"
                    />
                  </div>
                </div>
              </div>

              {/* AKS cluster */}
              <div className="overflow-hidden rounded-xl border border-brand-blue/25 bg-brand-soft/25">
                <BandHeader icon={Boxes} title="AKS Cluster" tone="navy" />
                <div className="grid grid-cols-[1.35fr_1fr] items-start gap-3 p-3">
                  <div className="space-y-3">
                    <Panel icon={Layers} title="Presentation & App Layer · AKS app-pool">
                      <div className="grid grid-cols-3 gap-2">
                        <Node icon={Sparkles} title="React Frontend" sub="pods, HPA" />
                        <Node icon={Server} title="Nginx" sub="Ingress" />
                        <Node icon={Activity} title="Audit Logging" />
                        <Node icon={Shield} title="Guardrails Gateway" sub="Pre / post generation" />
                        <Node
                          icon={Cpu}
                          title="FastAPI Backend"
                          sub="pods, HPA"
                          className="col-span-2"
                        />
                      </div>
                    </Panel>

                    <Panel icon={Workflow} title="Retrieval & Orchestration">
                      <Node
                        icon={GitBranch}
                        title="LangGraph"
                        sub="Agent workflow &amp; orchestration"
                      />
                      <div className="grid grid-cols-3 gap-2">
                        <Node
                          icon={Network}
                          title="GraphRAG"
                          sub="Hybrid graph + vector retrieval"
                        />
                        <Node icon={Filter} title="BGE ReRanker" sub="Relevance re-scoring" />
                        <Node
                          icon={Gauge}
                          title="LangFuse"
                          sub="Tracing &amp; evaluation &middot; Basic RAG / Agentic / Proposal / Consultant modes"
                        />
                      </div>
                    </Panel>
                  </div>

                  <Panel icon={Database} title="Ingestion & KG Construction · AKS ingest-pool">
                    <Pipeline
                      label="Document processing"
                      steps={[
                        "Docling / Unstructured / Azure parsing",
                        "OCR (scanned)",
                        "PDF",
                        "Markdown",
                        "Presidio PII masking",
                        "LangChain chunking",
                      ]}
                    />
                    <Pipeline
                      label="Knowledge graph construction"
                      steps={[
                        "Entity extraction (LLM + ontology guided)",
                        "Entity resolution",
                        "Ontology: Protégé, OWL, RDFLib",
                        "Schema validation (SHACL)",
                      ]}
                    />
                    <Node
                      icon={ScanText}
                      title="Apache Airflow"
                      sub="Per-domain DAGs &mdash; parallel, independent Telecom re-index for high-frequency incremental updates"
                    />
                  </Panel>
                </div>
              </div>

              <Connector label="Convergence" />

              {/* KG + vector storage */}
              <div className="overflow-hidden rounded-xl border border-brand-blue/25 bg-brand-soft/25">
                <BandHeader
                  icon={Database}
                  title="KG & Vector Storage · self-managed VM (no Azure-managed Apache AGE service)"
                />
                <div className="space-y-2.5 p-3">
                  <div className="rounded-lg border border-brand-blue/25 bg-white px-4 py-3 text-center">
                    <span className="text-[13px] font-semibold text-slate-800">
                      PostgreSQL + Apache AGE + pgvector
                    </span>
                    <span className="ml-2 text-[11px] text-slate-500">Single VM, KPMG-patched</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Node
                      icon={Network}
                      title="Telecom KG Schema"
                      sub="Isolated graph + vector + metadata"
                    />
                    <Node icon={Cpu} title="Redis Cache" sub="Query / session" />
                  </div>
                </div>
              </div>

              <Connector />

              {/* Domain router */}
              <div className="rounded-xl border border-brand-blue/25 bg-brand-blue/[0.06] px-4 py-3">
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
                  <span className="flex items-center gap-2 text-[13px] font-semibold text-brand-blue">
                    <Route className="h-4 w-4" />
                    LLM Domain Router
                  </span>
                  <span className="text-brand-blue/40">|</span>
                  <span className="text-[12px] text-slate-600">
                    Telecom &rarr;{" "}
                    <span className="font-semibold text-slate-800">telecom-slm-gpu</span> / Azure
                    OpenAI
                  </span>
                </div>
              </div>

              <Connector />

              {/* Self-hosted inference */}
              <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-brand-blue/25">
                <BandHeader icon={Brain} title="Self-hosted telecom-slm-gpu-vm" tone="navy" />
                <div className="bg-white px-4 py-3 text-center">
                  <div className="text-[13px] font-semibold text-slate-800">
                    LM Studio runtime + TSLAM
                  </div>
                  <div className="mt-0.5 text-[11px] text-slate-500">
                    10B telecom-tuned model (or equivalent)
                  </div>
                </div>
              </div>

              {/* Platform foundation */}
              <div className="!mt-7 overflow-hidden rounded-xl border border-brand-blue/25 bg-brand-soft/25">
                <BandHeader
                  icon={Cloud}
                  title="Platform Foundation Services · Azure managed services (cross-cutting, used by every layer)"
                  tone="navy"
                />
                <div className="grid grid-cols-6 gap-2 p-3">
                  <Node icon={Boxes} title="AKS" sub="Orchestration / auto-scaling" />
                  <Node icon={KeyRound} title="HashiCorp" sub="Azure Key Vault" />
                  <Node
                    icon={Activity}
                    title="Azure Monitor + App Insights"
                    sub="Grafana / Loki / Prometheus"
                  />
                  <Node icon={GitBranch} title="Azure DevOps" sub="CI/CD" />
                  <Node icon={ScanText} title="Azure Document Intelligence" />
                  <Node icon={HardDrive} title="Azure Blob" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-400 lg:hidden">
          Scroll horizontally to explore the full architecture &rarr;
        </p>
      </main>

      <Footer />
    </div>
  );
}
