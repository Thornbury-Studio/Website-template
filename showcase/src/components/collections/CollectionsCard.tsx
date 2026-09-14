"use client";

import { motion } from "framer-motion";
import type { TemplateItem } from "@/types/template";
import { tierBadge } from "@/data/templates";
import { MockupArt } from "./MockupArt";
import { useTemplateDetail } from "./TemplateDetail";

interface CollectionCardProps {
  template: TemplateItem;
  index: number;
}

export function CollectionCard({ template, index }: CollectionCardProps) {
  const { openDetail, active } = useTemplateDetail();
  const badge = tierBadge(template.tier);
  const isOpen = active?.id === template.id;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: (index % 8) * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <button
        type="button"
        disabled={Boolean(active)}
        onClick={() => openDetail(template)}
        className="w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111] disabled:cursor-wait"
        aria-expanded={isOpen}
      >
        <div className="overflow-hidden rounded-[6px] bg-[#f0f0f0]">
          <motion.div
            className="relative aspect-[4/3] w-full overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-full w-full transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
              <MockupArt
                tone={template.tone}
                label={template.accentLabel}
                title={template.name}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/8" />
          </motion.div>
        </div>

        <div className="mt-2.5 flex items-center justify-between gap-2 px-0.5">
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-[8px] font-bold tracking-wide text-white">
              {template.authorInitials}
            </span>
            <span className="truncate text-[12px] text-[#444]">
              {template.author}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <span className="rounded-[3px] border border-[#d8d8d8] px-1.5 py-[2px] text-[10px] font-semibold tracking-wide text-[#555] uppercase">
              {badge}
            </span>
            <span className="rounded-[3px] border border-[#d8d8d8] px-1.5 py-[2px] text-[10px] font-semibold tracking-wide text-[#c94f6d] uppercase">
              {template.category.slice(0, 4)}
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
