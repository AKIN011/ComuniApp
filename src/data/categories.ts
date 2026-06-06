import type { ServiceCategory } from "./types";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "electricians",
    slug: "electricians",
    name: "Electricistas",
    description: "Instalaciones, reparaciones y emergencias eléctricas.",
    icon: "Zap",
  },
  {
    id: "cleaning",
    slug: "cleaning",
    name: "Limpieza",
    description: "Limpieza del hogar, oficinas y servicios especializados.",
    icon: "Sparkles",
  },
  {
    id: "maintenance",
    slug: "maintenance",
    name: "Mantenimiento",
    description: "Mantenimiento preventivo y correctivo para tu hogar.",
    icon: "Wrench",
  },
  {
    id: "plumbing",
    slug: "plumbing",
    name: "Fontanería",
    description: "Plomería, fugas, instalaciones y reparaciones.",
    icon: "Droplets",
  },
  {
    id: "gardening",
    slug: "gardening",
    name: "Jardinería",
    description: "Paisajismo, poda y cuidado de espacios verdes.",
    icon: "Sprout",
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((category) => category.slug === slug);
}
