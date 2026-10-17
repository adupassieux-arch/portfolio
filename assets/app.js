/* ==========================================================
   Petites interactions du site — rien à modifier ici.
   Les pages sont générées par build.js à partir de content.js
   ========================================================== */
(function () {
  // Image locale manquante → adresse de secours
  document.addEventListener("error", e => {
    const t = e.target;
    if (t.tagName === "IMG" && t.dataset.web && t.src !== t.dataset.web) t.src = t.dataset.web;
  }, true);

  // Menu mobile
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  if (header && toggle) toggle.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", header.classList.toggle("open"));
  });

  // Visionneuse plein écran sur les pages projet
  const imgs = document.querySelector(".project-images");
  if (imgs) {
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = "<img alt=''>";
    document.body.appendChild(lb);
    imgs.addEventListener("click", e => {
      if (e.target.tagName === "IMG") { lb.firstChild.src = e.target.currentSrc || e.target.src; lb.classList.add("open"); }
    });
    lb.addEventListener("click", () => lb.classList.remove("open"));
    document.addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });
  }
})();
