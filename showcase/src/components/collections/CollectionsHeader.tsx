"use client";

interface CollectionsHeaderProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function CollectionsHeader({
  query,
  onQueryChange,
}: CollectionsHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_88%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1480px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="inline-flex shrink-0 items-center gap-2 font-[family-name:var(--font-display)] text-[15px] font-semibold tracking-tight text-[var(--ink)]"
        >
          <span className="grid h-3.5 w-3.5 grid-cols-2 gap-px" aria-hidden="true">
            <span className="rounded-[1px] bg-[var(--accent)]" />
            <span className="rounded-[1px] bg-[var(--ink)]" />
            <span className="col-span-2 h-[3px] rounded-[1px] bg-[var(--mint-bright)]" />
          </span>
          Template Commons
        </a>

        <label className="relative min-w-0 flex-1">
          <span className="sr-only">Search templates</span>
          <svg
            className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search templates"
            className="h-10 w-full rounded-md border border-[#e0e0e0] bg-white pr-4 pl-10 text-sm text-[var(--ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--muted)] focus:border-[#111] focus:shadow-[0_8px_24px_-16px_rgba(17,17,17,0.35)]"
          />
        </label>

        <a
          href="/"
          className="hidden shrink-0 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)] sm:inline"
        >
          Hub
        </a>
      </div>
    </header>
  );
}
