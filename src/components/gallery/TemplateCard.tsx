import Link from "next/link";
import type { TemplateItem } from "@/types/template";
import { TierBadge } from "./TierBadge";

interface TemplateCardProps {
  template: TemplateItem;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <article className="group flex flex-col border border-[var(--line)] bg-[var(--surface)] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_18px_40px_-28px_rgba(15,61,62,0.45)]">
      <div
        className="relative flex w-full items-center justify-center bg-[var(--wire)]"
        style={{ aspectRatio: template.thumbnailPlaceholder }}
      >
        <div className="pointer-events-none absolute inset-3 border border-dashed border-[var(--wire-line)]" />
        <span className="relative z-10 text-center text-xs font-medium tracking-[0.08em] text-[var(--muted)] uppercase">
          Preview Image Placeholder
        </span>
        <div className="absolute top-3 left-3 z-10">
          <TierBadge tier={template.tier} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-[family-name:var(--font-display)] text-xl leading-snug text-[var(--ink)]">
          {template.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-[var(--muted)]">
          {template.description}
        </p>
        <Link
          href={template.previewUrl}
          className="mt-1 inline-flex h-11 items-center justify-center bg-[var(--ink)] px-4 text-sm font-medium text-[var(--paper)] transition-colors duration-200 hover:bg-[var(--accent)]"
        >
          View Live Preview
        </Link>
      </div>
    </article>
  );
}
