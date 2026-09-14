import Link from "next/link";
import { notFound } from "next/navigation";
import { BlankTemplateShell } from "@/components/preview/BlankTemplateShell";
import { getTemplateById, templates } from "@/data/templates";

interface PreviewPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return templates.map((template) => ({ id: template.id }));
}

export async function generateMetadata({ params }: PreviewPageProps) {
  const { id } = await params;
  const template = getTemplateById(id);
  if (!template) {
    return { title: "Template Preview" };
  }
  return {
    title: `${template.name} · Blank Preview`,
    description: `Wireframe preview shell for ${template.name}`,
  };
}

export default async function TemplatePreviewPage({ params }: PreviewPageProps) {
  const { id } = await params;
  const template = getTemplateById(id);

  if (!template) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <div className="sticky top-0 z-20 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_90%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-5 py-3.5 sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-2xl px-2 py-1 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent-deep)]"
            >
              ← Collections
            </Link>
            <span className="hidden h-4 w-px bg-[var(--line)] sm:block" />
            <p className="text-sm font-medium text-[var(--ink)]">{template.name}</p>
            <span className="rounded-xl bg-[var(--accent-soft)] px-2 py-1 text-[11px] font-semibold tracking-wide text-[var(--accent-deep)] uppercase">
              {template.tier}
            </span>
          </div>
          <a
            href="/"
            className="text-xs tracking-wide text-[var(--muted)] uppercase transition-colors hover:text-[var(--ink)]"
          >
            Template Commons
          </a>
        </div>
      </div>

      <BlankTemplateShell template={template} />
    </div>
  );
}
