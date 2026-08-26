// Stacked labelled rows (label left, chips right) rather than a literal
// grid clone of the slide — reads better at page width and on mobile.

import { expertise } from "@/data/dssi";
import { StaggerItem } from "@/components/solutions/StaggerItem";

export function ExpertiseRows() {
  return (
    <div className="border-t border-slate-200">
      {expertise.map((group, i) => (
        <StaggerItem key={group.id} index={i}>
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-8 border-b border-slate-200 py-6">
            <p className="text-sm font-bold text-slate-900 md:pt-1">{group.title}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </StaggerItem>
      ))}
    </div>
  );
}
