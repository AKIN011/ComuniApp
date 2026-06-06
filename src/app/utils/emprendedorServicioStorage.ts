import type { EmprendedorService } from "../components/emprendedor/emprendedorData";

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
export const PUBLISHED_SERVICE_ID_PREFIX = "published-";

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
