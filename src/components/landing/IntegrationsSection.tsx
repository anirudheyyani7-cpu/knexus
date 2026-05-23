"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { integrations } from "@/data/integrations";

export function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-slate-50/70 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Available 3rd-party Integrations
          </h2>
          <p className="text-slate-500 text-sm">
            Building blocks to integrate agents into your existing systems.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {integrations.map((intg, i) => (
            <motion.div
              key={intg.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className={cn(
                "bg-white border border-slate-200 rounded-xl p-4",
                "flex items-center gap-3 cursor-pointer",
                "transition-all duration-200 hover:scale-[1.02] hover:shadow-card-hover",
                intg.hoverBorderClass
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0",
                  intg.bgColor,
                  intg.textColor
                )}
              >
                {intg.letter}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">{intg.name}</p>
                <p className="text-xs text-slate-500 truncate">{intg.provider}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-2.5 text-sm font-semibold border border-brand-blue text-brand-blue rounded-lg hover:bg-blue-50 transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
