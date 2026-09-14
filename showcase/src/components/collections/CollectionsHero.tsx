"use client";

import { motion } from "framer-motion";

interface CollectionsHeroProps {
  total: number;
}

export function CollectionsHero({ total }: CollectionsHeroProps) {
  return (
    <section className="mx-auto max-w-[1480px] px-4 pt-10 pb-5 sm:px-6 sm:pt-12 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap items-end justify-between gap-4"
      >
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4.5vw,3.25rem)] leading-none font-semibold tracking-[-0.03em] text-[#111]">
            Templates.{" "}
            <span className="text-[#888]">Blank shells for client picks.</span>{" "}
            <span className="align-middle text-[0.55em] font-medium text-[#999]">
              [{total}]
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#666] sm:text-base">
            Structure only — no live client content. Click a card for the full
            detail view, then open the blank wireframe preview.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
