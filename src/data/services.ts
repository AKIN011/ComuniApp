import { SERVICE_CATEGORIES } from "./categories";
import {
  getImagesForCategory,
  getProviderAvatar,
  getReviewerAvatar,
} from "./serviceImages";
import type {
  AvailabilityStatus,
  PriceUnit,
  Review,
  Service,
} from "./types";

const LOCATIONS = [
  "El Remanso",
  "La Floresta",
  "Centro Histórico",
  "Villa del Río",
  "Los Almendros",
  "San Patricio",
  "Altos del Parque",
  "Ciudad Jardín",
];

const PROVIDER_NAMES = [
  "Juan Diego Moreno",
  "María Fernanda López",
  "Carlos Andrés Ruiz",
  "Laura Patricia Gómez",
  "Diego Alejandro Vargas",
  "Sofía Elena Martínez",
  "Ricardo Esteban Herrera",
  "Valentina Morales",
];

const REVIEW_COMMENTS = [
  "Excelente servicio, muy puntual y profesional. Lo recomiendo totalmente.",
  "Resolvió el problema rápidamente y explicó cada paso con claridad.",
  "Muy amable y cuidadoso con el espacio. Volvería a contratar sin dudarlo.",
  "Buen precio y trabajo de calidad. Mi vecindario lo recomienda.",
  "Atención impecable y resultados visibles desde la primera visita.",
];

interface ServiceTemplate {
  name: string;
  slug: string;
  shortDescription: string;
  tags: string[];
  price: number;
  priceUnit: PriceUnit;
}

const TEMPLATES: Record<string, ServiceTemplate[]> = {
  electricians: [
    {
      name: "Electricista especializado 24/7",
      slug: "electrician-specialized-24-7",
      shortDescription: "Emergencias eléctricas y reparaciones urgentes.",
      tags: ["24/7", "Emergencias", "Residencial"],
      price: 65,
      priceUnit: "hr",
    },
    {
      name: "Instalación eléctrica residencial",
      slug: "residential-electrical-installation",
      shortDescription: "Cableado, tableros y puntos de energía.",
      tags: ["Instalación", "Seguridad", "Certificado"],
      price: 90,
      priceUnit: "hr",
    },
    {
      name: "Especialista en cableado eléctrico",
      slug: "electrical-wiring-specialist",
      shortDescription: "Diagnóstico y modernización de circuitos.",
      tags: ["Cableado", "Diagnóstico", "Hogar"],
      price: 120,
      priceUnit: "visit",
    },
    {
      name: "Reparación de cortocircuitos",
      slug: "short-circuit-repair",
      shortDescription: "Solución rápida de fallas eléctricas.",
      tags: ["Reparación", "Urgente"],
      price: 55,
      priceUnit: "hr",
    },
    {
      name: "Instalación de luminarias LED",
      slug: "led-lighting-installation",
      shortDescription: "Iluminación eficiente para interiores y exteriores.",
      tags: ["LED", "Ahorro energético"],
      price: 75,
      priceUnit: "hr",
    },
    {
      name: "Mantenimiento de tableros eléctricos",
      slug: "electrical-panel-maintenance",
      shortDescription: "Revisión preventiva y actualización de breakers.",
      tags: ["Preventivo", "Seguridad"],
      price: 110,
      priceUnit: "visit",
    },
    {
      name: "Electricista para remodelaciones",
      slug: "remodeling-electrician",
      shortDescription: "Adecuaciones eléctricas en obras menores.",
      tags: ["Remodelación", "Hogar"],
      price: 85,
      priceUnit: "hr",
    },
    {
      name: "Certificación de instalaciones",
      slug: "electrical-certification",
      shortDescription: "Inspección y certificación de normas RETIE.",
      tags: ["Certificación", "Normativa"],
      price: 150,
      priceUnit: "visit",
    },
  ],
  cleaning: [
    {
      name: "Limpieza profunda del hogar",
      slug: "deep-home-cleaning",
      shortDescription: "Limpieza integral de todas las áreas.",
      tags: ["Profunda", "Hogar"],
      price: 45,
      priceUnit: "hr",
    },
    {
      name: "Limpieza post-obra",
      slug: "post-construction-cleaning",
      shortDescription: "Retiro de polvo y residuos de construcción.",
      tags: ["Post-obra", "Detallado"],
      price: 60,
      priceUnit: "hr",
    },
    {
      name: "Limpieza de ventanas y fachadas",
      slug: "window-facade-cleaning",
      shortDescription: "Cristales y superficies exteriores impecables.",
      tags: ["Ventanas", "Exterior"],
      price: 40,
      priceUnit: "hr",
    },
    {
      name: "Desinfección y sanitización",
      slug: "disinfection-sanitization",
      shortDescription: "Tratamiento antibacterial para espacios.",
      tags: ["Desinfección", "Salud"],
      price: 55,
      priceUnit: "visit",
    },
    {
      name: "Limpieza de oficinas",
      slug: "office-cleaning",
      shortDescription: "Mantenimiento semanal de espacios corporativos.",
      tags: ["Oficinas", "Recurrente"],
      price: 50,
      priceUnit: "hr",
    },
    {
      name: "Lavado de alfombras y tapetes",
      slug: "carpet-upholstery-cleaning",
      shortDescription: "Extracción de manchas y olores.",
      tags: ["Alfombras", "Tapicería"],
      price: 70,
      priceUnit: "service",
    },
    {
      name: "Organización y limpieza express",
      slug: "express-home-organization",
      shortDescription: "Sesión rápida de orden y limpieza.",
      tags: ["Express", "Organización"],
      price: 35,
      priceUnit: "hr",
    },
    {
      name: "Limpieza ecológica",
      slug: "eco-friendly-cleaning",
      shortDescription: "Productos biodegradables y seguros.",
      tags: ["Ecológico", "Sustentable"],
      price: 48,
      priceUnit: "hr",
    },
  ],
  maintenance: [
    {
      name: "Mantenimiento general del hogar",
      slug: "general-home-maintenance",
      shortDescription: "Reparaciones menores y ajustes varios.",
      tags: ["General", "Hogar"],
      price: 50,
      priceUnit: "hr",
    },
    {
      name: "Mantenimiento de puertas y ventanas",
      slug: "doors-windows-maintenance",
      shortDescription: "Ajuste de bisagras, cerraduras y sellos.",
      tags: ["Puertas", "Ventanas"],
      price: 45,
      priceUnit: "hr",
    },
    {
      name: "Pintura y retoques",
      slug: "painting-touch-ups",
      shortDescription: "Retoque de paredes y acabados.",
      tags: ["Pintura", "Acabados"],
      price: 40,
      priceUnit: "hr",
    },
    {
      name: "Mantenimiento de techos",
      slug: "roof-maintenance",
      shortDescription: "Revisión de goteras e impermeabilización.",
      tags: ["Techos", "Impermeabilización"],
      price: 80,
      priceUnit: "visit",
    },
    {
      name: "Instalación de repisas y muebles",
      slug: "shelf-furniture-installation",
      shortDescription: "Montaje seguro de elementos en pared.",
      tags: ["Montaje", "Hogar"],
      price: 55,
      priceUnit: "hr",
    },
    {
      name: "Mantenimiento preventivo mensual",
      slug: "monthly-preventive-maintenance",
      shortDescription: "Plan recurrente de revisión del hogar.",
      tags: ["Preventivo", "Mensual"],
      price: 120,
      priceUnit: "service",
    },
    {
      name: "Reparación de drywall",
      slug: "drywall-repair",
      shortDescription: "Parcheo y acabado de paredes dañadas.",
      tags: ["Drywall", "Reparación"],
      price: 60,
      priceUnit: "hr",
    },
    {
      name: "Mantenimiento de garajes",
      slug: "garage-maintenance",
      shortDescription: "Organización y reparaciones en garaje.",
      tags: ["Garaje", "Organización"],
      price: 48,
      priceUnit: "hr",
    },
  ],
  plumbing: [
    {
      name: "Plomería de emergencia 24h",
      slug: "emergency-plumbing-24h",
      shortDescription: "Atención urgente de fugas y obstrucciones.",
      tags: ["24h", "Emergencia"],
      price: 70,
      priceUnit: "hr",
    },
    {
      name: "Destape de cañerías",
      slug: "pipe-unclogging",
      shortDescription: "Eliminación de bloqueos en tuberías.",
      tags: ["Destape", "Cañerías"],
      price: 55,
      priceUnit: "visit",
    },
    {
      name: "Instalación de sanitarios",
      slug: "toilet-installation",
      shortDescription: "Montaje y conexión de sanitarios nuevos.",
      tags: ["Sanitarios", "Instalación"],
      price: 90,
      priceUnit: "service",
    },
    {
      name: "Reparación de grifería",
      slug: "faucet-repair",
      shortDescription: "Cambio de empaques y llaves de paso.",
      tags: ["Grifería", "Reparación"],
      price: 45,
      priceUnit: "hr",
    },
    {
      name: "Detección de fugas ocultas",
      slug: "hidden-leak-detection",
      shortDescription: "Diagnóstico con equipos especializados.",
      tags: ["Fugas", "Diagnóstico"],
      price: 100,
      priceUnit: "visit",
    },
    {
      name: "Instalación de calentadores",
      slug: "water-heater-installation",
      shortDescription: "Montaje y prueba de calentadores.",
      tags: ["Calentadores", "Instalación"],
      price: 110,
      priceUnit: "service",
    },
    {
      name: "Mantenimiento de tuberías",
      slug: "pipe-maintenance",
      shortDescription: "Revisión preventiva del sistema hidráulico.",
      tags: ["Preventivo", "Tuberías"],
      price: 65,
      priceUnit: "hr",
    },
    {
      name: "Plomería para cocinas",
      slug: "kitchen-plumbing",
      shortDescription: "Instalación de lavaplatos y conexiones.",
      tags: ["Cocina", "Instalación"],
      price: 75,
      priceUnit: "hr",
    },
  ],
  gardening: [
    {
      name: "Recorte de setos experto",
      slug: "expert-hedge-trimming",
      shortDescription: "Poda y diseño de setos y arbustos.",
      tags: ["Poda", "Diseño"],
      price: 45,
      priceUnit: "hr",
    },
    {
      name: "Mantenimiento de jardines",
      slug: "garden-maintenance",
      shortDescription: "Cuidado semanal de zonas verdes.",
      tags: ["Jardín", "Recurrente"],
      price: 40,
      priceUnit: "hr",
    },
    {
      name: "Diseño paisajístico",
      slug: "landscape-design",
      shortDescription: "Planificación y renovación de exteriores.",
      tags: ["Paisajismo", "Diseño"],
      price: 80,
      priceUnit: "visit",
    },
    {
      name: "Instalación de césped",
      slug: "lawn-installation",
      shortDescription: "Siembra o colocación de césped natural.",
      tags: ["Césped", "Instalación"],
      price: 65,
      priceUnit: "service",
    },
    {
      name: "Control de plagas en jardín",
      slug: "garden-pest-control",
      shortDescription: "Tratamiento ecológico de plagas.",
      tags: ["Plagas", "Ecológico"],
      price: 55,
      priceUnit: "visit",
    },
    {
      name: "Riego automático",
      slug: "automatic-irrigation",
      shortDescription: "Instalación de sistemas de riego.",
      tags: ["Riego", "Automatización"],
      price: 90,
      priceUnit: "service",
    },
    {
      name: "Poda de árboles",
      slug: "tree-pruning",
      shortDescription: "Poda segura de árboles medianos.",
      tags: ["Árboles", "Poda"],
      price: 70,
      priceUnit: "hr",
    },
    {
      name: "Jardinería en terrazas",
      slug: "terrace-gardening",
      shortDescription: "Huertos y plantas para balcones.",
      tags: ["Terraza", "Huerto"],
      price: 50,
      priceUnit: "hr",
    },
  ],
};

function buildReviews(serviceIndex: number): Review[] {
  return Array.from({ length: 3 }, (_, reviewIndex) => ({
    id: `review-${serviceIndex}-${reviewIndex}`,
    author: `Vecino ${reviewIndex + 1}`,
    avatar: getReviewerAvatar(serviceIndex + reviewIndex),
    rating: 4 + ((serviceIndex + reviewIndex) % 2) * 0.5,
    comment: REVIEW_COMMENTS[(serviceIndex + reviewIndex) % REVIEW_COMMENTS.length],
    date: `${reviewIndex + 1} semana${reviewIndex > 0 ? "s" : ""} atrás`,
  }));
}

function buildService(
  categoryId: string,
  categorySlug: string,
  categoryName: string,
  template: ServiceTemplate,
  index: number,
): Service {
  const availability: AvailabilityStatus[] = ["available", "limited", "busy"];
  const rating = 4.5 + (index % 5) * 0.1;
  const reviewCount = 24 + index * 13;
  const providerName = PROVIDER_NAMES[index % PROVIDER_NAMES.length];

  return {
    id: `${categorySlug}-${index + 1}`,
    slug: template.slug,
    name: template.name,
    categoryId,
    categorySlug,
    categoryName,
    shortDescription: template.shortDescription,
    description: `${template.shortDescription} Servicio verificado por la comunidad ComuniApp con más de ${3 + (index % 5)} años de experiencia en ${categoryName.toLowerCase()}. Atención personalizada, materiales de calidad y garantía en cada trabajo realizado en tu vecindario.`,
    images: getImagesForCategory(categorySlug, index),
    price: template.price,
    priceUnit: template.priceUnit,
    rating: Math.min(rating, 5),
    reviewCount,
    availability: availability[index % availability.length],
    location: LOCATIONS[index % LOCATIONS.length],
    experienceYears: 3 + (index % 12),
    tags: template.tags,
    hours: index % 2 === 0 ? "Lun - Sáb: 7:00 - 20:00" : "24/7 Disponible",
    reviews: buildReviews(index),
    provider: {
      id: `provider-${categorySlug}-${index}`,
      name: providerName,
      avatar: getProviderAvatar(index),
      verified: index % 3 !== 2,
      role: `Especialista en ${categoryName}`,
      address: `CR ${35 + index} #${12 + index} - ${10 + index}, ${LOCATIONS[index % LOCATIONS.length]}`,
      yearsExperience: 3 + (index % 10),
      phone: `+57 300 ${500 + index * 11} ${6000 + index * 7}`,
    },
  };
}

function generateCatalog(): Service[] {
  const services: Service[] = [];

  for (const category of SERVICE_CATEGORIES) {
    const templates = TEMPLATES[category.slug] ?? [];

    templates.forEach((template, index) => {
      services.push(
        buildService(
          category.id,
          category.slug,
          category.name,
          template,
          index,
        ),
      );
    });
  }

  return services;
}

export const SERVICE_CATALOG: Service[] = generateCatalog();

const servicesByCategory = new Map<string, Service[]>();
const servicesBySlug = new Map<string, Service>();

for (const service of SERVICE_CATALOG) {
  servicesBySlug.set(service.slug, service);

  const categoryServices = servicesByCategory.get(service.categorySlug) ?? [];
  categoryServices.push(service);
  servicesByCategory.set(service.categorySlug, categoryServices);
}

export function getServicesByCategory(categorySlug: string): Service[] {
  return servicesByCategory.get(categorySlug) ?? [];
}

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesBySlug.get(slug);
}

export function getRelatedServices(
  service: Service,
  limit = 3,
): Service[] {
  return getServicesByCategory(service.categorySlug)
    .filter((item) => item.id !== service.id)
    .slice(0, limit);
}
