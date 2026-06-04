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

export function getPublishedService(): StoredEmprendedorServicio | null {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StoredEmprendedorServicio;
  } catch {
    return null;
  }
}
