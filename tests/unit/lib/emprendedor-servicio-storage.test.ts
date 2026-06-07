import { beforeEach, describe, expect, it } from "vitest";

import {
  activeServices,
  inactiveServices,
} from "../../../src/app/components/emprendedor/emprendedorData";
import {
  buildEmprendedorServiceLists,
  clearPublishedService,
  getPublishedService,
  mergePublishedServiceWithLists,
  savePublishedService,
  saveServiceOverride,
} from "../../../src/app/utils/emprendedorServicioStorage";

describe("emprendedorServicioStorage", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("fusiona un servicio publicado en la lista activa", () => {
    savePublishedService({
      id: 4321,
      title: "Servicio publicado test",
      description: "Descripción de prueba",
      category: "hogar",
      subcategory: "",
      active: true,
      imageUrl: "data:image/png;base64,abc",
    });

    const merged = mergePublishedServiceWithLists(
      activeServices,
      inactiveServices,
    );

    expect(
      merged.activeServices.some((service) =>
        service.title.includes("Servicio publicado test"),
      ),
    ).toBe(true);
  });

  it("aplica overrides y excluye servicios eliminados", () => {
    const [service] = activeServices;

    saveServiceOverride(service.id, {
      title: "Título actualizado",
      deleted: false,
    });

    let lists = buildEmprendedorServiceLists(activeServices, inactiveServices);
    expect(
      lists.activeServices.find((item) => item.id === service.id)?.title,
    ).toBe("Título actualizado");

    saveServiceOverride(service.id, { deleted: true });
    lists = buildEmprendedorServiceLists(activeServices, inactiveServices);

    expect(
      lists.activeServices.some((item) => item.id === service.id),
    ).toBe(false);
  });

  it("limpia el servicio publicado del storage", () => {
    savePublishedService({
      id: 9999,
      title: "Temporal",
      description: "Borrar",
      category: "hogar",
      subcategory: "",
      active: true,
      imageUrl: "data:image/png;base64,xyz",
    });

    clearPublishedService();
    expect(getPublishedService()).toBeNull();
  });
});
