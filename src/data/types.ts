export type PriceUnit = "hr" | "visit" | "service";

export type AvailabilityStatus = "available" | "limited" | "busy";

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Provider {
  id: string;
  name: string;
  avatar: string;
  verified: boolean;
  role: string;
  address: string;
  yearsExperience: number;
  phone: string;
}

export type CategorySlug =
  | "electricians"
  | "cleaning"
  | "maintenance"
  | "plumbing"
  | "gardening";

export interface ServiceCategory {
  id: CategorySlug;
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
}

export interface CategoryWithCount extends ServiceCategory {
  serviceCount: number;
}

export interface ServiceListFilters {
  sort?: SortOption;
  maxPrice?: number;
  search?: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  categorySlug: string;
  categoryName: string;
  description: string;
  shortDescription: string;
  images: string[];
  price: number;
  priceUnit: PriceUnit;
  rating: number;
  reviewCount: number;
  availability: AvailabilityStatus;
  location: string;
  experienceYears: number;
  tags: string[];
  reviews: Review[];
  provider: Provider;
  hours: string;
}

export type SortOption = "recommended" | "price-asc" | "price-desc" | "rating";
