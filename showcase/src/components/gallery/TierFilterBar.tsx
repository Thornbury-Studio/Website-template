"use client";

import type { TierFilter } from "@/types/template";

const FILTERS: TierFilter[] = ["All", "Tier 1", "Tier 2", "Tier 3"];

interface TierFilterBarProps {
  active: TierFilter;
  onChange: (filter: TierFilter) => void;
}

export function TierFilterBar({ active, onChange }: TierFilterBarProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter templates by tier"
    >
      {FILTERS.map((filter) => {
        const isActive = active === filter;
        return (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter)}
            className={`h-10 min-w-[5.5rem] px-4 text-sm font-medium tracking-wide transition-colors duration-200 ${
              isActive
                ? "bg-[var(--ink)] text-[var(--paper)]"
                : "border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
