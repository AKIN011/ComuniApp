import { Link } from "react-router";
import { MapPin, Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  formatPrice,
  getAvailabilityLabel,
  getAvailabilityStyles,
} from "../../../lib/catalog/formatters";
import type { Service } from "../../../data/types";
import { ROUTES } from "../../../routes/paths";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "featured";
}

export function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-[0px_8px_30px_0px_rgba(13,28,46,0.06)] ${
        isFeatured
          ? ""
          : "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_16px_40px_0px_rgba(13,28,46,0.1)]"
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          isFeatured ? "h-[200px]" : "h-[220px]"
        }`}
      >
        <ImageWithFallback
          alt={service.name}
          className={`size-full object-cover ${
            isFeatured
              ? ""
              : "transition-transform duration-500 group-hover:scale-105"
          }`}
          src={service.images[0]}
        />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-[9999px] bg-white px-2.5 py-1 shadow-sm">
          <Star className="size-3.5 fill-[#f59e0b] text-[#f59e0b]" />
          <span className="font-['Inter:Semi_Bold',sans-serif] text-[13px] font-semibold text-[#0d1c2e]">
            {service.rating.toFixed(1)}
          </span>
        </div>
        {!isFeatured && (
          <span
            className={`absolute left-3 top-3 rounded-[8px] px-2.5 py-1 font-['Inter:Bold',sans-serif] text-[10px] font-bold uppercase tracking-wide ${getAvailabilityStyles(service.availability)}`}
          >
            {getAvailabilityLabel(service.availability)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] font-bold leading-[26px] text-[#0d1c2e]">
            {service.name}
          </h3>
          <span className="shrink-0 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold leading-[24px] text-[#2d5bff]">
            {formatPrice(service.price, service.priceUnit)}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 font-['Inter:Regular',sans-serif] text-[14px] leading-[22px] text-[#64748b]">
          {service.shortDescription}
        </p>

        {isFeatured ? (
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="size-8 overflow-hidden rounded-full bg-[#e2e8f0]">
                <ImageWithFallback
                  alt={service.provider.name}
                  className="size-full object-cover"
                  src={service.provider.avatar}
                />
              </div>
              <span className="font-['Inter:Medium',sans-serif] text-[13px] font-medium text-[#475569]">
                {service.provider.name}
              </span>
            </div>
            <Link
              to={ROUTES.serviceDetail(service.slug)}
              className="rounded-[9999px] bg-[#eef4fc] px-3 py-1.5 font-['Inter:Semi_Bold',sans-serif] text-[12px] font-semibold text-[#2d5bff] no-underline transition-colors hover:bg-[#dce9ff]"
            >
              Ver detalles
            </Link>
          </div>
        ) : (
          <>
            <div className="mt-3 flex items-center gap-1.5 text-[#94a3b8]">
              <MapPin className="size-4" />
              <span className="font-['Inter:Regular',sans-serif] text-[13px] leading-[18px]">
                {service.location}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {service.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-[9999px] bg-[#eef4fc] px-2.5 py-1 font-['Inter:Medium',sans-serif] text-[11px] font-medium text-[#475569]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              to={ROUTES.serviceDetail(service.slug)}
              className="mt-5 inline-flex h-[44px] w-full items-center justify-center rounded-[9999px] bg-[#2d5bff] font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-white no-underline transition-all duration-200 hover:bg-[#1a4de8] active:scale-[0.98]"
            >
              Ver detalles
            </Link>
          </>
        )}
      </div>
    </article>
  );
}
