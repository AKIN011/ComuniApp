import type { SortOption } from "./types";

export const DEFAULT_CATEGORY_SLUG = "electricians" as const;

export const PRICE_FILTER = {
  min: 30,
  max: 250,
  step: 5,
  defaultMax: 250,
} as const;

export const SORT_OPTIONS: ReadonlyArray<{ value: SortOption; label: string }> = [
  { value: "recommended", label: "Recomendado" },
  { value: "rating", label: "Mejor calificación" },
  { value: "price-asc", label: "Menor precio" },
  { value: "price-desc", label: "Mayor precio" },
] as const;

export const RELATED_SERVICES_LIMIT = 3;

export const FEATURED_SERVICES_LIMIT = 2;
