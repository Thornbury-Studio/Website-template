/* Scroll Zoom Hero–style backdrop: scale + soften + fade on scroll.
   Foreground UI stays sharp. Inspired by Motion's Scroll Zoom Hero pattern. */
(function (root, doc) {
  "use strict";

  var bg = doc.querySelector(".bg-scape");
  var hero = doc.querySelector(".hero");
  var plane = doc.querySelector(".hero__plane");
  if (!bg || !hero) return;

  var reduce = root.matchMedia("(prefers-reduced-motion: reduce)");
  var ticking = false;

  function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
  }

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 2);
  }

  function clearPlane() {
    if (!plane) return;
    plane.style.opacity = "";
    plane.style.transform = "";
  }

  function update() {
    ticking = false;
    if (reduce.matches) {
      bg.style.setProperty("--bg-zoom", "1");
      bg.style.setProperty("--bg-fade", "1");
      bg.style.setProperty("--bg-soft", "0px");
      bg.style.setProperty("--bg-veil", "0.35");
      clearPlane();
      return;
    }

    var range = Math.max(hero.offsetHeight * 0.9, root.innerHeight * 0.65);
    var p = easeOut(clamp(root.scrollY / range, 0, 1));

    bg.style.setProperty("--bg-zoom", String(1 + p * 0.16));
    bg.style.setProperty("--bg-fade", String(1 - p * 0.48));
    bg.style.setProperty("--bg-soft", (p * 12).toFixed(2) + "px");
    bg.style.setProperty("--bg-veil", String(0.24 + p * 0.56));

    /* Only override plane after scroll starts — leave entrance animation alone at rest */
    if (plane) {
      if (p < 0.01) {
        clearPlane();
      } else {
        plane.style.opacity = String(1 - p * 0.72);
        plane.style.transform =
          "translateY(" + (p * -28).toFixed(1) + "px) scale(" + (1 + p * 0.06).toFixed(3) + ")";
      }
    }
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
