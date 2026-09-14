# Template Commons

An open collection of self-contained website templates.

Every template here is one folder of plain HTML, CSS and JavaScript. No build
step, no framework, no shared dependencies between templates — download a
folder and it runs. Anyone can add one.

**The collection is currently empty.** This repository is the hub, the
convention and an empty `templates/` directory waiting for a first entry.

## What's here

| Path | What it is |
|---|---|
| `index.html` | The hub. Lists whatever is in `js/templates.js`. |
| `js/templates.js` | **The collection index — the one file you edit to add a template.** |
| `js/main.js` | Renders the list. Treats the data file as untrusted input. |
| `css/style.css` | The hub's styles. |
| `img/placeholder.svg` | Stand-in preview for templates without a thumbnail. |
| `templates/` | One folder per template. Empty for now. |
| `CONTRIBUTING.md` | How to add one, written for someone who has never seen this repo. |

## Adding a template

Three steps: create `templates/your-slug/`, keep everything it needs inside
that folder, append one object to the array in `js/templates.js`. Then open a
pull request.

Read [CONTRIBUTING.md](CONTRIBUTING.md) — it is short, and it is the whole
agreement.

## Running it locally

There is nothing to install and nothing to build. Double-click `index.html`,
or serve the directory if you prefer:

```bash
python -m http.server 8000
```

The collection data is a plain script that assigns a global rather than a
JSON file fetched at runtime, specifically so that opening the page from
`file://` works. A `fetch()` — and an ES module — would both be blocked by
cross-origin rules there, and would render an empty page locally while
working fine once deployed. That is the worst possible failure to hand
somebody checking their own contribution.

## Client showcase (optional sibling)

`showcase/` is a separate Next.js collections gallery inspired by curated
inspiration boards. It does **not** replace Template Commons.

- Hub (this site): `/`
- Showcase gallery: `/showcase/`

Includes search, tier filters, motion, and original copyright-free SVG mockups.

Build both together with `npm run build` (outputs `dist/`).

## Deployment

The `main` branch deploys automatically to
<https://website-template-sooty-eight.vercel.app> — a merged pull request
goes live on its own, with no manual step.

Vercel builds with `npm run build` and publishes `dist/`: Template Commons
at the root, plus the showcase app under `/showcase/`.
