interface WireframeBoxProps {
  label: string;
  dimensions: string;
  className?: string;
  aspectRatio?: string;
}

export function WireframeBox({
  label,
  dimensions,
  className = "",
  aspectRatio = "16 / 9",
}: WireframeBoxProps) {
  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center gap-1.5 overflow-hidden rounded-[1.25rem] border border-dashed border-[var(--wire-line)] bg-[linear-gradient(160deg,var(--wire)_0%,#fde8ee_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={`${label}, recommended ${dimensions}`}
    >
      <svg
        className="absolute inset-0 h-full w-full text-[var(--wire-line)] opacity-70"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="100%"
          y1="0"
          x2="0"
          y2="100%"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <span className="relative z-10 text-center text-xs font-semibold tracking-[0.08em] text-[var(--muted)] uppercase">
        {label}
      </span>
      <span className="relative z-10 text-center text-[11px] text-[var(--muted)]">
        {dimensions}
      </span>
    </div>
  );
}
