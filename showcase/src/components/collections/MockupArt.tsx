import type { MockupTone } from "@/types/template";

const palettes: Record<
  MockupTone,
  { bg: string; panel: string; accent: string; soft: string; ink: string }
> = {
  slate: {
    bg: "#d7dde4",
    panel: "#f4f6f8",
    accent: "#2f4550",
    soft: "#9aa8b5",
    ink: "#182029",
  },
  forest: {
    bg: "#d5e2d8",
    panel: "#f3f7f4",
    accent: "#1f5c45",
    soft: "#8fad9a",
    ink: "#163028",
  },
  sand: {
    bg: "#e8dfd2",
    panel: "#f8f4ee",
    accent: "#8a5a2b",
    soft: "#c4aa88",
    ink: "#2b2118",
  },
  ink: {
    bg: "#d9dce8",
    panel: "#f3f4fa",
    accent: "#243b6b",
    soft: "#9aa3c4",
    ink: "#141b2e",
  },
  rose: {
    bg: "#ead9dc",
    panel: "#faf3f4",
    accent: "#8f3d4f",
    soft: "#c8949f",
    ink: "#2c171c",
  },
  ocean: {
    bg: "#d3e0e6",
    panel: "#f2f7f9",
    accent: "#1f5f73",
    soft: "#8fafbc",
    ink: "#14262d",
  },
  citrus: {
    bg: "#e6e4cb",
    panel: "#f8f7ef",
    accent: "#6e6a1f",
    soft: "#b8b47a",
    ink: "#242312",
  },
  plum: {
    bg: "#e0d6e5",
    panel: "#f7f2f9",
    accent: "#5d3a6d",
    soft: "#b297bd",
    ink: "#241828",
  },
  stone: {
    bg: "#ddd9d3",
    panel: "#f6f4f1",
    accent: "#5a5248",
    soft: "#a79f94",
    ink: "#211e1a",
  },
};

interface MockupArtProps {
  tone: MockupTone;
  label: string;
  title: string;
}

/** Original SVG UI mockups — no third-party imagery / copyright-free. */
export function MockupArt({ tone, label, title }: MockupArtProps) {
  const p = palettes[tone];

  return (
    <svg
      viewBox="0 0 800 600"
      className="h-full w-full"
      role="img"
      aria-label={`${title} preview mockup`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`g-${tone}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.bg} />
          <stop offset="100%" stopColor={p.soft} stopOpacity="0.55" />
        </linearGradient>
        <pattern
          id={`dots-${tone}`}
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.2" fill={p.ink} opacity="0.08" />
        </pattern>
      </defs>

      <rect width="800" height="600" fill={`url(#g-${tone})`} />
      <rect width="800" height="600" fill={`url(#dots-${tone})`} />

      <rect
        x="48"
        y="52"
        width="704"
        height="496"
        rx="14"
        fill={p.panel}
        opacity="0.96"
      />
      <rect
        x="48"
        y="52"
        width="704"
        height="54"
        rx="14"
        fill={p.accent}
        opacity="0.92"
      />
      <rect x="48" y="88" width="704" height="18" fill={p.accent} />

      <circle cx="78" cy="79" r="6" fill={p.panel} opacity="0.55" />
      <circle cx="98" cy="79" r="6" fill={p.panel} opacity="0.4" />
      <circle cx="118" cy="79" r="6" fill={p.panel} opacity="0.28" />
      <rect
        x="560"
        y="68"
        width="160"
        height="18"
        rx="4"
        fill={p.panel}
        opacity="0.28"
      />

      <rect x="78" y="140" width="260" height="18" rx="4" fill={p.ink} opacity="0.8" />
      <rect x="78" y="170" width="210" height="10" rx="3" fill={p.soft} />
      <rect x="78" y="188" width="180" height="10" rx="3" fill={p.soft} opacity="0.7" />
      <rect x="78" y="218" width="110" height="34" rx="8" fill={p.accent} />

      <rect
        x="400"
        y="140"
        width="320"
        height="220"
        rx="12"
        fill={p.bg}
        stroke={p.soft}
        strokeWidth="2"
      />
      <path
        d={`M400 320 L480 240 L540 285 L620 200 L720 300 L720 360 L400 360 Z`}
        fill={p.accent}
        opacity="0.22"
      />
      <circle cx="560" cy="210" r="28" fill={p.accent} opacity="0.35" />

      <rect x="78" y="300" width="140" height="100" rx="12" fill={p.bg} />
      <rect x="238" y="300" width="140" height="100" rx="12" fill={p.bg} />
      <rect x="98" y="325" width="100" height="10" rx="3" fill={p.soft} />
      <rect x="98" y="345" width="78" height="8" rx="3" fill={p.soft} opacity="0.7" />
      <rect x="258" y="325" width="100" height="10" rx="3" fill={p.soft} />
      <rect x="258" y="345" width="78" height="8" rx="3" fill={p.soft} opacity="0.7" />

      <rect x="78" y="450" width="642" height="60" rx="12" fill={p.ink} opacity="0.08" />
      <text
        x="100"
        y="486"
        fill={p.ink}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="18"
        fontWeight="600"
        opacity="0.7"
      >
        {label}
      </text>
      <text
        x="560"
        y="486"
        fill={p.accent}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="14"
        fontWeight="700"
        letterSpacing="1.5"
      >
        4:3 MOCKUP
      </text>
    </svg>
  );
}
