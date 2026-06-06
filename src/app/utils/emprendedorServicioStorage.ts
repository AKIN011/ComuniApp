import type {
  EmprendedorService,
  ServiceStatus,
} from "../components/emprendedor/emprendedorData";

export type StoredEmprendedorServicio = {
  id: number;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  active: boolean;
  imageUrl: string;
};

const STORAGE_KEY = "comuniapp_emprendedor_last_service";
const OVERRIDES_STORAGE_KEY = "comuniapp_emprendedor_service_overrides";
export const PUBLISHED_SERVICE_ID_PREFIX = "published-";

type ServiceOverride = {
  title?: string;
  description?: string;
  image?: string;
  status?: ServiceStatus;
  deleted?: boolean;
};

function readServiceOverrides(): Record<string, ServiceOverride> {
  try {
    const raw = sessionStorage.getItem(OVERRIDES_STORAGE_KEY);
    if (!raw) return {};

    const overrides = JSON.parse(raw) as Record<string, ServiceOverride>;
    return overrides && typeof overrides === "object" ? overrides : {};
  } catch {
    return {};
  }
}

function writeServiceOverrides(overrides: Record<string, ServiceOverride>): void {
  sessionStorage.setItem(OVERRIDES_STORAGE_KEY, JSON.stringify(overrides));
}

export function saveServiceOverride(
  serviceId: string,
  override: ServiceOverride,
): void {
  const overrides = readServiceOverrides();
  overrides[serviceId] = { ...overrides[serviceId], ...override };
  writeServiceOverrides(overrides);
}

export function removeServiceOverride(serviceId: string): void {
  const overrides = readServiceOverrides();
  delete overrides[serviceId];
  writeServiceOverrides(overrides);
}

function resolveServiceStatus(
  active: boolean,
  originalStatus?: ServiceStatus,
): ServiceStatus {
  if (!active) return "inactivo";
  if (originalStatus === "en_revision") return "en_revision";
  return "activo";
}

export function applyServiceOverride(
  service: EmprendedorService,
): EmprendedorService | null {
  const override = readServiceOverrides()[service.id];
  if (!override) return service;
  if (override.deleted) return null;

  return {
    ...service,
    title: override.title ?? service.title,
    description: override.description ?? service.description,
    image: override.image ?? service.image,
    status: override.status ?? service.status,
  };
}

function collectBaseServices(
  activeServices: EmprendedorService[],
  inactiveServices: EmprendedorService[],
): EmprendedorService[] {
  const merged = mergePublishedServiceWithLists(activeServices, inactiveServices);
  const byId = new Map<string, EmprendedorService>();

  for (const service of [
    ...merged.activeServices,
    ...merged.inactiveServices,
  ]) {
    byId.set(service.id, service);
  }

  return [...byId.values()];
}

export function buildEmprendedorServiceLists(
  activeServices: EmprendedorService[],
  inactiveServices: EmprendedorService[],
): {
  activeServices: EmprendedorService[];
  inactiveServices: EmprendedorService[];
} {
  const services = collectBaseServices(activeServices, inactiveServices)
    .map(applyServiceOverride)
    .filter((service): service is EmprendedorService => service !== null);

  return {
    activeServices: services.filter(
      (service) =>
        service.status === "activo" || service.status === "en_revision",
    ),
    inactiveServices: services.filter(
      (service) => service.status === "inactivo",
    ),
  };
}

export async function saveServiceEdit({
  serviceId,
  title,
  description,
  image,
  active,
  originalStatus,
}: {
  serviceId: string;
  title: string;
  description: string;
  image: string;
  active: boolean;
  originalStatus?: ServiceStatus;
}): Promise<void> {
  const status = resolveServiceStatus(active, originalStatus);

  saveServiceOverride(serviceId, {
    title,
    description,
    image,
    status,
  });

  if (isPublishedServiceId(serviceId)) {
    const stored = getPublishedService();
    if (stored) {
      savePublishedService({
        ...stored,
        title,
        description,
        active,
        imageUrl: image,
      });
    }
  }
}

export function getPublishedServiceId(storedId: number): string {
  return `${PUBLISHED_SERVICE_ID_PREFIX}${storedId}`;
}

export function isPublishedServiceId(id: string): boolean {
  return id.startsWith(PUBLISHED_SERVICE_ID_PREFIX);
}

export function storedToEmprendedorService(
  stored: StoredEmprendedorServicio,
): EmprendedorService {
  return {
    id: getPublishedServiceId(stored.id),
    title: stored.title,
    price: "",
    description: stored.description,
    image: stored.imageUrl,
    status: stored.active ? "activo" : "inactivo",
  };
}

export function mergePublishedServiceWithLists(
  activeServices: EmprendedorService[],
  inactiveServices: EmprendedorService[],
): {
  activeServices: EmprendedorService[];
  inactiveServices: EmprendedorService[];
} {
  const stored = getPublishedService();
  if (!stored) {
    return { activeServices, inactiveServices };
  }

  const published = storedToEmprendedorService(stored);
  const withoutPublished = (list: EmprendedorService[]) =>
    list.filter((service) => service.id !== published.id);

  if (published.status === "activo") {
    return {
      activeServices: [published, ...withoutPublished(activeServices)],
      inactiveServices: withoutPublished(inactiveServices),
    };
  }

  return {
    activeServices: withoutPublished(activeServices),
    inactiveServices: [published, ...withoutPublished(inactiveServices)],
  };
}

export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function savePublishedService(
  service: Omit<StoredEmprendedorServicio, "id"> & { id: number },
) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(service));
}

export function updatePublishedServiceActive(active: boolean) {
  const stored = getPublishedService();
  if (!stored) return;
  savePublishedService({ ...stored, active });
}

export function clearPublishedService() {
  sessionStorage.removeItem(STORAGE_KEY);
}

export function getPublishedService(): StoredEmprendedorServicio | null {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StoredEmprendedorServicio;
  } catch {
    return null;
  }
}
