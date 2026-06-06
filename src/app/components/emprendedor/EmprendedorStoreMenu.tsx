import { useEffect, useRef, useState, type RefObject } from "react";
import { useNavigate } from "react-router";
import { Store } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
import { ROUTES } from "../../../routes/paths";

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

export function EmprendedorStoreMenu() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setMenuOpen(false), menuOpen);

  const handleLogout = () => {
    setMenuOpen(false);
    logout();
    navigate(ROUTES.home, { replace: true });
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        aria-expanded={menuOpen}
        aria-haspopup="true"
        aria-label="Menú de tienda"
        onClick={() => setMenuOpen((open) => !open)}
        className="cursor-pointer rounded-full transition-opacity hover:opacity-90"
      >
        <StoreIconButton />
      </button>

      {menuOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[180px] rounded-[12px] bg-[#d6e4f8] px-6 py-5 shadow-[0px_12px_24px_0px_rgba(13,28,46,0.12)]">
          <button
            type="button"
            className="w-full text-center font-['Inter:Regular',sans-serif] text-[15px] leading-[22px] text-[#0d1c2e] underline decoration-[#0d1c2e] underline-offset-4 transition-colors hover:text-[#2d5bff] hover:decoration-[#2d5bff]"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}
