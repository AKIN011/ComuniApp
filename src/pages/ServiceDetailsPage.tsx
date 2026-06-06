import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Briefcase,
  Clock,
  MapPin,
  Star,
} from "lucide-react";
import { DEFAULT_CATEGORY_SLUG } from "../data/catalogConfig";
import type { Service } from "../data/types";
import {
  formatPrice,
  getAvailabilityLabel,
} from "../lib/catalog/formatters";
import { CatalogBreadcrumb } from "../app/components/catalog/CatalogBreadcrumb";
import { EmptyState } from "../app/components/catalog/EmptyState";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";
import { ProviderCard } from "../app/components/catalog/ProviderCard";
import { RelatedServices } from "../app/components/catalog/RelatedServices";
import { ResidentCatalogLayout } from "../app/components/catalog/ResidentCatalogLayout";
import { ServiceDetailSkeleton } from "../app/components/catalog/LoadingSkeleton";
import { ServiceReviews } from "../app/components/catalog/ServiceReviews";
import { fetchServiceDetail } from "../services/catalogService";
import { ROUTES } from "../routes/paths";

export default function ServiceDetailsPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [related, setRelated] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!slug) return;

    let cancelled = false;
    setIsLoading(true);
    setActiveImage(0);

    fetchServiceDetail(slug).then((result) => {
      if (cancelled) return;
      setService(result.service);
      setRelated(result.related);
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (!slug) {
    return (
      <ResidentCatalogLayout>
        <EmptyState
          title="Servicio no especificado"
          description="No se proporcionó un identificador de servicio válido."
        />
      </ResidentCatalogLayout>
    );
  }

  if (isLoading) {
    return (
      <ResidentCatalogLayout>
        <ServiceDetailSkeleton />
      </ResidentCatalogLayout>
    );
  }

  if (!service) {
    return (
      <ResidentCatalogLayout>
        <EmptyState
          title="Servicio no encontrado"
          description="El servicio que buscas no existe o fue removido. Explora otras opciones en el catálogo."
          actionLabel="Explorar servicios"
          actionTo={ROUTES.servicesByCategory(DEFAULT_CATEGORY_SLUG)}
        />
      </ResidentCatalogLayout>
    );
  }

  return (
    <ResidentCatalogLayout>
      <CatalogBreadcrumb
        items={[
          {
            label: service.categoryName,
            to: ROUTES.servicesByCategory(service.categorySlug),
          },
          { label: service.name },
        ]}
      />

      <div className="mb-8 overflow-hidden rounded-[24px] bg-white shadow-[0px_8px_30px_0px_rgba(13,28,46,0.06)]">
        <div className="relative h-[320px] md:h-[420px]">
          <ImageWithFallback
            alt={service.name}
            className="size-full object-cover"
            src={service.images[activeImage]}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto p-4">
          {service.images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`h-20 w-28 shrink-0 overflow-hidden rounded-[12px] border-2 transition-all ${
                activeImage === index
                  ? "border-[#2d5bff]"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <ImageWithFallback
                alt={`${service.name} ${index + 1}`}
                className="size-full object-cover"
                src={image}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-8">
          <section className="rounded-[24px] bg-white p-6 shadow-[0px_8px_30px_0px_rgba(13,28,46,0.06)]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[32px] font-extrabold leading-[40px] tracking-[-0.5px] text-[#0d1c2e]">
                  {service.name}
                </h1>
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  <span className="inline-flex items-center gap-1 font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold text-[#0d1c2e]">
                    <Star className="size-4 fill-[#f59e0b] text-[#f59e0b]" />
                    {service.rating.toFixed(1)} ({service.reviewCount} reseñas)
                  </span>
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[18px] font-semibold text-[#2d5bff]">
                    {formatPrice(service.price, service.priceUnit)}
                  </span>
                </div>
              </div>
              <span className="rounded-[9999px] bg-[#eef4fc] px-4 py-2 font-['Inter:Medium',sans-serif] text-[13px] font-medium text-[#2d5bff]">
                {getAvailabilityLabel(service.availability)}
              </span>
            </div>

            <p className="mt-6 font-['Inter:Regular',sans-serif] text-[16px] leading-[26px] text-[#475569]">
              {service.description}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-[14px] bg-[#f8f9ff] px-4 py-3">
                <MapPin className="size-4 text-[#2d5bff]" />
                <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#475569]">
                  {service.location}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-[14px] bg-[#f8f9ff] px-4 py-3">
                <Briefcase className="size-4 text-[#2d5bff]" />
                <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#475569]">
                  {service.experienceYears} años de experiencia
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-[14px] bg-[#f8f9ff] px-4 py-3">
                <Clock className="size-4 text-[#2d5bff]" />
                <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#475569]">
                  {service.hours}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[9999px] bg-[#eef4fc] px-3 py-1 font-['Inter:Medium',sans-serif] text-[12px] font-medium text-[#475569]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <ServiceReviews
            reviews={service.reviews}
            reviewCount={service.reviewCount}
          />
        </div>

        <ProviderCard service={service} />
      </div>

      <RelatedServices services={related} />
    </ResidentCatalogLayout>
  );
}
