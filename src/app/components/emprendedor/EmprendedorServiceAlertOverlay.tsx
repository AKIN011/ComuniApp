import { Check } from "lucide-react";

export type ServiceAlertVariant =
  | "deactivate-success"
  | "delete-confirm"
  | "delete-success";

type EmprendedorServiceAlertOverlayProps = {
  variant: ServiceAlertVariant;
  onClose: () => void;
  onConfirmDelete?: () => void;
};

const messages: Record<
  Exclude<ServiceAlertVariant, "delete-confirm">,
  string
> = {
  "deactivate-success":
    "Se ha inactivado el servicio satisfactoriamente",
  "delete-success": "Se ha eliminado el servicio satisfactoriamente",
};

function SuccessIcon() {
  return (
    <div className="mx-auto mb-8 flex size-[88px] items-center justify-center rounded-full bg-[#22c55e] shadow-[0px_8px_24px_rgba(34,197,94,0.35)]">
      <Check className="size-11 text-white" strokeWidth={3} />
    </div>
  );
}

function ConfirmDeleteIcon() {
  return (
    <p
      className="mx-auto mb-8 text-center font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[72px] font-bold leading-none text-[#ef4444]"
      aria-hidden
    >
      ?
    </p>
  );
}

function PrimaryButton({
  label,
  onClick,
  className = "",
}: {
  label: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex w-full cursor-pointer items-center justify-center rounded-[9999px] bg-gradient-to-b from-[#3b6dff] to-[#2555f5] px-6 py-4 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-white shadow-[0px_8px_20px_rgba(37,85,245,0.35)] transition-opacity hover:opacity-90 ${className}`}
    >
      {label}
    </button>
  );
}

export function EmprendedorServiceAlertOverlay({
  variant,
  onClose,
  onConfirmDelete,
}: EmprendedorServiceAlertOverlayProps) {
  const isConfirm = variant === "delete-confirm";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(255,255,255,0.35)] p-6 backdrop-blur-[10px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-alert-title"
    >
      <div className="relative w-full max-w-[409px] rounded-[24px] bg-white px-8 py-10 shadow-[0px_8px_32px_rgba(13,28,46,0.12)]">
        {isConfirm ? <ConfirmDeleteIcon /> : <SuccessIcon />}

        <p
          id="service-alert-title"
          className="text-center font-['Inter:Medium',sans-serif] text-[18px] leading-[26px] text-[#0d1c2e]"
        >
          {isConfirm
            ? "¿Está seguro de eliminar este servicio?"
            : messages[variant]}
        </p>

        {isConfirm ? (
          <div className="mt-8 flex gap-3">
            <PrimaryButton label="Volver" onClick={onClose} />
            <PrimaryButton
              label="Continuar"
              onClick={() => onConfirmDelete?.()}
            />
          </div>
        ) : (
          <PrimaryButton
            className="mt-8"
            label="Volver a servicios"
            onClick={onClose}
          />
        )}
      </div>
    </div>
  );
}
