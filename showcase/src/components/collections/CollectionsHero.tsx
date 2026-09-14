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
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[var(--accent-deep)] uppercase">
          Cupcake bakery tray
        </p>
        <div className="flex flex-wrap items-end gap-3">
          <h1 className="font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
            Collections
          </h1>
          <span className="mb-1 rounded-2xl bg-[var(--accent-soft)] px-2.5 py-1 text-sm font-semibold text-[var(--accent-deep)]">
            {total}
          </span>
        </div>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          Pick a template like choosing a cupcake — soft frosting cards, sweet
          feedback, and a little bite animation when you open a blank preview.
        </p>
      </motion.div>
    </section>
  );
}
