(() => {
  "use strict";

  const T = {
    en: {
      brandSub: "The Paintshop",
      navMainSite: "← Main site",
      getQuote: "Get a quote",
      heroEyebrow: "The Paintshop · Paint & body by 9Eleven",
      heroTitle1: "Factory finish.", heroTitle2: "Or better.",
      heroSub: "Dedicated paint and body facility for Porsche. Color-matched refinish, full respray, paint correction and protection — in a controlled booth, to concours standard.",
      ctaBookWorkshop: "Book at the workshop",
      heroPh: "Paintshop — booth / finished car",
      sec1Label: "What we paint", whatTitle: "What we paint",
      whatIntro: "Every panel prepped bare, sealed, and refinished with OEM-coded or bespoke color.",
      paints: [
        { num: "P-01", title: "Full respray", desc: "Glass-out, bare-metal or factory-seal, OEM code or paint-to-sample." },
        { num: "P-02", title: "Panel refinish", desc: "Single-panel repair and blend, spectrophotometer color match." },
        { num: "P-03", title: "Body & collision", desc: "Factory jigs, corrosion treatment." },
        { num: "P-04", title: "Paint correction", desc: "Multi-stage polish, wet sand where warranted, gauge-measured." },
        { num: "P-05", title: "Protection", desc: "Ceramic and PPF." },
        { num: "P-06", title: "Trim & detail", desc: "Bumpers, mirrors, spoilers, interior trim refinished to match." }
      ],
      sec2Label: "Out of the shop", mosaicTitle: "Out of the shop",
      mosaic: [
        { cols: 2, rows: 2, num: "P-01", label: "Feature finish", ph: "Feature finish — full respray", img: "assets/paintshop-feature.jpg", alt: "Freshly painted white Porsche 911 rear quarter, masked in the 9Eleven booth" },
        { cols: 2, rows: 1, num: "P-02", label: "Color match", ph: "Color match" },
        { cols: 2, rows: 1, num: "P-03", label: "Before / after", ph: "Before / after" },
        { cols: 2, rows: 1, num: "P-04", label: "Delivery", ph: "Delivery" }
      ],
      ctaTitle: "Ready for paint?",
      ctaSub: "Send photos of your car on WhatsApp for a preliminary estimate.",
      callUs: "Call us",
      footerTag: "Independent specialists. Factory-level standards."
    },
    es: {
      brandSub: "The Paintshop",
      navMainSite: "← Sitio principal",
      getQuote: "Cotizar",
      heroEyebrow: "The Paintshop · Pintura y carrocería por 9Eleven",
      heroTitle1: "Acabado de fábrica.", heroTitle2: "O mejor.",
      heroSub: "Instalación dedicada de pintura y carrocería para Porsche. Refinish con igualación de color, repintado completo, corrección de pintura y protección — en cabina controlada, a estándar concours.",
      ctaBookWorkshop: "Reservar en el taller",
      heroPh: "Paintshop — cabina / auto terminado",
      sec1Label: "Lo que pintamos", whatTitle: "Lo que pintamos",
      whatIntro: "Cada panel preparado a fondo, sellado y refinished con color codificado OEM o a medida.",
      paints: [
        { num: "P-01", title: "Repintado completo", desc: "Glass-out, a metal desnudo o sello de fábrica, código OEM o paint-to-sample." },
        { num: "P-02", title: "Refinish de panel", desc: "Reparación y difuminado de panel, igualación con espectrofotómetro." },
        { num: "P-03", title: "Carrocería y colisión", desc: "Bancadas de fábrica, tratamiento de corrosión." },
        { num: "P-04", title: "Corrección de pintura", desc: "Pulido multi-etapa, lijado en húmedo cuando amerita, medido con galga." },
        { num: "P-05", title: "Protección", desc: "Cerámico y PPF." },
        { num: "P-06", title: "Molduras y detail", desc: "Parachoques, espejos, spoilers, molduras interiores refinished a juego." }
      ],
      sec2Label: "Saliendo del taller", mosaicTitle: "Saliendo del taller",
      mosaic: [
        { cols: 2, rows: 2, num: "P-01", label: "Acabado destacado", ph: "Acabado destacado — repintado completo", img: "assets/paintshop-feature.jpg", alt: "Cuarto trasero de Porsche 911 blanco recién pintado, enmascarado en la cabina de 9Eleven" },
        { cols: 2, rows: 1, num: "P-02", label: "Igualación de color", ph: "Igualación de color" },
        { cols: 2, rows: 1, num: "P-03", label: "Antes / después", ph: "Antes / después" },
        { cols: 2, rows: 1, num: "P-04", label: "Entrega", ph: "Entrega" }
      ],
      ctaTitle: "¿Listo para pintar?",
      ctaSub: "Envía fotos de tu auto por WhatsApp para un estimado preliminar.",
      callUs: "Llámanos",
      footerTag: "Especialistas independientes. Estándares de fábrica."
    }
  };

  let lang = localStorage.getItem("9eleven-lang") || "en";
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  const PLACEHOLDER_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="1"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 15l-5-5-8 8"/></svg>';

  function applyTranslations() {
    const t = T[lang];
    document.documentElement.lang = lang;
    $$("[data-t]").forEach(el => {
      const key = el.getAttribute("data-t");
      if (t[key] !== undefined) el.textContent = t[key];
    });
    $$(".lang-toggle button").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    renderPaintGrid(t);
    renderMosaic(t);
  }

  function renderPaintGrid(t) {
    const grid = $("#paintGrid");
    grid.innerHTML = t.paints.map(p => `
      <div class="service-card" data-reveal="1">
        <div class="service-num">${escapeHtml(p.num)}</div>
        <div class="service-title">${escapeHtml(p.title)}</div>
        <div class="service-desc">${escapeHtml(p.desc)}</div>
      </div>
    `).join("");
    setupReveal();
  }

  function renderMosaic(t) {
    const grid = $("#mosaicGrid");
    grid.innerHTML = t.mosaic.map(p => `
      <figure class="gallery-item ${p.cols === 2 ? "c2" : ""} ${p.rows === 2 ? "r2" : ""}" data-reveal="1">
        <div class="img-slot" style="height:100%">
          ${p.img
            ? `<img src="${p.img}" alt="${escapeHtml(p.alt || p.label)}" loading="lazy">`
            : `${PLACEHOLDER_SVG}<span class="cap">${escapeHtml(p.ph)}</span>`}
        </div>
        <figcaption>
          <span class="num">${escapeHtml(p.num)}</span>
          <span class="lbl">${escapeHtml(p.label)}</span>
        </figcaption>
      </figure>
    `).join("");
    setupReveal();
  }

  // Language toggle (shared preference with the main site)
  $$(".lang-toggle button").forEach(btn => {
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;
      localStorage.setItem("9eleven-lang", lang);
      applyTranslations();
    });
  });

  // Reveal on scroll
  let io = null;
  function setupReveal() {
    if (!("IntersectionObserver" in window)) {
      $$("[data-reveal]").forEach(el => el.classList.add("is-visible"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
    }
    $$("[data-reveal]").forEach(el => {
      if (el.dataset.rv) return;
      el.dataset.rv = "1";
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9) {
        el.classList.add("is-visible");
        return;
      }
      io.observe(el);
    });
  }

  applyTranslations();
  setupReveal();
})();
