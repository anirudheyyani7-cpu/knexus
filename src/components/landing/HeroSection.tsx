import { Brain, Database, Globe, BarChart2, Shield, Cpu } from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";
import { cn } from "@/lib/utils";

const FLOATING_ICONS = [
  {
    Icon: Brain,
    color: "bg-brand-soft text-brand-blue",
    top: "14%", left: "5%",
    delay: "0s", speed: "animate-float-slow",
  },
  {
    Icon: Database,
    color: "bg-violet-50 text-violet-500",
    top: "52%", left: "4%",
    delay: "1.2s", speed: "animate-float-mid",
  },
  {
    Icon: Globe,
    color: "bg-cyan-50 text-cyan-500",
    top: "78%", left: "13%",
    delay: "0.6s", speed: "animate-float-fast",
  },
  {
    Icon: BarChart2,
    color: "bg-emerald-50 text-emerald-500",
    top: "18%", right: "6%",
    delay: "0.4s", speed: "animate-float-mid",
  },
  {
    Icon: Shield,
    color: "bg-orange-50 text-orange-500",
    top: "56%", right: "5%",
    delay: "1.4s", speed: "animate-float-slow",
  },
  {
    Icon: Cpu,
    color: "bg-pink-50 text-pink-500",
    top: "80%", right: "15%",
    delay: "0.9s", speed: "animate-float-fast",
  },
];

export function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden py-28 px-6">
      {FLOATING_ICONS.map(({ Icon, color, top, left, right, delay, speed }, i) => (
        <div
          key={i}
          className={cn(
            "absolute w-14 h-14 rounded-2xl flex items-center justify-center",
            "shadow-md opacity-85 select-none",
            color,
            speed
          )}
          style={{ top, left, right, animationDelay: delay } as React.CSSProperties}
        >
          <Icon className="w-6 h-6" />
        </div>
      ))}

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft border border-blue-200 text-xs font-semibold text-brand-blue mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
          Agentic AI Marketplace
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-8 tracking-tight">
          Explore{" "}
          <span className="text-brand-blue">AI agents</span>
          {" "}and{" "}
          <span className="text-brand-blue">integrations</span>
          {" "}for your business.
        </h1>

        <SearchBar />
      </div>
    </section>
  );
}
