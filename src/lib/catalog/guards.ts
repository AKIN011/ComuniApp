import { SERVICE_CATEGORIES } from "../../data/categories";
import { SORT_OPTIONS } from "../../data/catalogConfig";
import type { CategorySlug, SortOption } from "../../data/types";

const CATEGORY_SLUGS = new Set(
  SERVICE_CATEGORIES.map((category) => category.slug),
);

const SORT_VALUES = new Set(SORT_OPTIONS.map((option) => option.value));

export function isCategorySlug(value: string): value is CategorySlug {
  return CATEGORY_SLUGS.has(value as CategorySlug);
}

export function isSortOption(value: string): value is SortOption {
  return SORT_VALUES.has(value as SortOption);
}
