import type { FormEvent } from "react";
import { Search } from "lucide-react";

interface CatalogSearchFormProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSubmit: (event: FormEvent) => void;
  placeholder?: string;
  size?: "default" | "compact";
  className?: string;
}

export function CatalogSearchForm({
  query,
  onQueryChange,
  onSubmit,
  placeholder = "Buscar servicios...",
  size = "default",
  className = "",
}: CatalogSearchFormProps) {
  const isCompact = size === "compact";

  return (
    <form
      onSubmit={onSubmit}
      className={
        isCompact
          ? `relative ${className}`
          : `mx-auto mt-8 flex max-w-[720px] items-center gap-2 rounded-[9999px] bg-[#eef4fc] p-2 pl-5 shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.04)] ${className}`
      }
    >
      <Search
        className={
          isCompact
            ? "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#94a3b8]"
            : "size-5 shrink-0 text-[#94a3b8]"
        }
        aria-hidden
      />
      <input
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder={placeholder}
        className={
          isCompact
            ? "h-[40px] w-full rounded-[9999px] border-none bg-[#eef4fc] pl-9 pr-4 font-['Inter:Regular',sans-serif] text-[14px] text-[#0d1c2e] outline-none placeholder:text-[#94a3b8] focus:ring-2 focus:ring-[#2d5bff]/30 lg:w-[220px]"
            : "min-w-0 flex-1 bg-transparent font-['Inter:Regular',sans-serif] text-[15px] text-[#0d1c2e] outline-none placeholder:text-[rgba(67,70,86,0.5)]"
        }
      />
      {!isCompact && (
        <button
          type="submit"
          className="shrink-0 cursor-pointer rounded-[9999px] bg-[#2d5bff] px-8 py-3 font-['Inter:Semi_Bold',sans-serif] text-[15px] font-semibold leading-[22px] text-white transition-all duration-200 hover:bg-[#1a4de8] active:scale-[0.98]"
        >
          Buscar
        </button>
      )}
    </form>
  );
}
