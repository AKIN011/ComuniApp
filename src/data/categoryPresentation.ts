import {
  Droplets,
  Sparkles,
  Sprout,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { CategorySlug } from "./types";

export const CATEGORY_ICON_MAP: Record<CategorySlug, LucideIcon> = {
  electricians: Zap,
  cleaning: Sparkles,
  maintenance: Wrench,
  plumbing: Droplets,
  gardening: Sprout,
};

export const CATEGORY_STYLE_MAP: Record<
  CategorySlug,
  { bg: string; color: string }
> = {
  electricians: { bg: "bg-[#eef4fc]", color: "text-[#2d5bff]" },
  cleaning: { bg: "bg-[#ecfdf5]", color: "text-[#10b981]" },
  maintenance: { bg: "bg-[#fff7ed]", color: "text-[#f59e0b]" },
  plumbing: { bg: "bg-[#eef2ff]", color: "text-[#6366f1]" },
  gardening: { bg: "bg-[#fef2f2]", color: "text-[#ef4444]" },
};

export function getCategoryIcon(slug: CategorySlug): LucideIcon {
  return CATEGORY_ICON_MAP[slug];
}

export function getCategoryStyle(slug: CategorySlug) {
  return CATEGORY_STYLE_MAP[slug];
}
