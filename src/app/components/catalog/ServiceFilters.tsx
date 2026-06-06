import { PRICE_FILTER, SORT_OPTIONS } from "../../../data/catalogConfig";
import type { SortOption } from "../../../data/types";
import { isSortOption } from "../../../lib/catalog/guards";

interface ServiceFiltersProps {
  sort: SortOption;
  maxPrice: number;
  onSortChange: (sort: SortOption) => void;
  onMaxPriceChange: (price: number) => void;
}

export function ServiceFilters({
  sort,
  maxPrice,
  onSortChange,
  onMaxPriceChange,
}: ServiceFiltersProps) {
  return (
    <div className="flex flex-col gap-4 rounded-[20px] bg-white p-4 shadow-[0px_4px_20px_0px_rgba(13,28,46,0.04)] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <label
          htmlFor="sort-select"
          className="font-['Inter:Medium',sans-serif] text-[14px] font-medium text-[#334155]"
        >
          Ordenar por
        </label>
        <select
          id="sort-select"
          value={sort}
          onChange={(event) => {
            const value = event.target.value;
            if (isSortOption(value)) onSortChange(value);
          }}
          className="h-[40px] rounded-[12px] border border-[#e2e8f0] bg-[#f8f9ff] px-3 font-['Inter:Regular',sans-serif] text-[14px] text-[#0d1c2e] outline-none focus:ring-2 focus:ring-[#2d5bff]/30"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex min-w-[220px] flex-col gap-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="price-range"
            className="font-['Inter:Medium',sans-serif] text-[14px] font-medium text-[#334155]"
          >
            Precio máximo
          </label>
          <span className="font-['Inter:Semi_Bold',sans-serif] text-[14px] font-semibold text-[#2d5bff]">
            ${maxPrice}+
          </span>
        </div>
        <input
          id="price-range"
          type="range"
          min={PRICE_FILTER.min}
          max={PRICE_FILTER.max}
          step={PRICE_FILTER.step}
          value={maxPrice}
          onChange={(event) => onMaxPriceChange(Number(event.target.value))}
          className="w-full accent-[#2d5bff]"
        />
      </div>
    </div>
  );
}
