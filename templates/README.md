# templates/

One folder per template. Nothing else lives here.

```
templates/
└── your-slug/
    ├── index.html      the template's own entry point
    ├── css/
    ├── js/
    └── img/
```

**The convention, in full:**

- The folder name is the slug: lowercase letters, digits and single hyphens
  (`coastal-diner`, `studio-nine`, `invoice-2`). It must match the `slug`
  field of that template's entry in `../js/templates.js` exactly, because
  that is what builds the link.
- Each template is **completely self-contained**. Its own HTML, its own CSS,
  its own JS, its own images. No shared stylesheet, no shared utility file,
  no importing across folders — if two templates need the same thing, each
  keeps a copy.
- **No build step.** Plain HTML, CSS and JavaScript. Someone should be able
  to download this one folder, open `index.html`, and have it work. Third-
  party libraries are fine vendored in or pinned from a CDN; a `package.json`
  that has to be installed is not.
- An optional `img/thumb.webp` at roughly 640×400 becomes the preview on the
  hub. Without one the card draws a placeholder, which is fine.
- Optional `LICENSE` in your folder if you want specific terms on your own
  work.

This directory is empty on purpose. The collection ships with nothing in it
rather than with an example pretending to be a real entry — a worked example
lives commented out at the top of `../js/templates.js` instead.

Full instructions: [../CONTRIBUTING.md](../CONTRIBUTING.md)
