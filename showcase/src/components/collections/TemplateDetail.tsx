"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { TemplateItem } from "@/types/template";
import { tierBadge } from "@/data/templates";
import { MockupArt } from "./MockupArt";

interface DetailContextValue {
  openDetail: (template: TemplateItem) => void;
  closeDetail: () => void;
  active: TemplateItem | null;
}

const DetailContext = createContext<DetailContextValue | null>(null);

export function useTemplateDetail() {
  const ctx = useContext(DetailContext);
  if (!ctx) {
    throw new Error("useTemplateDetail must be used within TemplateDetailProvider");
  }
  return ctx;
}

function formatAdded(iso: string) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [year, month, day] = iso.split("-").map(Number);
  return `${months[(month ?? 1) - 1]} ${day}, ${year}`;
}

export function TemplateDetailProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<TemplateItem | null>(null);

  const openDetail = useCallback((template: TemplateItem) => {
    setActive(template);
  }, []);

  const closeDetail = useCallback(() => {
    setActive(null);
  }, []);

  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDetail();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, closeDetail]);

  const value = useMemo(
    () => ({ openDetail, closeDetail, active }),
    [openDetail, closeDetail, active],
  );

  return (
    <DetailContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {active && (
          <TemplateDetailOverlay
            template={active}
            onClose={closeDetail}
          />
        )}
      </AnimatePresence>
    </DetailContext.Provider>
  );
}

function TemplateDetailOverlay({
  template,
  onClose,
}: {
  template: TemplateItem;
  onClose: () => void;
}) {
  const badge = tierBadge(template.tier);

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex flex-col bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-modal="true"
      aria-label={template.name}
    >
      <motion.header
        className="flex shrink-0 items-center justify-between gap-4 border-b border-[#e8e8e8] px-4 py-3 sm:px-6"
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.35 }}
      >
        <div className="flex min-w-0 items-center gap-3">
          <p className="truncate text-sm font-medium text-[#1a1a1a]">
            {template.name}
          </p>
          <span className="hidden h-4 w-px bg-[#e0e0e0] sm:block" />
          <div className="hidden items-center gap-2 sm:flex">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a1a1a] text-[9px] font-bold tracking-wide text-white">
              {template.authorInitials}
            </span>
            <span className="text-xs text-[#6b6b6b]">{template.author}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Link
            href={template.previewUrl}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[#6b6b6b] transition-colors hover:bg-[#f3f3f3] hover:text-[#1a1a1a]"
            aria-label="Open blank preview"
            title="Open blank preview"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 3h7v7" />
              <path d="M10 14 21 3" />
              <path d="M21 14v7H3V3h7" />
            </svg>
          </Link>
        </div>
      </motion.header>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <section className="relative bg-white px-5 pt-10 pb-12 sm:px-10 sm:pt-14 sm:pb-16">
          <motion.div
            className="absolute top-6 left-5 flex h-16 w-16 flex-col items-center justify-center border border-[#1a1a1a] sm:top-8 sm:left-10 sm:h-[4.5rem] sm:w-[4.5rem]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.4 }}
          >
            <span className="text-[10px] font-bold tracking-[0.14em] text-[#1a1a1a] uppercase">
              {badge}
            </span>
            <span className="mt-0.5 text-sm font-semibold text-[#1a1a1a]">
              {template.score}
              <span className="text-[10px] font-medium text-[#888]"> / 10</span>
            </span>
          </motion.div>

          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              className="text-xs tracking-[0.08em] text-[#8a8a8a] uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.4 }}
            >
              {template.tier} · {formatAdded(template.added)}
            </motion.p>

            <motion.h2
              className="mt-5 font-[family-name:var(--font-display)] text-[clamp(1.75rem,6vw,4.25rem)] leading-[0.95] font-semibold tracking-[-0.03em] text-[#111] uppercase"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {template.name}
            </motion.h2>

            <motion.div
              className="mt-8 flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.4 }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a1a] text-[10px] font-bold text-white">
                {template.authorInitials}
              </span>
              <span className="text-sm text-[#444]">{template.author}</span>
            </motion.div>

            <motion.p
              className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[#666] sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.45 }}
            >
              {template.description}
            </motion.p>
          </div>
        </section>

        <section className="relative bg-[#1a1a1a] px-4 pt-8 pb-28 sm:px-8 sm:pt-10 sm:pb-32">
          <motion.div
            className="mx-auto max-w-5xl overflow-hidden rounded-md"
            initial={{ opacity: 0, y: 40, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aspect-[16/10] w-full bg-[#111]">
              <MockupArt
                tone={template.tone}
                label={template.accentLabel}
                title={template.name}
              />
            </div>
          </motion.div>
        </section>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-5 z-[96] flex justify-center px-4 sm:bottom-7"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.4 }}
      >
        <div className="pointer-events-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-full bg-[#2a2a2a] p-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.65)]">
          <span className="hidden rounded-full px-3 py-2 text-xs font-medium text-[#bbb] sm:inline">
            {template.category}
          </span>
          <span className="rounded-full px-3 py-2 text-xs font-medium text-[#bbb]">
            {template.tags[0]}
          </span>
          <span className="hidden rounded-full px-3 py-2 text-xs font-medium text-[#bbb] md:inline">
            {template.tier}
          </span>
          <Link
            href={template.previewUrl}
            className="ml-1 shrink-0 rounded-md bg-[var(--accent)] px-4 py-2 text-xs font-bold tracking-wide text-white uppercase transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Visit preview
          </Link>
        </div>
      </motion.div>

      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 bottom-4 z-[97] flex h-11 w-11 items-center justify-center bg-[#111] text-white transition-transform hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6"
        aria-label="Close template detail"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M1 1l12 12M13 1 1 13" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
    </motion.div>
  );
}
