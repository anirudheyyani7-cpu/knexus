export interface Vertical {
  id: string;
  title: string;
  description: string;
  iconName: string;
  iconColorClass: string;
  iconBgClass: string;
}

export const verticals: Vertical[] = [
  {
    id: "sales",
    title: "AI for Sales & Revenue Ops",
    description: "Automate outreach, RFP responses, and pipeline enrichment to close deals faster.",
    iconName: "TrendingUp",
    iconColorClass: "text-blue-500",
    iconBgClass: "bg-blue-50",
  },
  {
    id: "support",
    title: "AI for Customer Support",
    description: "Intelligent ticket routing, escalation detection, and knowledge management at scale.",
    iconName: "Headphones",
    iconColorClass: "text-violet-500",
    iconBgClass: "bg-violet-50",
  },
  {
    id: "hr",
    title: "AI for HR & Recruitment",
    description: "Candidate screening, onboarding automation, and employee self-service flows.",
    iconName: "Users",
    iconColorClass: "text-emerald-500",
    iconBgClass: "bg-emerald-50",
  },
  {
    id: "itsm",
    title: "AI for IT & ITSM",
    description: "Access management, incident resolution, and endpoint remediation with zero-touch ops.",
    iconName: "MonitorCheck",
    iconColorClass: "text-orange-500",
    iconBgClass: "bg-orange-50",
  },
  {
    id: "telecom",
    title: "AI for Telecom",
    description: "Network operations, churn prediction, BSS modernisation, and billing automation.",
    iconName: "Radio",
    iconColorClass: "text-cyan-500",
    iconBgClass: "bg-cyan-50",
  },
  {
    id: "media",
    title: "AI for Media & Technology",
    description: "Content personalisation, DevOps automation, platform benchmarking, and rights management.",
    iconName: "Clapperboard",
    iconColorClass: "text-pink-500",
    iconBgClass: "bg-pink-50",
  },
];
