"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface BiteRequest {
  href: string;
  label: string;
  x: number;
  y: number;
}

interface CupcakeBiteContextValue {
  biteInto: (href: string, label: string, point?: { x: number; y: number }) => void;
  isBiting: boolean;
}

const CupcakeBiteContext = createContext<CupcakeBiteContextValue | null>(null);

export function useCupcakeBite() {
  const ctx = useContext(CupcakeBiteContext);
  if (!ctx) {
    throw new Error("useCupcakeBite must be used within CupcakeBiteProvider");
  }
  return ctx;
}

const SPRINKLES = [
  "var(--sprinkle-1)",
  "var(--sprinkle-2)",
  "var(--sprinkle-3)",
  "var(--sprinkle-4)",
  "var(--butter)",
  "var(--cherry)",
];

export function CupcakeBiteProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [bite, setBite] = useState<BiteRequest | null>(null);

  const biteInto = useCallback(
    (href: string, label: string, point?: { x: number; y: number }) => {
      if (bite) return;
      setBite({
        href,
        label,
        x: point?.x ?? window.innerWidth / 2,
        y: point?.y ?? window.innerHeight / 2,
      });
      window.setTimeout(() => {
        router.push(href);
      }, 780);
      window.setTimeout(() => setBite(null), 1200);
    },
    [bite, router],
  );

  const value = useMemo(
    () => ({ biteInto, isBiting: Boolean(bite) }),
    [bite, biteInto],
  );

  return (
    <CupcakeBiteContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {bite && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--paper)_55%,transparent)] backdrop-blur-[2px]" />

            {/* frosting wipe */}
            <motion.div
              className="absolute inset-x-0 top-0 h-[58%] origin-top bg-[linear-gradient(180deg,#fff7fb_0%,#ffe0ea_58%,transparent_100%)]"
              initial={{ scaleY: 0, opacity: 0.4 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* bite halo */}
            <motion.div
              className="absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,120,154,0.45)_0%,transparent_70%)]"
              style={{ left: bite.x, top: bite.y }}
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 2.4, opacity: [0, 1, 0] }}
              transition={{ duration: 0.7 }}
            />

            {/* sprinkles burst */}
            {Array.from({ length: 18 }).map((_, index) => {
              const angle = (index / 18) * Math.PI * 2;
              const distance = 70 + (index % 5) * 26;
              const sx = `${Math.cos(angle) * distance}px`;
              const sy = `${Math.sin(angle) * distance + 40}px`;
              return (
                <span
                  key={index}
                  className="cupcake-sprinkle absolute h-2.5 w-1.5 rounded-full"
                  style={
                    {
                      left: bite.x,
                      top: bite.y,
                      background: SPRINKLES[index % SPRINKLES.length],
                      "--sx": sx,
                      "--sy": sy,
                      animationDelay: `${index * 12}ms`,
                      transform: `rotate(${index * 24}deg)`,
                    } as CSSProperties
                  }
                />
              );
            })}

            <motion.div
              className="absolute inset-x-0 bottom-[18%] flex flex-col items-center gap-2 px-6 text-center"
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.12, duration: 0.35 }}
            >
              <p className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
                Opening preview
              </p>
              <p className="max-w-md text-sm text-[var(--muted)]">
                Loading{" "}
                <span className="font-semibold text-[var(--accent-deep)]">
                  {bite.label}
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </CupcakeBiteContext.Provider>
  );
}
