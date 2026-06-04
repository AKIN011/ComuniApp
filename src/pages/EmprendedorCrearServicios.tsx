import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type DragEvent,
  type RefObject,
} from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowLeft,
  Camera,
  Check,
  ChevronDown,
  ImageIcon,
  Lightbulb,
  Store,
} from "lucide-react";
import {
  fileToDataUrl,
  savePublishedService,
} from "../app/utils/emprendedorServicioStorage";

function randomServiceId() {
  return Math.floor(1000 + Math.random() * 9000);
}

const CATEGORIES = [
  { id: "hogar", label: "Hogar" },
  { id: "alimento", label: "Alimento" },
  { id: "salud", label: "Salud y bienestar" },
  { id: "mascotas", label: "Mascotas" },
] as const;

const SALUD_SUBCATEGORIES = [
  "Spa",
  "gimnasios",
  "farmacias",
  "naturistas",
] as const;

const MAX_IMAGES = 10;
const MAX_FILE_SIZE_MB = 10;

function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  handler: () => void,
  enabled: boolean,
) {
  useEffect(() => {
    if (!enabled) return;
    const onPointerDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [ref, handler, enabled]);
}

function StoreIconButton() {
  return (
    <span className="flex size-10 items-center justify-center rounded-full bg-[#f5e1c8]">
      <Store className="size-5 text-[#1e3a5f]" strokeWidth={2} />
    </span>
  );
}

function PageHeader({
  menuOpen,
  onToggleMenu,
}: {
  menuOpen: boolean;
  onToggleMenu: () => void;
}) {
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => {
    if (menuOpen) onToggleMenu();
  }, menuOpen);

  return (
    <header className="sticky top-0 z-30 border-b border-[#e8eef8] bg-[#f8f9ff]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 md:px-8">
        <Link
          to="/"
          className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[22px] font-extrabold leading-[28px] tracking-[-0.5px]"
        >
          <span className="text-[#2d5bff]">Comuni</span>
          <span className="text-[#22c55e]">App</span>
        </Link>

        <div className="relative" ref={menuRef}>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-haspopup="true"
            aria-label="Menú de tienda"
            onClick={onToggleMenu}
            className="cursor-pointer rounded-full transition-opacity hover:opacity-90"
          >
            <StoreIconButton />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 min-w-[180px] rounded-[12px] bg-[#d6e4f8] px-6 py-5 shadow-[0px_12px_24px_0px_rgba(13,28,46,0.12)]">
              <button
                type="button"
                className="w-full text-center font-['Inter:Regular',sans-serif] text-[15px] leading-[22px] text-[#0d1c2e] underline decoration-[#0d1c2e] underline-offset-4 transition-colors hover:text-[#2d5bff] hover:decoration-[#2d5bff]"
                onClick={() => navigate("/")}
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function CategoryDropdown({
  value,
  subcategory,
  onChange,
}: {
  value: string;
  subcategory: string;
  onChange: (category: string, sub: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [saludHovered, setSaludHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    setOpen(false);
    setSaludHovered(false);
  }, open);

  const displayLabel = subcategory
    ? `${value} — ${subcategory}`
    : value || "Seleccionar categoría";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-[9999px] bg-white px-5 py-3 font-['Inter:Regular',sans-serif] text-[14px] text-[#0d1c2e] outline-none transition-shadow hover:shadow-sm focus:ring-2 focus:ring-[#2d5bff]/30"
      >
        <span className={value ? "text-[#0d1c2e]" : "text-[#94a3b8]"}>
          {displayLabel}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-[#64748b] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-40 mt-2">
          <div
            className="relative flex items-start"
            onMouseLeave={() => setSaludHovered(false)}
          >
            <ul
              role="listbox"
              className="min-w-full rounded-[12px] bg-[rgba(220,233,255,0.98)] px-4 py-3 shadow-[0px_12px_24px_0px_rgba(13,28,46,0.12)] backdrop-blur-sm"
            >
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={value === cat.label}
                    className={`w-full rounded-[8px] px-3 py-2.5 text-left font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] transition-colors ${
                      value === cat.label
                        ? "bg-white/60 font-medium text-[#2d5bff]"
                        : "text-[#0d1c2e] hover:bg-white/40 hover:text-[#2d5bff]"
                    } ${cat.id === "salud" && saludHovered ? "text-[#2d5bff]" : ""}`}
                    onMouseEnter={() => {
                      setSaludHovered(cat.id === "salud");
                    }}
                    onClick={() => {
                      onChange(cat.label, "");
                      if (cat.id !== "salud") {
                        setOpen(false);
                        setSaludHovered(false);
                      }
                    }}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>

            {saludHovered && (
              <div
                className="absolute left-full top-0 ml-1 min-w-[160px] rounded-[12px] border-l-2 border-[#2d5bff] bg-[rgba(220,233,255,0.98)] px-4 py-3 shadow-[8px_12px_24px_0px_rgba(13,28,46,0.1)]"
                onMouseEnter={() => setSaludHovered(true)}
              >
                <ul className="flex flex-col gap-1">
                  {SALUD_SUBCATEGORIES.map((sub) => (
                    <li key={sub}>
                      <button
                        type="button"
                        className="w-full rounded-[8px] px-3 py-2 text-left font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#334155] transition-colors hover:bg-white/40 hover:text-[#2d5bff]"
                        onClick={() => {
                          onChange("Salud y bienestar", sub);
                          setOpen(false);
                          setSaludHovered(false);
                        }}
                      >
                        {sub}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ActiveToggle({
  active,
  onChange,
}: {
  active: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={active}
      onClick={() => onChange(!active)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
        active ? "bg-[#22c55e]" : "bg-[#cbd5e1]"
      }`}
    >
      <span
        className={`absolute top-0.5 size-6 rounded-full bg-white shadow-sm transition-transform ${
          active ? "left-[22px]" : "left-0.5"
        }`}
      />
    </button>
  );
}

function PublishSuccessModal({
  serviceId,
  onVerServicios,
}: {
  serviceId: number;
  onVerServicios: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(248,249,255,0.35)] p-6 backdrop-blur-[14px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="publish-success-title"
    >
      <div className="w-full max-w-[409px] rounded-[20px] bg-white px-8 py-12 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="mx-auto mb-10 flex size-[99px] items-center justify-center rounded-full bg-[#22c55e]">
          <Check className="size-12 text-white" strokeWidth={3} />
        </div>
        <p
          id="publish-success-title"
          className="text-center font-['Inter:Medium',sans-serif] text-[20px] leading-[25px] text-black"
        >
          Se ha publicado el servicio correctamente ID {serviceId}
        </p>
        <button
          type="button"
          onClick={onVerServicios}
          className="mt-10 flex w-full items-center justify-center rounded-[9999px] bg-gradient-to-r from-[#0040df] to-[#2d5bff] py-4 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-white shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)] transition-opacity hover:opacity-90"
        >
          Ver servicios
        </button>
      </div>
    </div>
  );
}

function PageFooter() {
  const links = [
    "Política de privacidad",
    "Términos de servicios",
    "Informe de Sostenibilidad",
  ];

  return (
    <footer className="mt-auto w-full border-t border-[#e8eef8] bg-[#f8f9ff] px-6 py-8 md:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4">
        <p className="font-['Inter:Regular',sans-serif] text-[13px] leading-[20px] text-[#94a3b8]">
          © Mercado Unity 2024. El Proyecto de los Comunes Fluid.
        </p>
        <div className="flex flex-wrap gap-6">
          {links.map((label) => (
            <button
              key={label}
              type="button"
              className="font-['Inter:Regular',sans-serif] text-[13px] leading-[20px] text-[#94a3b8] transition-colors hover:text-[#2d5bff]"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function EmprendedorCrearServicios() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [storeMenuOpen, setStoreMenuOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [active, setActive] = useState(true);
  const [images, setImages] = useState<{ file: File; url: string }[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [publishedServiceId, setPublishedServiceId] = useState<number | null>(
    null,
  );

  const addFiles = useCallback((files: FileList | File[]) => {
    const list = Array.from(files).filter(
      (f) =>
        f.type.startsWith("image/") &&
        f.size <= MAX_FILE_SIZE_MB * 1024 * 1024,
    );
    if (list.length === 0) return;

    setImages((prev) => {
      const remaining = MAX_IMAGES - prev.length;
      const toAdd = list.slice(0, remaining).map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      return [...prev, ...toAdd];
    });
  }, []);

  useEffect(() => {
    const urls = images.map((img) => img.url);
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
  };

  const handlePublish = async () => {
    if (!title.trim()) {
      setStatusMessage("Ingresa un título para el servicio.");
      return;
    }
    if (!category) {
      setStatusMessage("Selecciona una categoría.");
      return;
    }
    if (images.length === 0) {
      setStatusMessage("Agrega al menos una imagen del servicio.");
      return;
    }

    const serviceId = randomServiceId();
    const imageUrl = await fileToDataUrl(images[0].file);

    savePublishedService({
      id: serviceId,
      title: title.trim(),
      description: description.trim(),
      category,
      subcategory,
      active,
      imageUrl,
    });

    setStatusMessage(null);
    setPublishedServiceId(serviceId);
    setShowPublishModal(true);
  };

  const handleVerServicios = () => {
    setShowPublishModal(false);
    navigate("/emprendedor/resultado-cargue-serv");
  };

  const handleDraft = () => {
    setStatusMessage(
      title.trim()
        ? `Borrador guardado: "${title.trim()}".`
        : "Borrador guardado sin título.",
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff]">
      <PageHeader
        menuOpen={storeMenuOpen}
        onToggleMenu={() => setStoreMenuOpen((o) => !o)}
      />

      <main className="mx-auto w-full max-w-[1280px] flex-1 px-6 py-8 md:px-8 md:py-10">
        <div className="rounded-[24px] bg-white p-6 shadow-[0px_20px_40px_0px_rgba(13,28,46,0.06)] md:p-10">
          <button
            type="button"
            className="mb-6 inline-flex items-center gap-2 font-['Inter:Medium',sans-serif] text-[14px] font-medium text-[#2d5bff] transition-opacity hover:opacity-80"
          >
            <ArrowLeft className="size-4" />
            De vuelta a los servicios
          </button>

          <div className="mb-8">
            <h1 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[32px] font-extrabold leading-[40px] tracking-[-0.5px] text-[#0d1c2e] md:text-[36px]">
              Crear servicios
            </h1>
            <p className="mt-2 font-['Inter:Regular',sans-serif] text-[15px] leading-[22px] text-[#64748b]">
              Define tu oferta y comienza a conectarte con la comunidad.
            </p>
          </div>

          {statusMessage && (
            <div
              role="status"
              className="mb-6 rounded-[12px] bg-[#eef4fc] px-4 py-3 font-['Inter:Medium',sans-serif] text-[14px] text-[#0d1c2e]"
            >
              {statusMessage}
            </div>
          )}

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
            {/* Columna principal */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="service-title"
                  className="font-['Inter:Semi_Bold',sans-serif] text-[11px] font-semibold uppercase tracking-[0.05em] text-[#94a3b8]"
                >
                  Título del servicio
                </label>
                <input
                  id="service-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Jardinería Urbana Profesional"
                  className="w-full rounded-[16px] bg-[#eef4fc] px-5 py-4 font-['Inter:Regular',sans-serif] text-[15px] text-[#0d1c2e] outline-none placeholder:text-[#94a3b8] focus:ring-2 focus:ring-[#2d5bff]/30"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="service-description"
                  className="font-['Inter:Semi_Bold',sans-serif] text-[11px] font-semibold uppercase tracking-[0.05em] text-[#94a3b8]"
                >
                  Descripción
                </label>
                <textarea
                  id="service-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  placeholder="Describe lo que hace que tu servicio sea único..."
                  className="w-full resize-y rounded-[16px] bg-[#eef4fc] px-5 py-4 font-['Inter:Regular',sans-serif] text-[15px] text-[#0d1c2e] outline-none placeholder:text-[#94a3b8] focus:ring-2 focus:ring-[#2d5bff]/30"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[11px] font-semibold uppercase tracking-[0.05em] text-[#94a3b8]">
                  Galería de servicios
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  multiple
                  className="sr-only"
                  onChange={(e) => {
                    if (e.target.files) addFiles(e.target.files);
                    e.target.value = "";
                  }}
                />
                <div
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      fileInputRef.current?.click();
                    }
                  }}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  className={`flex cursor-pointer flex-col items-center justify-center rounded-[16px] border-2 border-dashed px-6 py-12 transition-colors ${
                    dragOver
                      ? "border-[#2d5bff] bg-[#dce9ff]"
                      : "border-[#c5d9f5] bg-[#eef4fc]"
                  }`}
                >
                  <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-[#dce9ff]">
                    <Camera className="size-7 text-[#2d5bff]" strokeWidth={1.5} />
                  </div>
                  <p className="text-center font-['Inter:Medium',sans-serif] text-[14px] font-medium text-[#0d1c2e]">
                    Haga clic para subir o arrastrar y soltar
                  </p>
                  <p className="mt-1 text-center font-['Inter:Regular',sans-serif] text-[13px] text-[#94a3b8]">
                    PNG de alta resolución, JPG hasta 10 MB
                  </p>
                </div>

                <div className="mt-2 flex flex-wrap gap-3">
                  {Array.from({ length: Math.max(3, images.length) }).map(
                    (_, i) => {
                      const img = images[i];
                      return (
                        <div
                          key={i}
                          className="relative flex size-20 items-center justify-center overflow-hidden rounded-[12px] bg-[#eef4fc]"
                        >
                          {img ? (
                            <>
                              <img
                                src={img.url}
                                alt={`Vista previa ${i + 1}`}
                                className="size-full object-cover"
                              />
                              <button
                                type="button"
                                aria-label={`Eliminar imagen ${i + 1}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setImages((prev) => {
                                    const next = [...prev];
                                    URL.revokeObjectURL(next[i].url);
                                    next.splice(i, 1);
                                    return next;
                                  });
                                }}
                                className="absolute right-1 top-1 flex size-5 items-center justify-center rounded-full bg-[#0d1c2e]/70 text-[10px] text-white"
                              >
                                ×
                              </button>
                            </>
                          ) : (
                            <ImageIcon className="size-6 text-[#c5d9f5]" />
                          )}
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5">
              <div className="rounded-[20px] bg-[#eef4fc] p-5">
                <label className="mb-2 block font-['Inter:Semi_Bold',sans-serif] text-[11px] font-semibold uppercase tracking-[0.05em] text-[#94a3b8]">
                  Categoría
                </label>
                <CategoryDropdown
                  value={category}
                  subcategory={subcategory}
                  onChange={(cat, sub) => {
                    setCategory(cat);
                    setSubcategory(sub);
                  }}
                />

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#dce9ff] pt-5">
                  <div>
                    <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#0d1c2e]">
                      Estado activo
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#64748b]">
                      Visible para la comunidad
                    </p>
                  </div>
                  <ActiveToggle active={active} onChange={setActive} />
                </div>
              </div>

              <div className="rounded-[20px] bg-[#fce8d5] p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Lightbulb className="size-5 text-[#ea580c]" />
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#0d1c2e]">
                    Consejo Profesional
                  </h3>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] leading-[20px] text-[#475569]">
                  Los anuncios con al menos 3 imágenes de alta calidad y una
                  descripción detallada tienen un 40% más de tasas de
                  interacción en nuestro mercado.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handlePublish}
                  className="w-full rounded-[9999px] bg-[#2d5bff] py-4 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-white shadow-[0px_10px_15px_-3px_rgba(45,91,255,0.35)] transition-opacity hover:opacity-90"
                >
                  Publicar
                </button>
                <button
                  type="button"
                  onClick={handleDraft}
                  className="w-full rounded-[9999px] bg-[#dce9ff] py-4 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-[#0040df] transition-colors hover:bg-[#c5d9f5]"
                >
                  Guardar como borrador
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <PageFooter />

      {showPublishModal && publishedServiceId !== null && (
        <PublishSuccessModal
          serviceId={publishedServiceId}
          onVerServicios={handleVerServicios}
        />
      )}
    </div>
  );
}
