"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { TemplateItem, TierFilter } from "@/types/template";
import { CollectionsFilters } from "./CollectionsFilters";
import { CollectionsHeader } from "./CollectionsHeader";
import { CollectionsHero } from "./CollectionsHero";
import { CollectionsMarquee } from "./CollectionsMarquee";
import { CollectionCard } from "./CollectionsCard";
import { CupcakeBiteProvider } from "./CupcakeBite";

interface CollectionsExperienceProps {
  templates: TemplateItem[];
}

export function CollectionsExperience({
  templates,
}: CollectionsExperienceProps) {
  const [activeFilter, setActiveFilter] = useState<TierFilter>("All");
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState<string | null>(null);

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

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 1600);
  };

  return (
    <CupcakeBiteProvider>
      <div className="min-h-screen">
        <CollectionsMarquee />
        <CollectionsHeader query={query} onQueryChange={setQuery} />
        <CollectionsHero total={templates.length} />
        <CollectionsFilters
          active={activeFilter}
          onChange={(filter) => {
            setActiveFilter(filter);
            showToast(
              filter === "All"
                ? "Showing all templates"
                : `Filtered to ${filter}`,
            );
          }}
          resultCount={filtered.length}
          onReset={() => {
            setActiveFilter("All");
            setQuery("");
            showToast("Filters reset");
          }}
        />

        <section className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((template, index) => (
              <CollectionCard
                key={template.id}
                template={template}
                index={index}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="rounded-[1.5rem] border border-dashed border-[var(--line-strong)] bg-white px-6 py-16 text-center">
              <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
                No templates match
              </p>
              <p className="mt-2 text-[var(--muted)]">
                Try another tier or clear the search query.
              </p>
            </div>
          )}
        </section>

        <footer className="border-t border-[var(--line)]">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-10 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>Template Commons · client showcase</p>
            <a href="/" className="transition-colors hover:text-[var(--ink)]">
              Back to hub
            </a>
          </div>
        </footer>

        <AnimatePresence>
          {toast && (
            <motion.div
              role="status"
              initial={{ opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-[var(--line)] bg-white px-4 py-2.5 text-sm font-medium text-[var(--ink)] shadow-[0_16px_36px_-18px_rgba(28,36,38,0.35)]"
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </CupcakeBiteProvider>
  );
}
