import type { TemplateItem } from "@/types/template";

export const templates: TemplateItem[] = [
  {
    id: "minimalist-portfolio-shell",
    name: "Minimalist Portfolio Shell",
    description:
      "A clean single-page shell for showcasing work samples, bio, and contact paths.",
    tier: "Tier 1",
    tags: ["portfolio", "minimal", "personal"],
    previewUrl: "/templates/preview/minimalist-portfolio-shell",
    thumbnailPlaceholder: "16 / 9",
  },
  {
    id: "local-services-landing",
    name: "Local Services Landing",
    description:
      "Compact landing layout for service businesses with hero, offers, and inquiry CTA.",
    tier: "Tier 1",
    tags: ["landing", "services", "local"],
    previewUrl: "/templates/preview/local-services-landing",
    thumbnailPlaceholder: "16 / 9",
  },
  {
    id: "saas-standard-framework",
    name: "SaaS Standard Framework",
    description:
      "Product-oriented shell with feature grid, social proof strip, and conversion CTA.",
    tier: "Tier 2",
    tags: ["saas", "product", "marketing"],
    previewUrl: "/templates/preview/saas-standard-framework",
    thumbnailPlaceholder: "16 / 9",
  },
  {
    id: "studio-brand-kit",
    name: "Studio Brand Kit Site",
    description:
      "Agency-style presentation shell for brand story, capability blocks, and lead capture.",
    tier: "Tier 2",
    tags: ["agency", "brand", "studio"],
    previewUrl: "/templates/preview/studio-brand-kit",
    thumbnailPlaceholder: "16 / 9",
  },
  {
    id: "enterprise-portal-skeleton",
    name: "Enterprise Portal Skeleton",
    description:
      "Structured multi-section shell for larger orgs needing clarity across offers and contact.",
    tier: "Tier 3",
    tags: ["enterprise", "portal", "corporate"],
    previewUrl: "/templates/preview/enterprise-portal-skeleton",
    thumbnailPlaceholder: "16 / 9",
  },
  {
    id: "commerce-catalog-frame",
    name: "Commerce Catalog Frame",
    description:
      "Catalog-ready shell with hero merchandising zone, feature highlights, and CTA footer.",
    tier: "Tier 3",
    tags: ["commerce", "catalog", "retail"],
    previewUrl: "/templates/preview/commerce-catalog-frame",
    thumbnailPlaceholder: "16 / 9",
  },
];

export function getTemplateById(id: string): TemplateItem | undefined {
  return templates.find((item) => item.id === id);
}
