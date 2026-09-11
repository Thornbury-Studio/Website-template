import Link from "next/link";
import { notFound } from "next/navigation";
import { BlankTemplateShell } from "@/components/preview/BlankTemplateShell";
import { getTemplateById, templates } from "@/data/templates";
import { TierBadge } from "@/components/gallery/TierBadge";

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
      <div className="sticky top-0 z-20 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_92%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              ← Back to gallery
            </Link>
            <span className="hidden h-4 w-px bg-[var(--line)] sm:block" />
            <p className="text-sm font-medium text-[var(--ink)]">{template.name}</p>
            <TierBadge tier={template.tier} />
          </div>
          <p className="text-xs tracking-wide text-[var(--muted)] uppercase">
            Blank shell · placeholder copy only
          </p>
        </div>
      </div>

      <BlankTemplateShell template={template} />
    </div>
  );
}
