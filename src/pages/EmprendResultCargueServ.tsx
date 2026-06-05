import { useEffect, useRef, useState, type RefObject } from "react";
import { Link, useNavigate } from "react-router";
import {
  CircleHelp,
  HandHeart,
  LayoutGrid,
  Pencil,
  Plus,
  Settings,
  SquarePen,
  Store,
  X,
} from "lucide-react";
import {
  getPublishedService,
  type StoredEmprendedorServicio,
} from "../app/utils/emprendedorServicioStorage";

type ServiceCard = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
};

const DEFAULT_ACTIVE_SERVICES: ServiceCard[] = [
  {
    id: "default-1",
    title: "Diseño de Jardín Urbano Personalizado",
    description:
      "Transforma tu espacio exterior con paisajismo preciso. Verificado por vecinos durante 5 años.",
    price: "$85/hr",
    image:
      "https://images.unsplash.com/photo-1592419044701-650b9bd90e57?w=800&q=80",
  },
  {
    id: "default-2",
    title: "Jardinería Urbana Profesional",
    description:
      "Mantenimiento, poda y diseño de jardines para hogares y espacios comunitarios.",
    price: "$45/hr",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
];

const DEFAULT_INACTIVE_SERVICES: ServiceCard[] = [
  {
    id: "inactive-1",
    title: "Consultoría de Negocios Verdes",
    description:
      "Asesoría estratégica para emprendimientos sostenibles y de impacto comunitario.",
    price: "$120/hr",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
  },
  {
    id: "inactive-2",
    title: "Planificación Urbana Avanzada",
    description:
      "Diseño de soluciones urbanas integradas para barrios y espacios públicos.",
    price: "$150/hr",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: "inactive-3",
    title: "Informes de Impacto ESG",
    description:
      "Elaboración de reportes ambientales, sociales y de gobernanza para tu negocio.",
    price: "$200/hr",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
];

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
    <span className="flex size-11 items-center justify-center rounded-full bg-[#f5e1c8]">
      <Store className="size-5 text-[#1e3a5f]" strokeWidth={2} />
    </span>
  );
}

function SidebarNav() {
  const items = [
    { label: "Tablero", icon: LayoutGrid, active: false },
    { label: "Listado de servicios", icon: HandHeart, active: true },
    {
      label: "Editar mi perfil",
      icon: SquarePen,
      active: false,
      to: "/emprendedor/editar-perfil",
    },
  ];

  return (
    <aside className="flex w-[252px] shrink-0 flex-col bg-[#f0f4f8] px-5 py-8">
      <Link
        to="/"
        className="mb-10 px-3 font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[22px] font-extrabold leading-[28px] tracking-[-0.5px]"
      >
        <span className="text-[#2d5bff]">Comuni</span>
        <span className="text-[#22c55e]">App</span>
      </Link>

      <nav className="flex flex-col gap-1.5">
        {items.map(({ label, icon: Icon, active, to }) => {
          const className = `flex w-full items-center gap-3 rounded-[14px] px-4 py-3.5 font-['Inter:Medium',sans-serif] text-[14px] leading-[20px] transition-colors ${
            active
              ? "border border-[#e2e8f0] bg-white font-semibold text-[#2d5bff] shadow-[0px_2px_8px_0px_rgba(13,28,46,0.06)]"
              : "text-[#64748b] hover:bg-white/70 hover:text-[#334155]"
          }`;

          const content = (
            <>
              <Icon className="size-[18px] shrink-0" strokeWidth={2} />
              <span>{label}</span>
            </>
          );

          return to ? (
            <Link key={label} to={to} className={className}>
              {content}
            </Link>
          ) : (
            <button key={label} type="button" className={`${className} text-left`}>
              {content}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-[#dce4ef] pt-6">
        <div className="flex flex-col gap-1">
          <button
            type="button"
            className="flex items-center gap-3 rounded-[10px] px-4 py-3 font-['Inter:Medium',sans-serif] text-[11px] uppercase tracking-[0.08em] text-[#94a3b8] transition-colors hover:text-[#64748b]"
          >
            <Settings className="size-4 shrink-0" strokeWidth={2} />
            Configuración
          </button>
          <button
            type="button"
            className="flex items-center gap-3 rounded-[10px] px-4 py-3 font-['Inter:Medium',sans-serif] text-[11px] uppercase tracking-[0.08em] text-[#94a3b8] transition-colors hover:text-[#64748b]"
          >
            <CircleHelp className="size-4 shrink-0" strokeWidth={2} />
            Centro de ayuda
          </button>
        </div>
      </div>
    </aside>
  );
}

function MainHeader({
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
    <header className="flex h-[72px] items-center justify-end px-10 pt-2">
      <div className="relative" ref={menuRef}>
        <button
          type="button"
          aria-expanded={menuOpen}
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
    </header>
  );
}

function ActiveServiceCard({ service }: { service: ServiceCard }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[16px] bg-white shadow-[0px_4px_16px_0px_rgba(13,28,46,0.08)]">
      <div className="relative aspect-[16/10] w-full">
        <img
          src={service.image}
          alt={service.title}
          className="size-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-[6px] bg-[#065f46] px-2.5 py-1 font-['Inter:Bold',sans-serif] text-[10px] font-bold uppercase tracking-[0.06em] text-white">
          Activo
        </span>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-['Inter:Bold',sans-serif] text-[15px] font-bold leading-[20px] text-[#0d1c2e]">
            {service.title}
          </h3>
          {service.price ? (
            <span className="shrink-0 font-['Inter:Bold',sans-serif] text-[15px] font-bold leading-[20px] text-[#2d5bff]">
              {service.price}
            </span>
          ) : null}
        </div>
        <p className="mb-5 line-clamp-2 flex-1 font-['Inter:Regular',sans-serif] text-[12px] leading-[18px] text-[#64748b]">
          {service.description}
        </p>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-label="Editar servicio"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#e2e8f0] bg-white text-[#64748b] transition-colors hover:border-[#cbd5e1] hover:text-[#0d1c2e]"
          >
            <Pencil className="size-3.5" strokeWidth={2} />
          </button>
          <button
            type="button"
            className="flex-1 rounded-[9999px] bg-[#065f46] py-2 font-['Inter:Semi_Bold',sans-serif] text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Desactivar
          </button>
        </div>
      </div>
    </article>
  );
}

function InactiveServiceCard({ service }: { service: ServiceCard }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[16px] bg-white shadow-[0px_4px_16px_0px_rgba(13,28,46,0.08)]">
      <div className="relative aspect-[16/10] w-full">
        <img
          src={service.image}
          alt={service.title}
          className="size-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-['Inter:Bold',sans-serif] text-[15px] font-bold leading-[20px] text-[#0d1c2e]">
            {service.title}
          </h3>
          <span className="shrink-0 font-['Inter:Bold',sans-serif] text-[15px] font-bold leading-[20px] text-[#2d5bff]">
            {service.price}
          </span>
        </div>
        <p className="mb-5 line-clamp-2 flex-1 font-['Inter:Regular',sans-serif] text-[12px] leading-[18px] text-[#64748b]">
          {service.description}
        </p>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            className="flex-1 rounded-[9999px] bg-[#c4c5d9] py-2 font-['Inter:Semi_Bold',sans-serif] text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Activar
          </button>
          <button
            type="button"
            aria-label="Eliminar servicio"
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#ef4444] text-white transition-opacity hover:opacity-90"
          >
            <X className="size-3.5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </article>
  );
}

function AddServiceCard() {
  return (
    <Link
      to="/emprendedor/crear-servicios"
      className="flex min-h-full flex-col items-center justify-center rounded-[16px] border-2 border-dashed border-[#c5d9f5] bg-[#f8fafc] px-6 py-10 text-center transition-colors hover:border-[#94a3b8] hover:bg-[#f1f5f9]"
    >
      <div className="mb-5 flex size-[52px] items-center justify-center rounded-full bg-[#dce9ff]">
        <Plus className="size-6 text-[#2d5bff]" strokeWidth={2.5} />
      </div>
      <h3 className="mb-2 font-['Inter:Bold',sans-serif] text-[15px] font-bold text-[#0d1c2e]">
        Haz crecer tu negocio
      </h3>
      <p className="max-w-[200px] font-['Inter:Regular',sans-serif] text-[12px] leading-[18px] text-[#64748b]">
        Lanza un nuevo servicio y llega a más miembros de tu comunidad.
      </p>
    </Link>
  );
}

function storedToCard(stored: StoredEmprendedorServicio): ServiceCard {
  return {
    id: `published-${stored.id}`,
    title: stored.title,
    description: stored.description,
    price: "",
    image: stored.imageUrl,
  };
}

export default function EmprendResultCargueServ() {
  const [storeMenuOpen, setStoreMenuOpen] = useState(false);
  const [publishedService, setPublishedService] =
    useState<ServiceCard | null>(null);

  useEffect(() => {
    const stored = getPublishedService();
    if (stored) setPublishedService(storedToCard(stored));
  }, []);

  const activeServices = publishedService
    ? [...DEFAULT_ACTIVE_SERVICES, publishedService]
    : DEFAULT_ACTIVE_SERVICES;

  return (
    <div className="flex min-h-screen bg-white">
      <SidebarNav />

      <div className="flex min-w-0 flex-1 flex-col bg-white">
        <MainHeader
          menuOpen={storeMenuOpen}
          onToggleMenu={() => setStoreMenuOpen((o) => !o)}
        />

        <main className="flex-1 px-10 pb-10">
          <div className="mb-8">
            <h1 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[28px] font-extrabold leading-[36px] tracking-[-0.5px] text-[#0d1c2e]">
              Hola, Juan
            </h1>
            <p className="mt-1.5 font-['Inter:Regular',sans-serif] text-[14px] leading-[22px] text-[#64748b]">
              Estos son los servicios que actualmente tienes cargados en la
              plataforma.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] font-bold leading-[26px] text-[#0d1c2e]">
              Todos tus servicios
            </h2>
            <p className="mt-0.5 mb-5 font-['Inter:Regular',sans-serif] text-[13px] leading-[20px] text-[#64748b]">
              Administra y realiza un seguimiento de tus ofertas comunitarias
              activas.
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {activeServices.map((service) => (
                <ActiveServiceCard key={service.id} service={service} />
              ))}
              <AddServiceCard />
            </div>
          </section>

          <section>
            <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[18px] font-bold leading-[26px] text-[#0d1c2e]">
              Servicios Inactivos
            </h2>
            <p className="mt-0.5 mb-5 font-['Inter:Regular',sans-serif] text-[13px] leading-[20px] text-[#64748b]">
              Los servicios inactivos no están publicados.
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {DEFAULT_INACTIVE_SERVICES.map((service) => (
                <InactiveServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-auto border-t border-[#f1f5f9] px-10 py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="font-['Inter:Regular',sans-serif] text-[12px] leading-[18px] text-[#94a3b8]">
              © ComuniApp 2024
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                "Política de privacidad",
                "Términos de servicio",
                "Informe de Sostenibilidad",
              ].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="font-['Inter:Regular',sans-serif] text-[12px] leading-[18px] text-[#94a3b8] transition-colors hover:text-[#64748b]"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
