#!/usr/bin/env node
/* ==========================================================
   GÉNÉRATEUR DU SITE
   Lit content.js et fabrique une vraie page HTML par projet,
   plus les deux galeries et le plan du site (sitemap.xml).

   À relancer après chaque modification de content.js :
       node build.js
   (Sur GitHub, c'est fait automatiquement par .github/workflows/build.yml)
   ========================================================== */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, "content.js"), "utf8"), ctx);
const SITE = ctx.window.SITE;
const PROJECTS = ctx.window.PROJECTS;
const BASE = (SITE.url || "https://adupassieux-arch.github.io/portfolio/").replace(/\/?$/, "/");

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const inline = s => esc(s)
  .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  .replace(/\*([^*]+)\*/g, "<em>$1</em>");
const plain = s => String(s).replace(/^## /, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*+/g, "");
const clip = (s, n) => (s.length <= n ? s : s.slice(0, s.lastIndexOf(" ", n - 1)) + "…");

const galleryOf = id => SITE.galleries.find(g => g.id === id);
const home = SITE.galleries.find(g => g.page === "index.html") || SITE.galleries[0];

function describe(p) {
  const txt = p.text.filter(t => !t.startsWith("## ")).map(plain).join(" ").trim();
  if (txt) return clip(txt, 158);
  const g = galleryOf(p.gallery);
  return `${p.title} — ${g ? g.label : "Portfolio"} project by ${SITE.name}, ${p.year}.`;
}

function img(o, alt, rel, attrs = "") {
  const web = o.web ? ` data-web="${esc(o.web)}"` : "";
  return `<img src="${esc(rel + o.src)}"${web} alt="${esc(alt)}" loading="lazy" decoding="async"${attrs}>`;
}

function page({ rel, title, description, canonical, ogImage, ogType = "website", active, body, jsonld }) {
  const nav = SITE.galleries
    .map(g => `<a href="${rel}${g.page === "index.html" ? "" : g.page}"${g.id === active ? ' class="active"' : ""}>${esc(g.label)}</a>`)
    .join("\n        ");
  const contact = SITE.contactUrl || rel + "contact.html";
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${esc(canonical)}">
  <meta name="author" content="${esc(SITE.name)}">
  <meta property="og:type" content="${ogType}">
  <meta property="og:site_name" content="${esc(SITE.name)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${esc(canonical)}">
  ${ogImage ? `<meta property="og:image" content="${esc(ogImage)}">\n  <meta name="twitter:image" content="${esc(ogImage)}">` : ""}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#0b0b0b">
  <link rel="icon" href="${rel}assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Oswald:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${rel}assets/style.css">
  ${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, "\\u003c")}</script>` : ""}
</head>
<body id="top">
  <header class="site-header">
    <nav class="site-nav" aria-label="Main navigation">
        ${nav}
        <a href="${esc(contact)}">Contact</a>
    </nav>
    <a class="site-name" href="${rel}">${esc(SITE.name)}</a>
    <button class="menu-toggle" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
  </header>
  <main id="main">
${body}
  </main>
  <footer class="site-footer">
    <span>© ${new Date().getFullYear()} ${esc(SITE.name)}${SITE.mainSite ? ` · <a href="${esc(SITE.mainSite)}" class="to-top">AD International Consulting</a>` : ""}</span>
    <a href="#top" class="to-top">↑ Back to top</a>
  </footer>
  <script src="${rel}assets/app.js" defer></script>
</body>
</html>
`;
}

const card = (p, rel) => `
      <a class="card" href="${rel}${p.slug}/">
        ${img(p.cover, p.title, rel)}
        <div class="card-info"><h2 class="card-title">${esc(p.title)}</h2><span class="card-year">${esc(p.year)}</span></div>
      </a>`;

const written = [];
function write(file, html) {
  const full = path.join(ROOT, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html);
  written.push(file);
}

// ---------- Galeries ----------
for (const g of SITE.galleries) {
  const list = PROJECTS.filter(p => p.gallery === g.id);
  const url = BASE + (g.page === "index.html" ? "" : g.page);
  const isHome = g.page === "index.html";
  write(g.page, page({
    rel: "",
    title: isHome ? `${SITE.name} — ${g.label} Portfolio` : `${g.label} — ${SITE.name}`,
    description: g.description || SITE.description,
    canonical: url,
    ogImage: list[0] ? BASE + list[0].cover.src : null,
    active: g.id,
    body: `    <h1 class="sr-only">${esc(g.label)} — ${esc(SITE.name)}</h1>
    <section class="grid">${list.map(p => card(p, "")).join("")}
    </section>`,
    jsonld: {
      "@context": "https://schema.org", "@type": "CollectionPage", name: `${g.label} — ${SITE.name}`, url,
      author: { "@type": "Person", name: SITE.name, url: SITE.mainSite },
      hasPart: list.map(p => ({ "@type": "CreativeWork", name: p.title, url: BASE + p.slug + "/" })),
    },
  }));
}

// ---------- Pages projet ----------
for (const p of PROJECTS) {
  const rel = "../";
  const g = galleryOf(p.gallery);
  const list = PROJECTS.filter(x => x.gallery === p.gallery);
  const i = list.indexOf(p);
  const prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
  const url = BASE + p.slug + "/";
  const text = p.text.map(t => (t.startsWith("## ") ? `<h2>${inline(t.slice(3))}</h2>` : `<p>${inline(t)}</p>`)).join("\n          ");
  write(`${p.slug}/index.html`, page({
    rel,
    title: `${p.title} — ${SITE.name}`,
    description: describe(p),
    canonical: url,
    ogImage: BASE + p.cover.src,
    ogType: "article",
    active: p.gallery,
    body: `    <article class="project">
      <header class="project-head">
        <p class="project-kicker"><a href="${rel}${g.page === "index.html" ? "" : g.page}">${esc(g.label)}</a></p>
        <h1 class="project-title">${esc(p.title)}</h1>
        <span class="project-year">${esc(p.year)}</span>
      </header>
      ${text ? `<div class="project-text">\n          ${text}\n      </div>` : ""}
      <div class="project-images">
        ${p.images.map((im, n) => img(im, `${p.title} — image ${n + 1}`, rel)).join("\n        ")}
      </div>
      ${list.length > 1 ? `<nav class="pager">
        <a class="prev" href="${rel}${prev.slug}/"><small>← Previous</small>${esc(prev.title)}</a>
        <a class="next" href="${rel}${next.slug}/"><small>Next →</small>${esc(next.title)}</a>
      </nav>` : ""}
    </article>`,
    jsonld: {
      "@context": "https://schema.org", "@type": "CreativeWork", name: p.title, url,
      dateCreated: p.year, description: describe(p), genre: g.label,
      image: p.images.map(im => BASE + im.src),
      author: { "@type": "Person", name: SITE.name, url: SITE.mainSite },
      isPartOf: { "@type": "CollectionPage", name: `${g.label} — ${SITE.name}`, url: BASE + (g.page === "index.html" ? "" : g.page) },
    },
  }));
}

// ---------- Anciennes adresses project.html?p=… → nouvelles pages ----------
write("project.html", `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(SITE.name)}</title>
<meta name="robots" content="noindex">
<script>var p=new URLSearchParams(location.search).get("p");location.replace(p?p.replace(/[^a-z0-9-]/gi,"")+"/":"./");</script>
<meta http-equiv="refresh" content="0; url=./"></head><body></body></html>
`);

// ---------- Plan du site ----------
const today = new Date().toISOString().slice(0, 10);
const urls = [...SITE.galleries.map(g => BASE + (g.page === "index.html" ? "" : g.page)), ...PROJECTS.map(p => BASE + p.slug + "/")];
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${esc(u)}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`);

console.log(`✓ ${written.length} fichiers générés (${PROJECTS.length} projets).`);
