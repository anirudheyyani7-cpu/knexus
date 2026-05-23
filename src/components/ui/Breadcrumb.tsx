import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1 text-sm text-slate-500 mb-6">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-brand-blue transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-slate-800 font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
