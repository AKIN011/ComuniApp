import { useEffect, useState } from "react";
import { Link } from "react-router";
import { DashboardHeader } from "../app/components/dashboard/DashboardHeader";
import { CatalogSearchForm } from "../app/components/catalog/CatalogSearchForm";
import { ServiceGrid } from "../app/components/catalog/ServiceGrid";
import { SERVICE_CATEGORIES } from "../data/categories";
import { DEFAULT_CATEGORY_SLUG } from "../data/catalogConfig";
import {
  getCategoryIcon,
  getCategoryStyle,
} from "../data/categoryPresentation";
import { DASHBOARD_ACTIVITIES } from "../data/dashboardActivities";
import type { Service } from "../data/types";
import { useCatalogSearch } from "../hooks/useCatalogSearch";
import { fetchFeaturedServices } from "../services/catalogService";
import { ROUTES } from "../routes/paths";
import { SiteFooterLinks } from "../app/components/layout/SiteFooterLinks";
import { ArrowRight, Clock, Heart } from "lucide-react";

function DashboardFooter() {
  return (
    <footer className="mt-12 bg-[#eff4ff] px-8 py-12">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6">
        <div className="flex flex-col gap-3">
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] font-bold leading-[28px] text-[#0d1c2e]">
            ComuniApp
          </span>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[rgba(13,28,46,0.7)]">
            © 2024 ComuniApp. Cultivando el comercio comunitario.
          </p>
        </div>
        <SiteFooterLinks />
      </div>
    </footer>
  );
}

export default function ResidentDashboardPage() {
  const { query, setQuery, submit } = useCatalogSearch();
  const [recommendations, setRecommendations] = useState<Service[]>([]);

  useEffect(() => {
    fetchFeaturedServices().then(setRecommendations);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <DashboardHeader />

      <main className="mx-auto max-w-[1280px] px-8 pb-8 pt-10">
        <section className="mb-10 text-center">
          <h1 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[40px] font-extrabold leading-[48px] tracking-[-0.8px] text-[#0d1c2e] md:text-[48px] md:leading-[56px]">
            Encuentra la ayuda local perfecta hoy.
          </h1>
          <p className="mx-auto mt-3 max-w-[640px] font-['Inter:Regular',sans-serif] text-[17px] leading-[26px] text-[#64748b]">
            Conéctate con vecinos de confianza para servicios adaptados a tu
            hogar y tu vida.
          </p>

          <CatalogSearchForm
            query={query}
            onQueryChange={setQuery}
            onSubmit={submit}
            placeholder="Prueba con 'Electricistas' o 'Limpieza'..."
          />
        </section>

        <section className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {SERVICE_CATEGORIES.map((category) => {
            const Icon = getCategoryIcon(category.slug);
            const style = getCategoryStyle(category.slug);

            return (
              <Link
                key={category.id}
                to={ROUTES.servicesByCategory(category.slug)}
                className="flex flex-col items-center gap-3 rounded-[20px] bg-white px-4 py-6 no-underline shadow-[0px_4px_20px_0px_rgba(13,28,46,0.04)] transition-all duration-200 hover:shadow-[0px_8px_24px_0px_rgba(13,28,46,0.08)] active:scale-[0.98]"
              >
                <div
                  className={`flex size-12 items-center justify-center rounded-[14px] ${style.bg}`}
                >
                  <Icon className={`size-6 ${style.color}`} strokeWidth={2} />
                </div>
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#334155]">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </section>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <section>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] font-bold leading-[32px] text-[#0d1c2e]">
                  Recomendado para ti
                </h2>
                <p className="mt-1 font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#64748b]">
                  Basado en tu actividad comunitaria
                </p>
              </div>
              <Link
                to={ROUTES.servicesByCategory(DEFAULT_CATEGORY_SLUG)}
                className="inline-flex items-center gap-1 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#2d5bff] no-underline transition-colors hover:text-[#1a4de8]"
              >
                Ver todo
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <ServiceGrid
              services={recommendations}
              variant="featured"
              columns="two"
            />
          </section>

          <aside className="flex flex-col gap-6">
            <div className="rounded-[24px] bg-[#eef4fc] p-6">
              <div className="mb-5 flex items-center gap-2">
                <Clock className="size-5 text-[#2d5bff]" />
                <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] font-bold leading-[26px] text-[#0d1c2e]">
                  Actividad Reciente
                </h3>
              </div>
              <ul className="flex flex-col gap-5">
                {DASHBOARD_ACTIVITIES.map((item) => (
                  <li key={item.id} className="flex gap-3">
                    <div
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
                    >
                      <item.icon
                        className={`size-4 ${item.iconColor}`}
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#0d1c2e]">
                        {item.title}
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] text-[13px] leading-[18px] text-[#64748b]">
                        {item.subtitle}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                to={ROUTES.serviceHistory}
                className="mt-6 block w-full rounded-[9999px] border-2 border-[#2d5bff] bg-transparent py-3 text-center font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#2d5bff] no-underline transition-all duration-200 hover:bg-[#2d5bff]/5 active:scale-[0.98]"
              >
                Historial de servicio
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-[24px] bg-[#2d5bff] p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-4 size-32 rounded-full bg-white/10"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-4 right-4 opacity-20"
              >
                <Heart className="size-16 text-white" fill="white" />
              </div>
              <h3 className="relative font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] font-bold leading-[28px] text-white">
                ¿Organizar un servicio?
              </h3>
              <p className="relative mt-2 font-['Inter:Regular',sans-serif] text-[14px] leading-[22px] text-white/90">
                Únete a más de 200 vecinos que ganan ingresos adicionales cada
                semana.
              </p>
              <Link
                to={ROUTES.registerEntrepreneur}
                className="relative mt-5 inline-flex rounded-[9999px] bg-white px-6 py-2.5 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#2d5bff] no-underline transition-all duration-200 hover:bg-[#f0f4ff] active:scale-[0.98]"
              >
                Comenzar
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <DashboardFooter />
    </div>
  );
}
