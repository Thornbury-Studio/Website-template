# Website Templates

Client-facing showcase shell for browsing website template tiers. Dummy data only — no live client content.

**Production:** https://website-template-sooty-eight.vercel.app  
`main` auto-deploys on Vercel.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
  types/template.ts          # TemplateItem + tier types
  data/templates.ts          # 6 dummy templates (2 per tier)
  components/
    gallery/                 # Hero, filters, cards, gallery
    preview/                 # Blank wireframe shell
  app/
    page.tsx                 # Gallery home
    templates/preview/[id]/ # Standardized blank preview
```

## Preview route

`/templates/preview/[id]` — Hero, Features, Social Proof/Stats, Contact/CTA with grey placeholders and bracketed copy only.
