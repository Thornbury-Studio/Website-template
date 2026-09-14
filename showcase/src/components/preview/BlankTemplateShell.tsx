import type { TemplateItem } from "@/types/template";
import { WireframeBox } from "./WireframeBox";

interface BlankTemplateShellProps {
  template: TemplateItem;
}

export function BlankTemplateShell({ template }: BlankTemplateShellProps) {
  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">
      <section className="border-b border-[var(--line)]">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-20">
          <div className="animate-[rise_700ms_ease-out]">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
              [{template.tier} · {template.category}]
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight sm:text-5xl">
              [Headline Here]
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              [Subheading describing value proposition]
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex h-11 items-center rounded-xl bg-[var(--ink)] px-5 text-sm text-[var(--paper)]">
                [Primary CTA]
              </span>
              <span className="inline-flex h-11 items-center rounded-xl border border-[var(--line)] px-5 text-sm text-[var(--muted)]">
                [Secondary CTA]
              </span>
            </div>
          </div>
          <WireframeBox
            label="Hero Media Placeholder"
            dimensions="Recommended 1200 × 675 (16:9)"
            className="rounded-[1.25rem]"
          />
        </div>
      </section>

      <section className="border-b border-[var(--line)]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
            [Section Label]
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight">
            [Features Section Title]
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            [Short supporting sentence about product or service features]
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="rounded-[1.25rem] bg-[var(--surface)] p-5 ring-1 ring-[var(--line)]"
              >
                <WireframeBox
                  label={`Feature Icon ${index}`}
                  dimensions="Recommended 80 × 80"
                  aspectRatio="1 / 1"
                  className="max-w-[5rem] rounded-xl"
                />
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl">
                  [Feature Title {index}]
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  [Feature description placeholder text goes here]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[var(--mist)]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">
            [Social Proof Headline]
          </h2>
          <p className="mt-3 max-w-xl text-[var(--muted)]">
            [Placeholder line about trust, results, or customer outcomes]
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { value: "[00+]", label: "[Stat Label]" },
              { value: "[00%]", label: "[Stat Label]" },
              { value: "[0.0×]", label: "[Stat Label]" },
            ].map((stat) => (
              <div
                key={stat.value}
                className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface)] p-6"
              >
                <p className="font-[family-name:var(--font-display)] text-4xl tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <WireframeBox
              label="Logo / Testimonial Strip Placeholder"
              dimensions="Recommended 1100 × 120"
              aspectRatio="11 / 1.2"
              className="rounded-[1.25rem]"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              [Contact / CTA Headline]
            </h2>
            <p className="mt-4 max-w-md text-[var(--muted)]">
              [Call-to-action supporting copy inviting the visitor to continue]
            </p>
            <div className="mt-8 space-y-3 text-sm text-[var(--muted)]">
              <p>[email@placeholder.com]</p>
              <p>[(000) 000-0000]</p>
              <p>[City, Region]</p>
            </div>
            <span className="mt-8 inline-flex h-11 items-center rounded-xl bg-[var(--accent)] px-5 text-sm font-medium text-white">
              [Submit Inquiry]
            </span>
          </div>
          <WireframeBox
            label="Contact Form / Map Placeholder"
            dimensions="Recommended 640 × 480 (4:3)"
            aspectRatio="4 / 3"
            className="rounded-[1.25rem]"
          />
        </div>
      </section>
    </div>
  );
}
