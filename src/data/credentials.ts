// Anonymized client credentials for the Tech Transformation creds carousel.
// Real client names are intentionally removed — `descriptor` carries only
// industry / geography / scale. Near-duplicate engagements (e.g. multiple
// telco operating companies running the same BSS migration) are collapsed
// into a single card. `featured` marks the curated carousel subset;
// `industry` lets you filter creds per DSSI vertical later.
//
// NOTE: even anonymized, confirm client sign-off before any external use.

export type CredIndustry =
  | "Telecom"
  | "Digital Infrastructure"
  | "Power & Energy"
  | "Media"
  | "Financial Services"
  | "Consumer & Retail"
  | "Technology & Services";

export interface Credential {
  id: string;
  descriptor: string;   // anonymized client — no real names
  solution: string;     // solution / offering
  blurb: string;        // anonymized one-line project description
  industry: CredIndustry;
  featured?: boolean;   // show in the primary carousel
  // TMT pillar(s) this engagement evidences. Only creds with pillarIds set
  // surface in the Capability Map's proof column; the rest stay carousel-only.
  pillarIds?: string[];
}

export const credentials: Credential[] = [
  // ---- Telecom: network & BSS ----
  {
    id: "telco-bss-panafrican",
    descriptor: "Leading pan-African telecom group",
    solution: "BSS Transformation",
    blurb:
      "End-to-end BSS migration across GSM and non-GSM networks, spanning multiple operating companies.",
    industry: "Telecom",
    featured: true,
    pillarIds: ["infra-modernization"],
  },
  {
    id: "telco-fip-panafrican",
    descriptor: "Leading pan-African telecom group",
    solution: "Finance Transformation",
    blurb:
      "Finance operating-model assessment and process transformation to strengthen controls.",
    industry: "Telecom",
  },
  {
    id: "telco-5g-spectrum-panafrican",
    descriptor: "Leading pan-African telecom group",
    solution: "5G Spectrum Strategy",
    blurb: "5G spectrum strategy assessment and advisory support.",
    industry: "Telecom",
  },
  {
    id: "telco-api-panafrican",
    descriptor: "Leading pan-African telecom group",
    solution: "API Integration & Orchestration",
    blurb:
      "Group-wide API assessment across operating companies, aligned to a unified group API strategy.",
    industry: "Telecom",
    featured: true,
    pillarIds: ["infra-modernization"],
  },
  {
    id: "telco-datagov-panafrican",
    descriptor: "Leading pan-African telecom group",
    solution: "Data Governance",
    blurb: "Data-governance process redesign.",
    industry: "Telecom",
  },
  {
    id: "telco-bss-me",
    descriptor: "Leading Middle East telecom operator",
    solution: "BSS Transformation",
    blurb: "End-to-end BSS migration across GSM and non-GSM networks.",
    industry: "Telecom",
  },
  {
    id: "telco-observability-india",
    descriptor: "Leading Indian telecom operator",
    solution: "Tool Optimization",
    blurb: "Tool rationalization across the observability layer.",
    industry: "Telecom",
  },
  {
    id: "telco-bplan-india",
    descriptor: "Major Indian telecom operator",
    solution: "Business Plan Validation",
    blurb: "Business-case validation for a planned 5G rollout.",
    industry: "Telecom",
  },
  {
    id: "telco-audit-ph",
    descriptor: "Leading Philippines telecom operator",
    solution: "Internal Audit",
    blurb: "Enterprise internal audit.",
    industry: "Telecom",
  },

  // ---- Telecom: data, platforms & regulatory ----
  {
    id: "telco-datagov-vn",
    descriptor: "Leading Vietnamese telecom operator",
    solution: "Data Governance & Data Management",
    blurb: "Enterprise-wide data-governance strategy and processes.",
    industry: "Telecom",
    featured: true,
    pillarIds: ["ai-data-monetization"],
  },
  {
    id: "telco-datamaturity-sea",
    descriptor: "Leading Southeast Asian telecom group",
    solution: "Data Governance & Privacy",
    blurb:
      "Data-maturity assessment across 10 operating companies plus a transformation roadmap.",
    industry: "Telecom",
    featured: true,
    pillarIds: ["ai-data-monetization"],
  },
  {
    id: "telco-cih-global",
    descriptor: "Global telecom operator",
    solution: "Data Platform Design",
    blurb:
      "Customer Intelligence Hub (lakehouse) delivering a 360-degree customer view.",
    industry: "Telecom",
    pillarIds: ["ai-data-monetization"],
  },
  {
    id: "telco-bt-transformation-kh",
    descriptor: "Leading Cambodian telecom operator",
    solution: "Business & Technology Transformation",
    blurb:
      "Strategy, process reengineering and tooling across the organization.",
    industry: "Telecom",
  },
  {
    id: "telco-digital-sea",
    descriptor: "Emerging-market telecom operator (SE Asia)",
    solution: "Digital Transformation",
    blurb: "Broad digital-transformation support.",
    industry: "Telecom",
  },
  {
    id: "telco-regfee-me",
    descriptor: "Telecom regulator (Middle East)",
    solution: "Regulatory Assurance",
    blurb:
      "Comprehensive regulatory-fee assessment covering the major in-country operators.",
    industry: "Telecom",
  },
  {
    id: "telco-cpaas-assessment-india",
    descriptor: "Leading enterprise telecom / CPaaS provider (India)",
    solution: "Platform Technical Assessment",
    blurb:
      "CPaaS platform assessment for performance, scalability and resilience.",
    industry: "Telecom",
  },
  {
    id: "telco-cpaas-tom-india",
    descriptor: "Leading enterprise telecom / CPaaS provider (India)",
    solution: "Operating Model Redesign",
    blurb: "Target operating-model design for cloud-based services.",
    industry: "Telecom",
  },
  {
    id: "telco-isp-crm-india",
    descriptor: "Regional broadband / ISP provider (India)",
    solution: "Process Design & CRM Implementation",
    blurb: "Org governance, process reengineering and digital enablement.",
    industry: "Telecom",
  },

  // ---- Digital-communications infrastructure & equipment ----
  {
    id: "digicomm-consolidation",
    descriptor: "Global digital-communications provider",
    solution: "Process Mining",
    blurb: "Post-acquisition system and process consolidation.",
    industry: "Digital Infrastructure",
  },
  {
    id: "digicomm-reg-exchange",
    descriptor: "Global digital-communications provider",
    solution: "Regulatory Assurance",
    blurb:
      "Inter-entity information-exchange architecture and compliance review.",
    industry: "Digital Infrastructure",
  },
  {
    id: "digicomm-mdm-audit",
    descriptor: "Global digital-communications provider",
    solution: "Master Data Management Audit",
    blurb: "Review of customer, employee and vendor master data.",
    industry: "Digital Infrastructure",
  },
  {
    id: "equip-process-india",
    descriptor: "Indian telecom-equipment & fiber manufacturer",
    solution: "Process Mining",
    blurb: "Enterprise-wide process reengineering and optimization.",
    industry: "Digital Infrastructure",
  },
  {
    id: "fiber-mkt-entry-global",
    descriptor: "Global fiber & materials manufacturer",
    solution: "Corporate Strategy Design",
    blurb: "Market-entry strategy for expanding fiber connectivity.",
    industry: "Digital Infrastructure",
  },

  // ---- Power, infrastructure & energy ----
  {
    id: "power-dci-strategy",
    descriptor: "Leading power-transmission & fiber firm",
    solution: "Corporate Strategy Design",
    blurb: "Value proposition for a data-center interconnect offering.",
    industry: "Power & Energy",
    featured: true,
    pillarIds: ["business-model-reinvention"],
  },
  {
    id: "power-fiber-bu",
    descriptor: "Leading power-transmission & fiber firm",
    solution: "Process Mining",
    blurb:
      "Tech enablement and process redesign for a fiber-sales business unit.",
    industry: "Power & Energy",
  },
  {
    id: "power-dc-diversification",
    descriptor: "National power-transmission utility",
    solution: "Corporate Strategy Design",
    blurb: "Market strategy for diversification into data centers.",
    industry: "Power & Energy",
  },
  {
    id: "towers-smartcity",
    descriptor: "Leading telecom-tower company",
    solution: "Corporate Strategy Design",
    blurb: "Market-entry strategy for PPP-based smart-city services.",
    industry: "Power & Energy",
  },
  {
    id: "gas-fiber-dc",
    descriptor: "National gas utility",
    solution: "Corporate Strategy Design",
    blurb:
      "GTM support for scaling a fiber-connectivity and data-center business.",
    industry: "Power & Energy",
  },
  {
    id: "oilgas-dc-market",
    descriptor: "Major oil & gas refiner",
    solution: "Corporate Strategy Design",
    blurb: "Market-entry strategy for the data-center market.",
    industry: "Power & Energy",
  },
  {
    id: "eng-5g-enterprise",
    descriptor: "Engineering & infrastructure conglomerate",
    solution: "Corporate Strategy Design",
    blurb: "Market-entry strategy for enterprise 5G solutions.",
    industry: "Power & Energy",
  },

  // ---- Media, financial services & consumer ----
  {
    id: "media-platform-tdd",
    descriptor: "Leading Middle East media group",
    solution: "Platform Due Diligence",
    blurb: "Technical due diligence for a platform acquisition.",
    industry: "Media",
    featured: true,
    pillarIds: ["business-model-reinvention"],
  },
  {
    id: "edu-antipiracy",
    descriptor: "Leading education & publishing company",
    solution: "Anti-Piracy Strategy & Governance",
    blurb: "Piracy-process assessment, LLM probing and recommendations.",
    industry: "Media",
  },
  {
    id: "fs-reg-global",
    descriptor: "Global financial institution",
    solution: "Regulatory Assurance",
    blurb: "Compliance assessment against telecom regulations.",
    industry: "Financial Services",
  },
  {
    id: "fs-reg-uk",
    descriptor: "Leading UK banking group",
    solution: "Regulatory Assurance",
    blurb: "Compliance assessment against telecom regulations.",
    industry: "Financial Services",
  },
  {
    id: "fintech-dataplatform-audit",
    descriptor: "Global fintech / payments provider",
    solution: "Data Platform Audit",
    blurb: "Data-platform assessment and recommendations.",
    industry: "Financial Services",
    featured: true,
    pillarIds: ["ai-data-monetization"],
  },
  {
    id: "compliance-einvoicing-eu",
    descriptor: "Global tax-compliance software provider",
    solution: "E-Invoicing Implementation",
    blurb: "Rollout of an e-invoicing mandate across Europe.",
    industry: "Financial Services",
  },
  {
    id: "fs-cms-audit",
    descriptor: "Financial-services provider",
    solution: "Audit",
    blurb: "Post-migration content-management-system audit.",
    industry: "Financial Services",
  },
  {
    id: "retail-reg-wifi",
    descriptor: "Global fashion retailer",
    solution: "Regulatory Assurance",
    blurb:
      "Regulatory-landscape assessment for in-store call and Wi-Fi operations.",
    industry: "Consumer & Retail",
    featured: true,
  },
  {
    id: "auto-tool-governance",
    descriptor: "Global automotive manufacturer",
    solution: "Tool Optimization",
    blurb:
      "Requirement assessment and tool-development governance for a bonded-manufacturing scheme.",
    industry: "Consumer & Retail",
  },
  {
    id: "mobility-av-pmo",
    descriptor: "Global mobility / technology platform",
    solution: "Audio-Visual PMO",
    blurb: "PMO for audio-visual projects across APAC.",
    industry: "Consumer & Retail",
    featured: true,
    pillarIds: ["value-delivery-office"],
  },

  // ---- Cross-industry / other ----
  {
    id: "itservices-hr-process",
    descriptor: "Global IT-services provider",
    solution: "Process Mining",
    blurb: "HR-process redesign for AI enablement.",
    industry: "Technology & Services",
  },
  {
    id: "industrial-tom",
    descriptor: "Industrial manufacturing firm",
    solution: "Operating Model Redesign",
    blurb: "TOM assessment and to-be operating-model design.",
    industry: "Technology & Services",
  },
  {
    id: "dev-platform-africa",
    descriptor: "Development-sector platform (internal build)",
    solution: "Platform Delivery",
    blurb:
      "Women's-empowerment management platform — feature build, deployment and governance for small businesses in Africa.",
    industry: "Technology & Services",
  },
];

export const featuredCredentials = credentials.filter((c) => c.featured);
