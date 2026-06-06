import { BadgeCheck, MapPin, Phone } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { formatPrice } from "../../../lib/catalog/formatters";
import type { Service } from "../../../data/types";

interface ProviderCardProps {
  service: Service;
}

export function ProviderCard({ service }: ProviderCardProps) {
  const { provider } = service;

  return (
    <aside className="sticky top-24 rounded-[24px] bg-white p-6 shadow-[0px_8px_30px_0px_rgba(13,28,46,0.06)]">
      <div className="flex flex-col items-center text-center">
        <ImageWithFallback
          alt={provider.name}
          className="size-20 rounded-full object-cover"
          src={provider.avatar}
        />
        <h3 className="mt-4 font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] font-bold leading-[28px] text-[#0d1c2e]">
          {provider.name}
        </h3>
        <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#64748b]">
          {provider.role}
        </p>
        {provider.verified && (
          <span className="mt-2 inline-flex items-center gap-1 rounded-[9999px] bg-[#dcfce7] px-3 py-1 font-['Inter:Semi_Bold',sans-serif] text-[12px] font-semibold text-[#15803d]">
            <BadgeCheck className="size-4" />
            Técnico verificado
          </span>
        )}
      </div>

      <div className="mt-6 space-y-3 border-t border-[#e8eef8] pt-6">
        <div className="flex items-start gap-2 text-[#475569]">
          <MapPin className="mt-0.5 size-4 shrink-0" />
          <span className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px]">
            {provider.address}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#475569]">
          <Phone className="size-4 shrink-0" />
          <span className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px]">
            {provider.phone}
          </span>
        </div>
      </div>

      <div className="mt-6 rounded-[16px] bg-[#eef4fc] p-4 text-center">
        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#64748b]">
          Precio desde
        </p>
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[28px] font-bold text-[#2d5bff]">
          {formatPrice(service.price, service.priceUnit)}
        </p>
      </div>

      <a
        href={`tel:${provider.phone.replace(/\s/g, "")}`}
        className="mt-4 flex h-[52px] w-full items-center justify-center rounded-[9999px] bg-[#2d5bff] font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold text-white no-underline transition-all duration-200 hover:bg-[#1a4de8] active:scale-[0.98]"
      >
        ¡Contactar!
      </a>
    </aside>
  );
}
