// Level 3 of the Solutions IA: the DSSI engine hub.
// Tech Transformation hub -> DSSI -> 5 vertical cards.
//
// Sourced from the "DSSI — Shaping Enterprise Transformation Through
// Strategy, Data and AI" and "One Practice, Three Engines" slides.
//
// DELIBERATELY EXCLUDED: the slides' "Selected Clients" and "Key Alliance
// Partners" rows. No client names or logos appear anywhere in this app.
// The platform-ecosystem names below are technology platforms we build on,
// not clients.

export interface PracticeHighlight {
  value: string;
  label: string;
}

/** Mirrors the shape of `solutionMetrics` in tmtSolutions.ts. */
export const practiceHighlights: PracticeHighlight[] = [
  { value: "250+", label: "Strategy & transformation experts" },
  { value: "400+", label: "Digital strategy engagements delivered" },
  { value: "100+", label: "Clientele across sectors" },
  { value: "1st", label: "Cred across KPMG in Vision AI, Gen AI & SLM" },
  { value: "120+", label: "Trained and certified professionals" },
];

/** The positioning line running under the capability row on the slide. */
export const expertisePrinciples: string[] = [
  "Customer centric",
  "AI enabled",
  "Platform driven",
  "Value realization focused",
];

export interface ExpertiseGroup {
  id: string;
  title: string;
  items: string[];
}

export const expertise: ExpertiseGroup[] = [
  {
    id: "platform-ecosystem",
    title: "Platform ecosystem",
    items: [
      "Salesforce",
      "TM Forum",
      "Nokia",
      "Google",
      "Azure",
      "Ericsson",
      "Netcracker",
      "App Engine",
      "G Suite",
      "Office 365",
      "Zoho",
      "Gemini",
      "Industry.AI",
      "AWS",
    ],
  },
  {
    id: "strategy-transformation",
    title: "Strategy & transformation capabilities",
    items: [
      "Digital Strategy & Roadmap",
      "Bespoke AI Solutions",
      "Operating Model Design",
      "Customer Experience Transformation",
      "Digital Business & Growth Enablement",
      "Digital & AI Transformation",
      "GCC Strategy",
      "Technology Strategy & Enterprise Architecture",
    ],
  },
  {
    id: "industry-coverage",
    title: "Industry coverage",
    items: [
      "Consumer & Retail",
      "TMT",
      "Manufacturing",
      "ENR",
      "Digital Infrastructure Players",
      "Hyperscalers",
      "Automotive",
      "GCC",
    ],
  },
  {
    id: "functional-domains",
    title: "Functional domains",
    items: [
      "Front Office",
      "Mid Office",
      "Back Office",
      "Digital Channels",
      "Technology & IT",
      "Customer",
      "Operations",
      "Procurement",
      "HR & Shared Services",
      "Network Automation",
      "Customer Journey Management",
      "AI & Analytics",
    ],
  },
];

/** The role titles on the DSSI bench. */
export const skills: string[] = [
  "Digital Strategy Experts",
  "TMT Digital Transformation Specialists",
  "Customer Experience Consultants",
  "Technology Architects",
  "AI & Gen AI Architects",
  "5G & Future Connectivity Specialists",
  "Value Realization & PMO Experts",
  "Transformation Delivery Specialists",
  "IT M&A & Product Management Experts",
];

export interface ServiceCategory {
  category: string;
  items: string[];
}

export const services: ServiceCategory[] = [
  {
    category: "Strategy & Advisory",
    items: [
      "Digital strategy & roadmap",
      "AI strategy for telecom",
      "Target operating model design",
      "Digital maturity assessment",
      "Business case & value",
    ],
  },
  {
    category: "Customer & Growth Transformation",
    items: [
      "CX enablement",
      "Omnichannel transformation",
      "B2B & enterprise growth",
      "Digital product development",
    ],
  },
  {
    category: "Technology & Architecture",
    items: [
      "Enterprise architecture",
      "Cloud & platform strategy",
      "IT modernization",
      "API & ecosystem strategy",
      "Digital core transformation",
    ],
  },
  {
    category: "AI Foundry",
    items: [
      "AI architecture",
      "Rapid prototyping",
      "Bespoke AI implementation",
      "AI governance & roadmap",
    ],
  },
  {
    category: "Digital, AI & Future Connectivity",
    items: [
      "GenAI use cases",
      "Open Gateway monetization",
      "5G monetization",
      "IoT & industry solutions",
    ],
  },
];

/**
 * DSSI's own engine content — the "Digital Strategy and Transformation"
 * block on the One Practice, Three Engines slide.
 */
export interface DssiCapability {
  title: string;
  detail: string;
}

export const digitalStrategyCapabilities: DssiCapability[] = [
  {
    title: "Vision into actionable insight",
    detail:
      "Translate customer vision and business objectives into actionable insights that drive digital initiatives.",
  },
  {
    title: "Digital vision and IT-OT integration",
    detail: "Drive digital vision, transformation, and IT-OT integration across industries.",
  },
  {
    title: "Platform, TOM and architecture selection",
    detail:
      "Enable clients to identify and choose platforms, the right target operating model, and the enterprise architecture that aligns to their needs.",
  },
  {
    title: "Experience-led acceleration",
    detail:
      "Identify the experiences that matter most and apply emerging technologies and AI to accelerate transformation.",
  },
  {
    title: "Sales acceleration",
    detail:
      "Modernize sales performance management operating models, and optimize the selection and adoption of key CRM and SPM platforms.",
  },
  {
    title: "M&A synergy realization",
    detail:
      "Enable the achievement of M&A synergies and value creation while operationalizing key integration or separation efforts.",
  },
  {
    title: "AI solution portfolio",
    detail:
      "Drive solutions across AI Factory, AI Accelerators, Vision AI, Gen AI, and Ops Brain.",
  },
];

export type DssiVerticalId =
  | "tmt"
  | "emerging-tech"
  | "tech-ma"
  | "consumer-markets"
  | "gcc";

export interface DssiVertical {
  id: DssiVerticalId;
  title: string;
  summary: string;
  /**
   * Set only where the vertical already has a built-out content area.
   * TMT points at the existing /solutions tree, which already holds the
   * 5 pillar pages and their playbooks — it stays where it is and is
   * reached through this card rather than being moved.
   */
  existingRoute?: string;
}

export const verticals: DssiVertical[] = [
  {
    id: "tmt",
    title: "TMT",
    summary:
      "Telecom, media and technology — five transformation pillars spanning business model reinvention, infrastructure, AI and data, customer experience, and value delivery.",
    existingRoute: "/solutions",
  },
  {
    id: "emerging-tech",
    title: "Emerging Tech",
    summary:
      "Deep-tech and frontier technology — turning early-stage capability into a fundable, sequenced commercial roadmap.",
  },
  {
    id: "tech-ma",
    title: "Tech M&A",
    summary:
      "Technology diligence, carve-outs, and post-merger integration — making sure deal-case value actually lands.",
  },
  {
    id: "consumer-markets",
    title: "Consumer Markets",
    summary:
      "Retail and consumer businesses — connected commerce, supply chain, and customer platforms built to scale.",
  },
  {
    id: "gcc",
    title: "GCC",
    summary:
      "Global Capability Centres — standing up and scaling capability centres with the operating model and governance to run them.",
  },
];
