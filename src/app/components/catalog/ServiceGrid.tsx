import type { Service } from "../../../data/types";
import { ServiceCard } from "./ServiceCard";

interface ServiceGridProps {
  services: Service[];
  title?: string;
  variant?: "default" | "featured";
  columns?: "default" | "two";
}

export function ServiceGrid({
  services,
  title,
  variant = "default",
  columns = "default",
}: ServiceGridProps) {
  const gridClass =
    columns === "two"
      ? "grid gap-6 md:grid-cols-2"
      : "grid gap-6 sm:grid-cols-2 xl:grid-cols-3";

  return (
    <section className={title ? "mt-12" : undefined}>
      {title && (
        <h2 className="mb-6 font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] font-bold leading-[32px] text-[#0d1c2e]">
          {title}
        </h2>
      )}
      <div className={gridClass}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} variant={variant} />
        ))}
      </div>
    </section>
  );
}
