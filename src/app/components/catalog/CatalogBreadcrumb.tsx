import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { ROUTES } from "../../../routes/paths";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface CatalogBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function CatalogBreadcrumb({ items }: CatalogBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex flex-wrap items-center gap-2 font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]"
    >
      <Link
        to={ROUTES.dashboard}
        className="text-[#2d5bff] no-underline transition-colors hover:text-[#1a4de8]"
      >
        Inicio
      </Link>
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          <ChevronRight className="size-4" />
          {item.to ? (
            <Link
              to={item.to}
              className="text-[#2d5bff] no-underline transition-colors hover:text-[#1a4de8]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#0d1c2e]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
