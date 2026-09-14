"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { TemplateItem } from "@/types/template";
import { MockupArt } from "./MockupArt";

interface CollectionCardProps {
  template: TemplateItem;
  index: number;
}

export function CollectionCard({ template, index }: CollectionCardProps) {
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
      <Link href={template.previewUrl} className="block focus:outline-none">
        <div className="overflow-hidden rounded-[1.35rem] bg-[var(--card)] p-3 shadow-[0_24px_50px_-34px_rgba(0,0,0,0.55)] transition-[transform,box-shadow] duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_34px_70px_-34px_rgba(0,0,0,0.65)] group-focus-visible:ring-2 group-focus-visible:ring-[var(--accent)]">
          <div
            className="relative overflow-hidden rounded-[1rem] bg-[var(--wire)]"
            style={{ aspectRatio: template.thumbnailPlaceholder }}
          >
            <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
              <MockupArt
                tone={template.tone}
                label={template.accentLabel}
                title={template.name}
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="rounded-xl bg-white px-3.5 py-2 text-xs font-semibold tracking-wide text-[var(--ink)] uppercase">
                View collection
              </span>
              <span className="rounded-xl bg-black/45 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm">
                {template.tier}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4 px-1">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
              {template.name}
            </h3>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {template.category} · {template.tags.slice(0, 2).join(" · ")}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 pt-1">
            <div className="flex -space-x-2" aria-hidden="true">
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className="inline-block h-7 w-7 rounded-full border-2 border-[var(--paper)] bg-[var(--mist-deep)]"
                  style={{
                    background: `color-mix(in srgb, var(--accent) ${20 + dot * 18}%, var(--mist-deep))`,
                  }}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-[var(--muted)]">
              +{template.sitesCount}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
