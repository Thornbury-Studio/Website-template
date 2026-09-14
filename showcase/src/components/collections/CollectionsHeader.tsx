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
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_84%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-4 px-5 sm:px-8">
        <a
          href="/"
          className="shrink-0 font-[family-name:var(--font-display)] text-lg tracking-tight text-[var(--ink)]"
        >
          TC<span className="text-[var(--accent)]">.</span>
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
            className="h-11 w-full rounded-2xl border border-transparent bg-white/90 pr-4 pl-10 text-sm text-[var(--ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--muted)] focus:border-[var(--line-strong)] focus:shadow-[0_12px_30px_-18px_rgba(28,36,38,0.25)]"
          />
        </label>

        <a
          href="/"
          className="hidden shrink-0 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)] sm:inline"
        >
          Template Commons
        </a>
      </div>
    </header>
  );
}
