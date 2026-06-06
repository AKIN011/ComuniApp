import { useNavigate } from "react-router";
import { Megaphone } from "lucide-react";
import { ROUTES } from "../../../routes/paths";

type EmprendedorProfileCompletionModalProps = {
  onClose: () => void;
};

export function EmprendedorProfileCompletionModal({
  onClose,
}: EmprendedorProfileCompletionModalProps) {
  const navigate = useNavigate();

  const handleCompleteProfile = () => {
    onClose();
    navigate(ROUTES.entrepreneur.editarPerfil);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(248,249,255,0.35)] p-6 backdrop-blur-[14px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-completion-title"
    >
      <div className="w-full max-w-[409px] rounded-[20px] bg-white px-8 py-12 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="mx-auto mb-8 flex size-[88px] items-center justify-center rounded-full bg-[#eff4ff]">
          <Megaphone className="size-10 text-[#2d5bff]" strokeWidth={1.75} />
        </div>
        <p
          id="profile-completion-title"
          className="text-center font-['Inter:Medium',sans-serif] text-[20px] leading-[28px] text-[#0d1c2e]"
        >
          Completa tu perfil de emprendedor
        </p>
        <p className="mt-3 text-center font-['Inter:Regular',sans-serif] text-[15px] leading-[22px] text-[#64748b]">
          Aún faltan datos en tu perfil público. Complétalo para que la
          comunidad conozca mejor tu negocio.
        </p>
        <button
          type="button"
          onClick={handleCompleteProfile}
          className="mt-8 flex w-full items-center justify-center rounded-[9999px] bg-gradient-to-r from-[#0040df] to-[#2d5bff] py-4 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-white shadow-[0px_10px_15px_-3px_rgba(0,64,223,0.2),0px_4px_6px_-4px_rgba(0,64,223,0.2)] transition-opacity hover:opacity-90"
        >
          Completar mi perfil
        </button>
        <button
          type="button"
          onClick={onClose}
          className="mt-3 w-full py-2 font-['Inter:Medium',sans-serif] text-[14px] font-medium text-[#64748b] transition-colors hover:text-[#2d5bff]"
        >
          Ahora no
        </button>
      </div>
    </div>
  );
}
