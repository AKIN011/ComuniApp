import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import { Clock, Megaphone, Plus, Pencil } from "lucide-react";
import {
  DashboardServiceCard,
  GrowBusinessCard,
  QuickActionLink,
  RatingStars,
  StatCard,
  TrendIndicator,
} from "../app/components/emprendedor/ServiceCards";
import {
  activeServices as initialActiveServices,
  getEntrepreneurFirstName,
  inactiveServices as initialInactiveServices,
} from "../app/components/emprendedor/emprendedorData";
import { useAuth } from "../context/AuthContext";
import { buildEmprendedorServiceLists } from "../app/utils/emprendedorServicioStorage";
import { EMPRENDEDOR_ROUTES } from "../lib/emprendedorRoutes";

export default function EmprendedorDashboardPage() {
  const { user } = useAuth();
  const location = useLocation();
  const [refreshToken, setRefreshToken] = useState(0);

  const publishedServices = useMemo(
    () =>
      buildEmprendedorServiceLists(
        initialActiveServices,
        initialInactiveServices,
      ).activeServices,
    [refreshToken],
  );

  useEffect(() => {
    setRefreshToken((token) => token + 1);
  }, [location.key]);

  return (
    <div data-name="EMPRENDEDOR DASHBOARD">
      <div className="mb-8 flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[36px] font-bold leading-[44px] tracking-[-0.8px] text-[#0d1c2e]">
            Hola, {getEntrepreneurFirstName(user)}
          </h1>
          <p className="mt-2 max-w-[640px] font-['Inter:Regular',sans-serif] text-[16px] leading-[26px] text-[#64748b]">
            La presencia de tu mercado comunitario está creciendo. Esto es lo
            que está sucediendo en tu centro hoy.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard label="Vistas totales" value="12,482">
              <TrendIndicator />
            </StatCard>
            <StatCard label="Calificación promedio" value="4.9">
              <RatingStars />
            </StatCard>
            <StatCard label="Contactos" value="28">
              <p className="mt-2 flex items-center gap-1.5 font-['Inter:Medium',sans-serif] text-[13px] font-medium text-[#2d5bff]">
                <Clock className="size-4" />4 nuevo hoy
              </p>
            </StatCard>
          </div>
        </div>

        <aside className="w-full shrink-0 rounded-[24px] bg-[#eef4fc] p-6 xl:w-[340px]">
          <h2 className="mb-4 font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] font-bold text-[#0d1c2e]">
            Acciones rápidas
          </h2>
          <div className="flex flex-col gap-3">
            <QuickActionLink
              to={EMPRENDEDOR_ROUTES.crearServicio}
              icon={<Plus className="size-5 text-[#2d5bff]" strokeWidth={2.5} />}
              iconBg="bg-[#dbeafe]"
              label="Crear nuevo servicio"
            />
            <QuickActionLink
              to={EMPRENDEDOR_ROUTES.servicios}
              icon={
                <Pencil className="size-5 text-[#6366f1]" strokeWidth={2} />
              }
              iconBg="bg-[#eef2ff]"
              label="Ver todos los servicios"
            />
            <QuickActionLink
              to={EMPRENDEDOR_ROUTES.servicios}
              icon={
                <Megaphone className="size-5 text-[#f59e0b]" strokeWidth={2} />
              }
              iconBg="bg-[#ffedd5]"
              label="Activar Servicios"
            />
          </div>
        </aside>
      </div>

      <section>
        <div className="mb-6">
          <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[22px] font-bold text-[#0d1c2e]">
            Tus Servicios Publicados
          </h2>
          <p className="mt-1 font-['Inter:Regular',sans-serif] text-[15px] text-[#64748b]">
            Administra y realiza un seguimiento de tus ofertas comunitarias
            activas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {publishedServices.map((service) => (
            <DashboardServiceCard key={service.id} service={service} />
          ))}
          <GrowBusinessCard />
        </div>

        <p className="mt-6 text-center font-['Inter:Regular',sans-serif] text-[14px] text-[#64748b]">
          ¿Necesitas actualizar una oferta existente?{" "}
          <Link
            to={EMPRENDEDOR_ROUTES.servicios}
            className="font-semibold text-[#2d5bff] hover:text-[#1a4de8]"
          >
            Ver listado completo
          </Link>
        </p>
      </section>
    </div>
  );
}
