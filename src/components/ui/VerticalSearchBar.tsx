"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function VerticalSearchBar() {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={cn(
        "flex items-center gap-2 bg-white border rounded-lg px-3 py-2 flex-1 max-w-sm",
        "transition-all duration-200",
        focused ? "border-brand-blue shadow-[0_0_0_2px_rgba(26,58,143,0.12)]" : "border-slate-200"
      )}
    >
      <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
      <input
        type="text"
        placeholder="Type and press Enter to search"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
      />
    </div>
  );
}
