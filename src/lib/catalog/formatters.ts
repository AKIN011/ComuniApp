import type { AvailabilityStatus, PriceUnit } from "../../data/types";

const AVAILABILITY_META: Record<
  AvailabilityStatus,
  { label: string; className: string }
> = {
  available: { label: "Disponible", className: "bg-[#dcfce7] text-[#15803d]" },
  limited: { label: "Cupos limitados", className: "bg-[#ffedd5] text-[#c2410c]" },
  busy: { label: "Agenda llena", className: "bg-[#fee2e2] text-[#b91c1c]" },
};

export function formatPrice(price: number, unit: PriceUnit): string {
  const unitLabel =
    unit === "hr" ? "/hr" : unit === "visit" ? "/visita" : "";
  return `$${price}${unitLabel}`;
}

export function getAvailabilityLabel(status: AvailabilityStatus): string {
  return AVAILABILITY_META[status].label;
}

export function getAvailabilityStyles(status: AvailabilityStatus): string {
  return AVAILABILITY_META[status].className;
}
