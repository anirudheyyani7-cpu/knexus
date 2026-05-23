import { Suspense } from "react";
import { SearchResultsContent } from "@/components/search/SearchResultsContent";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function SearchPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        <Suspense fallback={<div className="p-10 text-center text-slate-400 text-sm">Loading results…</div>}>
          <SearchResultsContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
