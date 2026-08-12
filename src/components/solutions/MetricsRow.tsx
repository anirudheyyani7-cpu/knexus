"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { StaggerItem } from "@/components/solutions/StaggerItem";

interface Metric {
  value: string;
  label: string;
}

interface MetricsRowProps {
  metrics: Metric[];
  source: string;
}

interface ParsedMetric {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
}

function parseMetric(value: string): ParsedMetric | null {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numberStr, suffix] = match;
  const decimalPart = numberStr.split(".")[1];
  return {
    prefix,
    suffix,
    target: parseFloat(numberStr),
    decimals: decimalPart ? decimalPart.length : 0,
  };
}

function AnimatedMetricValue({ value }: { value: string }) {
  const parsed = parseMetric(value);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!parsed || !isInView) return;

    if (prefersReducedMotion) {
      setDisplay(parsed.target);
      return;
    }

    const controls = animate(0, parsed.target, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  if (!parsed) {
    return (
      <p ref={ref} className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy">
        {value}
      </p>
    );
  }

  const formatted = parsed.decimals > 0 ? display.toFixed(parsed.decimals) : Math.round(display).toString();

  return (
    <p ref={ref} className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy">
      {parsed.prefix}
      {formatted}
      {parsed.suffix}
    </p>
  );
}

export function MetricsRow({ metrics, source }: MetricsRowProps) {
  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {metrics.map((metric, i) => (
            <StaggerItem key={metric.label} index={i} className="border-t-2 border-brand-blue pt-4">
              <AnimatedMetricValue value={metric.value} />
              <p className="mt-2 text-sm text-slate-600 leading-snug">{metric.label}</p>
            </StaggerItem>
          ))}
        </div>

        <p className="mt-10 text-xs text-slate-400 leading-relaxed max-w-2xl">{source}</p>
      </div>
    </section>
  );
}
