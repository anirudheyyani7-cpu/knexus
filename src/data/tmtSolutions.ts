export interface SolutionCapability {
  title: string;
  detail: string;
}

export interface SolutionOutcome {
  title: string;
  detail: string;
  iconName: string;
}

/** Content for "What's trending" — lightweight for now, fleshed out as real playbook material lands. */
export interface PlayCard {
  id: string;
  title: string;
  kicker: string;
  blurb: string;
  body: string;
}

export interface Solution {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string;
  heroStat: { value: string; label: string; caption: string };
  iconName: string;
  canDo: SolutionCapability[];
  willAchieve: SolutionOutcome[];
  plays: PlayCard[];
}

export const solutions: Solution[] = [
  {
    id: "business-model-reinvention",
    number: "01",
    eyebrow: "Strategy & value",
    title: "TechCo. / Business Model Reinvention",
    tagline: "Reinvent the operating model, unlock the value.",
    intro:
      "TechCo. transformation starts with the operating model, not the org chart. We help technology leaders define a strategy and structure built for continuous reinvention, then carry that thinking through diligence, M&A, and integration so the value identified on paper actually shows up in the business.",
    heroStat: {
      value: "2 plays",
      label: "Reinvention",
      caption: "Strategy design and value capture across diligence, M&A and PMI.",
    },
    iconName: "Building2",
    canDo: [
      {
        title: "TechCo. strategy and operating model",
        detail: "Build TechCo. strategy and operating model to drive digital vision and transformation.",
      },
      {
        title: "M&A and PMI value capture",
        detail:
          "Enable business synergies and value creation across technology diligence, M&A, and post-merger integration.",
      },
    ],
    willAchieve: [
      {
        title: "A digital-first operating model",
        detail: "Leadership operates with a TechCo strategy and structure built to move faster.",
        iconName: "Compass",
      },
      {
        title: "Synergies realized across the deal lifecycle",
        detail: "M&A and PMI activity surfaces and captures value instead of leaking it.",
        iconName: "GitMerge",
      },
      {
        title: "A clearer diligence-to-integration handoff",
        detail: "Technology diligence findings carry straight through into post-merger execution.",
        iconName: "Link2",
      },
    ],
    plays: [
      {
        id: "techco-operating-model-blueprint",
        kicker: "PLAY",
        title: "TechCo Operating Model Blueprint",
        blurb: "A reference model for structuring technology as a business within the business.",
        body:
          "This play walks through how to define operating model archetypes for a TechCo., map decision rights across strategy and delivery, and translate that structure into a rollout plan leadership can actually execute against — without waiting for a full reorg to get started.",
      },
      {
        id: "ma-synergy-playbook",
        kicker: "PLAY",
        title: "M&A Synergy Playbook",
        blurb: "A structured approach to surfacing and capturing technology synergies pre- and post-close.",
        body:
          "It breaks the synergy case into the categories that actually get audited — cost, revenue, and capability — and sequences the diligence questions that surface them early enough to shape deal terms, not just the integration plan that follows.",
      },
      {
        id: "diligence-to-pmi-handoff-kit",
        kicker: "PLAY",
        title: "Diligence-to-PMI Handoff Kit",
        blurb: "Templates that carry diligence findings straight into integration planning.",
        body:
          "The kit standardizes what diligence findings need to capture so they survive the handoff to integration teams: system dependencies, contract obligations, and the risks that would otherwise get rediscovered months into PMI.",
      },
    ],
  },
  {
    id: "infra-modernization",
    number: "02",
    eyebrow: "Modernize & migrate",
    title: "Network, DC, Cloud & Infra Modernization",
    tagline: "Modern infrastructure, end-to-end service visibility.",
    intro:
      "Modern infrastructure only pays off if it's visible end to end. We modernize the OSS/BSS stack and redesign the processes that cross domain boundaries, then bring the same discipline to data center, cloud, and edge — so resilience and continuity are designed in, not bolted on.",
    heroStat: {
      value: "E2E",
      label: "Service visibility",
      caption: "OSS/BSS modernization and DC/cloud/edge uplift with resilience built in.",
    },
    iconName: "Server",
    canDo: [
      {
        title: "OSS/BSS modernization",
        detail:
          "Modernize and migrate the OSS/BSS tools stack and redesign cross-domain processes for end-to-end service visibility.",
      },
      {
        title: "DC, cloud & edge resilience",
        detail:
          "Design DC setup, expansion and cloud/edge modernization with resilience, continuity and outsourcing models for Network Ops (TOM, governance, RPO/RTO, DR readiness).",
      },
    ],
    willAchieve: [
      {
        title: "End-to-end visibility across service delivery",
        detail: "Cross-domain OSS/BSS processes are redesigned so issues are visible the moment they occur.",
        iconName: "Radar",
      },
      {
        title: "A resilient, right-sized infrastructure footprint",
        detail:
          "DC and cloud/edge modernization is planned with recovery time and continuity requirements built in from the start.",
        iconName: "ShieldCheck",
      },
      {
        title: "Network Ops ready to operate at scale",
        detail:
          "A defined target operating model and governance make outsourcing and DR readiness a managed decision, not a gap.",
        iconName: "Workflow",
      },
    ],
    plays: [
      {
        id: "oss-bss-modernization-roadmap",
        kicker: "PLAY",
        title: "OSS/BSS Modernization Roadmap",
        blurb: "A phased path to consolidating the tools stack without disrupting live service.",
        body:
          "It sequences modernization by which cross-domain processes are hardest to see today, so the first systems replaced are the ones currently causing the most blind spots in service delivery — not just the oldest ones.",
      },
      {
        id: "dc-to-cloud-migration-pattern",
        kicker: "PLAY",
        title: "DC-to-Cloud Migration Pattern",
        blurb: "A reusable pattern for sequencing data center exit alongside cloud and edge buildout.",
        body:
          "The pattern lines up data center exit milestones against cloud and edge readiness, so workloads move only once their target environment can actually support the resilience and continuity requirements they carry.",
      },
      {
        id: "network-ops-dr-readiness-check",
        kicker: "PLAY",
        title: "Network Ops DR Readiness Check",
        blurb: "A fast assessment of RPO/RTO posture against your current target operating model.",
        body:
          "It scores current RPO/RTO commitments against what your target operating model and governance structure can realistically support today, surfacing gaps before they show up during an actual failover.",
      },
    ],
  },
  {
    id: "ai-data-monetization",
    number: "03",
    eyebrow: "AIOps & data foundation",
    title: "AI, Data & Monetization",
    tagline: "From reactive ops to proactive, monetizable intelligence.",
    intro:
      "AIOps and AI monetization both start from the same place: a data and observability foundation you can trust. We help Network Ops move from reactive to proactive with predictive monitoring and automation, while building the governance and architecture that turns AI use cases into a fundable, sequenced roadmap.",
    heroStat: {
      value: "AIOps",
      label: "Proactive ops",
      caption: "Observability, predictive monitoring and automation across Network Ops.",
    },
    iconName: "Cpu",
    canDo: [
      {
        title: "AIOps & SRE for Network Ops",
        detail:
          "Build AIOps/SRE capabilities — observability, predictive monitoring, automation — to shift Network Ops from reactive to proactive, raising reliability and lowering MTTR and cost-to-serve.",
      },
      {
        title: "AI strategy & data foundation",
        detail:
          "Define the AI strategy, maturity baseline and roadmap, and build the data foundation (governance, architecture, MDM) to prioritize use cases and unlock monetization pathways.",
      },
    ],
    willAchieve: [
      {
        title: "Proactive operations instead of firefighting",
        detail: "Observability and predictive monitoring catch issues before they become incidents, lowering MTTR.",
        iconName: "Activity",
      },
      {
        title: "A governed data foundation ready for AI",
        detail: "Data governance, architecture, and MDM give AI use cases a foundation they can actually be built on.",
        iconName: "Database",
      },
      {
        title: "A prioritized path to monetization",
        detail: "An AI maturity baseline and roadmap turn a long list of use cases into a sequenced, fundable plan.",
        iconName: "TrendingUp",
      },
    ],
    plays: [
      {
        id: "aiops-quick-start",
        kicker: "PLAY",
        title: "AIOps Quick-Start",
        blurb: "Stand up observability and predictive monitoring on your highest-cost operations first.",
        body:
          "It starts with the operations segment generating the most manual triage effort, instruments observability and predictive monitoring there first, and uses the early signal to build the case for wider AIOps rollout.",
      },
      {
        id: "data-foundation-health-check",
        kicker: "PLAY",
        title: "Data Foundation Health Check",
        blurb: "A governance and architecture baseline to see what's actually ready for AI.",
        body:
          "The check evaluates governance, architecture, and master data management against what your highest-priority AI use cases actually require — separating what's genuinely ready to build on from what still needs foundational work.",
      },
      {
        id: "monetization-use-case-prioritizer",
        kicker: "PLAY",
        title: "Monetization Use-Case Prioritizer",
        blurb: "A scoring model to sequence AI use cases by value and feasibility.",
        body:
          "It scores candidate AI use cases on value and feasibility side by side, so the roadmap sequences work that can ship and pay off first, instead of chasing the most ambitious idea in the room.",
      },
    ],
  },
  {
    id: "cx-transformation",
    number: "04",
    eyebrow: "Omnichannel & CX",
    title: "Customer Experience Transformation",
    tagline: "Connected journeys that build trust and loyalty.",
    intro:
      "Customers don't experience channels — they experience one journey. We design connected digital and human touchpoints that build trust over time, and modernize the seller and partner tools behind the scenes so feedback closes the loop instead of disappearing.",
    heroStat: {
      value: "Omnichannel",
      label: "CX consistency",
      caption: "Connected digital + human journeys with closed-loop feedback.",
    },
    iconName: "Users",
    canDo: [
      {
        title: "Connected omnichannel journeys",
        detail:
          "Design and deliver connected omnichannel journeys across digital and human touchpoints to raise trust, loyalty and CX consistency.",
      },
      {
        title: "Seller & partner enablement",
        detail:
          "Modernize seller/partner tools, workflows and portals and activate closed-loop feedback to improve conversion and relationship productivity.",
      },
    ],
    willAchieve: [
      {
        title: "Consistent experience across every channel",
        detail: "Digital and human touchpoints work as one connected journey instead of separate handoffs.",
        iconName: "Route",
      },
      {
        title: "Higher trust and loyalty over time",
        detail: "Consistency across touchpoints gives customers fewer reasons to disengage.",
        iconName: "HeartHandshake",
      },
      {
        title: "Sellers and partners equipped to convert",
        detail:
          "Modernized tools, workflows, and closed-loop feedback turn interactions into measurable conversion gains.",
        iconName: "Handshake",
      },
    ],
    plays: [
      {
        id: "omnichannel-journey-map",
        kicker: "PLAY",
        title: "Omnichannel Journey Map",
        blurb: "A single view of every digital and human touchpoint your customers actually use.",
        body:
          "It maps every digital and human touchpoint a customer actually moves through today, flagging the hand-offs where consistency breaks down — the specific gaps that erode trust even when each channel performs well on its own.",
      },
      {
        id: "partner-portal-modernization-kit",
        kicker: "PLAY",
        title: "Partner Portal Modernization Kit",
        blurb: "A pattern for replacing legacy seller tools without disrupting active deals.",
        body:
          "The kit sequences portal and workflow replacement around live deal activity, so sellers and partners get modern tools without a cutover that stalls pipeline mid-quarter.",
      },
      {
        id: "closed-loop-feedback-design",
        kicker: "PLAY",
        title: "Closed-Loop Feedback Design",
        blurb: "A lightweight way to route customer feedback back into the teams that can act on it.",
        body:
          "It designs the routing logic that gets customer feedback to the team that can actually act on it, and closes the loop back to the customer — replacing feedback that currently disappears into a queue.",
      },
    ],
  },
  {
    id: "value-delivery-office",
    number: "05",
    eyebrow: "FinOps & governance",
    title: "Value Delivery Office",
    tagline: "Every program tracked to measurable value.",
    intro:
      "Transformation programs succeed or fail on governance most people never see. We run FinOps, portfolio rationalization, and value-realization programs that tie spend to outcomes, and manage large transformation efforts with the reporting and quality assurance that keep delivery accountable.",
    heroStat: {
      value: "VRO",
      label: "Value realization",
      caption: "FinOps, portfolio rationalization and governance tied to outcomes.",
    },
    iconName: "LayoutDashboard",
    canDo: [
      {
        title: "FinOps & value realization",
        detail:
          "Run cost optimization and value realization programs — FinOps, portfolio rationalization, business-case validation and VRO governance — with benefits tracked to outcomes.",
      },
      {
        title: "Large-program governance",
        detail:
          "Manage large transformation programs with effective governance, reporting and delivery quality assurance.",
      },
    ],
    willAchieve: [
      {
        title: "Spend tied directly to business outcomes",
        detail:
          "FinOps and VRO governance mean every dollar spent is tracked back to the value it was meant to deliver.",
        iconName: "LineChart",
      },
      {
        title: "A rationalized, defensible portfolio",
        detail: "Portfolio rationalization and business-case validation remove initiatives that can't justify themselves.",
        iconName: "ListChecks",
      },
      {
        title: "Programs that deliver on schedule and quality",
        detail:
          "Governance, reporting, and quality assurance keep large transformation programs accountable end to end.",
        iconName: "ClipboardCheck",
      },
    ],
    plays: [
      {
        id: "finops-baseline-assessment",
        kicker: "PLAY",
        title: "FinOps Baseline Assessment",
        blurb: "A first look at where technology spend is and isn't tied to tracked value.",
        body:
          "The assessment maps current technology spend against the value it's supposed to be tracked to, surfacing where FinOps governance is already working and where spend and outcomes have quietly drifted apart.",
      },
      {
        id: "portfolio-rationalization-sprint",
        kicker: "PLAY",
        title: "Portfolio Rationalization Sprint",
        blurb: "A fast pass to flag initiatives that can't justify their business case.",
        body:
          "It's a fast pass through the active portfolio that flags initiatives without a defensible business case, so rationalization decisions get made on evidence instead of tenure or momentum.",
      },
      {
        id: "vro-governance-starter-kit",
        kicker: "PLAY",
        title: "VRO Governance Starter Kit",
        blurb: "A lightweight governance model to track benefits realization from day one.",
        body:
          "The kit sets up lightweight benefit-tracking and governance from day one of a program, so value realization is monitored as delivery happens instead of being reconstructed after the fact.",
      },
    ],
  },
];

export const solutionMetrics = [
  { value: "83%", label: "of TMT CEOs are confident in sector growth prospects." },
  { value: "62%", label: "believe agentic AI will have a transformational or significant impact." },
  { value: "74%", label: "say AI stays a top investment priority even through a downturn." },
  { value: "$156M", label: "average planned AI investment per TMT organization over 12 months." },
];

// Source attribution to render as small footnote text under the metrics:
export const solutionMetricsSource =
  "KPMG 2025 Global CEO Outlook (TMT) and KPMG AI Quarterly Pulse Survey, TMT Q4 2025.";

export const fy27Bets = [
  {
    letter: "A",
    title: "Data Center & AIOps",
    note: "Market/competition intensity — priority opportunity areas.",
    points: ["Infrastructure readiness & platform assessment", "Reliability and SRE", "Operational resilience"],
  },
  {
    letter: "B",
    title: "Semiconductor Ecosystem",
    note: "Selective value-chain plays & capability build.",
    points: [
      "IT modernization",
      "Market-entry strategy, FAB & OSAT investment case",
      "Resilient & secure semiconductor operations",
    ],
  },
  {
    letter: "C",
    title: "M&E Sector",
    note: "Move from fragmented to focused sector motion.",
    points: [
      "Data integration & unification",
      "OTT & streaming platform transformation",
      "Workflow automation across the content lifecycle",
    ],
  },
  {
    letter: "D",
    title: "Deep-Tech Innovation",
    note: "AI for TMT — develop AI solution assets as non-negotiable.",
    points: [
      "Enterprise deep-tech & AI value strategy",
      "Agentic AI solutioning",
      "AI operating model & governance strategy",
    ],
  },
];
