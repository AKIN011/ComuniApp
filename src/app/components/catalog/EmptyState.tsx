import { Link } from "react-router";
import { SearchX } from "lucide-react";
import { ROUTES } from "../../../routes/paths";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionTo?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel = "Volver al inicio",
  actionTo = ROUTES.dashboard,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[24px] bg-white px-8 py-16 text-center shadow-[0px_8px_30px_0px_rgba(13,28,46,0.06)]">
      <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#eef4fc]">
        <SearchX className="size-8 text-[#94a3b8]" />
      </div>
      <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[22px] font-bold leading-[30px] text-[#0d1c2e]">
        {title}
      </h2>
      <p className="mt-2 max-w-[420px] font-['Inter:Regular',sans-serif] text-[15px] leading-[24px] text-[#64748b]">
        {description}
      </p>
      <Link
        to={actionTo}
        className="mt-6 inline-flex items-center justify-center rounded-[9999px] bg-[#2d5bff] px-6 py-3 font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-white no-underline transition-colors hover:bg-[#1a4de8]"
      >
        {actionLabel}
      </Link>
    </div>
  );
}
