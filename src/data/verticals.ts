export interface Vertical {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  iconColorClass: string;
  iconBgClass: string;
}

export const verticals: Vertical[] = [
  {
    id: "telecom",
    title: "AI for Telecom",
    description: "Network operations, churn prediction, BSS modernisation, and billing automation.",
    longDescription:
      "AI for Telecom is a pre-built, advanced AI solution designed to transform how telecommunications operators manage their networks, customers, and business systems. By harnessing cutting-edge artificial intelligence, this platform streamlines critical processes — from network health monitoring and anomaly detection to churn prediction and BSS modernisation. Focused on driving operational excellence, AI for Telecom empowers operators to reduce manual intervention, accelerate issue resolution, and deliver more personalised subscriber experiences. The solution automates complex workflows such as spectrum strategy planning, billing audits, and field dispatch, enabling teams to focus on innovation and service quality. With intelligent automation and seamless integration across existing OSS/BSS stacks, AI for Telecom helps operators build resilient, efficient, and future-ready networks.",
    iconName: "Radio",
    iconColorClass: "text-cyan-500",
    iconBgClass: "bg-cyan-50",
  },
  {
    id: "media",
    title: "AI for Media",
    description: "Content personalisation, OTT recommendations, digital rights management, and audience intelligence.",
    longDescription:
      "AI for Media is a pre-built AI solution purpose-built for media organisations navigating the demands of an always-on, content-driven world. It brings intelligence to content personalisation, OTT recommendation engines, digital rights management, and audience analytics — enabling media companies to deliver more engaging, relevant experiences at scale. By embedding AI into editorial and distribution workflows, the platform helps teams reduce operational overhead, accelerate content delivery, and unlock deeper audience insights. From automated content curation to rights clearance workflows, AI for Media provides the analytical depth and automation breadth needed to compete in fast-moving media markets. It integrates with existing content management and distribution stacks and scales with the evolving needs of digital-first media organisations.",
    iconName: "Clapperboard",
    iconColorClass: "text-pink-500",
    iconBgClass: "bg-pink-50",
  },
  {
    id: "technology",
    title: "AI for Technology",
    description: "Platform benchmarking, DevOps automation, cloud infrastructure assessment, and digital transformation.",
    longDescription:
      "AI for Technology is a pre-built AI solution designed for technology enterprises looking to modernise their platforms, optimise infrastructure, and accelerate digital transformation. It brings intelligence to platform benchmarking, DevOps workflow automation, cloud infrastructure assessment, and architecture governance — enabling technology organisations to move faster with greater confidence. By embedding AI into engineering and operations processes, the platform helps reduce technical debt, surface capability gaps, and generate actionable modernisation roadmaps. From cloud maturity scoring to automated compliance checks, AI for Technology provides the depth and precision needed to govern complex technology estates. It is built to integrate with leading cloud providers and engineering toolchains, scaling alongside the organisation's transformation journey.",
    iconName: "MonitorCheck",
    iconColorClass: "text-violet-500",
    iconBgClass: "bg-violet-50",
  },
  {
    id: "itsm",
    title: "AI for IT & ITSM",
    description: "Access management, incident resolution, and endpoint remediation with zero-touch ops.",
    longDescription:
      "AI for IT & ITSM is a pre-built AI solution designed to modernise IT service management and infrastructure operations. It brings intelligent automation to access management, incident resolution, endpoint remediation, and service desk operations — reducing manual workload and accelerating response times across the IT organisation. By leveraging AI-driven triage, root cause analysis, and zero-touch remediation, the platform helps IT teams move from reactive to proactive operations. Ticket classification, SLA management, and knowledge-base enrichment are automated end-to-end, freeing IT professionals to focus on strategic priorities. With seamless integration into leading ITSM platforms, AI for IT & ITSM provides the foundation for a more resilient, efficient, and responsive technology organisation.",
    iconName: "MonitorCheck",
    iconColorClass: "text-orange-500",
    iconBgClass: "bg-orange-50",
  },
  {
    id: "sales",
    title: "AI for Sales & Revenue Ops",
    description: "Automate outreach, RFP responses, and pipeline enrichment to close deals faster.",
    longDescription: "AI-powered sales and revenue operations that accelerate pipeline growth and improve win rates.",
    iconName: "TrendingUp",
    iconColorClass: "text-blue-500",
    iconBgClass: "bg-blue-50",
  },
  {
    id: "support",
    title: "AI for Customer Support",
    description: "Intelligent ticket routing, escalation detection, and knowledge management at scale.",
    longDescription: "Intelligent automation for customer support that reduces resolution times and improves satisfaction.",
    iconName: "Headphones",
    iconColorClass: "text-violet-500",
    iconBgClass: "bg-violet-50",
  },
  {
    id: "hr",
    title: "AI for HR & Recruitment",
    description: "Candidate screening, onboarding automation, and employee self-service flows.",
    longDescription: "AI-driven HR workflows that streamline recruitment, onboarding, and employee self-service.",
    iconName: "Users",
    iconColorClass: "text-emerald-500",
    iconBgClass: "bg-emerald-50",
  },
];
