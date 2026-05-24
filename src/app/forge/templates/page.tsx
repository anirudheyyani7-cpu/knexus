"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { TemplateTile } from "@/components/forge/TemplateTile";
import { useForge } from "@/components/forge/ForgeContext";
import { templates } from "@/data/templates";

export default function ForgeTemplatesPage() {
  const router = useRouter();
  const { setDraft, log } = useForge();

  function handleSelect(templateId: string) {
    const tmpl = templates.find((t) => t.id === templateId);
    if (!tmpl) return;

    setDraft({
      templateId: tmpl.id,
      name: tmpl.title,
      description: tmpl.description,
      domain: tmpl.domain,
      tools: tmpl.capabilities,
    });
    log("Template selected", tmpl.title);
    router.push("/forge/configure");
  }

  return (
    <section className="px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-1.5">Choose a Template</h2>
          <p className="text-sm text-slate-500">
            Start with a pre-configured agent and tailor it to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((tmpl, i) => (
            <motion.div
              key={tmpl.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              <TemplateTile template={tmpl} onClick={() => handleSelect(tmpl.id)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
