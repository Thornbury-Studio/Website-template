import type { TemplateTier } from "@/types/template";

const tierStyles: Record<TemplateTier, string> = {
  "Tier 1": "bg-[var(--tier-1-bg)] text-[var(--tier-1-fg)]",
  "Tier 2": "bg-[var(--tier-2-bg)] text-[var(--tier-2-fg)]",
  "Tier 3": "bg-[var(--tier-3-bg)] text-[var(--tier-3-fg)]",
};

interface TierBadgeProps {
  tier: TemplateTier;
}

export function TierBadge({ tier }: TierBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase ${tierStyles[tier]}`}
    >
      {tier}
    </span>
  );
}
