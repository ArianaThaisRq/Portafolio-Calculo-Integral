function buildSidebar() {
  const nav = document.getElementById("sidebar-nav");
  const grupos = [];

  DATA.temas.forEach((tema) => {
    let grupo = grupos.find((g) => g.nombre === tema.categoria);
    if (!grupo) {
      grupo = { nombre: tema.categoria, temas: [] };
      grupos.push(grupo);
    }
    grupo.temas.push(tema);
  });

  grupos.forEach((grupo) => {
    const wrap = document.createElement("div");
    wrap.className = "grupo";

    const header = document.createElement("button");
    header.type = "button";
    header.className = "grupo-header";
    header.setAttribute("aria-expanded", "true");
    header.innerHTML = `<span class="grupo-nombre">. ${grupo.nombre}</span><span class="chevron">&rsaquo;</span>`;

    const items = document.createElement("div");
    items.className = "grupo-items";

    grupo.temas.forEach((tema) => {
      const btn = document.createElement("button");
      btn.className = "tema-btn";
      btn.type = "button";
      btn.dataset.id = tema.id;
      btn.textContent = `${tema.numero}. ${tema.titulo}`;
      btn.addEventListener("click", () => {
        seleccionarTema(tema.id);
        cerrarDrawer();
      });
      items.appendChild(btn);
    });

    header.addEventListener("click", () => {
      const colapsado = wrap.classList.toggle("colapsado");
      header.setAttribute("aria-expanded", String(!colapsado));
    });

    wrap.appendChild(header);
    wrap.appendChild(items);
    nav.appendChild(wrap);
  });
}

function buildPrerrequisitos() {
  const ul = document.getElementById("prereq-list");
  DATA.prerrequisitos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    ul.appendChild(li);
  });
}

function abrirDrawer() {
  document.getElementById("sidebar").classList.add("abierto");
  document.getElementById("overlay").classList.add("visible");
  document.body.classList.add("sidebar-activo");
  document.getElementById("hamburger").setAttribute("aria-expanded", "true");
}

function cerrarDrawer() {
  document.getElementById("sidebar").classList.remove("abierto");
  document.getElementById("overlay").classList.remove("visible");
  document.body.classList.remove("sidebar-activo");
  document.getElementById("hamburger").setAttribute("aria-expanded", "false");
}

function toggleDesktop() {
  const colapsado = document.body.classList.toggle("sidebar-colapsado");
  const btn = document.getElementById("desktop-toggle");
  btn.setAttribute("aria-expanded", String(!colapsado));
  btn.setAttribute("aria-label", colapsado ? "Abrir menú lateral" : "Colapsar menú lateral");
}

function seleccionarTema(id) {
  document.querySelectorAll(".tema-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.id === id);
  });
  renderTema(id);
}

function renderTema(id) {
  const tema = DATA.temas.find((t) => t.id === id);
  const content = document.getElementById("content");
  content.innerHTML = "";

  document.getElementById("mobile-title-text").textContent = tema.titulo;

  const inner = document.createElement("div");
  inner.className = "content-inner";

  const categoria = document.createElement("p");
  categoria.className = "content-categoria";
  categoria.textContent = tema.categoria.toUpperCase();
  inner.appendChild(categoria);

  const h2 = document.createElement("h2");
  h2.className = "content-titulo";
  h2.textContent = tema.titulo;
  inner.appendChild(h2);

  if (tema.subtitulo) {
    const sub = document.createElement("p");
    sub.className = "content-subtitulo";
    sub.textContent = tema.subtitulo;
    inner.appendChild(sub);
  }

  inner.appendChild(document.createElement("hr")).className = "content-divider";

  tema.contenido.forEach((bloque) => inner.appendChild(renderBloque(bloque)));

  content.appendChild(inner);
}

// Para agregar un tipo de bloque nuevo: añade un "case" aquí.
// Si no lo agregas, cae en "default" y se muestra como texto simple.
function renderBloque(bloque) {
  const el = document.createElement("div");
  el.className = `bloque bloque-${bloque.tipo}`;
  if (bloque.tipo === "texto" && /^(¿De qué trata|¿Para qué sirve)/.test(bloque.titulo || "")) {
    el.classList.add("bloque-explicativo");
  }

  switch (bloque.tipo) {
    case "video":
      el.innerHTML = `
        <p class="video-label">&#9655; ${bloque.etiqueta || "Video introductorio"}</p>
        <div class="video-wrap"><iframe src="https://www.youtube.com/embed/${bloque.youtubeId}?rel=0&modestbranding=1" title="${bloque.titulo || "Video"}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <p class="video-tip">${bloque.descripcion || "&#128161; Si el video no carga, puedes abrirlo directamente en YouTube."} <a class="video-enlace" href="https://www.youtube.com/watch?v=${bloque.youtubeId}" target="_blank" rel="noopener noreferrer">Ver en YouTube ↗</a></p>`;
      break;

    case "texto": {
      const formula = bloque.formulaClave
        ? `<div class="formula-clave"><span class="etiqueta">Fórmula clave</span><span class="formula">${bloque.formulaClave}</span></div>`
        : "";
      el.innerHTML = `${bloque.titulo ? `<h3>${bloque.titulo}</h3>` : ""}${bloque.html || `<p>${bloque.texto}</p>`}${formula}`;
      break;
    }

    case "ejercicio": {
      const pasos = (bloque.pasos || [])
        .map(
          (paso, i) => `
        <div class="paso">
          <div class="paso-marker"><span class="paso-numero">${i + 1}</span></div>
          <div class="paso-contenido">
            <h4 class="paso-titulo">${paso.titulo}</h4>
            <p class="paso-descripcion">${paso.descripcion}</p>
            <div class="paso-formula">${paso.formula}</div>
          </div>
        </div>`
        )
        .join("");
      el.innerHTML = `<h3>&#128214; ${bloque.titulo || "Ejercicio resuelto"}</h3><p class="enunciado"><strong>Enunciado:</strong> ${bloque.enunciado}</p><div class="stepper">${pasos}</div>`;
      break;
    }

    case "imagen":
      el.innerHTML = bloque.html || `<img src="${bloque.src}" alt="${bloque.alt || ""}">`;
      break;

    case "nota":
      el.innerHTML = `<p class="nota">${bloque.texto}</p>`;
      break;

    default:
      el.innerHTML = `<p>${bloque.texto || ""}</p>`;
  }

  return el;
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.protocol === "file:") {
    const aviso = document.createElement("p");
    aviso.className = "aviso-servidor";
    aviso.innerHTML = "Para que YouTube pueda reproducirse, abre el proyecto con <strong>iniciar-servidor.ps1</strong> y usa <code>http://localhost:8080</code>, no el archivo <code>index.html</code> directamente.";
    document.body.prepend(aviso);
  }
  buildSidebar();
  buildPrerrequisitos();
  seleccionarTema(DATA.temas[0].id);

  document.getElementById("hamburger").addEventListener("click", abrirDrawer);
  document.getElementById("sidebar-close").addEventListener("click", cerrarDrawer);
  document.getElementById("overlay").addEventListener("click", cerrarDrawer);

  const desktopToggle = document.getElementById("desktop-toggle");
  if (desktopToggle) {
    desktopToggle.addEventListener("click", toggleDesktop);
  }
});
