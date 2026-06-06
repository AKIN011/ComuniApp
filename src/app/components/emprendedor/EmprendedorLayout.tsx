import { NavLink, Outlet, useNavigate } from "react-router";
import {
  CircleHelp,
  LayoutGrid,
  List,
  Settings,
  UserRound,
} from "lucide-react";
import { ComuniAppLogo } from "../ComuniAppLogo";
import { EmprendedorStoreMenu } from "./EmprendedorStoreMenu";
import { SiteFooterLinks } from "../layout/SiteFooterLinks";
import { ROUTES } from "../../../routes/paths";

const mainNav = [
  {
    to: ROUTES.entrepreneur.tablero,
    label: "Tablero",
    icon: LayoutGrid,
    end: true,
  },
  {
    to: ROUTES.entrepreneur.servicios,
    label: "Listado de servicios",
    icon: List,
    end: true,
  },
  {
    to: ROUTES.entrepreneur.editarPerfil,
    label: "Editar mi perfil",
    icon: UserRound,
    end: true,
  },
] as const;

function SidebarNavItem({
  to,
  label,
  icon: Icon,
  end,
}: {
  to: string;
  label: string;
  icon: typeof LayoutGrid;
  end?: boolean;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-[16px] px-4 py-3 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold transition-colors ${
          isActive
            ? "bg-white text-[#2d5bff] shadow-[0px_2px_8px_rgba(13,28,46,0.06)]"
            : "text-[#475569] hover:bg-white/60 hover:text-[#0d1c2e]"
        }`
      }
    >
      <Icon className="size-5 shrink-0" strokeWidth={2} />
      {label}
    </NavLink>
  );
}

function EmprendedorFooter() {
  return (
    <footer className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-[#e8eeff] px-8 py-6">
      <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#94a3b8]">
        ©ComuniApp 2026
      </p>
      <SiteFooterLinks
        variant="entrepreneur"
        className="gap-6"
        linkClassName="font-['Inter:Regular',sans-serif] text-[13px] text-[#94a3b8] no-underline transition-colors hover:text-[#2d5bff]"
      />
    </footer>
  );
}

export function EmprendedorLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
      <aside className="flex w-[260px] shrink-0 flex-col bg-[#eef4fc] px-4 py-8">
        <nav className="flex flex-col gap-1">
          {mainNav.map((item) => (
            <SidebarNavItem key={item.to} {...item} />
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-1 pt-8">
          <button
            type="button"
            onClick={() => navigate(ROUTES.comingSoon("Configuración"))}
            className="flex items-center gap-3 rounded-[16px] px-4 py-3 font-['Inter:Semi_Bold',sans-serif] text-[11px] font-semibold uppercase tracking-wide text-[#64748b] transition-colors hover:bg-white/60"
          >
            <Settings className="size-4 shrink-0" />
            Configuración
          </button>
          <button
            type="button"
            onClick={() =>
              navigate(ROUTES.help, {
                state: { returnTo: ROUTES.entrepreneur.tablero },
              })
            }
            className="flex items-center gap-3 rounded-[16px] px-4 py-3 font-['Inter:Semi_Bold',sans-serif] text-[11px] font-semibold uppercase tracking-wide text-[#64748b] transition-colors hover:bg-white/60"
          >
            <CircleHelp className="size-4 shrink-0" />
            Centro de ayuda
          </button>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-[#e8eeff] bg-white px-8 py-4">
          <ComuniAppLogo to={ROUTES.entrepreneur.tablero} height={28} />
          <EmprendedorStoreMenu />
        </header>

        <div className="flex flex-1 flex-col px-8 py-8">
          <Outlet />
          <EmprendedorFooter />
        </div>
      </div>
    </div>
  );
}
