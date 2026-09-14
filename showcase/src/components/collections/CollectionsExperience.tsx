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
    window.setTimeout(() => setToast(null), 1800);
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
                ? "Showing the whole bakery tray"
                : `Sweet pick: ${filter} shells`,
            );
          }}
          resultCount={filtered.length}
          onReset={() => {
            setActiveFilter("All");
            setQuery("");
            showToast("Filters cleared — tray is fresh again");
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
            <div className="rounded-[1.75rem] border border-dashed border-[var(--line-strong)] bg-[var(--frosting)] px-6 py-16 text-center shadow-[0_16px_40px_-28px_rgba(228,93,130,0.35)]">
              <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
                No cupcakes on this tray
              </p>
              <p className="mt-2 text-[var(--muted)]">
                Try another tier or clear the search for a fresh batch.
              </p>
            </div>
          )}
        </section>

        <footer className="border-t border-[var(--line)]">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-10 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>Website Templates · cupcake collections</p>
            <p>Soft feedback · original frosting mockups</p>
          </div>
        </footer>

        <AnimatePresence>
          {toast && (
            <motion.div
              role="status"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-white/80 bg-[var(--frosting)] px-4 py-3 text-sm font-medium text-[var(--ink)] shadow-[0_18px_40px_-20px_rgba(228,93,130,0.55)]"
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </CupcakeBiteProvider>
  );
}
