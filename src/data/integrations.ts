export interface Integration {
  id: string;
  name: string;
  provider: string;
  bgColor: string;
  textColor: string;
  letter: string;
  hoverBorderClass: string;
}

export const integrations: Integration[] = [
  { id: "analytica-ai", name: "Analytica.Ai",  provider: "Go to Platform",  bgColor: "bg-blue-100",   textColor: "text-blue-700",   letter: "AA",  hoverBorderClass: "hover:border-blue-300" },
  { id: "kronos-ai",    name: "Kronos.Ai",     provider: "Go to Platform",  bgColor: "bg-violet-100", textColor: "text-violet-700", letter: "KA",  hoverBorderClass: "hover:border-violet-300" },
  { id: "kurate-ai",    name: "Kurate.ai",     provider: "Go to Platform",  bgColor: "bg-emerald-100",textColor: "text-emerald-700",letter: "KU",  hoverBorderClass: "hover:border-emerald-300" },
];
