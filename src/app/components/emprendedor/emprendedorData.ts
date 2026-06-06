import type { SessionUser } from "../../../lib/auth/types";

export type ServiceStatus = "activo" | "en_revision" | "inactivo";

export type EmprendedorService = {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  status: ServiceStatus;
  reservasLabel?: string;
  reservasValue?: string;
  ingresos?: string;
};

export type EditServiceNavigationState = {
  serviceId: string;
  title: string;
  description: string;
  image: string;
  status: EmprendedorService["status"];
  price?: string;
};

export function toEditServiceNavigationState(
  service: EmprendedorService,
): EditServiceNavigationState {
  return {
    serviceId: service.id,
    title: service.title,
    description: service.description,
    image: service.image,
    status: service.status,
    price: service.price,
  };
}

export function getEntrepreneurFirstName(user: SessionUser | null): string {
  if (!user) return "Emprendedor";

  const firstName = user.firstName?.trim();
  if (firstName) return firstName;

  const namePart = user.name.trim().split(/\s+/)[0];
  return namePart || "Emprendedor";
}

const reparacionPlacasService: EmprendedorService = {
  id: "reparacion-placas",
  title: "Reparación Avanzada de Placas Lógicas",
  price: "$120/ea",
  description:
    "Diagnóstico y reparación de placas lógicas para equipos de consumo y pequeños negocios.",
  image:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
  status: "en_revision",
  reservasLabel: "Reservas",
  reservasValue: "0 Paused",
  ingresos: "$0",
};

export const activeServices: EmprendedorService[] = [
  {
    id: "jardin-urbano",
    title: "Diseño de Jardín Urbano Personalizado",
    price: "$85/hr",
    description:
      "Transforma tu espacio exterior con paisajismo preciso. Verificado por vecinos durante 5 años.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    status: "activo",
    reservasLabel: "Reserva",
    reservasValue: "12 Esta semana",
    ingresos: "$1,020",
  },
  reparacionPlacasService,
];

export const dashboardPublishedServices: EmprendedorService[] = activeServices;

export const inactiveServices: EmprendedorService[] = [
  {
    id: "jardin-inactivo",
    title: "Diseño de Jardín Urbano Personalizado",
    price: "$85/hr",
    description:
      "Transforma tu espacio exterior con paisajismo preciso. Verificado por vecinos durante 5 años.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    status: "inactivo",
  },
];
