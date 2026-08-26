// Level 2 of the Solutions IA: the Tech Transformation hub.
// Solutions (nav) -> Tech Transformation hub -> 3 engines (DSSI, Digital Next, DEQ).

export interface ClientMotivation {
  label: string;
  description: string;
}

/**
 * The four reasons clients come to us, from the left rail of the
 * Tech Transformation slide. Labels are as given; descriptions are drafted
 * here and should be replaced with the slide's own wording if it has any.
 */
export const clientMotivations: ClientMotivation[] = [
  {
    label: "Digital Transformation & Adoption",
    description:
      "Move core platforms and ways of working to a modern digital foundation — and get the organisation actually using them.",
  },
  {
    label: "Innovation & Growth",
    description:
      "Open new revenue lines and business models by putting emerging technology to work against a clear commercial thesis.",
  },
  {
    label: "Improved Operations",
    description:
      "Take cost, manual effort, and fragility out of day-to-day operations through automation and better-run technology.",
  },
  {
    label: "Superior Experience",
    description:
      "Deliver connected, consistent experiences across every customer and employee touchpoint.",
  },
];

export type EngineId = "dssi" | "digital-next" | "deq";

export interface Engine {
  id: EngineId;
  title: string;
  tagline: string;
  summary: string;
  iconName: string;
}

export const engines: Engine[] = [
  {
    id: "dssi",
    title: "DSSI",
    tagline: "5 verticals inside",
    summary:
      "Digital Strategy & Systems Integration — sector-led transformation across TMT, Emerging Tech, Tech M&A, Consumer Markets, and GCC.",
    iconName: "Layers",
  },
  {
    id: "digital-next",
    title: "Digital Next",
    tagline: "Sales & automation",
    summary:
      "Front-office transformation — sales, service, and marketing platforms modernised and automated end to end.",
    iconName: "Zap",
  },
  {
    id: "deq",
    title: "DEQ",
    tagline: "Data & engineering",
    summary:
      "Data, engineering, and quality — the data foundation, platforms, and engineering practice the other engines run on.",
    iconName: "Database",
  },
];

// ---------------------------------------------------------------------------
// Engine detail-page content (Digital Next, DEQ), sourced from the
// "One Practice, Three Engines — Technology Transformation Practice at
// glance" slide. Each `detail` follows the slide's bullet wording; `title`
// is a short label derived from it so the accordion has a heading.
//
// `tagline` and `intro` are editorial connective copy, not from the slide.
// ---------------------------------------------------------------------------

/** Structurally compatible with `SolutionCapability` in tmtSolutions.ts. */
export interface EngineCapability {
  title: string;
  detail: string;
}

export interface EngineCapabilityGroup {
  id: string;
  title: string;
  items: EngineCapability[];
}

export interface EngineDetail {
  tagline: string;
  intro: string;
  groups: EngineCapabilityGroup[];
}

export const engineDetails: Record<"digital-next" | "deq", EngineDetail> = {
  "digital-next": {
    tagline: "Rebuild the front office around the customer, not the org chart.",
    intro:
      "Digital Next covers the systems your customers and sellers actually touch — sales, service, and the automation behind them — modernised so work moves without manual handoffs between teams and tools.",
    groups: [
      {
        id: "sales-service",
        title: "Transforming Sales & Service Experience",
        items: [
          {
            title: "End-to-end service experience",
            detail: "Design the end-to-end service experience across every channel.",
          },
          {
            title: "Employee enablement",
            detail: "Empower employees through adoption of the tools and data they work with.",
          },
          {
            title: "Core servicing experience",
            detail: "Implement the solutions that enable the core servicing experience.",
          },
          {
            title: "Sales through CRM channels",
            detail: "Drive sales through the CRM channels of select partners.",
          },
        ],
      },
      {
        id: "agentic-automation",
        title: "Agentic process automation (RPA + LCNC + GenAI)",
        items: [
          {
            title: "Process automation at scale",
            detail:
              "Transform processes through automation to enable digital adoption and transformation, using intelligent automation, low-code/no-code, platforms, and Gen AI.",
          },
          {
            title: "Platform and system integration",
            detail:
              "Integrate existing platforms with existing systems through intelligent automation, low-code/no-code, and platform tooling.",
          },
          {
            title: "Performance management modernization",
            detail: "Modernize performance management operating models.",
          },
        ],
      },
    ],
  },
  deq: {
    tagline: "The data and engineering foundation everything else runs on.",
    intro:
      "DEQ builds the layer the other engines depend on — trustworthy data that produces real business insight, and an engineering and quality practice that keeps what gets built maintainable.",
    groups: [
      {
        id: "data-insights",
        title: "Data and business insights",
        items: [
          {
            title: "Quantifying business challenges",
            detail:
              "Identify and quantify business challenges through data, and quantify outcomes and enterprise performance.",
          },
          {
            title: "Unified data for modeling",
            detail: "Unify data to enhance modeling and optimize solutioning for clients.",
          },
        ],
      },
      {
        id: "engineering-quality",
        title: "Digital engineering and quality",
        items: [
          {
            title: "Design thinking",
            detail: "Apply design thinking to translate digital vision into tangible outcomes.",
          },
          {
            title: "NextGen test automation",
            detail: "NextGen test automation and quality delivery of digital implementations.",
          },
          {
            title: "Agile and DevOps transformation",
            detail: "Agile transformation and DevOps to manage change.",
          },
        ],
      },
    ],
  },
};
