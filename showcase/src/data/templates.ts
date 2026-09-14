import type { TemplateItem } from "@/types/template";

export const templates: TemplateItem[] = [
  {
    id: "minimalist-portfolio-shell",
    name: "Minimalist Portfolio Shell",
    description:
      "Quiet single-page frame for work samples, bio, and a direct contact path.",
    tier: "Tier 1",
    tags: ["portfolio", "minimal", "personal"],
    previewUrl: "/templates/preview/minimalist-portfolio-shell",
    thumbnailPlaceholder: "16 / 9",
    category: "Personal",
    sitesCount: 12,
    tone: "slate",
    accentLabel: "Portfolio",
  },
  {
    id: "local-services-landing",
    name: "Local Services Landing",
    description:
      "Compact service landing with hero offer, proof strip, and inquiry CTA.",
    tier: "Tier 1",
    tags: ["landing", "services", "local"],
    previewUrl: "/templates/preview/local-services-landing",
    thumbnailPlaceholder: "16 / 9",
    category: "Services",
    sitesCount: 18,
    tone: "forest",
    accentLabel: "Services",
  },
  {
    id: "studio-brand-kit",
    name: "Studio Brand Kit Site",
    description:
      "Agency presentation shell for brand story, capabilities, and lead capture.",
    tier: "Tier 2",
    tags: ["agency", "brand", "studio"],
    previewUrl: "/templates/preview/studio-brand-kit",
    thumbnailPlaceholder: "16 / 9",
    category: "Agency",
    sitesCount: 24,
    tone: "sand",
    accentLabel: "Studio",
  },
  {
    id: "saas-standard-framework",
    name: "SaaS Standard Framework",
    description:
      "Product marketing shell with feature grid, social proof, and conversion CTA.",
    tier: "Tier 2",
    tags: ["saas", "product", "marketing"],
    previewUrl: "/templates/preview/saas-standard-framework",
    thumbnailPlaceholder: "16 / 9",
    category: "Product",
    sitesCount: 31,
    tone: "ink",
    accentLabel: "SaaS",
  },
  {
    id: "editorial-magazine-frame",
    name: "Editorial Magazine Frame",
    description:
      "Typography-led layout for feature stories, issue indexes, and subscribe CTA.",
    tier: "Tier 2",
    tags: ["editorial", "magazine", "content"],
    previewUrl: "/templates/preview/editorial-magazine-frame",
    thumbnailPlaceholder: "16 / 9",
    category: "Editorial",
    sitesCount: 16,
    tone: "rose",
    accentLabel: "Editorial",
  },
  {
    id: "enterprise-portal-skeleton",
    name: "Enterprise Portal Skeleton",
    description:
      "Structured multi-section shell for larger orgs needing clarity and contact.",
    tier: "Tier 3",
    tags: ["enterprise", "portal", "corporate"],
    previewUrl: "/templates/preview/enterprise-portal-skeleton",
    thumbnailPlaceholder: "16 / 9",
    category: "Enterprise",
    sitesCount: 21,
    tone: "ocean",
    accentLabel: "Enterprise",
  },
  {
    id: "commerce-catalog-frame",
    name: "Commerce Catalog Frame",
    description:
      "Catalog-ready shell with merchandising hero, highlights, and checkout CTA.",
    tier: "Tier 3",
    tags: ["commerce", "catalog", "retail"],
    previewUrl: "/templates/preview/commerce-catalog-frame",
    thumbnailPlaceholder: "16 / 9",
    category: "Commerce",
    sitesCount: 27,
    tone: "citrus",
    accentLabel: "Commerce",
  },
  {
    id: "hospitality-experience-shell",
    name: "Hospitality Experience Shell",
    description:
      "Atmosphere-first shell for stays, menus, and reservation pathways.",
    tier: "Tier 3",
    tags: ["hospitality", "experience", "booking"],
    previewUrl: "/templates/preview/hospitality-experience-shell",
    thumbnailPlaceholder: "16 / 9",
    category: "Hospitality",
    sitesCount: 14,
    tone: "plum",
    accentLabel: "Hospitality",
  },
  {
    id: "nonprofit-campaign-kit",
    name: "Nonprofit Campaign Kit",
    description:
      "Cause-led shell with impact stats, story blocks, and donation CTA.",
    tier: "Tier 1",
    tags: ["nonprofit", "campaign", "impact"],
    previewUrl: "/templates/preview/nonprofit-campaign-kit",
    thumbnailPlaceholder: "16 / 9",
    category: "Nonprofit",
    sitesCount: 19,
    tone: "stone",
    accentLabel: "Impact",
  },
];

export function getTemplateById(id: string): TemplateItem | undefined {
  return templates.find((item) => item.id === id);
}
