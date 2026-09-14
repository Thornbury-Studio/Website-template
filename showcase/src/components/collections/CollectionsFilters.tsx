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
    <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 pb-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-semibold tracking-[0.14em] text-[var(--muted)] uppercase">
          Category
        </span>
        {FILTERS.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => onChange(filter)}
              className={`h-10 rounded-xl px-3.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[var(--ink)] text-[var(--paper)] shadow-[0_12px_24px_-16px_rgba(20,20,20,0.8)]"
                  : "bg-[var(--surface)] text-[var(--muted)] ring-1 ring-[var(--line)] hover:text-[var(--ink)] hover:ring-[var(--line-strong)]"
              }`}
            >
              {filter}
            </button>
          );
        })}
        <span className="ml-1 inline-flex h-7 min-w-7 items-center justify-center rounded-lg bg-[var(--accent-soft)] px-2 text-xs font-bold text-[var(--accent)]">
          {resultCount}
        </span>
        <button
          type="button"
          onClick={onReset}
          className="ml-1 inline-flex h-10 items-center gap-2 rounded-xl px-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
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
      <p className="text-sm text-[var(--muted)]">
        Best selection of shells for client inspiration
      </p>
    </div>
  );
}
