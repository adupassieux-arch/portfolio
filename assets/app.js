/* ==========================================================
   Moteur du site — normalement, rien à modifier ici.
   Le contenu se trouve dans content.js
   ========================================================== */
(function () {
  const SITE = window.SITE, PROJECTS = window.PROJECTS;
  const page = document.body.dataset.page;
  const $ = (s, el = document) => el.querySelector(s);

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const inline = s => esc(s)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");

  // Image locale si elle existe, sinon l'adresse de secours chez Adobe
  const img = (o, alt, extra = "") =>
    `<img src="${esc(o.src)}" ${o.web ? `data-web="${esc(o.web)}"` : ""} alt="${esc(alt)}" loading="lazy" decoding="async" ${extra}>`;
  document.addEventListener("error", e => {
    const t = e.target;
    if (t.tagName === "IMG" && t.dataset.web && t.src !== t.dataset.web) t.src = t.dataset.web;
  }, true);

  // ---------- En-tête & pied de page ----------
  const project = page === "project" ? PROJECTS.find(p => p.slug === new URLSearchParams(location.search).get("p")) : null;
  const activeGallery = project ? project.gallery : page;
  const home = SITE.galleries.find(g => g.page === "index.html") || SITE.galleries[0];

  $("#header").innerHTML = `
    <header class="site-header">
      <nav class="site-nav" aria-label="Navigation principale">
        ${SITE.galleries.map(g => `<a href="${g.page}" class="${g.id === activeGallery ? "active" : ""}">${esc(g.label)}</a>`).join("")}
        <a href="contact.html" class="${page === "contact" ? "active" : ""}">Contact</a>
      </nav>
      <a class="site-name" href="${home.page}">${esc(SITE.name)}</a>
      <button class="menu-toggle" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
    </header>`;
  const header = $(".site-header"), toggle = $(".menu-toggle");
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  $("#footer").innerHTML = `
    <footer class="site-footer">
      <span>© ${new Date().getFullYear()} ${esc(SITE.name)}</span>
      <a href="#top" class="to-top">↑ Back to top</a>
    </footer>`;

  const card = p => `
    <a class="card" href="project.html?p=${encodeURIComponent(p.slug)}">
      ${img(p.cover, p.title)}
      <div class="card-info"><p class="card-title">${esc(p.title)}</p><span class="card-year">${esc(p.year)}</span></div>
    </a>`;

  const main = $("#main");

  // ---------- Galerie ----------
  const gallery = SITE.galleries.find(g => g.id === page);
  if (gallery) {
    document.title = `${gallery.label} — ${SITE.name}`;
    main.innerHTML = `<section class="grid">${PROJECTS.filter(p => p.gallery === gallery.id).map(card).join("")}</section>`;
  }

  // ---------- Projet ----------
  if (page === "project") {
    if (!project) { location.replace(home.page); return; }
    document.title = `${project.title} — ${SITE.name}`;
    const list = PROJECTS.filter(p => p.gallery === project.gallery);
    const i = list.indexOf(project);
    const prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
    const text = project.text.map(t => t.startsWith("## ") ? `<h2>${inline(t.slice(3))}</h2>` : `<p>${inline(t)}</p>`).join("");
    main.innerHTML = `
      <article class="project">
        <header class="project-head">
          <h1 class="project-title">${esc(project.title)}</h1>
          <span class="project-year">${esc(project.year)}</span>
        </header>
        ${text ? `<div class="project-text">${text}</div>` : ""}
        <div class="project-images">${project.images.map((im, n) => img(im, `${project.title} — image ${n + 1}`)).join("")}</div>
        ${list.length > 1 ? `
        <nav class="pager">
          <a class="prev" href="project.html?p=${encodeURIComponent(prev.slug)}"><small>← Previous</small>${esc(prev.title)}</a>
          <a class="next" href="project.html?p=${encodeURIComponent(next.slug)}"><small>Next →</small>${esc(next.title)}</a>
        </nav>` : ""}
      </article>`;

    // Visionneuse plein écran
    const lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML = "<img alt=''>";
    document.body.appendChild(lb);
    main.addEventListener("click", e => {
      if (e.target.matches(".project-images img")) { $("img", lb).src = e.target.currentSrc || e.target.src; lb.classList.add("open"); }
    });
    lb.addEventListener("click", () => lb.classList.remove("open"));
    document.addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });
  }

  // ---------- Contact ----------
  if (page === "contact") {
    document.title = `Contact — ${SITE.name}`;
    const email = (SITE.contactEmail || "").trim();
    main.innerHTML = `
      <section class="contact">
        <h1>Contact</h1>
        <p class="intro">${esc(SITE.contactIntro || "")}</p>
        ${email ? `
        <form id="contact-form">
          <div class="field"><label for="f-name">Name *</label><input id="f-name" required autocomplete="name"></div>
          <div class="field"><label for="f-email">Email address *</label><input id="f-email" type="email" required autocomplete="email"></div>
          <div class="field"><label for="f-msg">Message *</label><textarea id="f-msg" required></textarea></div>
          <button class="btn" type="submit">Send</button>
        </form>` : `<p class="notice">Ajoutez votre adresse e-mail dans <strong>content.js</strong> (ligne « contactEmail ») pour activer le formulaire.</p>`}
      </section>`;
    const form = $("#contact-form");
    if (form) form.addEventListener("submit", e => {
      e.preventDefault();
      const subject = `Portfolio — message from ${$("#f-name").value}`;
      const body = `${$("#f-msg").value}\n\n— ${$("#f-name").value} (${$("#f-email").value})`;
      location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
