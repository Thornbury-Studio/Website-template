# Contributing a template

You do not need permission, and you do not need to ask first. Add a folder,
add one line of data, open a pull request.

This document assumes you have never seen this repository before.

---

## The whole thing in three steps

### 1. Create your folder

```
templates/your-slug/
├── index.html
├── css/
├── js/
└── img/
```

`your-slug` becomes the URL and must be **lowercase letters, digits and
single hyphens** — `coastal-diner`, `invoice-2`, `studio-nine`. Not
`Coastal_Diner`, not `coastal--diner`, not a trailing hyphen. The hub checks
this and silently skips an entry whose slug is malformed, so a typo here
costs you a listing rather than breaking the page.

The folder name and the `slug` field in step 3 must match exactly.

### 2. Keep it self-contained

This is the only rule that really matters, and it is the reason the
collection can grow without turning into a maintenance problem.

**Everything your template needs lives inside your own folder.**

- No build step, no bundler, no npm install. A visitor downloads your folder
  and opens `index.html` and it works.
- Do not reference another template's CSS, JS, images or fonts. Not even a
  small utility file. If two templates need the same thing, each keeps its
  own copy.
- Do not add anything to the repository root, and do not modify the hub
  (`index.html`, `css/`, `js/main.js`) — the one exception is the data entry
  in step 3.
- Third-party libraries are fine. Either vendor a copy into your `js/` or
  load it from a public CDN with a pinned version. Do not rely on a package
  manager.
- Web fonts are fine from Google Fonts or a similar host, or self-hosted in
  your folder.

If you want a preview image on your card, save it as
`templates/your-slug/img/thumb.webp` at roughly **640×400**. It is optional;
without one your card draws a placeholder, which is a perfectly normal thing
for a card to do here.

### 3. Add one entry to `js/templates.js`

This is the only file outside your folder that you touch. Append an object to
the array:

```js
window.TEMPLATES = [

  {
    slug:        'your-slug',
    title:       'Your Template',
    description: 'One sentence about what it is for.',
    author:      'Your Name',
    authorUrl:   'https://github.com/yourhandle',      // optional
    tags:        ['portfolio', 'one-page'],            // optional
    added:       '2026-01-31',                         // optional, YYYY-MM-DD
    thumb:       'templates/your-slug/img/thumb.webp'  // optional
  }

];
```

| Field | | What it is |
|---|---|---|
| `slug` | required | Must match your folder name exactly. Builds the link. |
| `title` | required | Display name. Any characters — it is escaped, not injected. |
| `description` | required | One sentence. What it is *for*, not how clever it is. |
| `author` | required | Your name or handle, however you want crediting. |
| `authorUrl` | optional | Where your name links. `http://` or `https://` only; anything else is ignored. |
| `tags` | optional | A few lowercase keywords. First four are shown. |
| `added` | optional | `YYYY-MM-DD`. Orders the list, newest first. Undated entries sort last. |
| `thumb` | optional | Repo-relative path to a preview image. A missing file falls back to the placeholder. |

Then open a pull request with your folder and that one entry in it.

---

## Checking your work before you open the PR

Open `index.html` in a browser. You can literally double-click it — the
collection data is a plain script rather than a JSON file precisely so that
this works from `file://` without a server. If you would rather serve it:

```bash
python -m http.server 8000
```

Your card should appear in **The collection**. If it does not, open the
browser console: a malformed entry is skipped with a message naming the
index in the array and what was wrong with it. One bad entry never blanks
the list for everybody else, so a silent absence is nearly always your own
entry being rejected.

---

## What gets a pull request rejected

Short list, and none of it is about taste:

- **It is not self-contained.** It reaches outside its folder, or it needs a
  build step to run.
- **It edits the hub.** Anything beyond the one data entry.
- **It is not yours to give.** Do not contribute work you do not hold the
  rights to, and do not ship a paid template, stock photo or licensed font
  you have not licensed for redistribution. Placeholder or openly licensed
  assets only.
- **The slug does not match the folder**, or collides with an existing one.
- **It does not open.** `index.html` throws, 404s its own stylesheet, or
  renders blank.

Nobody is going to reject your template for being plain, small, or
unfashionable. A working two-page site with honest markup is worth more here
than something ambitious that only half runs.

---

## Licensing

Each template belongs to whoever wrote it. If you want particular terms on
yours, put a `LICENSE` file in your own folder — otherwise a reader has to
assume they cannot reuse it. The hub itself makes no claim over your work.
