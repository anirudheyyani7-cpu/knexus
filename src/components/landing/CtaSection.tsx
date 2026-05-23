"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 flex items-center justify-between gap-8 shadow-card"
        >
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-slate-500" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1 leading-snug">
                Accelerate time-to-value from AI
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Find out how K-Nexus.AI can help bridge the gap between strategy and shipped outcomes.
              </p>
            </div>
          </div>

          <a
            href="mailto:knexus@kpmg.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-dark transition-colors flex-shrink-0"
          >
            Talk to an expert
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
