(function () {
  "use strict";

  /* ---------- Lenis smooth scroll ---------- */
  var lenis = null;
  if (window.Lenis) {
    lenis = new window.Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.1
    });
    window.lenis = lenis;

    requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href");
        if (!id || id.length < 2) {
          e.preventDefault();
          return;
        }
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -20 });
        }
      });
    });
  }

  /* ---------- Custom cursor (mouse + fine pointer only) ---------- */
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  var dot = document.getElementById("cursorDot");
  var ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  document.body.classList.add("has-custom-cursor");

  var mouseX = 0,
    mouseY = 0,
    ringX = 0,
    ringY = 0,
    primed = false;

  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = "translate(" + mouseX + "px," + mouseY + "px) translate(-50%,-50%)";
    if (!primed) {
      primed = true;
      ringX = mouseX;
      ringY = mouseY;
      dot.classList.add("is-visible");
      ring.classList.add("is-visible");
    }
  });

  document.addEventListener("mouseleave", function () {
    dot.classList.remove("is-visible");
    ring.classList.remove("is-visible");
  });
  document.addEventListener("mouseenter", function () {
    if (primed) {
      dot.classList.add("is-visible");
      ring.classList.add("is-visible");
    }
  });

  var hoverSelector = 'a, button, .vert-card, input, textarea, select, [role="button"]';
  document.addEventListener("mouseover", function (e) {
    if (e.target.closest && e.target.closest(hoverSelector)) ring.classList.add("is-active");
  });
  document.addEventListener("mouseout", function (e) {
    if (e.target.closest && e.target.closest(hoverSelector)) ring.classList.remove("is-active");
  });

  (function tick() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = "translate(" + ringX + "px," + ringY + "px) translate(-50%,-50%)";
    requestAnimationFrame(tick);
  })();
})();
