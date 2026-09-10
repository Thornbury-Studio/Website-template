/* Template Commons — renders the collection from js/templates.js.

   ONE RULE SHAPES THIS FILE: the data it reads is untrusted.

   `templates.js` is the file the whole project invites strangers to edit —
   that is the entire point of a commons. So every value out of it is put on
   the page with createElement/textContent and never with innerHTML, and
   every URL is checked before it reaches an href or a src. A reviewer
   skimming a pull request that adds one entry to a data file should not
   also have to be the last line of defence against a <script> in a title
   or a `javascript:` in an author link. Escaping here means a malicious
   entry is ugly text, not executable.

   A malformed entry is skipped and reported to the console rather than
   thrown, because one bad object in the array must not blank the whole
   collection for everybody else. */

(function (root, doc) {
  'use strict';

  var SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  var PLACEHOLDER = 'img/placeholder.svg';

  function el(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = String(text);
    return n;
  }

  /* Only http(s) survives. This is what stops `javascript:alert(1)` in an
     authorUrl from becoming a live link the moment the PR is merged. */
  function safeUrl(value) {
    if (typeof value !== 'string' || !value) return null;
    try {
      var u = new URL(value, root.location.href);
      return (u.protocol === 'http:' || u.protocol === 'https:') ? u.href : null;
    } catch (e) {
      return null;
    }
  }

  function valid(entry, index) {
    function bad(why) {
      if (root.console && console.warn) {
        console.warn('Template Commons: skipping entry ' + index + ' — ' + why);
      }
      return false;
    }
    if (!entry || typeof entry !== 'object') return bad('not an object.');
    if (typeof entry.slug !== 'string' || !SLUG.test(entry.slug)) {
      return bad('slug must be lowercase letters, digits and single hyphens.');
    }
    if (typeof entry.title !== 'string' || !entry.title.trim()) return bad('missing title.');
    if (typeof entry.description !== 'string' || !entry.description.trim()) return bad('missing description.');
    if (typeof entry.author !== 'string' || !entry.author.trim()) return bad('missing author.');
    return true;
  }

  /* Newest first; anything undated goes to the back rather than to the
     front, so forgetting the field costs you the top slot instead of
     silently claiming it. */
  function byDate(a, b) {
    var x = typeof a.added === 'string' ? a.added : '';
    var y = typeof b.added === 'string' ? b.added : '';
    if (x === y) return a.slug.localeCompare(b.slug);
    if (!x) return 1;
    if (!y) return -1;
    return y.localeCompare(x);
  }

  /* The card is an <article>, not one giant <a>.

     An author can supply their own link, and an anchor cannot legally
     contain another anchor — browsers silently un-nest them, which breaks
     the card's own link rather than the author's. So the title carries the
     real link and a stretched ::after pseudo-element extends its hit area
     over the whole card, with the author link raised above it. Same
     whole-card click target, two genuinely separate destinations, and it
     still reads as two links to a screen reader instead of one link with a
     confusing accessible name. */
  function card(entry) {
    var art = el('article', 'card');

    var shot = el('div', 'card__shot');
    var img = doc.createElement('img');
    img.alt = '';                     /* decorative: the title carries the name */
    img.loading = 'lazy';
    img.decoding = 'async';
    img.width = 640;
    img.height = 400;

    var thumb = typeof entry.thumb === 'string' && entry.thumb ? entry.thumb : null;
    /* A thumbnail path is repo-relative, so it must not be allowed to point
       off-site; and a path that 404s falls back rather than putting a
       broken-image icon on the front door. */
    if (thumb && !/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(thumb) && thumb.indexOf('//') !== 0) {
      img.src = thumb;
      img.addEventListener('error', function () {
        if (img.getAttribute('src') !== PLACEHOLDER) {
          img.src = PLACEHOLDER;
          shot.classList.add('card__shot--placeheld');
        }
      });
    } else {
      img.src = PLACEHOLDER;
      shot.classList.add('card__shot--placeheld');
    }
    shot.appendChild(img);
    art.appendChild(shot);

    var body = el('div', 'card__body');

    var h3 = el('h3', 'card__title');
    var link = el('a', 'card__link', entry.title);
    link.href = 'templates/' + entry.slug + '/index.html';
    h3.appendChild(link);
    body.appendChild(h3);

    body.appendChild(el('p', 'card__desc', entry.description));

    var meta = el('p', 'card__meta');
    var url = safeUrl(entry.authorUrl);
    if (url) {
      var by = el('a', 'card__by', entry.author);
      by.href = url;
      by.rel = 'noopener noreferrer';
      meta.appendChild(by);
    } else {
      meta.appendChild(el('span', 'card__by', entry.author));
    }

    if (Array.isArray(entry.tags) && entry.tags.length) {
      var tags = entry.tags
        .filter(function (t) { return typeof t === 'string' && t.trim(); })
        .slice(0, 4);
      if (tags.length) meta.appendChild(el('span', 'card__tags', tags.join(' · ')));
    }
    body.appendChild(meta);

    art.appendChild(body);
    return art;
  }

  function start() {
    var grid = doc.getElementById('grid');
    var empty = doc.getElementById('empty');
    var count = doc.getElementById('count');
    if (!grid || !empty) return;

    var list = Array.isArray(root.TEMPLATES) ? root.TEMPLATES : [];
    if (!Array.isArray(root.TEMPLATES) && root.console && console.warn) {
      console.warn('Template Commons: js/templates.js did not define an array.');
    }

    var entries = list.filter(valid).sort(byDate);

    if (count) {
      count.textContent = entries.length === 0 ? 'none yet'
        : entries.length === 1 ? '1 template'
        : entries.length + ' templates';
    }

    if (!entries.length) {
      /* The empty state is already in the HTML and is the honest default —
         this repo really does ship with nothing in it. Nothing to do but
         leave it alone. */
      return;
    }

    var frag = doc.createDocumentFragment();
    for (var i = 0; i < entries.length; i++) frag.appendChild(card(entries[i]));
    grid.appendChild(frag);
    grid.hidden = false;
    empty.hidden = true;
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', start);
  else start();

})(window, document);
