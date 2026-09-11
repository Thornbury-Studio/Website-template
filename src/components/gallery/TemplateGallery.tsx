"use client";

import { useMemo, useState } from "react";
import type { TemplateItem, TierFilter } from "@/types/template";
import { TemplateCard } from "./TemplateCard";
import { TierFilterBar } from "./TierFilterBar";

interface TemplateGalleryProps {
  templates: TemplateItem[];
}

export function TemplateGallery({ templates }: TemplateGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<TierFilter>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return templates;
    return templates.filter((item) => item.tier === activeFilter);
  }, [activeFilter, templates]);

  return (
    <section
      id="gallery"
      className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20"
      aria-labelledby="gallery-heading"
    >
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <h2
            id="gallery-heading"
            className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl"
          >
            Browse by tier
          </h2>
          <p className="mt-2 text-[var(--muted)]">
            Dummy shells only — no live client sites. Pick a structure, then open
            the blank preview.
          </p>
        </div>
        <TierFilterBar active={activeFilter} onChange={setActiveFilter} />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-[var(--muted)]">
          No templates in this tier yet.
        </p>
      )}
    </section>
  );
}
