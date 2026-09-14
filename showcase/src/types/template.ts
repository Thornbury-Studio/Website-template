export type TemplateTier = "Tier 1" | "Tier 2" | "Tier 3";

export type MockupTone =
  | "slate"
  | "forest"
  | "sand"
  | "ink"
  | "rose"
  | "ocean"
  | "citrus"
  | "plum"
  | "stone";

export interface TemplateItem {
  id: string;
  name: string;
  description: string;
  tier: TemplateTier;
  tags: string[];
  previewUrl: string;
  thumbnailPlaceholder: "16 / 9";
  category: string;
  sitesCount: number;
  tone: MockupTone;
  accentLabel: string;
}

export type TierFilter = "All" | TemplateTier;
