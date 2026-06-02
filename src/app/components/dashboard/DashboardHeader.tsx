import { useEffect, useRef, useState, type RefObject } from "react";
import { Link, useNavigate } from "react-router";
import { Search, User } from "lucide-react";

const navItems = ["Servicios", "Emprendedores"] as const;

const categoryMenuItems = [
  "Hogar",
  "Alimento",
  "Salud y bienestar",
  "Mascotas",
] as const;

const hogarSubcategories = [
  { label: "Electricistas", path: "/categorias/electricistas" },
  { label: "Plomeros", path: null },
  { label: "Cerrajeros", path: null },
  { label: "Limpieza", path: null },
  { label: "Jardinería", path: null },
] as const;

const userMenuItems = [
  { label: "Histórico", action: "history" as const },
  { label: "Editar Perfil", action: "profile" as const },
  { label: "Cerrar sesión", action: "logout" as const },
];

function DashboardLogo({ to = "/dashboard" }: { to?: string }) {
  const content = (
    <span className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[22px] font-extrabold leading-[28px] tracking-[-0.5px]">
      <span className="text-[#2d5bff]">Comuni</span>
      <span className="text-[#22c55e]">App</span>
    </span>
  );

  if (to) {
    return (
      <Link className="inline-block" to={to}>
        {content}
      </Link>
    );
  }

  return content;
}

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

export function DashboardHeader() {
  const navigate = useNavigate();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [hogarHovered, setHogarHovered] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useClickOutside(userMenuRef, () => setUserMenuOpen(false), userMenuOpen);
  useClickOutside(
    categoriesRef,
    () => {
      setCategoriesOpen(false);
      setHogarHovered(false);
    },
    categoriesOpen,
  );

  const closeCategories = () => {
    setCategoriesOpen(false);
    setHogarHovered(false);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[#e8eef8] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-6 px-8">
        <DashboardLogo />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className="font-['Inter:Medium',sans-serif] text-[15px] font-medium leading-[22px] text-[#475569] transition-colors hover:text-[#2d5bff]"
            >
              {item}
            </button>
          ))}

          <div className="relative" ref={categoriesRef}>
            <button
              type="button"
              aria-expanded={categoriesOpen}
              aria-haspopup="true"
              onClick={() => {
                setUserMenuOpen(false);
                setCategoriesOpen((open) => !open);
                if (categoriesOpen) setHogarHovered(false);
              }}
              className={`px-4 py-2 font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold leading-[22px] transition-colors ${
                categoriesOpen
                  ? "border-y border-dashed border-[#2d5bff] bg-[#eef4fc] text-[#0d1c2e]"
                  : "text-[#475569] hover:text-[#2d5bff]"
              }`}
            >
              Categorías
            </button>

            {categoriesOpen && (
              <div className="absolute left-1/2 top-full z-50 -translate-x-1/2">
                <div
                  className="relative flex items-start"
                  onMouseLeave={() => setHogarHovered(false)}
                >
                  <div className="min-w-[220px] rounded-b-[12px] bg-[rgba(220,233,255,0.95)] px-6 py-5 shadow-[0px_12px_24px_0px_rgba(13,28,46,0.12)] backdrop-blur-sm">
                    <ul className="flex flex-col gap-4">
                      {categoryMenuItems.map((item) => (
                        <li key={item}>
                          <button
                            type="button"
                            className={`w-full text-center font-['Inter:Regular',sans-serif] text-[15px] leading-[22px] text-[#0d1c2e] transition-colors ${
                              item === "Hogar" && hogarHovered
                                ? "font-medium text-[#2d5bff]"
                                : "hover:text-[#2d5bff]"
                            }`}
                            onMouseEnter={() => {
                              if (item === "Hogar") setHogarHovered(true);
                              else setHogarHovered(false);
                            }}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {hogarHovered && (
                    <div
                      className="absolute left-full top-0 min-w-[200px] rounded-r-[12px] border-l-2 border-[#2d5bff] bg-[rgba(220,233,255,0.98)] px-6 py-5 shadow-[8px_12px_24px_0px_rgba(13,28,46,0.1)]"
                      onMouseEnter={() => setHogarHovered(true)}
                    >
                      <ul className="flex flex-col gap-4">
                        {hogarSubcategories.map((sub) => (
                          <li key={sub.label}>
                            <button
                              type="button"
                              className="w-full text-left font-['Inter:Regular',sans-serif] text-[15px] leading-[22px] text-[#334155] transition-colors hover:text-[#2d5bff]"
                              onClick={() => {
                                closeCategories();
                                if (sub.path) navigate(sub.path);
                              }}
                            >
                              {sub.label}
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
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search
              aria-hidden
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#94a3b8]"
            />
            <input
              type="search"
              placeholder="Buscar..."
              className="h-[40px] w-[180px] rounded-[9999px] border-none bg-[#eef4fc] pl-9 pr-4 font-['Inter:Regular',sans-serif] text-[14px] text-[#0d1c2e] outline-none placeholder:text-[#94a3b8] focus:ring-2 focus:ring-[#2d5bff]/30 lg:w-[220px]"
            />
          </div>

          <div className="relative" ref={userMenuRef}>
            <button
              type="button"
              aria-expanded={userMenuOpen}
              aria-haspopup="true"
              aria-label="Menú de usuario"
              onClick={() => {
                setCategoriesOpen(false);
                setHogarHovered(false);
                setUserMenuOpen((open) => !open);
              }}
              className={`flex size-10 cursor-pointer items-center justify-center rounded-full transition-colors ${
                userMenuOpen ? "bg-[#dce9ff]" : "bg-[#e2e8f0] hover:bg-[#dce9ff]"
              }`}
            >
              <User className="size-5 text-[#64748b]" strokeWidth={2} />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 min-w-[200px] rounded-[12px] bg-[rgba(220,233,255,0.98)] px-6 py-5 shadow-[0px_12px_24px_0px_rgba(13,28,46,0.12)] backdrop-blur-sm">
                <ul className="flex flex-col gap-4">
                  {userMenuItems.map((item) => (
                    <li key={item.label}>
                      <button
                        type="button"
                        className="w-full text-center font-['Inter:Regular',sans-serif] text-[15px] leading-[22px] text-[#0d1c2e] underline decoration-[#0d1c2e] underline-offset-4 transition-colors hover:text-[#2d5bff] hover:decoration-[#2d5bff]"
                        onClick={() => {
                          setUserMenuOpen(false);
                          if (item.action === "logout") navigate("/login");
                          if (item.action === "profile") navigate("/perfil/editar");
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
