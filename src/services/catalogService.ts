import {
  DEFAULT_CATEGORY_SLUG,
  FEATURED_SERVICES_LIMIT,
  RELATED_SERVICES_LIMIT,
} from "../data/catalogConfig";
import { SERVICE_CATEGORIES, getCategoryBySlug } from "../data/categories";
import {
  SERVICE_CATALOG,
  getRelatedServices,
  getServiceBySlug,
  getServicesByCategory,
} from "../data/services";
import type {
  CategoryWithCount,
  Service,
  ServiceListFilters,
} from "../data/types";
import { applyServiceFilters, matchesSearchQuery } from "../lib/catalog/filters";
import { ROUTES } from "../routes/paths";

export type { CategoryWithCount, ServiceListFilters };

export interface ServiceDetailResult {
  service: Service | null;
  related: Service[];
}

let cachedCategories: CategoryWithCount[] | null = null;

function buildCategoriesWithCount(): CategoryWithCount[] {
  return SERVICE_CATEGORIES.map((category) => ({
    ...category,
    serviceCount: getServicesByCategory(category.slug).length,
  }));
}

export async function fetchCategories(): Promise<CategoryWithCount[]> {
  if (!cachedCategories) {
    cachedCategories = buildCategoriesWithCount();
  }
  return cachedCategories;
}

export async function fetchCategory(
  slug: string,
): Promise<CategoryWithCount | null> {
  const category = getCategoryBySlug(slug);
  if (!category) return null;

  return {
    ...category,
    serviceCount: getServicesByCategory(slug).length,
  };
}

export async function fetchServicesByCategory(
  categorySlug: string,
  filters?: ServiceListFilters,
): Promise<Service[]> {
  const services = getServicesByCategory(categorySlug);
  return applyServiceFilters(services, filters);
}

export async function fetchService(slug: string): Promise<Service | null> {
  return getServiceBySlug(slug) ?? null;
}

export async function fetchRelatedServices(
  service: Service,
  limit = RELATED_SERVICES_LIMIT,
): Promise<Service[]> {
  return getRelatedServices(service, limit);
}

export async function fetchServiceDetail(
  slug: string,
): Promise<ServiceDetailResult> {
  const service = getServiceBySlug(slug) ?? null;
  if (!service) {
    return { service: null, related: [] };
  }

  return {
    service,
    related: getRelatedServices(service, RELATED_SERVICES_LIMIT),
  };
}

export async function fetchFeaturedServices(
  limit = FEATURED_SERVICES_LIMIT,
): Promise<Service[]> {
  return [...SERVICE_CATALOG]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

export async function searchServices(query: string): Promise<Service[]> {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return SERVICE_CATALOG.filter((service) =>
    matchesSearchQuery(service, normalized),
  ).slice(0, 12);
}

export function resolveSearchTarget(query: string): string {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return ROUTES.dashboard;

  const categoryMatch = SERVICE_CATEGORIES.find((category) =>
    category.name.toLowerCase().includes(normalized),
  );
  if (categoryMatch) {
    return ROUTES.servicesByCategory(categoryMatch.slug);
  }

  const serviceMatch = SERVICE_CATALOG.find((service) =>
    matchesSearchQuery(service, normalized),
  );
  if (serviceMatch) {
    return ROUTES.serviceDetail(serviceMatch.slug);
  }

  return ROUTES.servicesByCategory(DEFAULT_CATEGORY_SLUG);
}
