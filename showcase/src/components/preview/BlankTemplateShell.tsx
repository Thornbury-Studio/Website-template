import type { TemplateItem } from "@/types/template";
import { MockupArt } from "@/components/collections/MockupArt";

interface BlankTemplateShellProps {
  template: TemplateItem;
}

const FEATURES = [
  {
    title: "Clear hierarchy",
    body: "Headlines, sections, and CTAs stay easy to scan on any screen.",
  },
  {
    title: "Ready modules",
    body: "Swap in your copy, photos, and brand colors without rebuilding layout.",
  },
  {
    title: "Contact path",
    body: "A direct next step so visitors know what to do after browsing.",
  },
];

export function BlankTemplateShell({ template }: BlankTemplateShellProps) {
  const shortName = template.name.replace(/\s+(Shell|Frame|Kit|Framework|Skeleton)$/i, "");

  return (
    <div className="bg-transparent text-[var(--ink)]">
      <nav className="sticky top-[3.25rem] z-10 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_90%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#top" className="text-sm font-semibold text-[var(--ink)] no-underline hover:opacity-70">
            {shortName}
          </a>
          <div className="flex items-center gap-4 text-sm">
            <a href="#work" className="text-[var(--muted)] no-underline hover:text-[var(--ink)]">
              Work
            </a>
            <a href="#proof" className="text-[var(--muted)] no-underline hover:text-[var(--ink)]">
              Proof
            </a>
            <a
              href="#contact"
              className="rounded-full bg-[var(--ink)] px-3.5 py-1.5 text-white no-underline hover:opacity-90"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section id="top" className="border-b border-[var(--line)] scroll-mt-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-20">
          <div className="animate-[rise_700ms_ease-out]">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent-deep)] uppercase">
              {template.tier} · {template.category}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight sm:text-5xl">
              {shortName} for people who care how it feels.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {template.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex h-11 items-center rounded-full bg-[var(--ink)] px-5 text-sm text-white no-underline hover:opacity-90"
              >
                Start a project
              </a>
              <a
                href="#work"
                className="inline-flex h-11 items-center rounded-full border border-[var(--line)] bg-white px-5 text-sm text-[var(--muted)] no-underline hover:text-[var(--ink)]"
              >
                See the structure
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.25rem] border border-[var(--line)] bg-white shadow-[0_18px_40px_-28px_rgba(28,36,38,0.4)]">
            <div className="aspect-[16/10]">
              <MockupArt
                tone={template.tone}
                label={template.accentLabel}
                title={template.name}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-[var(--line)] scroll-mt-28">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent-deep)] uppercase">
            Built for {template.category.toLowerCase()}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight">
            What this shell already includes
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Sample sections you can keep, rename, or delete. Everything here is
            meant to be edited.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <a
                key={feature.title}
                href="#contact"
                className="rounded-[1.35rem] border border-[var(--line)] bg-white p-5 text-[var(--ink)] no-underline shadow-[0_14px_30px_-24px_rgba(28,36,38,0.35)] transition-transform hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--mist)] text-sm font-bold text-[var(--accent-deep)]">
                  {feature.title.slice(0, 1)}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {feature.body}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="border-b border-[var(--line)] bg-white/55 scroll-mt-28">
        <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
            Trusted by teams shipping {template.tags[0]} sites
          </h2>
          <p className="mt-3 max-w-xl text-[var(--muted)]">
            Placeholder numbers — replace with your own proof when you customize
            this shell.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { value: `${template.sitesCount}+`, label: "Sites using this pattern" },
              { value: template.score, label: "Preview score / 10" },
              { value: template.tier, label: "Collection tier" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.35rem] border border-[var(--line)] bg-white p-6"
              >
                <p className="font-[family-name:var(--font-display)] text-4xl tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              Ready to make this yours?
            </h2>
            <p className="mt-4 max-w-md text-[var(--muted)]">
              This is sample contact content. Wire it to your email, form, or
              booking link when you ship the real site.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href="mailto:hello@example.com"
                className="block text-[var(--accent-deep)] hover:text-[var(--ink)]"
              >
                hello@example.com
              </a>
              <a
                href="tel:+15550100"
                className="block text-[var(--accent-deep)] hover:text-[var(--ink)]"
              >
                +1 (555) 010-0100
              </a>
              <p className="text-[var(--muted)]">Your city · Remote friendly</p>
            </div>
            <a
              href="mailto:hello@example.com?subject=Project%20inquiry"
              className="mt-8 inline-flex h-11 items-center rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-white no-underline hover:opacity-90"
            >
              Email this inquiry
            </a>
          </div>
          <form
            className="rounded-[1.35rem] border border-[var(--line)] bg-white p-6 shadow-[0_14px_30px_-24px_rgba(28,36,38,0.35)]"
            action="mailto:hello@example.com"
            method="get"
            encType="text/plain"
          >
            <label className="block text-sm font-medium text-[var(--ink)]">
              Name
              <input
                name="name"
                required
                className="mt-1.5 h-11 w-full rounded-xl border border-[var(--line)] px-3 text-sm outline-none focus:border-[var(--ink)]"
                placeholder="Alex Rivera"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-[var(--ink)]">
              Email
              <input
                name="email"
                type="email"
                required
                className="mt-1.5 h-11 w-full rounded-xl border border-[var(--line)] px-3 text-sm outline-none focus:border-[var(--ink)]"
                placeholder="alex@studio.com"
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-[var(--ink)]">
              Message
              <textarea
                name="message"
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-[var(--line)] px-3 py-2.5 text-sm outline-none focus:border-[var(--ink)]"
                placeholder="Tell me about the project…"
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-[var(--ink)] text-sm font-semibold text-white hover:opacity-90"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
