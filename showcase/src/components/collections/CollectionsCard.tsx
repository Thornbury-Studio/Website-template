"use client";

import { motion } from "framer-motion";
import type { TemplateItem } from "@/types/template";
import { MockupArt } from "./MockupArt";
import { useCupcakeBite } from "./CupcakeBite";

interface CollectionCardProps {
  template: TemplateItem;
  index: number;
}

export function CollectionCard({ template, index }: CollectionCardProps) {
  const { biteInto, isBiting } = useCupcakeBite();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: (index % 6) * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <button
        type="button"
        disabled={isBiting}
        onClick={(event) => {
          biteInto(template.previewUrl, template.name, {
            x: event.clientX,
            y: event.clientY,
          });
        }}
        className="w-full cursor-pointer text-left focus:outline-none disabled:cursor-wait"
      >
        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.975 }}
          transition={{ type: "spring", stiffness: 420, damping: 24 }}
          className="overflow-hidden rounded-[1.35rem] border border-[var(--line)] bg-white shadow-[0_16px_36px_-28px_rgba(28,36,38,0.4)] transition-shadow duration-500 group-hover:shadow-[0_24px_48px_-28px_rgba(201,79,109,0.28)]"
        >
          <div
            className="relative overflow-hidden bg-[var(--wire)]"
            style={{ aspectRatio: template.thumbnailPlaceholder }}
          >
            <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.035]">
              <MockupArt
                tone={template.tone}
                label={template.accentLabel}
                title={template.name}
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1c2426]/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between p-3.5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--ink)] uppercase">
                View preview
              </span>
              <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1.5 text-xs font-semibold text-[var(--accent-deep)]">
                {template.tier}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-3.5 flex items-start justify-between gap-3 px-0.5">
          <div className="min-w-0">
            <h3 className="truncate font-[family-name:var(--font-display)] text-lg tracking-tight text-[var(--ink)] transition-colors group-hover:text-[var(--accent-deep)]">
              {template.name}
            </h3>
            <p className="mt-0.5 truncate text-sm text-[var(--muted)]">
              {template.category} · {template.tags.slice(0, 2).join(" · ")}
            </p>
          </div>
          <span className="shrink-0 pt-1 text-sm font-medium text-[var(--muted)]">
            +{template.sitesCount}
          </span>
        </div>
      </button>
    </motion.article>
  );
}
