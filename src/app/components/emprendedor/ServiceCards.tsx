import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router";
import {
  ChevronRight,
  Pencil,
  Plus,
  Star,
  TrendingUp,
  X,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ROUTES } from "../../../routes/paths";
import {
  toEditServiceNavigationState,
  type EmprendedorService,
} from "./emprendedorData";

const statusBadge: Record<
  EmprendedorService["status"],
  { label: string; className: string }
> = {
  activo: {
    label: "ACTIVO",
    className: "bg-[#22c55e] text-white",
  },
  en_revision: {
    label: "EN REVISIÓN",
    className: "bg-[#f59e0b] text-white",
  },
  inactivo: {
    label: "INACTIVO",
    className: "bg-[#94a3b8] text-white",
  },
};

function ServiceBadge({ status }: { status: EmprendedorService["status"] }) {
  const { label, className } = statusBadge[status];
  return (
    <span
      className={`absolute left-3 top-3 rounded-[8px] px-2.5 py-1 font-['Inter:Bold',sans-serif] text-[10px] font-bold uppercase tracking-wide ${className}`}
    >
      {label}
    </span>
  );
}

export function GrowBusinessCard({ className = "" }: { className?: string }) {
  return (
    <Link
      to={ROUTES.entrepreneur.crearServicio}
      className={`group flex min-h-[380px] flex-col items-center justify-center rounded-[24px] border-2 border-dashed border-[#c7d7fe] bg-[#f0f4ff] p-8 text-center transition-colors hover:border-[#2d5bff]/40 hover:bg-[#e8eeff] ${className}`}
      aria-label="Crear nuevo servicio"
    >
      <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-[#dbeafe] transition-colors group-hover:bg-[#bfdbfe]">
        <Plus className="size-8 text-[#2d5bff]" strokeWidth={2.5} />
      </div>
      <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] font-bold leading-[26px] text-[#0d1c2e]">
        Haz crecer tu negocio
      </h3>
      <p className="mt-2 max-w-[220px] font-['Inter:Regular',sans-serif] text-[14px] leading-[22px] text-[#64748b]">
        Lanza un nuevo servicio y llega a más miembros de tu comunidad.
      </p>
    </Link>
  );
}

export function DashboardServiceCard({
  service,
}: {
  service: EmprendedorService;
}) {
  const badge = statusBadge[service.status];

  return (
    <article className="flex flex-col overflow-hidden rounded-[24px] bg-white shadow-[0px_4px_24px_rgba(13,28,46,0.06)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <ImageWithFallback
          alt={service.title}
          className="size-full object-cover"
          src={service.image}
        />
        <span
          className={`absolute left-3 top-3 rounded-[8px] px-2.5 py-1 font-['Inter:Bold',sans-serif] text-[10px] font-bold uppercase tracking-wide ${badge.className}`}
        >
          {badge.label}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[16px] font-bold leading-[22px] text-[#0d1c2e]">
            {service.title}
          </h3>
          <span className="shrink-0 font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold text-[#2d5bff]">
            {service.price}
          </span>
        </div>
        <p className="font-['Inter:Regular',sans-serif] text-[13px] leading-[20px] text-[#64748b]">
          {service.description}
        </p>
        <div className="mt-auto flex gap-6 border-t border-[#eef2f8] pt-4">
          <div>
            <p className="font-['Inter:Medium',sans-serif] text-[11px] font-medium uppercase tracking-wide text-[#94a3b8]">
              {service.reservasLabel ?? "Reserva"}
            </p>
            <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#0d1c2e]">
              {service.reservasValue ?? "—"}
            </p>
          </div>
          <div>
            <p className="font-['Inter:Medium',sans-serif] text-[11px] font-medium uppercase tracking-wide text-[#94a3b8]">
              Ingresos
            </p>
            <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#0d1c2e]">
              {service.ingresos ?? "—"}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ListActiveServiceCard({
  service,
  onDeactivate,
}: {
  service: EmprendedorService;
  onDeactivate?: (serviceId: string) => void;
}) {
  const navigate = useNavigate();
  const showDeactivate = service.status === "activo" || service.status === "en_revision";

  return (
    <article className="flex flex-col overflow-hidden rounded-[24px] bg-white shadow-[0px_4px_24px_rgba(13,28,46,0.06)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <ImageWithFallback
          alt={service.title}
          className="size-full object-cover"
          src={service.image}
        />
        <ServiceBadge status={service.status} />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[16px] font-bold leading-[22px] text-[#0d1c2e]">
            {service.title}
          </h3>
          <span className="shrink-0 font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold text-[#2d5bff]">
            {service.price}
          </span>
        </div>
        <p className="font-['Inter:Regular',sans-serif] text-[13px] leading-[20px] text-[#64748b]">
          {service.description}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-2">
          <button
            type="button"
            aria-label="Editar servicio"
            onClick={() =>
              navigate(ROUTES.entrepreneur.editarServicio, {
                state: toEditServiceNavigationState(service),
              })
            }
            className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#64748b] transition-colors hover:border-[#2d5bff]/30 hover:text-[#2d5bff]"
          >
            <Pencil className="size-4" />
          </button>
          {showDeactivate && (
            <button
              type="button"
              onClick={() => onDeactivate?.(service.id)}
              className="flex-1 cursor-pointer rounded-[9999px] bg-[#22c55e] px-4 py-2.5 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-white transition-colors hover:bg-[#16a34a]"
            >
              Desactivar
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export function ListInactiveServiceCard({
  service,
  onActivate,
  onDelete,
}: {
  service: EmprendedorService;
  onActivate?: (serviceId: string) => void;
  onDelete?: (serviceId: string) => void;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[24px] bg-white shadow-[0px_4px_24px_rgba(13,28,46,0.06)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <ImageWithFallback
          alt={service.title}
          className="size-full object-cover"
          src={service.image}
        />
        <ServiceBadge status="inactivo" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[16px] font-bold leading-[22px] text-[#0d1c2e]">
            {service.title}
          </h3>
          <span className="shrink-0 font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold text-[#2d5bff]">
            {service.price}
          </span>
        </div>
        <p className="font-['Inter:Regular',sans-serif] text-[13px] leading-[20px] text-[#64748b]">
          {service.description}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => onActivate?.(service.id)}
            className="flex-1 cursor-pointer rounded-[9999px] bg-[#e0e7ff] px-4 py-2.5 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#4338ca] transition-colors hover:bg-[#c7d2fe]"
          >
            Activar
          </button>
          <button
            type="button"
            onClick={() => onDelete?.(service.id)}
            aria-label="Eliminar servicio"
            className="flex size-11 cursor-pointer items-center justify-center rounded-full bg-[#ef4444] text-white transition-colors hover:bg-[#dc2626]"
          >
            <X className="size-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </article>
  );
}

export function StatCard({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-[24px] bg-white p-6 shadow-[0px_4px_24px_rgba(13,28,46,0.06)]">
      <p className="font-['Inter:Medium',sans-serif] text-[12px] font-medium uppercase tracking-wide text-[#94a3b8]">
        {label}
      </p>
      <p className="mt-2 font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[32px] font-bold leading-[40px] text-[#0d1c2e]">
        {value}
      </p>
      {children}
    </div>
  );
}

export function RatingStars() {
  return (
    <div className="mt-2 flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-4 fill-[#fbbf24] text-[#fbbf24]"
          strokeWidth={0}
        />
      ))}
      <span className="ml-2 font-['Inter:Regular',sans-serif] text-[13px] text-[#64748b]">
        (128 reseñas)
      </span>
    </div>
  );
}

export function QuickActionLink({
  to,
  icon,
  iconBg,
  label,
}: {
  to: string;
  icon: ReactNode;
  iconBg: string;
  label: string;
}) {
  return (
    <Link
      to={to}
      className="flex cursor-pointer items-center gap-4 rounded-[20px] bg-white px-5 py-4 shadow-[0px_2px_8px_rgba(13,28,46,0.04)] transition-all hover:shadow-[0px_4px_16px_rgba(13,28,46,0.08)]"
    >
      <div
        className={`flex size-11 shrink-0 items-center justify-center rounded-[14px] ${iconBg}`}
      >
        {icon}
      </div>
      <span className="flex-1 font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold text-[#0d1c2e]">
        {label}
      </span>
      <ChevronRight className="size-5 shrink-0 text-[#94a3b8]" />
    </Link>
  );
}

export function TrendIndicator() {
  return (
    <p className="mt-2 flex items-center gap-1.5 font-['Inter:Medium',sans-serif] text-[13px] font-medium text-[#22c55e]">
      <TrendingUp className="size-4" />
      +14% Este mes
    </p>
  );
}
