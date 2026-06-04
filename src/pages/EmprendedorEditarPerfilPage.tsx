import { Link } from "react-router";
import { EMPRENDEDOR_ROUTES } from "../lib/emprendedorRoutes";

/**
 * Placeholder para la pantalla "Emprendedor Editar Perfil".
 * Sustituye este componente cuando tengas el diseño/import de Figma listo.
 */
export default function EmprendedorEditarPerfilPage() {
  return (
    <div
      className="mx-auto flex max-w-lg flex-col items-center rounded-[24px] bg-white p-10 text-center shadow-[0px_4px_24px_rgba(13,28,46,0.06)]"
      data-name="EMPRENDEDOR EDITAR PERFIL"
    >
      <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[24px] font-bold text-[#0d1c2e]">
        Editar mi perfil
      </h1>
      <p className="mt-3 font-['Inter:Regular',sans-serif] text-[15px] leading-[24px] text-[#64748b]">
        Esta pantalla está preparada en la ruta{" "}
        <code className="rounded bg-[#eff4ff] px-2 py-0.5 text-[13px] text-[#2d5bff]">
          {EMPRENDEDOR_ROUTES.editarPerfil}
        </code>
        . Integra aquí el flujo &quot;Emprendedor Editar Perfil&quot; cuando lo
        tengas.
      </p>
      <Link
        to={EMPRENDEDOR_ROUTES.tablero}
        className="mt-8 rounded-[9999px] bg-[#2d5bff] px-6 py-3 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-white transition-colors hover:bg-[#1a4de8]"
      >
        Volver al tablero
      </Link>
    </div>
  );
}
