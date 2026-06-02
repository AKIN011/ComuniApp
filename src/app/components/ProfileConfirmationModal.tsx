import { useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import successImage from "../../assets/fa7a8e1d694aa7ed6fca32167dbe5b8aed0bfc6a.png";

type ProfileConfirmationModalProps = {
  message: string;
  onClose?: () => void;
  homePath?: string;
};

export function ProfileConfirmationModal({
  message,
  onClose,
  homePath = "/dashboard",
}: ProfileConfirmationModalProps) {
  const navigate = useNavigate();

  const goHome = () => {
    onClose?.();
    navigate(homePath);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(13,28,46,0.45)] p-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[409px] rounded-[20px] bg-white px-8 py-12 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-10 size-[99px]">
          <ImageWithFallback
            src={successImage}
            alt="Éxito"
            className="size-full object-cover"
          />
        </div>
        <p className="text-center font-['Inter:Medium',sans-serif] text-[20px] leading-[25px] text-black">
          {message}
        </p>
        <button
          type="button"
          onClick={goHome}
          className="relative mt-10 flex w-full cursor-pointer items-center justify-center rounded-[9999px] bg-gradient-to-r from-[#0040df] to-[#2d5bff] py-4 font-['Inter:Semi_Bold',sans-serif] text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
        >
          Ir al Home
        </button>
      </div>
    </div>
  );
}
