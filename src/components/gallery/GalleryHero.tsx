import Link from "next/link";

export function GalleryHero() {
  return (
    <header className="relative overflow-hidden border-b border-[var(--line)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--mist) 0%, var(--paper) 42%, var(--mist-deep) 100%), repeating-linear-gradient(90deg, transparent, transparent 47px, color-mix(in srgb, var(--line) 55%, transparent) 48px), repeating-linear-gradient(0deg, transparent, transparent 47px, color-mix(in srgb, var(--line) 55%, transparent) 48px)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[72vh] w-full max-w-6xl flex-col justify-end px-6 pb-16 pt-10 sm:px-8 sm:pb-20">
        <nav className="mb-auto flex items-center justify-between py-2">
          <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.14em] text-[var(--ink)] uppercase">
            Website Templates
          </p>
          <Link
            href="#gallery"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          >
            Browse collection
          </Link>
        </nav>

        <div className="mt-16 max-w-3xl animate-[rise_700ms_ease-out]">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[var(--accent)] uppercase">
            Client showcase shell
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
            Website Templates
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            Browse standardized site shells by tier. Preview blank layouts before
            you choose a direction for your project.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#gallery"
              className="inline-flex h-12 items-center bg-[var(--ink)] px-6 text-sm font-medium text-[var(--paper)] transition-colors hover:bg-[var(--accent)]"
            >
              View templates
            </Link>
            <Link
              href="/templates/preview/saas-standard-framework"
              className="inline-flex h-12 items-center border border-[var(--line)] bg-[var(--surface)] px-6 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
            >
              Open sample preview
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
