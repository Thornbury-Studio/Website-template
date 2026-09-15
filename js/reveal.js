/* Staggered card reveal — motion 3 of the hub set. */
(function (root, doc) {
  "use strict";

  var reduce = root.matchMedia("(prefers-reduced-motion: reduce)");
  var nodes = doc.querySelectorAll(".reveal");
  if (!nodes.length) return;

  if (reduce.matches || !("IntersectionObserver" in root)) {
    for (var i = 0; i < nodes.length; i++) nodes[i].classList.add("is-in");
    return;
  }

  for (var j = 0; j < nodes.length; j++) {
    nodes[j].style.setProperty("--reveal-i", String(j % 6));
  }

  var io = new IntersectionObserver(
    function (entries) {
      for (var k = 0; k < entries.length; k++) {
        if (entries[k].isIntersecting) {
          entries[k].target.classList.add("is-in");
          io.unobserve(entries[k].target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  for (var n = 0; n < nodes.length; n++) io.observe(nodes[n]);
})(window, document);
