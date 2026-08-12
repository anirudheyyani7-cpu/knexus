import { Solution } from "@/data/tmtSolutions";
import { solutionIconMap } from "@/components/solutions/icon-map";
import { Reveal } from "@/components/solutions/Reveal";

interface FeatureRowProps {
  solution: Solution;
}

// Derived from each pillar's two "what you can do" statements — describes how
// they operate as one system rather than two separate workstreams.
const FEATURE_COPY: Record<string, { heading: string; sentence: string }> = {
  "business-model-reinvention": {
    heading: "Strategy and integration, one motion",
    sentence:
      "The same team that shapes your TechCo. operating model carries it through diligence, M&A, and integration — so the strategy on the slide is the strategy that ships.",
  },
  "infra-modernization": {
    heading: "Visibility and resilience, one build",
    sentence:
      "OSS/BSS modernization and infrastructure resilience are designed together, so the systems you can see are the same systems built to recover.",
  },
  "ai-data-monetization": {
    heading: "Operations and strategy, one foundation",
    sentence:
      "AIOps observability and the AI data foundation are built on the same governance model, so operational signals feed directly into what gets prioritized for monetization.",
  },
  "cx-transformation": {
    heading: "Customer and partner experience, one journey",
    sentence:
      "Customer-facing journeys and the seller/partner tools behind them are designed together, so feedback from one side reaches the other without a hand-off.",
  },
  "value-delivery-office": {
    heading: "Spend and delivery, one accountability line",
    sentence:
      "FinOps governance and program delivery quality assurance report through the same structure, so value tracking and execution are never separate conversations.",
  },
};

export function FeatureRow({ solution }: FeatureRowProps) {
  const Icon = solutionIconMap[solution.iconName];
  const copy = FEATURE_COPY[solution.id];

  return (
    <div className="max-w-7xl mx-auto px-6 pb-16 sm:pb-20">
      <Reveal>
        <div className="flex flex-col sm:flex-row items-start gap-6 rounded-2xl border border-slate-200 bg-white p-7 shadow-card">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-brand-soft">
            {Icon && <Icon className="h-7 w-7 text-brand-blue" />}
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{copy.heading}</h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">{copy.sentence}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
