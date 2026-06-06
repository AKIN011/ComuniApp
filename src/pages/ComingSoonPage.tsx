import { Link, useSearchParams } from "react-router";
import { ROUTES } from "../routes/paths";

export default function ComingSoonPage() {
  const [params] = useSearchParams();
  const category = params.get("categoria") ?? "esta categoría";

  return (
    <div className="min-h-screen bg-[#f8f9ff] px-8 py-16">
      <div className="mx-auto max-w-[560px] rounded-[24px] bg-white p-10 text-center shadow-[0px_8px_30px_0px_rgba(13,28,46,0.06)]">
        <h1 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] text-[28px] font-extrabold text-[#0d1c2e]">
          Próximamente
        </h1>
        <p className="mt-4 font-['Inter:Regular',sans-serif] text-[16px] leading-[26px] text-[#64748b]">
          Los servicios de <strong>{category}</strong> estarán disponibles pronto.
          Mientras tanto, explora las categorías de Hogar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to={ROUTES.defaultServices}
            className="rounded-[9999px] bg-[#2d5bff] px-6 py-3 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-white no-underline hover:bg-[#1a4de8]"
          >
            Ver servicios de Hogar
          </Link>
          <Link
            to={ROUTES.dashboard}
            className="rounded-[9999px] border-2 border-[#2d5bff] px-6 py-3 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#2d5bff] no-underline hover:bg-[#eef4fc]"
          >
            Ir al dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
