import type { Service, ServiceListFilters, SortOption } from "../../data/types";

export function sortServices(services: Service[], sort: SortOption): Service[] {
  const sorted = [...services];

  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "recommended":
    default:
      return sorted.sort((a, b) => b.reviewCount - a.reviewCount);
  }
}

export function applyServiceFilters(
  services: Service[],
  filters?: ServiceListFilters,
): Service[] {
  if (!filters) return services;

  let result = [...services];

  if (filters.maxPrice !== undefined) {
    result = result.filter((service) => service.price <= filters.maxPrice!);
  }

  if (filters.search?.trim()) {
    const query = filters.search.trim().toLowerCase();
    result = result.filter(
      (service) =>
        service.name.toLowerCase().includes(query) ||
        service.shortDescription.toLowerCase().includes(query) ||
        service.tags.some((tag) => tag.toLowerCase().includes(query)),
    );
  }

  if (filters.sort) {
    result = sortServices(result, filters.sort);
  }

  return result;
}

export function matchesSearchQuery(service: Service, query: string): boolean {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return false;

  return (
    service.name.toLowerCase().includes(normalized) ||
    service.categoryName.toLowerCase().includes(normalized) ||
    service.shortDescription.toLowerCase().includes(normalized) ||
    service.tags.some((tag) => tag.toLowerCase().includes(normalized))
  );
}
