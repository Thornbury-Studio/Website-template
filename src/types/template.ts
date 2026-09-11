export type TemplateTier = "Tier 1" | "Tier 2" | "Tier 3";

export interface TemplateItem {
  id: string;
  name: string;
  description: string;
  tier: TemplateTier;
  tags: string[];
  previewUrl: string;
  /** CSS aspect-ratio value; gallery thumbnails use 16:9 */
  thumbnailPlaceholder: "16 / 9";
}

export type TierFilter = "All" | TemplateTier;
