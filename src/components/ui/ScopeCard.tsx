import { cn } from "@/lib/utils";

interface ScopeCardProps {
  label: "AGENT SCOPE" | "AUTONOMY LEVEL";
  level: number;
  type: string;
  summary: string;
  detail: string;
  accent: "blue" | "orange";
}

export function ScopeCard({ label, level, type, summary, detail, accent }: ScopeCardProps) {
  const accentText = accent === "blue" ? "text-brand-blue" : "text-orange-500";
  const accentBorder = accent === "blue" ? "border-brand-blue" : "border-orange-400";
  const accentBg = accent === "blue" ? "bg-brand-soft" : "bg-orange-50";

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col gap-4">
      <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">{label}</p>

      <div className="flex items-start gap-4">
        {/* Level circle */}
        <div
          className={cn(
            "w-14 h-14 rounded-full border-2 flex flex-col items-center justify-center flex-shrink-0",
            accentBorder,
            accentBg
          )}
        >
          <span className="text-[10px] font-semibold text-slate-500 leading-none">Lvl</span>
          <span className={cn("text-xl font-extrabold leading-none", accentText)}>{level}</span>
        </div>

        <div>
          <p className={cn("text-base font-bold", accentText)}>{type}</p>
          <p className="text-xs font-medium text-slate-600 mt-0.5">{summary}</p>
        </div>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed">{detail}</p>

      <a href="#" className="text-xs font-semibold text-brand-blue hover:underline mt-auto">
        Learn more →
      </a>
    </div>
  );
}
