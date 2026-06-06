import { useEffect, useRef, useState, type RefObject } from "react";
import { Link, useNavigate } from "react-router";
import { User } from "lucide-react";
import { CatalogSearchForm } from "../catalog/CatalogSearchForm";
import { useAuth } from "../../../context/AuthContext";
import { SERVICE_CATEGORIES } from "../../../data/categories";
import { useCatalogSearch } from "../../../hooks/useCatalogSearch";
import { ROUTES } from "../../../routes/paths";

const topNavItems = [
  { label: "Servicios", to: ROUTES.defaultServices },
  { label: "Emprendedores", to: ROUTES.loginEntrepreneur },
] as const;

const categoryMenuItems = [
  { label: "Hogar", type: "hogar" as const },
  { label: "Alimento", type: "comingSoon" as const },
  { label: "Salud y bienestar", type: "comingSoon" as const },
  { label: "Mascotas", type: "comingSoon" as const },
] as const;

const hogarSubcategories = SERVICE_CATEGORIES.map((category) => ({
  label: category.name,
  path: ROUTES.servicesByCategory(category.slug),
}));

const userMenuItems = [
  { label: "Histórico", action: "history" as const },
  { label: "Editar Perfil", action: "profile" as const },
  { label: "Cerrar sesión", action: "logout" as const },
];

function DashboardLogo({ to = ROUTES.dashboard }: { to?: string }) {
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
  const { logout } = useAuth();
  const { query, setQuery, submit } = useCatalogSearch();
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

  const handleCategoryClick = (item: (typeof categoryMenuItems)[number]) => {
    closeCategories();
    if (item.type === "hogar") {
      navigate(ROUTES.defaultServices);
      return;
    }
    navigate(ROUTES.comingSoon(item.label));
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[#e8eef8] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-6 px-8">
        <DashboardLogo />

        <nav className="hidden items-center gap-8 md:flex">
          {topNavItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="font-['Inter:Medium',sans-serif] text-[15px] font-medium leading-[22px] text-[#475569] no-underline transition-colors hover:text-[#2d5bff]"
            >
              {item.label}
            </Link>
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
                        <li key={item.label}>
                          <button
                            type="button"
                            className={`w-full text-center font-['Inter:Regular',sans-serif] text-[15px] leading-[22px] text-[#0d1c2e] transition-colors ${
                              item.type === "hogar" && hogarHovered
                                ? "font-medium text-[#2d5bff]"
                                : "hover:text-[#2d5bff]"
                            }`}
                            onMouseEnter={() => {
                              setHogarHovered(item.type === "hogar");
                            }}
                            onClick={() => handleCategoryClick(item)}
                          >
                            {item.label}
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
                                navigate(sub.path);
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
          <div className="hidden sm:block">
            <CatalogSearchForm
              query={query}
              onQueryChange={setQuery}
              onSubmit={submit}
              size="compact"
              placeholder="Buscar..."
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
                          if (item.action === "logout") {
                            logout();
                            navigate(ROUTES.login, { replace: true });
                          }
                          if (item.action === "profile") {
                            navigate(ROUTES.editProfile);
                          }
                          if (item.action === "history") {
                            navigate(ROUTES.serviceHistory);
                          }
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
