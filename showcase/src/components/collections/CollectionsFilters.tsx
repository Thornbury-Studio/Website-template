"use client";

import type { TierFilter } from "@/types/template";

const FILTERS: TierFilter[] = ["All", "Tier 1", "Tier 2", "Tier 3"];

interface CollectionsFiltersProps {
  active: TierFilter;
  onChange: (filter: TierFilter) => void;
  resultCount: number;
  onReset: () => void;
}

export function CollectionsFilters({
  active,
  onChange,
  resultCount,
  onReset,
}: CollectionsFiltersProps) {
  return (
    <div className="mx-auto flex max-w-[1480px] flex-col gap-3 px-4 pb-7 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => onChange(filter)}
              className={`h-9 rounded-md border px-3 text-[13px] font-medium transition-colors ${
                isActive
                  ? "border-[#111] bg-[#111] text-white"
                  : "border-[#d4d4d4] bg-white text-[#555] hover:border-[#111] hover:text-[#111]"
              }`}
            >
              {filter}
            </button>
          );
        })}
        <button
          type="button"
          onClick={onReset}
          className="ml-1 inline-flex h-9 items-center gap-2 px-2 text-[13px] text-[#777] transition-colors hover:text-[#111]"
        >
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M3 12a9 9 0 1 0 3-6.7" />
            <path d="M3 4v5h5" />
          </svg>
          Reset filters
        </button>
      </div>
      <p className="text-[13px] text-[#888]">{resultCount} templates</p>
    </div>
  );
}
