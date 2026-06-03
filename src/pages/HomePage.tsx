import { Link } from "react-router";
import LandingPageGeneral from "../imports/LandingPageGeneral/LandingPageGeneral";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-[#f8f9ff]">
      <div className="w-[1280px] h-[3100px] mx-auto relative bg-white shadow-xl overflow-hidden shrink-0">
        <LandingPageGeneral />
      </div>

      {/* ================================================================== */}
      {/* DEV TEMP — BORRAR ESTE BLOQUE COMPLETO (inicio → fin) para quitar  */}
      {/* los accesos rápidos a páginas emprendedor sin tocar nada más.      */}
      {/* ================================================================== */}
      <div
        data-dev-temp-nav="emprendedor-pages"
        className="mx-auto mt-4 flex w-[1280px] flex-wrap justify-center gap-4 pb-8"
      >
        <Link
          to="/emprendedor/crear-servicios"
          className="rounded-lg border-4 border-dashed border-[#f59e0b] bg-[#fff7ed] px-6 py-3 font-['Inter:Bold',sans-serif] text-[14px] font-bold uppercase tracking-wide text-[#c2410c] shadow-[0_0_0_4px_rgba(245,158,11,0.25)] ring-2 ring-[#fbbf24] transition-transform hover:scale-105"
        >
          ⚠ DEV → Crear servicios (emprendedor)
        </Link>
        <Link
          to="/emprendedor/editar-servicios"
          className="rounded-lg border-4 border-dashed border-[#f59e0b] bg-[#fff7ed] px-6 py-3 font-['Inter:Bold',sans-serif] text-[14px] font-bold uppercase tracking-wide text-[#c2410c] shadow-[0_0_0_4px_rgba(245,158,11,0.25)] ring-2 ring-[#fbbf24] transition-transform hover:scale-105"
        >
          ⚠ DEV → Editar servicios (emprendedor)
        </Link>
      </div>
      {/* ======================== FIN DEV TEMP ============================ */}
    </div>
  );
}
