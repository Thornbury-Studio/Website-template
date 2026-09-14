"use client";

import { useMemo, useState } from "react";
import type { TemplateItem, TierFilter } from "@/types/template";
import { CollectionsFilters } from "./CollectionsFilters";
import { CollectionsHeader } from "./CollectionsHeader";
import { CollectionsHero } from "./CollectionsHero";
import { CollectionsMarquee } from "./CollectionsMarquee";
import { CollectionCard } from "./CollectionsCard";

interface CollectionsExperienceProps {
  templates: TemplateItem[];
}

export function CollectionsExperience({
  templates,
}: CollectionsExperienceProps) {
  const [activeFilter, setActiveFilter] = useState<TierFilter>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return templates.filter((item) => {
      const tierOk = activeFilter === "All" || item.tier === activeFilter;
      if (!tierOk) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [activeFilter, query, templates]);

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <CollectionsMarquee />
      <CollectionsHeader query={query} onQueryChange={setQuery} />
      <CollectionsHero total={templates.length} />
      <CollectionsFilters
        active={activeFilter}
        onChange={setActiveFilter}
        resultCount={filtered.length}
        onReset={() => {
          setActiveFilter("All");
          setQuery("");
        }}
      />

      <section className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
        <div className="grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-2">
          {filtered.map((template, index) => (
            <CollectionCard
              key={template.id}
              template={template}
              index={index}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-[1.5rem] border border-dashed border-[var(--line-strong)] bg-[var(--surface)] px-6 py-16 text-center">
            <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
              No collections match
            </p>
            <p className="mt-2 text-[var(--muted)]">
              Try another tier or clear the search query.
            </p>
          </div>
        )}
      </section>

      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-10 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Website Templates · collections showcase</p>
          <p>Original mockups · no third-party stock imagery</p>
        </div>
      </footer>
    </div>
  );
}
