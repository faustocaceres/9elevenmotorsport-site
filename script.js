(() => {
  "use strict";

  const WHATSAPP_NUMBER = "18094407325";

  const T = {
    en: {
      navSub: "Porsche Specialist",
      navServices: "Services", navWorkshop: "Workshop", navPaintshop: "Paintshop", navAbout: "About", navContact: "Contact", navGallery: "Gallery",
      workshopCtaTitle: "The Paintshop", workshopCtaLabel: "Paint & body — visit",
      heroEyebrow: "Santo Domingo · Independent Porsche Specialist",
      heroTitle1: "Precision Porsche service.", heroTitle2: "Nothing else.",
      heroSub: "Independent specialists. Factory-level standards. Diagnostics, maintenance and performance for every air- and water-cooled Porsche.",
      ctaBook: "Book a service", ctaWhatsApp: "WhatsApp",
      secServices: "Services", servicesTitle: "What we do",
      servicesLead: "Porsche only. Every job documented, every part to OEM standard or better.",
      services: [
        { num: "01", title: "Diagnostics", desc: "Factory-level PIWIS diagnostics. Fault isolation, over-rev reports, module coding." },
        { num: "02", title: "Scheduled maintenance", desc: "Oil service, minor and major intervals to factory schedule. Done right, on record." },
        { num: "03", title: "Engine & transmission", desc: "IMS, RMS, bore scoring assessment, rebuilds. PDK and manual gearbox service." },
        { num: "04", title: "Suspension & brakes", desc: "Geometry and corner balancing, dampers, control arms, pads, rotors and lines." },
        { num: "05", title: "Performance", desc: "Exhaust, intake, suspension and software upgrades — engineered, not bolted on." },
        { num: "06", title: "Paint shop", desc: "Factory-match refinishing and paint correction. From stone-chip repairs to full resprays in our booth." },
        { num: "07", title: "Pre-purchase inspection", desc: "Full mechanical and cosmetic report before you buy. Leak-down, PIWIS scan, road test." }
      ],
      secWorkshop: "Workshop", workshopTitle: "Inside the shop",
      workshopLead: "A clean, instrumented workspace built around the discipline of the cars it serves.",
      gallery: [
        { num: "W-01", label: "Service bay", ph: "Service bay — lift with 911", img: "assets/workshop-servicebay.jpg", alt: "Porsche on the jack in the service bay with control arms laid out at 9Eleven" },
        { num: "W-02", label: "Engine room", ph: "Engine build / assembly area", img: "assets/workshop-engine.jpg", alt: "Porsche engine out on the stand at 9Eleven" },
        { num: "W-03", label: "Parts storage", ph: "Parts storage — OEM inventory", img: "assets/workshop-parts.jpg", alt: "Porsche body panels and parts in storage at 9Eleven" },
        { num: "W-04", label: "Paint shop", ph: "Paint shop — booth / refinishing", img: "assets/workshop-paint-mural.jpg", alt: "Hand-painted carbon-fibre Ferrari hood mural at the 9Eleven paint shop" }
      ],
      secGallery: "Gallery", galleryTitle: "The cars",
      galleryLead: "Recent work and cars through the shop. Drop your photos into the grid.",
      secAbout: "About", aboutTitle: "Built by enthusiasts, run like a race shop",
      aboutBody1: "9Eleven is an independent Porsche workshop in Santo Domingo. We serve owners, collectors and drivers who expect the standards of Porsche Motorsport — not a general repair shop.",
      aboutBody2: "One brand, done properly: factory tooling, documented procedures, and honest engineering advice on what your car needs — and what it does not.",
      stats: [
        { value: "100", unit: "%", label: "Porsche only" },
        { value: "PIWIS", unit: "", label: "Third-party diagnostics" },
        { value: "OEM", unit: "+", label: "Parts standard" }
      ],
      secBooking: "Booking", bookingTitle: "Book your service",
      bookingLead: "Tell us about your car. We confirm every request personally, usually within one business day.",
      fName: "Name", fNamePh: "Your name", fPhone: "Phone / WhatsApp",
      fVehicle: "Vehicle", fVehiclePh: "e.g. 911 Carrera S (997.2) 2010",
      fService: "Service", fDate: "Preferred date", fMessage: "Message",
      fMessagePh: "Symptoms, history, or anything we should know",
      serviceOptions: ["Select a service…", "Diagnostics", "Scheduled maintenance", "Engine & transmission", "Suspension & brakes", "Performance", "Paint shop", "Pre-purchase inspection"],
      submit: "Request appointment", submitNote: "No payment required to request.",
      errRequired: "Required",
      confirmBadge: "Request received", confirmTitle: "We will be in touch",
      confirmNew: "New request",
      confirmPrefix: "Thank you", confirmMid: "Your request for", confirmSuffix: "has been received. We will confirm by phone or WhatsApp shortly.",
      secContact: "Contact", contactTitle: "Find us",
      phoneLabel: "Phone / WhatsApp", hoursLabel: "Hours",
      hoursValue: "MON–FRI 8:00–17:30 · SAT 8:00–12:00",
      locationLabel: "Location", locationValue: "C. Altamira 14, Santo Domingo, Dominican Republic.",
      callUs: "Call us",
      footerTag: "Independent specialists. Factory-level standards.",
      waToast: "Booking details ready — continue in WhatsApp to send your request.",
      waMsgTitle: "New booking request — 9Eleven",
      waLabels: { name: "Name", phone: "Phone", vehicle: "Vehicle", service: "Service", date: "Preferred date", message: "Message" }
    },
    es: {
      navSub: "Especialista Porsche",
      navServices: "Servicios", navWorkshop: "Taller", navPaintshop: "Paintshop", navAbout: "Nosotros", navContact: "Contacto", navGallery: "Galería",
      workshopCtaTitle: "The Paintshop", workshopCtaLabel: "Pintura y carrocería — visitar",
      heroEyebrow: "Santo Domingo · Especialistas Porsche Independientes",
      heroTitle1: "Servicio Porsche de precisión.", heroTitle2: "Nada más.",
      heroSub: "Especialistas independientes. Estándares de fábrica. Diagnóstico, mantenimiento y performance para todo Porsche, air-cooled y water-cooled.",
      ctaBook: "Reservar servicio", ctaWhatsApp: "WhatsApp",
      secServices: "Servicios", servicesTitle: "Lo que hacemos",
      servicesLead: "Solo Porsche. Cada trabajo documentado, cada pieza a estándar OEM o superior.",
      services: [
        { num: "01", title: "Diagnóstico", desc: "Diagnóstico PIWIS de fábrica. Aislamiento de fallas, reportes de over-rev, codificación de módulos." },
        { num: "02", title: "Mantenimiento programado", desc: "Cambio de aceite, intervalos menores y mayores según el plan de fábrica. Bien hecho y documentado." },
        { num: "03", title: "Motor y transmisión", desc: "IMS, RMS, evaluación de bore scoring, reconstrucciones. Servicio de PDK y caja manual." },
        { num: "04", title: "Suspensión y frenos", desc: "Geometría y corner balance, amortiguadores, brazos, pastillas, discos y líneas." },
        { num: "05", title: "Performance", desc: "Escape, admisión, suspensión y software — con ingeniería, no solo atornillado." },
        { num: "06", title: "Taller de pintura", desc: "Pintura y refinishing con igualación de fábrica. Desde retoques de piedras hasta repintados completos en cabina." },
        { num: "07", title: "Inspección pre-compra", desc: "Reporte mecánico y cosmético completo antes de comprar. Leak-down, escaneo PIWIS, prueba de ruta." }
      ],
      secWorkshop: "Taller", workshopTitle: "Dentro del taller",
      workshopLead: "Un espacio limpio e instrumentado, a la altura de la disciplina de los autos que atiende.",
      gallery: [
        { num: "W-01", label: "Bahía de servicio", ph: "Bahía de servicio — 911 en el elevador", img: "assets/workshop-servicebay.jpg", alt: "Porsche en el gato en la bahía de servicio con brazos de control en el piso en 9Eleven" },
        { num: "W-02", label: "Sala de motores", ph: "Área de armado de motores", img: "assets/workshop-engine.jpg", alt: "Motor Porsche desmontado en el soporte en 9Eleven" },
        { num: "W-03", label: "Almacén de piezas", ph: "Almacén de piezas — inventario OEM", img: "assets/workshop-parts.jpg", alt: "Paneles y piezas Porsche en almacén en 9Eleven" },
        { num: "W-04", label: "Taller de pintura", ph: "Taller de pintura — cabina / refinishing", img: "assets/workshop-paint-mural.jpg", alt: "Mural pintado a mano en capó de fibra de carbono Ferrari en el taller de pintura de 9Eleven" }
      ],
      secGallery: "Galería", galleryTitle: "Los autos",
      galleryLead: "Trabajos recientes y autos que han pasado por el taller. Arrastra tus fotos a la cuadrícula.",
      secAbout: "Nosotros", aboutTitle: "Hecho por entusiastas, operado como un race shop",
      aboutBody1: "9Eleven es un taller Porsche independiente en Santo Domingo. Servimos a propietarios, coleccionistas y pilotos que esperan los estándares de Porsche Motorsport — no de un taller general.",
      aboutBody2: "Una sola marca, bien hecha: herramientas de fábrica, procedimientos documentados y asesoría honesta sobre lo que tu auto necesita — y lo que no.",
      stats: [
        { value: "100", unit: "%", label: "Solo Porsche" },
        { value: "PIWIS", unit: "", label: "Diagnóstico third-party" },
        { value: "OEM", unit: "+", label: "Estándar de piezas" }
      ],
      secBooking: "Reserva", bookingTitle: "Reserva tu servicio",
      bookingLead: "Cuéntanos de tu auto. Confirmamos cada solicitud personalmente, normalmente en un día laborable.",
      fName: "Nombre", fNamePh: "Tu nombre", fPhone: "Teléfono / WhatsApp",
      fVehicle: "Vehículo", fVehiclePh: "ej. 911 Carrera S (997.2) 2010",
      fService: "Servicio", fDate: "Fecha preferida", fMessage: "Mensaje",
      fMessagePh: "Síntomas, historial, o lo que debamos saber",
      serviceOptions: ["Selecciona un servicio…", "Diagnóstico", "Mantenimiento programado", "Motor y transmisión", "Suspensión y frenos", "Performance", "Taller de pintura", "Inspección pre-compra"],
      submit: "Solicitar cita", submitNote: "No se requiere pago para solicitar.",
      errRequired: "Requerido",
      confirmBadge: "Solicitud recibida", confirmTitle: "Te contactaremos",
      confirmNew: "Nueva solicitud",
      confirmPrefix: "Gracias", confirmMid: "Tu solicitud de", confirmSuffix: "ha sido recibida. Confirmaremos por teléfono o WhatsApp en breve.",
      secContact: "Contacto", contactTitle: "Encuéntranos",
      phoneLabel: "Teléfono / WhatsApp", hoursLabel: "Horario",
      hoursValue: "LUN–VIE 8:00–17:30 · SÁB 8:00–12:00",
      locationLabel: "Ubicación", locationValue: "C. Altamira 14, Santo Domingo, República Dominicana.",
      callUs: "Llámanos",
      footerTag: "Especialistas independientes. Estándares de fábrica.",
      waToast: "Detalles listos — continúa en WhatsApp para enviar tu solicitud.",
      waMsgTitle: "Nueva solicitud de cita — 9Eleven",
      waLabels: { name: "Nombre", phone: "Teléfono", vehicle: "Vehículo", service: "Servicio", date: "Fecha preferida", message: "Mensaje" }
    }
  };

  let lang = localStorage.getItem("9eleven-lang") || "en";
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function applyTranslations() {
    const t = T[lang];
    document.documentElement.lang = lang;
    $$("[data-t]").forEach(el => {
      const key = el.getAttribute("data-t");
      if (t[key] !== undefined) el.textContent = t[key];
    });
    $$("[data-t-placeholder]").forEach(el => {
      const key = el.getAttribute("data-t-placeholder");
      if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
    });
    $$(".lang-toggle button").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    renderServices(t);
    renderWorkshop(t);
    renderStats(t);
    renderServiceOptions(t);
    renderGalleryGrid();
  }

  function renderServices(t) {
    const grid = $("#servicesGrid");
    grid.innerHTML = t.services.map(svc => `
      <div class="service-card" data-reveal="1">
        <div class="service-num">${svc.num}</div>
        <div class="service-title">${escapeHtml(svc.title)}</div>
        <div class="service-desc">${escapeHtml(svc.desc)}</div>
      </div>
    `).join("");
    setupReveal();
  }

  function renderWorkshop(t) {
    const track = $("#workshopTrack");
    const items = t.gallery.map(g => `
      <figure class="workshop-item" data-reveal="1">
        <div class="slot">
          <div class="img-slot">
            ${g.img
              ? `<img src="${g.img}" alt="${escapeHtml(g.alt || g.label)}" loading="lazy">`
              : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="1"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 15l-5-5-8 8"/></svg>
            <span class="cap">${escapeHtml(g.ph)}</span>`}
          </div>
        </div>
        <figcaption>
          <span class="num">${g.num}</span>
          <span class="lbl">${escapeHtml(g.label)}</span>
        </figcaption>
      </figure>
    `).join("");

    const cta = `
      <a class="workshop-item workshop-cta" href="paintshop.html" data-reveal="1" aria-label="${escapeHtml(t.workshopCtaTitle)}">
        <div class="slot">
          <div class="img-slot">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="1"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 15l-5-5-8 8"/></svg>
            <span class="cap">${escapeHtml(t.workshopCtaTitle)}</span>
            <div class="cta-overlay">
              <span class="cta-title">${escapeHtml(t.workshopCtaTitle)}<span class="arrow"> →</span></span>
            </div>
          </div>
        </div>
        <figcaption>
          <span class="num">W-06</span>
          <span class="lbl">${escapeHtml(t.workshopCtaLabel)}</span>
        </figcaption>
      </a>
    `;

    track.innerHTML = items + cta;
    setupReveal();
  }

  function renderStats(t) {
    const wrap = $("#aboutStats");
    wrap.innerHTML = t.stats.map(st => `
      <div>
        <div class="stat-value">${escapeHtml(st.value)}<span class="unit">${escapeHtml(st.unit)}</span></div>
        <div class="stat-label">${escapeHtml(st.label)}</div>
      </div>
    `).join("");
  }

  function renderServiceOptions(t) {
    const select = $("#f-service");
    const prevValue = select.value;
    select.innerHTML = t.serviceOptions.map(o => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join("");
    if (prevValue && t.serviceOptions.includes(prevValue)) select.value = prevValue;
  }

  const PHOTO_GRID = [
    { cols: 2, rows: 2, num: "G-01", label: "Feature", ph: "Feature shot — hero car", img: "assets/feature-gt3rs.jpg", alt: "Yellow Porsche 911 GT3 RS at 9Eleven, Santo Domingo" },
    { cols: 1, rows: 1, num: "G-02", label: "Detail", ph: "Detail — engine / badge", img: "assets/detail-yellow-911.jpg", alt: "Yellow Porsche 911 (992) hand detail at 9Eleven" },
    { cols: 1, rows: 1, num: "G-03", label: "Detail", ph: "Detail — wheel / caliper", img: "assets/detail-urus.jpg", alt: "White Lamborghini Urus in the 9Eleven bay" },
    { cols: 2, rows: 1, num: "G-04", label: "Workshop", ph: "Wide — car on lift", img: "assets/workshop-lift.jpg", alt: "Porsche 911 on the lift at 9Eleven, engine out for rebuild" },
    { cols: 1, rows: 1, num: "G-05", label: "Client car", ph: "Client car", img: "assets/client-bentley.jpg", alt: "Client Bentley Bentayga in service at 9Eleven" },
    { cols: 1, rows: 1, num: "G-06", label: "Client car", ph: "Client car", img: "assets/client-porsche-interior.jpg", alt: "Porsche 911 (992) interior during PIWIS diagnostics" },
    { cols: 2, rows: 1, num: "G-07", label: "Delivery", ph: "Wide — handover / road", img: "assets/delivery-gt3rs.jpg", alt: "Orange Porsche 911 GT3 RS (991) ready for delivery at 9Eleven" }
  ];

  function renderGalleryGrid() {
    const grid = $("#galleryGrid");
    grid.innerHTML = PHOTO_GRID.map(p => `
      <figure class="gallery-item ${p.cols === 2 ? "c2" : ""} ${p.rows === 2 ? "r2" : ""}" data-reveal="1">
        <div class="img-slot" style="height:100%">
          ${p.img
            ? `<img src="${p.img}" alt="${escapeHtml(p.alt || p.label)}" loading="lazy">`
            : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="1"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 15l-5-5-8 8"/></svg>
          <span class="cap">${escapeHtml(p.ph)}</span>`}
        </div>
        <figcaption>
          <span class="num">${p.num}</span>
          <span class="lbl">${escapeHtml(p.label)}</span>
        </figcaption>
      </figure>
    `).join("");
    setupReveal();
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  // Language toggle
  $$(".lang-toggle button").forEach(btn => {
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;
      localStorage.setItem("9eleven-lang", lang);
      applyTranslations();
    });
  });

  // Mobile nav
  const navToggle = $("#navToggle");
  const mainNav = $("#mainNav");
  navToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  $$("#mainNav a").forEach(a => a.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }));

  // Workshop gallery carousel
  const track = $("#workshopTrack");
  $("#galleryPrev").addEventListener("click", () => track.scrollBy({ left: -476, behavior: "smooth" }));
  $("#galleryNext").addEventListener("click", () => track.scrollBy({ left: 476, behavior: "smooth" }));

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

  // Booking form
  const form = $("#bookingForm");
  const confirmPanel = $("#confirmPanel");
  const confirmSummary = $("#confirmSummary");
  const resetFormBtn = $("#resetFormBtn");
  const waToast = $("#waToast");
  let toastTimer = null;

  function showToast(msg) {
    waToast.textContent = msg;
    waToast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => waToast.classList.remove("show"), 4000);
  }

  function clearFieldError(fieldId) {
    const el = $("#" + fieldId);
    if (el) el.classList.remove("has-error");
  }

  ["name", "phone", "vehicle", "service"].forEach(key => {
    const input = $("#f-" + key);
    input.addEventListener("input", () => clearFieldError("field-" + key));
    input.addEventListener("change", () => clearFieldError("field-" + key));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const t = T[lang];
    const data = {
      name: $("#f-name").value.trim(),
      phone: $("#f-phone").value.trim(),
      vehicle: $("#f-vehicle").value.trim(),
      service: $("#f-service").value,
      date: $("#f-date").value,
      message: $("#f-message").value.trim()
    };

    const errors = {
      name: !data.name,
      phone: !data.phone,
      vehicle: !data.vehicle,
      service: !data.service || data.service === t.serviceOptions[0]
    };

    let firstInvalid = null;
    Object.keys(errors).forEach(key => {
      const fieldEl = $("#field-" + key);
      fieldEl.classList.toggle("has-error", errors[key]);
      if (errors[key] && !firstInvalid) firstInvalid = "f-" + key;
    });

    if (firstInvalid) {
      $("#" + firstInvalid).focus();
      return;
    }

    const summary = `${t.confirmPrefix}, ${data.name}. ${t.confirmMid} "${data.service}" — ${data.vehicle}${data.date ? " · " + data.date : ""} — ${t.confirmSuffix}`;
    confirmSummary.textContent = summary;
    form.hidden = true;
    confirmPanel.hidden = false;

    const L = t.waLabels;
    const lines = [
      t.waMsgTitle,
      `${L.name}: ${data.name}`,
      `${L.phone}: ${data.phone}`,
      `${L.vehicle}: ${data.vehicle}`,
      `${L.service}: ${data.service}`
    ];
    if (data.date) lines.push(`${L.date}: ${data.date}`);
    if (data.message) lines.push(`${L.message}: ${data.message}`);
    const waText = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

    showToast(t.waToast);
    window.open(waUrl, "_blank", "noopener");
  });

  resetFormBtn.addEventListener("click", () => {
    form.reset();
    $$(".field").forEach(f => f.classList.remove("has-error"));
    renderServiceOptions(T[lang]);
    confirmPanel.hidden = true;
    form.hidden = false;
  });

  // Smooth-scroll only for in-page anchor navigation (not for wheel/trackpad scrolling)
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", "#" + id);
    });
  });

  applyTranslations();
  setupReveal();
})();
