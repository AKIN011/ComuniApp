import type { Service } from "../../../data/types";
import { ServiceGrid } from "./ServiceGrid";

interface RelatedServicesProps {
  services: Service[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <ServiceGrid services={services} title="Servicios relacionados" />
  );
}
