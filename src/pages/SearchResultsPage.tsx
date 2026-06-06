import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { DEFAULT_CATEGORY_SLUG, PRICE_FILTER } from "../data/catalogConfig";
import type { CategoryWithCount, Service, SortOption } from "../data/types";
import { applyServiceFilters } from "../lib/catalog/filters";
import { isCategorySlug } from "../lib/catalog/guards";
import { CategorySidebar } from "../app/components/catalog/CategorySidebar";
import { CatalogBreadcrumb } from "../app/components/catalog/CatalogBreadcrumb";
import { EmptyState } from "../app/components/catalog/EmptyState";
import { ResidentCatalogLayout } from "../app/components/catalog/ResidentCatalogLayout";
import { ServiceFilters } from "../app/components/catalog/ServiceFilters";
import { ServiceGrid } from "../app/components/catalog/ServiceGrid";
import { ServiceGridSkeleton } from "../app/components/catalog/LoadingSkeleton";
import {
  fetchCategories,
  fetchCategory,
  fetchServicesByCategory,
} from "../services/catalogService";
import { ROUTES } from "../routes/paths";

export default function SearchResultsPage() {
  const { categorySlug = "" } = useParams<{ categorySlug: string }>();
  const [categories, setCategories] = useState<CategoryWithCount[]>([]);
  const [activeCategory, setActiveCategory] = useState<CategoryWithCount | null>(
    null,
  );
  const [categoryServices, setCategoryServices] = useState<Service[]>([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(true);
  const [sort, setSort] = useState<SortOption>("recommended");
  const [maxPrice, setMaxPrice] = useState(PRICE_FILTER.defaultMax);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  useEffect(() => {
    if (!categorySlug || !isCategorySlug(categorySlug)) {
      setIsCategoryLoading(false);
      setActiveCategory(null);
      setCategoryServices([]);
      return;
    }

    let cancelled = false;
    setIsCategoryLoading(true);

    Promise.all([
      fetchCategory(categorySlug),
      fetchServicesByCategory(categorySlug),
    ]).then(([category, services]) => {
      if (cancelled) return;
      setActiveCategory(category);
      setCategoryServices(services);
      setIsCategoryLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [categorySlug]);

  const services = useMemo(
    () => applyServiceFilters(categoryServices, { sort, maxPrice }),
    [categoryServices, sort, maxPrice],
  );

  const resultLabel = useMemo(() => {
    if (!activeCategory) return "Resultados";
    return `Resultados para ${activeCategory.name}`;
  }, [activeCategory]);

  if (!categorySlug || !isCategorySlug(categorySlug)) {
    return (
      <ResidentCatalogLayout>
        <EmptyState
          title="Categoría no especificada"
          description="Selecciona una categoría desde el panel o el menú de navegación."
          actionLabel="Ir al dashboard"
          actionTo={ROUTES.dashboard}
        />
      </ResidentCatalogLayout>
    );
  }

  if (!isCategoryLoading && !activeCategory) {
    return (
      <ResidentCatalogLayout>
        <EmptyState
          title="Categoría no encontrada"
          description="La categoría que buscas no existe. Explora otras opciones disponibles."
          actionLabel="Volver al dashboard"
          actionTo={ROUTES.dashboard}
        />
      </ResidentCatalogLayout>
    );
  }

  return (
    <ResidentCatalogLayout>
      <CatalogBreadcrumb items={[{ label: resultLabel }]} />

      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[32px] font-extrabold leading-[40px] tracking-[-0.5px] text-[#0d1c2e]">
            {resultLabel}
          </h1>
          <p className="mt-1 font-['Inter:Regular',sans-serif] text-[15px] leading-[22px] text-[#64748b]">
            {isCategoryLoading
              ? "Cargando servicios..."
              : `(${services.length} resultado${services.length === 1 ? "" : "s"})`}
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <CategorySidebar categories={categories} activeSlug={categorySlug} />

        <div className="space-y-6">
          <ServiceFilters
            sort={sort}
            maxPrice={maxPrice}
            onSortChange={setSort}
            onMaxPriceChange={setMaxPrice}
          />

          {isCategoryLoading ? (
            <ServiceGridSkeleton count={6} />
          ) : services.length === 0 ? (
            <EmptyState
              title="Sin resultados en esta categoría"
              description="No hay servicios que coincidan con los filtros actuales. Ajusta el precio o explora otra categoría."
              actionLabel="Ver otras categorías"
              actionTo={ROUTES.servicesByCategory(DEFAULT_CATEGORY_SLUG)}
            />
          ) : (
            <ServiceGrid services={services} />
          )}
        </div>
      </div>
    </ResidentCatalogLayout>
  );
}
