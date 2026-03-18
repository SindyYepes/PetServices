// PetServices - Web normal (HTML + CSS + JS vanilla)
// Mantiene favoritos en localStorage y navega por hash (#/services, #/service/1, etc).

const SERVICES = [
  {
    id: "1",
    name: "Peluquería Canina Premium",
    category: "Estética",
    description:
      "Corte de pelo profesional, baño con productos hipoalergénicos y acabados especializados para tu mascota.",
    fullDescription:
      "Nuestro servicio de peluquería canina premium ofrece una experiencia completa de cuidado estético para tu mascota. Contamos con peluqueros certificados que utilizan técnicas especializadas para cada raza. Incluye baño con champú hipoalergénico, secado profesional, corte de pelo según estándar de raza o al gusto del dueño, limpieza de oídos, corte de uñas y perfumado. El ambiente es tranquilo y adaptado para que tu mascota se sienta cómoda durante todo el proceso.",
    price: "$45.000 - $80.000",
    duration: "1.5 - 2 horas",
    image: "https://images.unsplash.com/photo-1730188398508-1161b7a1d708",
    features: [
      "Baño con productos premium",
      "Corte personalizado según raza",
      "Limpieza de oídos y ojos",
      "Corte de uñas",
      "Perfumado especial",
      "Secado profesional",
    ],
    contactInfo: {
      phone: "+57 300 123 4567",
      email: "peluqueria@petservices.com",
    },
  },
  {
    id: "2",
    name: "Clínica Veterinaria Integral",
    category: "Salud",
    description:
      "Atención médica completa con veterinarios certificados, diagnóstico avanzado y tratamientos especializados.",
    fullDescription:
      "Clínica veterinaria con equipamiento de última generación para el cuidado integral de la salud de tu mascota. Ofrecemos consultas generales, vacunación, desparasitación, cirugías, análisis clínicos, rayos X, ecografías y hospitalización. Nuestro equipo de veterinarios está capacitado en diferentes especialidades para brindar el mejor cuidado. Atendemos emergencias las 24 horas y contamos con servicio de ambulancia veterinaria.",
    price: "$35.000 - $150.000",
    duration: "30 min - 2 horas",
    image: "https://images.unsplash.com/photo-1621371236495-1520d8dc72a5",
    features: [
      "Consultas veterinarias",
      "Vacunación y desparasitación",
      "Cirugías especializadas",
      "Laboratorio clínico",
      "Imagenología (Rayos X, Ecografía)",
      "Atención 24/7 emergencias",
    ],
    contactInfo: {
      phone: "+57 300 234 5678",
      email: "clinica@petservices.com",
    },
  },
  {
    id: "3",
    name: "Entrenamiento Profesional",
    category: "Educación",
    description:
      "Adiestramiento canino con métodos positivos, obediencia básica y avanzada, corrección de conductas.",
    fullDescription:
      "Programa completo de entrenamiento canino basado en refuerzo positivo y técnicas modernas de adiestramiento. Ofrecemos clases personalizadas y grupales para enseñar obediencia básica, comandos avanzados, socialización y corrección de problemas de comportamiento. Nuestros entrenadores certificados trabajan con todas las razas y edades, adaptando las técnicas a las necesidades específicas de cada perro y su familia.",
    price: "$50.000 - $120.000",
    duration: "1 hora/sesión",
    image: "https://images.unsplash.com/photo-1771125652776-92069ae133c0",
    features: [
      "Obediencia básica y avanzada",
      "Socialización controlada",
      "Corrección de conductas",
      "Entrenamiento a domicilio",
      "Clases grupales",
      "Certificación de adiestramiento",
    ],
    contactInfo: {
      phone: "+57 300 345 6789",
      email: "entrenamiento@petservices.com",
    },
  },
  {
    id: "4",
    name: "Hotel para Mascotas",
    category: "Hospedaje",
    description:
      "Hospedaje confortable con habitaciones individuales, área de juegos, cuidado personalizado y monitoreo 24/7.",
    fullDescription:
      "Hotel boutique diseñado especialmente para el confort y bienestar de tu mascota durante tu ausencia. Cada huésped cuenta con su propia habitación climatizada, cama cómoda, área de juegos y atención personalizada. Incluye paseos diarios, alimentación según indicaciones del dueño, administración de medicamentos si es necesario, y envío de fotos y videos diarios para que estés tranquilo. Personal capacitado monitorea a las mascotas las 24 horas.",
    price: "$40.000 - $70.000/día",
    duration: "Por día o estadía",
    image: "https://images.unsplash.com/photo-1663147737123-9cbd239fc3b5",
    features: [
      "Habitaciones individuales climatizadas",
      "Paseos diarios programados",
      "Alimentación personalizada",
      "Monitoreo 24/7",
      "Envío de fotos y videos",
      "Administración de medicamentos",
    ],
    contactInfo: {
      phone: "+57 300 456 7890",
      email: "hotel@petservices.com",
    },
  },
  {
    id: "5",
    name: "Paseos y Caminatas",
    category: "Recreación",
    description:
      "Servicio de paseo profesional, ejercicio al aire libre y socialización en parques seguros.",
    fullDescription:
      "Servicio profesional de paseos diseñado para mantener a tu mascota activa, saludable y feliz. Nuestros paseadores certificados recogen a tu mascota, la llevan a parques seguros y controlados donde puede ejercitarse, jugar y socializar con otros perros bajo supervisión constante. Los paseos se adaptan a la edad, tamaño y nivel de energía de cada mascota. Incluye reporte fotográfico de cada paseo.",
    price: "$15.000 - $30.000/paseo",
    duration: "30 min - 1 hora",
    image: "https://images.unsplash.com/photo-1616420486543-9d94ce1af95b",
    features: [
      "Paseadores certificados",
      "Recogida y entrega a domicilio",
      "Parques seguros y controlados",
      "Socialización supervisada",
      "Reporte fotográfico",
      "Planes semanales y mensuales",
    ],
    contactInfo: {
      phone: "+57 300 567 8901",
      email: "paseos@petservices.com",
    },
  },
  {
    id: "6",
    name: "Guardería Diurna",
    category: "Cuidado",
    description:
      "Guardería de día con actividades recreativas, supervisión constante y socialización controlada.",
    fullDescription:
      "Guardería diurna donde tu mascota puede pasar el día jugando, socializando y siendo cuidada mientras trabajas. Ofrecemos un ambiente seguro y estimulante con áreas de juego interiores y exteriores, actividades recreativas, descanso supervisado y snacks saludables. El personal capacitado supervisa todas las interacciones y agrupa a las mascotas por tamaño y temperamento. Servicio de transporte disponible.",
    price: "$35.000 - $55.000/día",
    duration: "Día completo (8 horas)",
    image: "https://images.unsplash.com/photo-1620021030259-977a6aa9006f",
    features: [
      "Supervisión profesional constante",
      "Actividades recreativas programadas",
      "Socialización controlada",
      "Áreas de juego seguras",
      "Snacks y agua ilimitada",
      "Servicio de transporte opcional",
    ],
    contactInfo: {
      phone: "+57 300 678 9012",
      email: "guarderia@petservices.com",
    },
  },
  {
    id: "7",
    name: "Baño y Spa Relajante",
    category: "Estética",
    description:
      "Baño terapéutico, masajes relajantes, hidratación profunda y tratamientos especiales para el pelaje.",
    fullDescription:
      "Experiencia de spa completa diseñada para el bienestar y relajación de tu mascota. Incluye baño terapéutico con productos naturales, masaje relajante, tratamiento de hidratación profunda, aromaterapia, limpieza dental, y tratamientos especiales según el tipo de pelaje y piel. Ambiente tranquilo con música relajante y atención personalizada para que tu mascota disfrute de un momento de paz y cuidado.",
    price: "$50.000 - $90.000",
    duration: "2 - 2.5 horas",
    image: "https://images.unsplash.com/photo-1766947910763-5a9465ff3f21",
    features: [
      "Baño terapéutico premium",
      "Masajes relajantes",
      "Hidratación profunda del pelaje",
      "Aromaterapia",
      "Limpieza dental",
      "Tratamientos especializados",
    ],
    contactInfo: {
      phone: "+57 300 789 0123",
      email: "spa@petservices.com",
    },
  },
  {
    id: "8",
    name: "Centro de Juegos y Actividades",
    category: "Recreación",
    description:
      "Espacio de juegos con piscina para perros, obstáculos, juguetes interactivos y actividades grupales.",
    fullDescription:
      "Centro especializado de recreación con instalaciones diseñadas para el entretenimiento y ejercicio de tu mascota. Contamos con piscina para perros, circuitos de obstáculos, área de juegos con juguetes interactivos, zona de socialización y actividades grupales supervisadas. Las instalaciones están divididas por tamaños para garantizar la seguridad. Ideal para perros con alta energía que necesitan ejercicio y estimulación mental.",
    price: "$25.000 - $45.000/sesión",
    duration: "2 - 3 horas",
    image: "https://images.unsplash.com/photo-1553258227-99dc39658b5d",
    features: [
      "Piscina para perros climatizada",
      "Circuito de obstáculos",
      "Juguetes interactivos",
      "Actividades grupales supervisadas",
      "Áreas divididas por tamaño",
      "Personal entrenado en primeros auxilios",
    ],
    contactInfo: {
      phone: "+57 300 890 1234",
      email: "juegos@petservices.com",
    },
  },
];

const FAVORITES_KEY = "favorites";
const pageEl = document.getElementById("page");

function parseRoute() {
  const hash = (location.hash || "#/").replace(/^#/, "");
  const path = hash.startsWith("/") ? hash : "/" + hash;
  const parts = path.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };

  if (parts[0] === "services") return { name: "services" };
  if (parts[0] === "favorites") return { name: "favorites" };
  if (parts[0] === "contact") return { name: "contact" };

  if (parts[0] === "service" && parts[1]) return { name: "service", id: parts[1] };

  return { name: "notfound" };
}

function getFavoritesSet() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch {
    return new Set();
  }
}

function saveFavoritesSet(set) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(set)));
}

let favoritesSet = getFavoritesSet();
function isFavorite(serviceId) {
  return favoritesSet.has(serviceId);
}

function toggleFavorite(serviceId) {
  const next = new Set(favoritesSet);
  if (next.has(serviceId)) next.delete(serviceId);
  else next.add(serviceId);
  favoritesSet = next;
  saveFavoritesSet(favoritesSet);
  window.dispatchEvent(new Event("favoritesChanged"));
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (ch) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[ch] || ch;
  });
}

function cardTemplate(service, favorite) {
  // Nota: el corazón es botón; la card principal es enlace.
  return `
    <div class="service-card">
      <div class="image">
        <img src="${escapeHtml(service.image)}" alt="${escapeHtml(service.name)}" loading="lazy" />
        <span class="badge">${escapeHtml(service.category)}</span>
        <button class="fav-btn ${favorite ? "is-favorite" : ""}" type="button" data-fav-id="${escapeHtml(
          service.id
        )}" aria-label="${favorite ? "Quitar de favoritos" : "Agregar a favoritos"}">
          <i data-lucide="heart" class="heart size-5" aria-hidden="true"></i>
        </button>
      </div>
      <div class="card-body">
        <a class="card-main" href="#/service/${escapeHtml(service.id)}" data-service-link>
          <h3>${escapeHtml(service.name)}</h3>
          <p>${escapeHtml(service.description)}</p>
          <div class="card-meta">
            <span class="meta-item"><i data-lucide="clock" class="size-4" aria-hidden="true"></i>${escapeHtml(service.duration)}</span>
            <span class="meta-item"><i data-lucide="dollar-sign" class="size-4" aria-hidden="true"></i>${escapeHtml(service.price)}</span>
          </div>
          <span class="card-link">
            Ver detalles <i data-lucide="arrow-right" class="arrow size-4" aria-hidden="true"></i>
          </span>
        </a>
      </div>
    </div>
  `;
}

function renderHome() {
  const featured = SERVICES.slice(0, 3);

  const cards = featured
    .map((s) => cardTemplate(s, isFavorite(s.id)))
    .join("");

  pageEl.innerHTML = `
    <section class="hero">
      <div class="container hero-grid">
        <h1>Los Mejores Servicios para tu Mascota</h1>
        <p>Cuidado profesional, atención personalizada y amor en cada servicio</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#/services">Explorar Servicios <i data-lucide="arrow-right" class="size-5" aria-hidden="true"></i></a>
          <a class="btn btn-outline" href="#/contact">Contáctanos</a>
        </div>
      </div>
    </section>

    <section class="section features">
      <div class="container">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon" style="background: rgba(37,99,235,0.12); color: var(--blue2);">
              <i data-lucide="shield" class="size-8" aria-hidden="true"></i>
            </div>
            <h3>Profesionales Certificados</h3>
            <p>Personal capacitado y con experiencia en el cuidado de mascotas</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon" style="background: rgba(22,163,74,0.12); color: var(--green);">
              <i data-lucide="heart" class="size-8" aria-hidden="true"></i>
            </div>
            <h3>Atención Personalizada</h3>
            <p>Servicios adaptados a las necesidades específicas de tu mascota</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon" style="background: rgba(124,58,237,0.12); color: #7c3aed;">
              <i data-lucide="sparkles" class="size-8" aria-hidden="true"></i>
            </div>
            <h3>Instalaciones Modernas</h3>
            <p>Equipamiento de última generación para el mejor cuidado</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon" style="background: rgba(249,115,22,0.12); color: #9a3412;">
              <i data-lucide="clock" class="size-8" aria-hidden="true"></i>
            </div>
            <h3>Disponibilidad 24/7</h3>
            <p>Atención de emergencias y consultas en cualquier momento</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Servicios Destacados</h2>
        <p class="section-subtitle">Descubre nuestros servicios más populares diseñados para el bienestar y felicidad de tu mascota</p>
        <div class="card-grid">
          ${cards}
        </div>
        <div style="text-align:center; margin-top: 26px;">
          <a class="btn btn-primary" style="width: fit-content; margin: 0 auto;" href="#/services">
            Ver Todos los Servicios <i data-lucide="arrow-right" class="size-5" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>

    <section class="section" style="padding-bottom: 70px;">
      <div class="container">
        <div style="
          border-radius: var(--radius);
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #fff;
          padding: 28px 18px;
          text-align:center;
          box-shadow: 0 18px 45px rgba(37, 99, 235, 0.26);
        ">
          <h2 style="margin:0 0 10px; font-size: 30px; font-weight: 1000; letter-spacing: -0.02em;">¿Listo para darle lo mejor a tu mascota?</h2>
          <p style="margin:0 auto; color: rgba(255,255,255,0.92); max-width: 680px; line-height: 1.6;">
            Contáctanos hoy y descubre cómo podemos ayudarte a cuidar mejor de tu compañero peludo
          </p>
          <div class="hero-actions" style="margin-top: 18px;">
            <a class="btn btn-primary" href="#/contact" style="box-shadow: none;">Contactar Ahora <i data-lucide="arrow-right" class="size-5" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServices() {
  const categories = Array.from(new Set(SERVICES.map((s) => s.category)));
  const allCats = ["Todas", ...categories];

  const initialState = {
    searchTerm: "",
    selectedCategory: "Todas",
  };

  pageEl.innerHTML = `
    <section class="section" style="padding-top: 44px;">
      <div class="container">
        <h1 class="section-title" style="margin-bottom: 10px;">Nuestros Servicios</h1>
        <p class="section-subtitle">Explora nuestra amplia gama de servicios profesionales diseñados para el cuidado integral de tu mascota</p>

        <div class="filters" style="margin-top: 22px;">
          <div class="filters-grid">
            <div class="field">
              <label class="label" for="searchInput">Buscar</label>
              <div style="position:relative;">
                <i data-lucide="search" class="size-4" aria-hidden="true" style="position:absolute; left:14px; top:50%; transform:translateY(-50%); color:#9ca3af;"></i>
                <input id="searchInput" class="input" type="text" placeholder="Buscar servicios..." value="${escapeHtml(
                initialState.searchTerm
                )}" style="padding-left:46px;" />
              </div>
            </div>
            <div class="field">
              <label class="label" for="categorySelect">Categoría</label>
              <select id="categorySelect" class="select">
                ${allCats
                  .map((c) => `<option value="${escapeHtml(c)}"${c === initialState.selectedCategory ? " selected" : ""}>${escapeHtml(c)}</option>`)
                  .join("")}
              </select>
            </div>
          </div>
          <div class="results-count" id="resultsCount"></div>
        </div>

        <div id="servicesGrid" class="card-grid" aria-live="polite"></div>
        <div id="noResults" class="center-empty" style="display:none;">
          <div style="font-size: 46px; opacity: 0.3; margin-bottom: 8px;" aria-hidden="true">
            <i data-lucide="heart" class="size-16" aria-hidden="true" style="display:block;"></i>
          </div>
          <p style="margin:0; font-weight: 800;">No se encontraron servicios que coincidan con tu búsqueda.</p>
        </div>
      </div>
    </section>
  `;

  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");
  const servicesGrid = document.getElementById("servicesGrid");
  const noResults = document.getElementById("noResults");
  const resultsCount = document.getElementById("resultsCount");

  function applyFilters() {
    const term = (searchInput.value || "").trim().toLowerCase();
    const cat = categorySelect.value || "Todas";

    const filtered = SERVICES.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(term) || service.description.toLowerCase().includes(term);
      const matchesCategory = cat === "Todas" || service.category === cat;
      return matchesSearch && matchesCategory;
    });

    resultsCount.textContent = `Mostrando ${filtered.length} de ${SERVICES.length} servicios`;

    if (filtered.length === 0) {
      servicesGrid.innerHTML = "";
      noResults.style.display = "block";
      return;
    }
    noResults.style.display = "none";
    servicesGrid.innerHTML = filtered.map((s) => cardTemplate(s, isFavorite(s.id))).join("");
  }

  searchInput.addEventListener("input", applyFilters);
  categorySelect.addEventListener("change", applyFilters);
  applyFilters();
}

function renderFavorites() {
  const favIds = Array.from(favoritesSet);
  const favServices = SERVICES.filter((s) => favIds.includes(s.id));

  const cards = favServices.map((s) => cardTemplate(s, isFavorite(s.id))).join("");

  pageEl.innerHTML = `
    <section class="section" style="padding-top: 44px;">
      <div class="container">
        <div style="text-align:center; margin-bottom: 22px;">
          <div style="width: 72px; height:72px; margin: 0 auto 10px; border-radius:999px; background: rgba(239,68,68,0.12); display:grid; place-items:center;">
            <i data-lucide="heart" class="size-8" aria-hidden="true" style="color:#ef4444;"></i>
          </div>
          <h1 style="margin:0; font-size: 44px; font-weight: 1000; letter-spacing: -0.02em;">Mis Favoritos</h1>
          <p class="section-subtitle" style="max-width: 720px;">Los servicios que has guardado para consultar más tarde</p>
        </div>

        ${
          favServices.length > 0
            ? `
              <div style="margin-bottom: 14px; color: var(--muted); font-weight: 700; font-size: 14px;">
                Tienes <span style="color: var(--text);">${favServices.length}</span> servicio${
                  favServices.length !== 1 ? "s" : ""
                } guardado${favServices.length !== 1 ? "s" : ""}.
              </div>
              <div class="card-grid">${cards}</div>
            `
            : `
              <div class="center-empty">
                <div class="empty-icon" aria-hidden="true">
                  <i data-lucide="heart" class="size-16" aria-hidden="true" style="display:block; color:#ef4444;"></i>
                </div>
                <h2 style="margin: 0 0 8px; color: var(--text); font-size: 26px; font-weight: 1000;">No tienes favoritos aún</h2>
                <p style="margin:0 0 20px; line-height: 1.6;">Explora nuestros servicios y guarda tus favoritos para acceder a ellos fácilmente</p>
                <a class="btn btn-primary" href="#/services" style="margin: 0 auto;">Explorar Servicios <i data-lucide="arrow-right" class="size-5" aria-hidden="true"></i></a>
              </div>
            `
        }
      </div>
    </section>
  `;
}

function renderServiceDetail(id) {
  const service = SERVICES.find((s) => s.id === id);
  if (!service) {
    pageEl.innerHTML = `
      <section class="section" style="padding-top: 60px;">
        <div class="container">
          <div class="center-empty">
            <div style="font-size: 98px; font-weight: 1000; color: var(--blue2); line-height:1;" aria-hidden="true">404</div>
            <h2 style="margin:0 0 10px; font-size: 30px; font-weight: 1000;">Servicio no encontrado</h2>
            <p style="margin:0 0 20px; max-width: 520px; margin-left:auto; margin-right:auto;">Lo sentimos, el servicio solicitado no existe o ha sido movido.</p>
            <a class="btn btn-primary" href="#/services">Volver a Servicios <i data-lucide="arrow-right" class="size-5" aria-hidden="true"></i></a>
          </div>
        </div>
      </section>
    `;
    return;
  }

  const favorite = isFavorite(service.id);
  const features = service.features
    .map(
      (f) => `
      <div class="feature-li">
        <div class="check" aria-hidden="true">
          <i data-lucide="check-circle" class="size-5" aria-hidden="true"></i>
        </div>
        <div>${escapeHtml(f)}</div>
      </div>
    `
    )
    .join("");

  const related = SERVICES.filter((s) => s.category === service.category && s.id !== service.id).slice(0, 3);
  const relatedCards =
    related.length > 0
      ? `
    <div class="card-grid">
      ${related.map((s) => cardTemplate(s, isFavorite(s.id))).join("")}
    </div>
  `
      : "";

  pageEl.innerHTML = `
    <section class="detail-wrap">
      <div class="container">
        <a class="back-link" href="#/services">
          <i data-lucide="arrow-left" class="size-5" aria-hidden="true"></i> Volver
        </a>

        <div class="detail-card">
          <div class="detail-image">
            <img src="${escapeHtml(service.image)}" alt="${escapeHtml(service.name)}" />
            <span class="badge">${escapeHtml(service.category)}</span>
            <button class="fav-btn ${favorite ? "is-favorite" : ""}" type="button" data-fav-id="${escapeHtml(
              service.id
            )}" aria-label="${favorite ? "Quitar de favoritos" : "Agregar a favoritos"}">
              <i data-lucide="heart" class="heart size-6" aria-hidden="true"></i>
            </button>
          </div>

          <div class="detail-content">
            <h1 class="detail-title">${escapeHtml(service.name)}</h1>

            <div class="detail-basic">
              <div class="meta">
                <i data-lucide="clock" class="size-5" aria-hidden="true"></i>${escapeHtml(service.duration)}
              </div>
              <div class="meta green">
                <i data-lucide="dollar-sign" class="size-5" aria-hidden="true"></i>${escapeHtml(service.price)}
              </div>
            </div>

            <h2 class="detail-h2">Descripción del Servicio</h2>
            <p class="detail-text">${escapeHtml(service.fullDescription)}</p>

            <h2 class="detail-h2" style="margin-top: 28px;">¿Qué Incluye?</h2>
            <div class="features-list">${features}</div>

            <div class="contact-box">
              <h2 class="detail-h2" style="margin-bottom: 6px;">Información de Contacto</h2>
              <div class="contact-grid">
                <a class="contact-link" href="tel:${escapeHtml(service.contactInfo.phone)}">
                  <span class="contact-icon" aria-hidden="true">
                    <i data-lucide="phone" class="size-5" aria-hidden="true"></i>
                  </span>
                  <span class="contact-text">
                    <span>Teléfono</span>
                    <strong>${escapeHtml(service.contactInfo.phone)}</strong>
                  </span>
                </a>

                <a class="contact-link" href="mailto:${escapeHtml(service.contactInfo.email)}">
                  <span class="contact-icon green" aria-hidden="true">
                    <i data-lucide="mail" class="size-5" aria-hidden="true"></i>
                  </span>
                  <span class="contact-text">
                    <span>Email</span>
                    <strong>${escapeHtml(service.contactInfo.email)}</strong>
                  </span>
                </a>
              </div>

              <div class="detail-actions">
                <a class="btn btn-primary" href="tel:${escapeHtml(service.contactInfo.phone)}">
                  <i data-lucide="phone" class="size-5" aria-hidden="true"></i> Llamar Ahora <i data-lucide="arrow-right" class="size-5" aria-hidden="true"></i>
                </a>
                <a class="btn btn-link" href="#/contact">
                  <i data-lucide="mail" class="size-5" aria-hidden="true"></i> Enviar Mensaje <i data-lucide="arrow-right" class="size-5" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        ${related ? `<div class="related"><h2>Otros Servicios de ${escapeHtml(service.category)}</h2>${relatedCards}</div>` : ""}
      </div>
    </section>
  `;
}

function renderContact() {
  pageEl.innerHTML = `
    <section class="contact-page">
      <div class="container">
        <h1 class="section-title" style="margin-bottom: 10px;">Contáctanos</h1>
        <p class="section-subtitle">¿Tienes preguntas o deseas agendar un servicio? Estamos aquí para ayudarte</p>

        <div class="contact-wrap" style="margin-top: 22px;">
          <div class="panel">
            <h2>Envíanos un Mensaje</h2>
            <form id="contactForm" class="form-grid" autocomplete="on">
              <div>
                <label class="label" for="name">Nombre Completo *</label>
                <input id="name" name="name" class="input" type="text" required placeholder="Tu nombre" />
              </div>
              <div>
                <label class="label" for="email">Email *</label>
                <input id="email" name="email" class="input" type="email" required placeholder="tu@email.com" />
              </div>
              <div>
                <label class="label" for="phone">Teléfono *</label>
                <input id="phone" name="phone" class="input" type="tel" required placeholder="+57 300 123 4567" />
              </div>
              <div>
                <label class="label" for="service">Servicio de Interés</label>
                <select id="service" name="service" class="select">
                  <option value="">Selecciona un servicio</option>
                  ${SERVICES.map((s) => {
                    // Mapeo simple a un value amigable
                    const v = s.id === "1" ? "peluqueria"
                      : s.id === "2" ? "clinica"
                      : s.id === "3" ? "entrenamiento"
                      : s.id === "4" ? "hotel"
                      : s.id === "5" ? "paseos"
                      : s.id === "6" ? "guarderia"
                      : s.id === "7" ? "spa"
                      : "juegos";
                    return `<option value="${v}">${escapeHtml(s.name)}</option>`;
                  }).join("")}
                </select>
              </div>
              <div>
                <label class="label" for="message">Mensaje *</label>
                <textarea id="message" name="message" class="input textarea" required rows="5" placeholder="Cuéntanos cómo podemos ayudarte..."></textarea>
              </div>

              <button class="btn btn-primary" type="submit" style="width: 100%; margin-top: 6px;">
                <i data-lucide="send" class="size-5" aria-hidden="true"></i> Enviar Mensaje
              </button>
            </form>
            <div id="contactSuccess" style="display:none; margin-top: 14px;" class="success" role="status" aria-live="polite">
              <div style="width: 56px; height:56px; border-radius:999px; background: rgba(22,163,74,0.12); display:grid; place-items:center; margin: 0 auto 10px;">
                <i data-lucide="check-circle" class="size-8" aria-hidden="true" style="color: var(--green);"></i>
              </div>
              <h3>¡Mensaje Enviado!</h3>
              <p>Gracias por contactarnos. Te responderemos pronto.</p>
            </div>
          </div>

          <aside class="panel" style="background: #fff;">
            <h2>Información de Contacto</h2>
            <div style="display:grid; gap: 14px;">
              <div style="display:flex; gap: 12px; align-items:flex-start;">
                <div class="contact-icon" aria-hidden="true">
                  <i data-lucide="phone" class="size-5" aria-hidden="true"></i>
                </div>
                <div>
                  <div style="font-weight: 1000; margin-bottom: 4px;">Teléfono</div>
                  <div style="color: var(--muted); font-weight: 700;">+57 300 123 4567</div>
                  <div style="color: var(--muted); font-size: 13px; margin-top: 4px;">Lun - Vie: 8am - 6pm</div>
                </div>
              </div>
              <div style="display:flex; gap: 12px; align-items:flex-start;">
                <div class="contact-icon green" aria-hidden="true">
                  <i data-lucide="mail" class="size-5" aria-hidden="true"></i>
                </div>
                <div>
                  <div style="font-weight: 1000; margin-bottom: 4px;">Email</div>
                  <div style="color: var(--muted); font-weight: 700;">info@petservices.com</div>
                  <div style="color: var(--muted); font-size: 13px; margin-top: 4px;">Respuesta en 24 horas</div>
                </div>
              </div>
              <div style="display:flex; gap: 12px; align-items:flex-start;">
                <div class="contact-icon" aria-hidden="true">
                  <i data-lucide="map-pin" class="size-5" aria-hidden="true"></i>
                </div>
                <div>
                  <div style="font-weight: 1000; margin-bottom: 4px;">Dirección</div>
                  <div style="color: var(--muted); font-weight: 700;">Calle 123 #45-67</div>
                  <div style="color: var(--muted); font-size: 13px; margin-top: 4px;">Bogotá, Colombia</div>
                </div>
              </div>
            </div>

            <div style="margin-top: 16px; padding: 16px; border-radius: var(--radius); background: linear-gradient(135deg, rgba(37,99,235,0.12), rgba(37,99,235,0.04)); border: 1px solid rgba(37,99,235,0.18);">
              <div style="font-weight: 1000; font-size: 18px; margin-bottom: 10px; color: #0b3aa8;">
                Horarios de Atención
              </div>
              <div style="display:grid; gap: 8px; color: #0f172a; font-weight: 700;">
                <div style="display:flex; justify-content: space-between; gap: 12px;"><span>Lunes - Viernes</span><span>8:00 AM - 6:00 PM</span></div>
                <div style="display:flex; justify-content: space-between; gap: 12px;"><span>Sábados</span><span>9:00 AM - 5:00 PM</span></div>
                <div style="display:flex; justify-content: space-between; gap: 12px;"><span>Domingos</span><span>Cerrado</span></div>
              </div>
              <div style="margin-top: 14px; padding-top: 14px; border-top: 1px solid rgba(29,78,216,0.2);">
                <div style="font-weight: 1000; margin-bottom: 4px;">Emergencias 24/7</div>
                <div style="color: var(--muted); font-size: 13px;">
                  Para emergencias veterinarias, estamos disponibles las 24 horas del día.
                </div>
              </div>
            </div>

            <div style="margin-top: 16px;">
              <div style="font-weight: 1000; font-size: 18px; margin-bottom: 10px;">¿Por qué elegirnos?</div>
              <div style="display:grid; gap: 10px; color: var(--muted); font-weight: 700;">
                <div style="display:flex; gap: 10px; align-items:flex-start;"><i data-lucide="check-circle" class="size-5" aria-hidden="true" style="color: var(--green);"></i><span>Más de 10 años de experiencia</span></div>
                <div style="display:flex; gap: 10px; align-items:flex-start;"><i data-lucide="check-circle" class="size-5" aria-hidden="true" style="color: var(--green);"></i><span>Personal certificado y capacitado</span></div>
                <div style="display:flex; gap: 10px; align-items:flex-start;"><i data-lucide="check-circle" class="size-5" aria-hidden="true" style="color: var(--green);"></i><span>Instalaciones modernas y seguras</span></div>
                <div style="display:flex; gap: 10px; align-items:flex-start;"><i data-lucide="check-circle" class="size-5" aria-hidden="true" style="color: var(--green);"></i><span>Atención personalizada y amorosa</span></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;

  const form = document.getElementById("contactForm");
  const successEl = document.getElementById("contactSuccess");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Simulación simple de envío.
    successEl.style.display = "block";
    form.reset();
    setTimeout(() => {
      successEl.style.display = "none";
    }, 3000);
  });
}

function renderRoute() {
  favoritesSet = getFavoritesSet(); // refresca por si localStorage cambió desde otra vista
  const route = parseRoute();

  if (route.name === "home") renderHome();
  else if (route.name === "services") renderServices();
  else if (route.name === "favorites") renderFavorites();
  else if (route.name === "contact") renderContact();
  else if (route.name === "service") renderServiceDetail(route.id);
  else renderContact(); // fallback simple

  pageEl.classList.remove("fade-in");
  // trick para re-aplicar animación al cambiar de vista
  // eslint-disable-next-line no-unused-expressions
  pageEl.offsetHeight;
  pageEl.classList.add("fade-in");

  // Renderiza iconos Lucide en contenido dinámico.
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

function onDocumentClick(e) {
  const favBtn = e.target.closest && e.target.closest("[data-fav-id]");
  if (favBtn) {
    e.preventDefault();
    e.stopPropagation();
    const id = favBtn.getAttribute("data-fav-id");
    if (id) toggleFavorite(id);
    return;
  }
}

function init() {
  // Vista inicial por hash.
  if (!location.hash) location.hash = "#/";

  window.addEventListener("hashchange", renderRoute);
  window.addEventListener("favoritesChanged", renderRoute);
  document.addEventListener("click", onDocumentClick);

  renderRoute();
}

document.addEventListener("DOMContentLoaded", init);

