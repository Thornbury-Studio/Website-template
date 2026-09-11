/* ===========================================================================
   Template Commons — the collection index.

   THIS IS THE ONLY FILE YOU EDIT TO ADD A TEMPLATE.

   Add one object to the array below, keep it alphabetical-by-slug or just
   append — the hub sorts by `added` date on its own. Then open a pull
   request. See CONTRIBUTING.md for the whole procedure.

   Every field:

     slug         required  Folder name under templates/. Lowercase letters,
                            digits and single hyphens only. Must match the
                            directory exactly — this is what builds the link.
     title        required  Display name. Any characters; it is escaped.
     description  required  One sentence. What the template is for, not how
                            clever it is.
     author       required  Your name or handle, however you want crediting.
     authorUrl    optional  Where "author" should link. https:// or http://
                            only; anything else is ignored.
     tags         optional  A few lowercase keywords. Shown as-is.
     added        optional  YYYY-MM-DD. Used for ordering, newest first.
                            Entries without a date sort last.
     thumb        optional  Path to a preview image, relative to the repo
                            root — normally
                            templates/<slug>/img/thumb.webp. Leave it out
                            and the card draws a placeholder instead. A
                            missing file also falls back to the placeholder,
                            so a broken path is never a broken card.

   A worked example, kept commented out on purpose so the collection ships
   honestly empty rather than with a fake entry in it:

     {
       slug: 'coastal-diner',
       title: 'Coastal Diner',
       description: 'A one-page site for a seaside restaurant, with a menu
                     and an opening-hours table.',
       author: 'Jane Okafor',
       authorUrl: 'https://github.com/janeokafor',
       tags: ['restaurant', 'one-page'],
       added: '2026-09-11',
       thumb: 'templates/coastal-diner/img/thumb.webp'
     }

   Why a plain script assigning a global, rather than JSON or an ES module:
   both of those are fetched over the network, and a contributor who just
   double-clicks index.html is on file:// where cross-origin rules block
   the fetch AND block ES module loading. Either one would render an empty
   page locally while working perfectly on the deployed site — the worst
   possible failure for someone checking their own work before opening a
   PR. A classic <script> has no such restriction.
   =========================================================================== */

window.TEMPLATES = [

  /* No templates yet. Yours can be the first — see CONTRIBUTING.md. */

];
