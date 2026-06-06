import { useEffect, useRef, useState, type RefObject } from "react";
import { Link, useNavigate } from "react-router";
import { ROUTES } from "../routes/paths";
import {
  Check,
  LineChart,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Share2,
  Store,
} from "lucide-react";

const DEFAULT_TAGS = [
  "Planificación urbana",
  "Estrategia de Impacto",
  "Compromiso Comunitario",
  "Energía Renovable",
  "Informes ESG",
  "Certificación B-Corp",
];

const DEFAULT_MISSION =
  "Proporcionar soluciones eléctricas seguras y eficientes para hogares y negocios locales, priorizando la calidad y la satisfacción del cliente en cada proyecto.";

type EditSection =
  | "photo"
  | "header"
  | "mission"
  | "contact"
  | "skills"
  | null;

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

function EditPencilButton({
  active,
  onClick,
  label,
  className = "",
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={`flex size-8 items-center justify-center rounded-full transition-colors ${
        active
          ? "bg-[#dce9ff] text-[#2d5bff]"
          : "text-[#94a3b8] hover:bg-[#eef4fc] hover:text-[#64748b]"
      } ${className}`}
    >
      <Pencil className="size-4" strokeWidth={2} />
    </button>
  );
}

function ProfileUpdateSuccessModal() {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(248,249,255,0.35)] p-6 backdrop-blur-[14px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-update-success-title"
    >
      <div className="w-full max-w-[409px] rounded-[20px] bg-white px-8 py-12 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="mx-auto mb-10 flex size-[99px] items-center justify-center rounded-full bg-[#22c55e]">
          <Check className="size-12 text-white" strokeWidth={3} />
        </div>
        <p
          id="profile-update-success-title"
          className="text-center font-['Inter:Medium',sans-serif] text-[20px] leading-[25px] text-black"
        >
          Sus datos se han actualizado satisfactoriamente
        </p>
        <button
          type="button"
          onClick={() => navigate(ROUTES.entrepreneur.tablero)}
          className="mt-10 flex w-full items-center justify-center rounded-[9999px] bg-gradient-to-r from-[#0040df] to-[#2d5bff] py-4 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-white shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)] transition-opacity hover:opacity-90"
        >
          Ir al tablero
        </button>
      </div>
    </div>
  );
}

function PageFooter() {
  const links = ["Política de privacidad", "Centro de ayuda", "Contáctenos"];

  return (
    <footer className="mt-12 w-full bg-[#eff4ff] px-6 py-12 md:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] font-bold leading-[28px] text-[#0d1c2e]">
            ComuniApp
          </span>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[rgba(13,28,46,0.7)]">
            © 2024 ComuniApp. Cultivando el comercio comunitario.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          {links.map((label) => (
            <button
              key={label}
              type="button"
              className="font-['Inter:Regular',sans-serif] text-[14px] leading-[20px] text-[#475569] transition-colors hover:text-[#2d5bff]"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

function toggleSection(current: EditSection, section: EditSection): EditSection {
  return current === section ? null : section;
}

export default function EmprendedorEditarPerfil() {
  const navigate = useNavigate();
  const photoInputRef = useRef<HTMLInputElement>(null);
  const [storeMenuOpen, setStoreMenuOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<EditSection>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [profilePhoto, setProfilePhoto] = useState(
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80",
  );
  const [verifiedBadge, setVerifiedBadge] = useState("TECNICO VERIFICADO");
  const [name, setName] = useState("Juan Diego Moreno");
  const [profession, setProfession] = useState("Electricista");
  const [mission, setMission] = useState(DEFAULT_MISSION);
  const [email, setEmail] = useState("juandielec@gmail.com");
  const [phone, setPhone] = useState("3008581471");
  const [officeLocation, setOfficeLocation] = useState("CR 35 #12 -10, El Remanso");
  const [whatsapp, setWhatsapp] = useState("wa.link/d5ihkd");
  const [tags, setTags] = useState<string[]>(DEFAULT_TAGS);
  const [newTag, setNewTag] = useState("");

  const handlePhotoChange = (file: File | undefined) => {
    if (!file?.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    setProfilePhoto((prev) => {
      if (prev.startsWith("blob:")) URL.revokeObjectURL(prev);
      return url;
    });
  };

  useEffect(() => {
    return () => {
      if (profilePhoto.startsWith("blob:")) URL.revokeObjectURL(profilePhoto);
    };
  }, [profilePhoto]);

  const handleAddTag = () => {
    const trimmed = newTag.trim();
    if (!trimmed || tags.includes(trimmed)) return;
    setTags((prev) => [...prev, trimmed]);
    setNewTag("");
  };

  const handleRemoveTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const inputClass =
    "w-full rounded-[12px] bg-white px-3 py-2 font-['Inter:Regular',sans-serif] text-[14px] text-[#0d1c2e] outline-none ring-2 ring-[#2d5bff]/30";

  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff]">
      <PageHeader
        menuOpen={storeMenuOpen}
        onToggleMenu={() => setStoreMenuOpen((o) => !o)}
      />

      <main className="mx-auto w-full max-w-[1280px] flex-1 px-6 py-8 md:px-8 md:py-10">
        {/* Perfil superior */}
        <section className="mb-8 flex flex-col gap-8 lg:flex-row">
          <div className="relative shrink-0">
            <div className="size-[220px] overflow-hidden rounded-[24px] bg-[#eef4fc] md:size-[260px]">
              <img
                src={profilePhoto}
                alt={name}
                className="size-full object-cover"
              />
            </div>
            <input
              ref={photoInputRef}
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => {
                handlePhotoChange(e.target.files?.[0]);
                e.target.value = "";
              }}
            />
            <button
              type="button"
              aria-label="Editar foto de perfil"
              aria-pressed={editingSection === "photo"}
              onClick={() => {
                const next = toggleSection(editingSection, "photo");
                setEditingSection(next);
                if (next === "photo") photoInputRef.current?.click();
              }}
              className={`absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full shadow-md transition-colors ${
                editingSection === "photo"
                  ? "bg-[#2d5bff] text-white"
                  : "bg-[#2d5bff] text-white hover:bg-[#0040df]"
              }`}
            >
              <Pencil className="size-4" strokeWidth={2} />
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {editingSection === "header" ? (
                <input
                  type="text"
                  value={verifiedBadge}
                  onChange={(e) => setVerifiedBadge(e.target.value)}
                  className="rounded-full bg-[#dcfce7] px-3 py-1 font-['Inter:Semi_Bold',sans-serif] text-[11px] font-semibold uppercase tracking-wide text-[#15803d] outline-none ring-2 ring-[#2d5bff]/30"
                />
              ) : (
                <span className="rounded-full bg-[#dcfce7] px-3 py-1 font-['Inter:Semi_Bold',sans-serif] text-[11px] font-semibold uppercase tracking-wide text-[#15803d]">
                  {verifiedBadge}
                </span>
              )}
              <EditPencilButton
                active={editingSection === "header"}
                label="Editar nombre y profesión"
                onClick={() =>
                  setEditingSection(toggleSection(editingSection, "header"))
                }
              />
            </div>

            {editingSection === "header" ? (
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`${inputClass} text-[24px] font-bold`}
                />
                <input
                  type="text"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className={`${inputClass} text-[#2d5bff]`}
                />
              </div>
            ) : (
              <>
                <h1 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[32px] font-extrabold leading-[40px] tracking-[-0.5px] text-[#0d1c2e] md:text-[40px]">
                  {name}
                </h1>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[18px] font-semibold text-[#2d5bff]">
                  {profession}
                </p>
              </>
            )}

            <div className="relative rounded-[20px] bg-[#eef4fc] p-5">
              <div className="mb-2 flex items-start justify-between gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[11px] font-semibold uppercase tracking-[0.05em] text-[#94a3b8]">
                  La misión
                </span>
                <EditPencilButton
                  active={editingSection === "mission"}
                  label="Editar la misión"
                  onClick={() =>
                    setEditingSection(toggleSection(editingSection, "mission"))
                  }
                />
              </div>
              {editingSection === "mission" ? (
                <textarea
                  value={mission}
                  onChange={(e) => setMission(e.target.value)}
                  rows={4}
                  className={`${inputClass} resize-y bg-[#f8f9ff]`}
                />
              ) : (
                <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[22px] text-[#475569]">
                  {mission}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setShowSuccessModal(true)}
                className="rounded-[9999px] bg-[#2d5bff] px-8 py-3 font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold text-white shadow-[0px_10px_15px_-3px_rgba(45,91,255,0.35)] transition-opacity hover:opacity-90"
              >
                Guardar cambios
              </button>
              <button
                type="button"
                onClick={() => navigate(ROUTES.entrepreneur.tablero)}
                className="rounded-[9999px] bg-[#dce9ff] px-8 py-3 font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold text-[#0040df] transition-colors hover:bg-[#c5d9f5]"
              >
                Vista previa del perfil
              </button>
            </div>
          </div>
        </section>

        {/* Contacto + estadísticas */}
        <section className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          <div className="relative rounded-[20px] bg-white p-6 shadow-[0px_8px_24px_0px_rgba(13,28,46,0.06)]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] font-bold text-[#0d1c2e]">
                Información de contacto
              </h2>
              <EditPencilButton
                active={editingSection === "contact"}
                label="Editar información de contacto"
                onClick={() =>
                  setEditingSection(toggleSection(editingSection, "contact"))
                }
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <ContactField
                label="Dirección de correo electrónico"
                icon={Mail}
                value={email}
                editing={editingSection === "contact"}
                onChange={setEmail}
              />
              <ContactField
                label="Número de teléfono"
                icon={Phone}
                value={phone}
                editing={editingSection === "contact"}
                onChange={setPhone}
              />
              <ContactField
                label="Ubicación de la oficina"
                icon={MapPin}
                value={officeLocation}
                editing={editingSection === "contact"}
                onChange={setOfficeLocation}
              />
              <ContactField
                label="Link WhatsApp"
                icon={Phone}
                value={whatsapp}
                editing={editingSection === "contact"}
                onChange={setWhatsapp}
              />
            </div>
          </div>

          <div className="flex flex-col rounded-[20px] bg-gradient-to-b from-[#0040df] to-[#2d5bff] p-6 text-white shadow-[0px_8px_24px_0px_rgba(0,64,223,0.25)]">
            <div className="mb-6 flex items-center gap-2">
              <LineChart className="size-5" />
              <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] font-bold">
                Estadísticas de la comunidad
              </h2>
            </div>
            <ul className="mb-8 flex flex-col gap-4">
              {[
                { label: "Servicios listados", value: "14" },
                { label: "Reservas Totales", value: "342" },
                { label: "Calificación de la reseña", value: "4.9★" },
              ].map((stat) => (
                <li
                  key={stat.label}
                  className="flex items-center justify-between border-b border-white/20 pb-3 last:border-0"
                >
                  <span className="font-['Inter:Regular',sans-serif] text-[13px] text-white/80">
                    {stat.label}
                  </span>
                  <span className="font-['Inter:Bold',sans-serif] text-[18px] font-bold">
                    {stat.value}
                  </span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                const profileUrl = `${window.location.origin}${ROUTES.entrepreneur.editarPerfil}`;
                if (navigator.share) {
                  void navigator.share({
                    title: "Mi perfil en ComuniApp",
                    url: profileUrl,
                  });
                } else {
                  void navigator.clipboard.writeText(profileUrl);
                }
              }}
              className="mt-auto flex items-center justify-center gap-2 rounded-[9999px] bg-white/20 py-3 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <Share2 className="size-4" />
              Compartir perfil
            </button>
          </div>
        </section>

        {/* Mapa + experiencia */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          <div className="relative overflow-hidden rounded-[20px] shadow-[0px_8px_24px_0px_rgba(13,28,46,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80"
              alt="Mapa de operación"
              className="h-[220px] w-full object-cover brightness-[0.55] contrast-[1.1] lg:h-full lg:min-h-[240px]"
            />
            <div className="absolute bottom-4 left-4 rounded-[9999px] bg-white px-4 py-2 shadow-md">
              <p className="font-['Inter:Medium',sans-serif] text-[12px] font-medium text-[#0d1c2e]">
                Operando en:{" "}
                <span className="font-semibold">Gran Portland</span>
              </p>
            </div>
          </div>

          <div className="relative rounded-[20px] bg-[#eef4fc] p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[20px] font-bold text-[#0d1c2e]">
                Experiencia y Etiquetas
              </h2>
              <EditPencilButton
                active={editingSection === "skills"}
                label="Editar experiencia y etiquetas"
                onClick={() =>
                  setEditingSection(toggleSection(editingSection, "skills"))
                }
              />
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((tag) =>
                editingSection === "skills" ? (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-[9999px] bg-white px-3 py-1.5 font-['Inter:Medium',sans-serif] text-[13px] text-[#2d5bff]"
                  >
                    <input
                      type="text"
                      value={tag}
                      onChange={(e) => {
                        const val = e.target.value;
                        setTags((prev) =>
                          prev.map((t) => (t === tag ? val : t)),
                        );
                      }}
                      className="w-[140px] bg-transparent outline-none"
                    />
                    <button
                      type="button"
                      aria-label={`Eliminar ${tag}`}
                      onClick={() => handleRemoveTag(tag)}
                      className="text-[#94a3b8] hover:text-[#ef4444]"
                    >
                      ×
                    </button>
                  </span>
                ) : (
                  <span
                    key={tag}
                    className="rounded-[9999px] bg-white px-4 py-2 font-['Inter:Medium',sans-serif] text-[13px] text-[#2d5bff]"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            {editingSection === "skills" ? (
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                  placeholder="Nueva habilidad"
                  className="min-w-[160px] flex-1 rounded-[9999px] border border-dashed border-[#94a3b8] bg-white px-4 py-2 font-['Inter:Regular',sans-serif] text-[13px] outline-none focus:border-[#2d5bff] focus:ring-2 focus:ring-[#2d5bff]/20"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="rounded-[9999px] border border-dashed border-[#94a3b8] bg-transparent px-4 py-2 font-['Inter:Medium',sans-serif] text-[13px] text-[#64748b] transition-colors hover:border-[#2d5bff] hover:text-[#2d5bff]"
                >
                  + Agregar nueva habilidad
                </button>
              </div>
            ) : (
              <button
                type="button"
                disabled
                className="rounded-[9999px] border border-dashed border-[#c5d9f5] bg-transparent px-4 py-2 font-['Inter:Medium',sans-serif] text-[13px] text-[#94a3b8] opacity-60"
              >
                + Agregar nueva habilidad
              </button>
            )}
          </div>
        </section>
      </main>

      <PageFooter />

      {showSuccessModal && <ProfileUpdateSuccessModal />}
    </div>
  );
}

function ContactField({
  label,
  icon: Icon,
  value,
  editing,
  onChange,
}: {
  label: string;
  icon: typeof Mail;
  value: string;
  editing: boolean;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-['Inter:Semi_Bold',sans-serif] text-[10px] font-semibold uppercase tracking-[0.05em] text-[#94a3b8]">
        {label}
      </span>
      <div className="flex items-start gap-2">
        <Icon className="mt-0.5 size-4 shrink-0 text-[#2d5bff]" strokeWidth={2} />
        {editing ? (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-[8px] bg-[#eef4fc] px-2 py-1 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#0d1c2e] outline-none ring-2 ring-[#2d5bff]/30"
          />
        ) : (
          <span className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#0d1c2e]">
            {value}
          </span>
        )}
      </div>
    </div>
  );
}
