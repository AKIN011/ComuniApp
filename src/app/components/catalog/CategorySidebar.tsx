import { Link } from "react-router";
import type { CategoryWithCount } from "../../../services/catalogService";
import { ROUTES } from "../../../routes/paths";

interface CategorySidebarProps {
  categories: CategoryWithCount[];
  activeSlug: string;
}

export function CategorySidebar({
  categories,
  activeSlug,
}: CategorySidebarProps) {
  return (
    <aside className="rounded-[24px] bg-white p-6 shadow-[0px_8px_30px_0px_rgba(13,28,46,0.06)]">
      <h2 className="mb-4 font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] font-bold leading-[26px] text-[#0d1c2e]">
        Categorías
      </h2>
      <nav aria-label="Categorías de servicios">
        <ul className="flex flex-col gap-1">
          {categories.map((category) => {
            const isActive = category.slug === activeSlug;

            return (
              <li key={category.id}>
                <Link
                  to={ROUTES.servicesByCategory(category.slug)}
                  className={`flex items-center justify-between rounded-[14px] px-4 py-3 no-underline transition-all duration-200 ${
                    isActive
                      ? "border-l-4 border-[#2d5bff] bg-[#eef4fc] text-[#2d5bff]"
                      : "border-l-4 border-transparent text-[#334155] hover:bg-[#f8f9ff] hover:text-[#2d5bff]"
                  }`}
                >
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px]">
                    {category.name}
                  </span>
                  <span
                    className={`rounded-[9999px] px-2.5 py-0.5 font-['Inter:Medium',sans-serif] text-[12px] font-medium ${
                      isActive
                        ? "bg-[#2d5bff] text-white"
                        : "bg-[#eef4fc] text-[#64748b]"
                    }`}
                  >
                    {category.serviceCount}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-6 rounded-[16px] bg-[#eef4fc] p-4">
        <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] font-semibold uppercase tracking-wide text-[#2d5bff]">
          Selecciones de la comunidad
        </p>
        <p className="mt-2 font-['Inter:Regular',sans-serif] text-[13px] leading-[20px] text-[#64748b]">
          Servicios verificados por vecinos de tu zona.
        </p>
      </div>
    </aside>
  );
}
