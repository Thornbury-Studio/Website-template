"use client";

export function CollectionsMarquee() {
  const items = [
    "Fresh frosting UI",
    "Soft click feedback",
    "Bite to open preview",
    "Cupcake tier flavors",
    "Copyright-free mockups",
    "Mint base #EBF6F7",
  ];
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--accent-soft)_55%,var(--paper))]">
      <div className="flex w-max animate-marquee gap-10 py-2.5 pr-10 whitespace-nowrap">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-[11px] font-medium tracking-[0.18em] text-[var(--muted)] uppercase"
          >
            <span className="mr-10 text-[var(--accent)]">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
