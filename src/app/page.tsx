import { GalleryHero } from "@/components/gallery/GalleryHero";
import { TemplateGallery } from "@/components/gallery/TemplateGallery";
import { templates } from "@/data/templates";

export default function Home() {
  return (
    <main className="flex-1">
      <GalleryHero />
      <TemplateGallery templates={templates} />
      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Website Templates · client showcase shell</p>
          <p>Dummy data only · no live client content</p>
        </div>
      </footer>
    </main>
  );
}
