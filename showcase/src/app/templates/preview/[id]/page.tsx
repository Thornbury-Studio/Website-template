import Link from "next/link";
import { notFound } from "next/navigation";
import { BlankTemplateShell } from "@/components/preview/BlankTemplateShell";
import { getTemplateById, templates, tierBadge } from "@/data/templates";

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

  const badge = tierBadge(template.tier);

  return (
    <div className="min-h-screen bg-[#f4f6f7]">
      <div className="sticky top-0 z-20 border-b border-[#e4e4e4] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1480px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-md px-2 py-1 text-sm text-[#666] transition-colors hover:bg-[#f0f0f0] hover:text-[#111]"
            >
              ← Templates
            </Link>
            <span className="hidden h-4 w-px bg-[#e0e0e0] sm:block" />
            <p className="truncate text-sm font-semibold text-[#111]">
              {template.name}
            </p>
            <span className="rounded-[3px] border border-[#d8d8d8] px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#555] uppercase">
              {badge}
            </span>
          </div>
          <a
            href="/"
            className="text-xs font-medium tracking-wide text-[#888] uppercase transition-colors hover:text-[#111]"
          >
            Template Commons
          </a>
        </div>
      </div>

      <div className="border-b border-[#e4e4e4] bg-white px-4 py-10 text-center sm:px-6 sm:py-14">
        <p className="text-xs tracking-[0.1em] text-[#888] uppercase">
          Blank wireframe · {template.tier}
        </p>
        <h1 className="mx-auto mt-3 max-w-4xl text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-[#111] uppercase">
          {template.name}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-[#666]">
          {template.description}
        </p>
      </div>

      <BlankTemplateShell template={template} />
    </div>
  );
}
