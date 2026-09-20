// ==========================================
// PLAZA DE ARMAS DE TINGO MARÍA
// INTERACTIVIDAD
// ==========================================

const app = document.getElementById("app");

const btnDia = document.getElementById("dia");
const btnNoche = document.getElementById("noche");

const panel = document.getElementById("panel");
const cerrarPanel = document.getElementById("cerrarPanel");

const botonesMenu = document.querySelectorAll(".menu-btn");
const marcadores = document.querySelectorAll(".marcador");

const tituloPanel = document.querySelector(".panel-titulo h2");
const imagenPanel = document.getElementById("imagenPanel");
const iconoPanel = document.getElementById("iconoPanel");
const filas = document.querySelectorAll(".fila");
const botonDetalle = document.querySelector(".detalle");


// ==========================================
// DATOS DE CADA ELEMENTO
// ==========================================

const elementos = {

  rampa: {
    titulo: "Rampa accesible",
    imagen: "rampa.png",
    icono: "♿",

    datos: [
      ["Desnivel (h)", "0.60 m"],
      ["Pendiente (P)", "8 %"],
      ["Desarrollo horizontal (L)", "7.50 m"],
      ["Ancho libre", "1.50 m"],
      ["Descanso", "1.50 m"],
      ["Altura de pasamanos", "0.70 m y 0.90 m"],
      ["Norma", "A.120 – RNE"]
    ]
  },


  cruce: {
    titulo: "Cruce peatonal",
    imagen: "cruce.png",
    icono: "🚶",

    datos: [
      ["Longitud de cruce", "8.00 m"],
      ["Velocidad peatonal", "1.00 m/s"],
      ["Tiempo de cruce", "8 s"],
      ["Objetivo", "Cruce protegido"]
    ]
  },


  vehiculo: {
    titulo: "Seguridad vehicular",
    imagen: "vehiculo.png",
    icono: "🚗",

    datos: [
      ["Velocidad urbana", "30 km/h"],
      ["Velocidad convertida", "8.33 m/s"],
      ["Tiempo de reacción", "1.5 s"],
      ["Distancia de reacción", "12.50 m"],
      ["Distancia de frenado", "8.67 m"],
      ["Distancia total", "21.17 m"]
    ]
  },


  mobiliario: {
    titulo: "Mobiliario urbano",
    imagen: "mobiliario.png",
    icono: "🪑",

    datos: [
      ["Elemento", "Bancas"],
      ["Ubicación", "Zona peatonal"],
      ["Función", "Descanso"],
      ["Accesibilidad", "Ruta continua"]
    ]
  },


  areas: {
    titulo: "Áreas verdes",
    imagen: "areas-verdes.png",
    icono: "🌳",

    datos: [
      ["Elemento", "Jardines"],
      ["Vegetación", "Árboles y plantas"],
      ["Función", "Sombra y descanso"],
      ["Objetivo", "Espacio sostenible"]
    ]
  },


  monumento: {
    titulo: "Monumento central",
    imagen: "monumento.png",
    icono: "🗿",

    datos: [
      ["Ubicación", "Centro de la plaza"],
      ["Función", "Hito urbano"],
      ["Zona", "Área central"],
      ["Acceso", "Ruta peatonal"]
    ]
  },


  encuentro: {
    titulo: "Zona de encuentro",
    imagen: "zona-encuentro.png",
    icono: "👥",

    datos: [
      ["Uso", "Reunión y descanso"],
      ["Acceso", "Peatonal"],
      ["Conexión", "Ruta accesible"],
      ["Espacio", "Área pública"]
    ]
  },


  edificio: {
    titulo: "Edificio principal",
    imagen: "edificio.png",
    icono: "🏢",

    datos: [
      ["Entorno", "Plaza de Armas"],
      ["Acceso", "Zona urbana"],
      ["Conexión", "Ruta peatonal"],
      ["Referencia", "Tingo María"]
    ]
  }

};


// ==========================================
// MODO DÍA
// ==========================================

btnDia.addEventListener("click", () => {

  app.classList.remove("noche");

  btnDia.classList.add("activo");
  btnNoche.classList.remove("activo");

});


// ==========================================
// MODO NOCHE
// ==========================================

btnNoche.addEventListener("click", () => {

  app.classList.add("noche");

  btnNoche.classList.add("activo");
  btnDia.classList.remove("activo");

});


// ==========================================
// ABRIR PANEL
// ==========================================

function abrirPanel() {
  panel.classList.remove("oculto");
}


// ==========================================
// CERRAR PANEL
// ==========================================

cerrarPanel.addEventListener("click", () => {
  panel.classList.add("oculto");
});


// ==========================================
// MOSTRAR ELEMENTO
// ==========================================

function mostrarElemento(nombre) {

  const elemento = elementos[nombre];

  if (!elemento) return;

  abrirPanel();

  // TÍTULO
  tituloPanel.textContent = elemento.titulo;


  // ========================================
  // IMAGEN
  // ========================================

  imagenPanel.style.display = "block";
  iconoPanel.style.display = "none";

  imagenPanel.src = elemento.imagen;
  imagenPanel.alt = elemento.titulo;


  // Si la imagen NO existe, muestra el icono
  imagenPanel.onerror = function () {

    imagenPanel.style.display = "none";

    iconoPanel.style.display = "flex";
    iconoPanel.textContent = elemento.icono;

  };


  // ========================================
  // MEDIDAS / INFORMACIÓN
  // ========================================

  filas.forEach((fila, i) => {

    if (elemento.datos[i]) {

      fila.style.display = "flex";

      fila.querySelector("span").textContent =
        elemento.datos[i][0];

      fila.querySelector("strong").textContent =
        elemento.datos[i][1];

    }

    else {

      fila.style.display = "none";

    }

  });


  // Guardamos cuál elemento está abierto
  botonDetalle.dataset.elemento = nombre;

}


// ==========================================
// MENÚ SUPERIOR
// ==========================================

botonesMenu.forEach(boton => {

  boton.addEventListener("click", () => {

    botonesMenu.forEach(b => {
      b.classList.remove("activo");
    });

    boton.classList.add("activo");

    const seccion = boton.dataset.seccion;


    if (seccion === "rampa") {
      mostrarElemento("rampa");
    }

    else if (seccion === "cruce") {
      mostrarElemento("cruce");
    }

    else if (seccion === "vehiculos") {
      mostrarElemento("vehiculo");
    }

    else if (seccion === "mobiliario") {
      mostrarElemento("mobiliario");
    }

    else if (seccion === "verde") {
      mostrarElemento("areas");
    }

    else if (seccion === "general") {
      panel.classList.add("oculto");
    }

  });

});


// ==========================================
// MARCADORES DE LA PLAZA
// ==========================================

marcadores.forEach(marcador => {

  marcador.addEventListener("click", () => {

    if (marcador.classList.contains("rampa")) {
      mostrarElemento("rampa");
    }

    else if (marcador.classList.contains("vehiculo")) {
      mostrarElemento("vehiculo");
    }

    else if (marcador.classList.contains("areas")) {
      mostrarElemento("areas");
    }

    else if (marcador.classList.contains("mobiliario")) {
      mostrarElemento("mobiliario");
    }

    else if (marcador.classList.contains("monumento")) {
      mostrarElemento("monumento");
    }

    else if (marcador.classList.contains("encuentro")) {
      mostrarElemento("encuentro");
    }

    else if (marcador.classList.contains("edificio")) {
      mostrarElemento("edificio");
    }

  });

});


// ==========================================
// BOTÓN VER DETALLE
// ==========================================

botonDetalle.addEventListener("click", () => {

  const nombre = botonDetalle.dataset.elemento;

  if (!nombre || !elementos[nombre]) return;

  const elemento = elementos[nombre];

  alert(
    elemento.titulo +
    "\n\n" +
    elemento.datos
      .map(dato => dato[0] + ": " + dato[1])
      .join("\n")
  );

});


// ==========================================
// ESTADO INICIAL
// ==========================================

mostrarElemento("rampa");
