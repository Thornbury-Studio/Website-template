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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        delay: (index % 4) * 0.06,
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
          whileHover={{ y: -6, scale: 1.015 }}
          whileTap={{ scale: 0.94, rotate: -0.6 }}
          transition={{ type: "spring", stiffness: 420, damping: 22 }}
          className="relative overflow-hidden rounded-[1.6rem] border border-white/80 bg-[var(--frosting)] p-3 shadow-[0_18px_40px_-28px_rgba(228,93,130,0.55),0_10px_24px_-20px_rgba(62,120,130,0.35)]"
        >
          {/* frosting drip decoration */}
          <div
            className="pointer-events-none absolute -top-3 left-8 h-8 w-16 rounded-b-full bg-[var(--accent-soft)] opacity-90"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-2 left-20 h-6 w-10 rounded-b-full bg-[var(--cream)] opacity-95"
            aria-hidden="true"
          />

          <div
            className="relative overflow-hidden rounded-[1.15rem] bg-[var(--wire)] ring-1 ring-[var(--line)]"
            style={{ aspectRatio: template.thumbnailPlaceholder }}
          >
            <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
              <MockupArt
                tone={template.tone}
                label={template.accentLabel}
                title={template.name}
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3a2f38]/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="rounded-2xl bg-white px-3.5 py-2 text-xs font-semibold tracking-wide text-[var(--ink)] shadow-sm uppercase">
                Take a bite
              </span>
              <span className="rounded-2xl bg-[var(--accent-soft)] px-3 py-2 text-xs font-semibold text-[var(--accent-deep)]">
                {template.tier}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-4 flex items-start justify-between gap-4 px-1">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--ink)] transition-colors group-hover:text-[var(--accent-deep)]">
              {template.name}
            </h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {template.category} · {template.tags.slice(0, 2).join(" · ")}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 pt-1">
            <div className="flex -space-x-2" aria-hidden="true">
              {["var(--sprinkle-1)", "var(--sprinkle-2)", "var(--sprinkle-3)"].map(
                (color) => (
                  <span
                    key={color}
                    className="inline-block h-7 w-7 rounded-full border-2 border-[var(--paper)]"
                    style={{ background: color }}
                  />
                ),
              )}
            </div>
            <span className="text-sm font-medium text-[var(--muted)]">
              +{template.sitesCount}
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
