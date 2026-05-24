export interface Integration {
  id: string;
  name: string;
  tagline: string;
  href: string;
  bgColor: string;
  textColor: string;
  letter: string;
  hoverBorderClass: string;
}

const BADGE = { bgColor: "bg-slate-100", textColor: "text-slate-600", hoverBorderClass: "hover:border-slate-300" };

export const integrations: Integration[] = [
  {
    id: "kurate-ai",
    name: "Kurate.ai",
    tagline: "A SaaS platform powering ServiceNow-native AI agents for seamless IT service delivery.",
    href: "#",
    ...BADGE,
    letter: "KU",
  },
  {
    id: "analytica-ai",
    name: "Analytica.Ai",
    tagline: "An analytics and visualisation engine built on Azure OpenAI for risk advisory decision-making.",
    href: "#",
    ...BADGE,
    letter: "AA",
  },
  {
    id: "kronos-ai",
    name: "Kronos.Ai",
    tagline: "An AI platform for intelligent process re-engineering and automated SOP management.",
    href: "#",
    ...BADGE,
    letter: "KA",
  },
  {
    id: "echo-ai",
    name: "Echo.ai",
    tagline: "An AI orchestration platform enabling knowledge-driven workbench replacement for IT teams.",
    href: "#",
    ...BADGE,
    letter: "EC",
  },
  {
    id: "ikig-ai",
    name: "Ikig.ai",
    tagline: "A specialised marketplace connecting enterprises with curated, domain-specific AI solutions.",
    href: "#",
    ...BADGE,
    letter: "IK",
  },
];
