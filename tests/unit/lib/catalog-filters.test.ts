import { describe, expect, it } from "vitest";

import { SERVICE_CATALOG } from "../../../src/data/services";
import { applyServiceFilters, sortServices } from "../../../src/lib/catalog/filters";

const cleaningServices = SERVICE_CATALOG.filter(
  (service) => service.categorySlug === "cleaning",
);
const sampleServices = cleaningServices.slice(0, 2);

describe("catalog filters", () => {
  it("ordena por precio ascendente", () => {
    const sorted = sortServices(sampleServices, "price-asc");
    const prices = sorted.map((s) => s.price);
    expect(prices[0]).toBeLessThanOrEqual(prices[1] ?? prices[0]);
  });

  it("filtra por precio máximo y búsqueda", () => {
    const [first] = sampleServices;
    const result = applyServiceFilters(sampleServices, {
      maxPrice: first.price,
      search: first.name.split(" ")[0].toLowerCase(),
    });

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(first.id);
  });

  it("devuelve todos los servicios sin filtros", () => {
    expect(applyServiceFilters(sampleServices)).toHaveLength(2);
  });
});
