"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const CHIPS = [
  "Route support tickets",
  "Cloud infrastructure assessment",
  "Detect customer churn",
  "Datacenter viability",
  "Map customer journey",
  "Portfolio rationalization",
];

export function SearchBar() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value.trim()) {
      router.push(`/search?q=${encodeURIComponent(value.trim())}`);
    }
  }

  function handleChip(chip: string) {
    setValue(chip);
    router.push(`/search?q=${encodeURIComponent(chip)}`);
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div
          className={cn(
            "flex items-center gap-3 bg-white border rounded-2xl px-4 py-3",
            "shadow-card transition-all duration-300",
            focused
              ? "border-brand-blue shadow-[0_0_0_3px_rgba(26,58,143,0.12)] scale-[1.01]"
              : "border-slate-200 hover:border-slate-300"
          )}
        >
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="Find your agentic solution here"
            className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
          />
          <button
            type="submit"
            className="w-8 h-8 rounded-xl flex items-center justify-center bg-brand-blue text-white transition-colors hover:bg-brand-blue-dark flex-shrink-0"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {CHIPS.map((chip) => (
          <button
            key={chip}
            onClick={() => handleChip(chip)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium",
              "border border-slate-200 rounded-full bg-white text-slate-600",
              "transition-all duration-200",
              "hover:border-brand-blue hover:text-brand-blue hover:bg-brand-soft"
            )}
          >
            <Sparkles className="w-3 h-3 text-brand-violet" />
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
