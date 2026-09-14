"use client";

import { motion } from "framer-motion";

interface CollectionsHeroProps {
  total: number;
}

export function CollectionsHero({ total }: CollectionsHeroProps) {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-10 pb-6 sm:px-8 sm:pt-14">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-wrap items-end gap-3">
          <h1 className="font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
            Collections
          </h1>
          <span className="mb-1 rounded-xl bg-[var(--mist)] px-2.5 py-1 text-sm font-semibold text-[var(--muted)]">
            {total}
          </span>
        </div>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          Browse carefully curated website template shells by tier. Each card opens
          a blank wireframe preview — no live client sites, only structure you can
          evaluate before choosing a direction.
        </p>
      </motion.div>
    </section>
  );
}
