"use client";

export function CollectionsMarquee() {
  const items = [
    "Curated template shells",
    "Tier-based browsing",
    "Blank wireframe previews",
    "No live client content",
    "Original SVG mockups",
    "Shared mint design system",
  ];
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-b border-[var(--line)] bg-white/50">
      <div className="flex w-max animate-marquee gap-10 py-2.5 pr-10 whitespace-nowrap">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-[11px] font-medium tracking-[0.16em] text-[var(--muted)] uppercase"
          >
            <span className="mr-10 text-[var(--accent)]">●</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
