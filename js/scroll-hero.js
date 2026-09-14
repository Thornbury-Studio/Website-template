/* Scroll Zoom Hero–style backdrop: scale + soften + fade on scroll.
   Foreground UI stays sharp. Inspired by Motion's Scroll Zoom Hero pattern. */
(function (root, doc) {
  "use strict";

  var bg = doc.querySelector(".bg-scape");
  var hero = doc.querySelector(".hero");
  if (!bg || !hero) return;

  var reduce = root.matchMedia("(prefers-reduced-motion: reduce)");
  var ticking = false;

  function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
  }

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 2);
  }

  function update() {
    ticking = false;
    if (reduce.matches) {
      bg.style.setProperty("--bg-zoom", "1");
      bg.style.setProperty("--bg-fade", "1");
      bg.style.setProperty("--bg-soft", "0px");
      bg.style.setProperty("--bg-veil", "0.35");
      return;
    }

    var range = Math.max(hero.offsetHeight * 0.9, root.innerHeight * 0.65);
    var p = easeOut(clamp(root.scrollY / range, 0, 1));

    bg.style.setProperty("--bg-zoom", String(1 + p * 0.14));
    bg.style.setProperty("--bg-fade", String(1 - p * 0.42));
    bg.style.setProperty("--bg-soft", (p * 10).toFixed(2) + "px");
    bg.style.setProperty("--bg-veil", String(0.28 + p * 0.52));
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      root.requestAnimationFrame(update);
    }
  }

  root.addEventListener("scroll", onScroll, { passive: true });
  root.addEventListener("resize", onScroll, { passive: true });
  if (typeof reduce.addEventListener === "function") {
    reduce.addEventListener("change", update);
  }
  update();
})(window, document);
