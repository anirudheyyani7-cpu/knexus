import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { MetricsRow } from "@/components/solutions/MetricsRow";
import { CapabilityMap } from "@/components/capability-map/CapabilityMap";
import { solutionMetrics, solutionMetricsSource } from "@/data/tmtSolutions";

export default function CapabilityMapPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <Breadcrumb
              crumbs={[{ label: "Marketplace", href: "/" }, { label: "Capability Map" }]}
            />
          </div>
        </div>

        <section className="border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-4">
                TMT &middot; Capability Map
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">
                Capability Map
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Hover any node to see everything it connects to across priorities, challenges,
                pillars and solutions — click to lock.
              </p>
            </div>
          </div>
        </section>

        <MetricsRow metrics={solutionMetrics} source={solutionMetricsSource} />

        <section className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <CapabilityMap />
        </section>
      </main>
      <Footer />
    </>
  );
}
