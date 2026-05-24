"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { ForgeProvider } from "@/components/forge/ForgeContext";
import { ActivityLog } from "@/components/forge/ActivityLog";

const STEPS = [
  {
    key: "setup",
    label: "Setup",
    paths: ["/forge", "/forge/templates", "/forge/describe"],
  },
  { key: "configure", label: "Configure", paths: ["/forge/configure"] },
  { key: "onboard", label: "Onboard", paths: ["/forge/onboarding"] },
  { key: "preview", label: "Preview", paths: ["/forge/preview"] },
];

function ForgeStepBar() {
  const pathname = usePathname();
  const activeIdx = STEPS.findIndex((s) => s.paths.includes(pathname));
  const idx = activeIdx === -1 ? 0 : activeIdx;

  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-slate-50 px-6 py-3">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
        Back to Command Center
      </Link>

      <ol className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
        {STEPS.map((step, i) => (
          <li key={step.key} className="flex items-center gap-2">
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-bold ${
                i <= idx
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-slate-200 bg-white text-slate-400"
              }`}
            >
              {i + 1}
            </span>
            <span className={i === idx ? "text-brand-blue" : "text-slate-400"}>
              {step.label}
            </span>
            {i < STEPS.length - 1 && (
              <span className="text-slate-300">›</span>
            )}
          </li>
        ))}
      </ol>

      <ActivityLog />
    </div>
  );
}

export default function ForgeLayout({ children }: { children: ReactNode }) {
  return (
    <ForgeProvider>
      <div className="flex min-h-screen w-full flex-col bg-white">
        <Header />
        <ForgeStepBar />
        <main className="flex-1">{children}</main>
      </div>
    </ForgeProvider>
  );
}
