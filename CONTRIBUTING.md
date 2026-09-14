# Contributing

Add a folder. Add one data entry. Open a PR.

## 1. Folder

```
templates/your-slug/
├── index.html
├── css/
├── js/
└── img/
```

Slug: lowercase letters, digits, single hyphens. Must match the `slug` field.

## 2. Self-contained

Everything your template needs stays in that folder. No build step. No shared deps. CDN or vendored libs are fine.

Optional thumb: `templates/your-slug/img/thumb.webp` (~640×400).

## 3. One entry in `js/templates.js`

```js
{
  slug:        'your-slug',
  title:       'Your Template',
  description: 'One sentence about what it is for.',
  author:      'Your Name',
  authorUrl:   'https://github.com/yourhandle',
  tags:        ['portfolio', 'one-page'],
  added:       '2026-01-31',
  thumb:       'templates/your-slug/img/thumb.webp'
}
```

Required: `slug`, `title`, `description`, `author`. Then open a PR.

## Rejected when

- Not self-contained / needs a build
- Edits the hub beyond the one data entry
- You don’t have rights to the assets
- Slug mismatch or collision
- `index.html` doesn’t open

License your own work in the folder if you want specific terms.
