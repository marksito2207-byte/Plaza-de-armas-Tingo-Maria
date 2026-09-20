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
      mostrarRampa();
    }

    if (seccion === "vehiculos") {
      mostrarVehiculo();
    }

    if (seccion === "mobiliario") {
      mostrarMobiliario();
    }

    if (seccion === "verde") {
      mostrarAreasVerdes();
    }

    if (seccion === "cruce") {
      mostrarCruce();
    }

  });

});


// ==========================================
// CERRAR PANEL
// ==========================================

cerrarPanel.addEventListener("click", () => {

  panel.classList.add("oculto");

});


// ==========================================
// ABRIR PANEL
// ==========================================

function abrirPanel() {

  panel.classList.remove("oculto");

}


// ==========================================
// CAMBIAR INFORMACIÓN
// ==========================================

function actualizarPanel(titulo, datos, icono) {

  abrirPanel();

  document.querySelector(".panel-titulo h2").textContent = titulo;

  document.querySelector(".rampa-demo").textContent = icono;

  const filas = document.querySelectorAll(".fila");

  filas.forEach((fila, i) => {

    if (datos[i]) {

      fila.style.display = "flex";

      fila.querySelector("span").textContent =
        datos[i][0];

      fila.querySelector("strong").textContent =
        datos[i][1];

    } else {

      fila.style.display = "none";

    }

  });

}


// ==========================================
// RAMPA
// ==========================================

function mostrarRampa() {

  actualizarPanel(

    "Rampa accesible",

    [
      ["Desnivel (h)", "0.60 m"],
      ["Pendiente (P)", "8 %"],
      ["Desarrollo horizontal (L)", "7.50 m"],
      ["Ancho libre", "1.50 m"],
      ["Descanso", "1.50 m"],
      ["Altura de pasamanos", "0.70 m y 0.90 m"],
      ["Norma", "A.120 – RNE"]
    ],

    "♿"

  );

}


// ==========================================
// VEHÍCULO
// ==========================================

function mostrarVehiculo() {

  actualizarPanel(

    "Seguridad vehicular",

    [
      ["Velocidad urbana", "30 km/h"],
      ["Velocidad", "8.33 m/s"],
      ["Tiempo de reacción", "1.5 s"],
      ["Distancia de reacción", "12.50 m"],
      ["Distancia de frenado", "8.67 m"],
      ["Distancia total", "21.17 m"]
    ],

    "🚗"

  );

}


// ==========================================
// CRUCE PEATONAL
// ==========================================

function mostrarCruce() {

  actualizarPanel(

    "Cruce peatonal",

    [
      ["Longitud de cruce", "8.00 m"],
      ["Velocidad peatonal", "1.00 m/s"],
      ["Tiempo de cruce", "8 s"],
      ["Objetivo", "Cruce protegido"]
    ],

    "🚶"

  );

}


// ==========================================
// MOBILIARIO
// ==========================================

function mostrarMobiliario() {

  actualizarPanel(

    "Mobiliario urbano",

    [
      ["Elemento", "Bancas"],
      ["Ubicación", "Zona peatonal"],
      ["Función", "Descanso"],
      ["Accesibilidad", "Ruta continua"]
    ],

    "🪑"

  );

}


// ==========================================
// ÁREAS VERDES
// ==========================================

function mostrarAreasVerdes() {

  actualizarPanel(

    "Áreas verdes",

    [
      ["Elemento", "Jardines"],
      ["Vegetación", "Árboles y plantas"],
      ["Función", "Sombra y descanso"],
      ["Objetivo", "Espacio sostenible"]
    ],

    "🌳"

  );

}


// ==========================================
// MARCADORES
// ==========================================

marcadores.forEach(marcador => {

  marcador.addEventListener("click", () => {

    if (marcador.classList.contains("rampa")) {
      mostrarRampa();
    }

    else if (marcador.classList.contains("vehiculo")) {
      mostrarVehiculo();
    }

    else if (marcador.classList.contains("areas")) {
      mostrarAreasVerdes();
    }

    else if (marcador.classList.contains("mobiliario")) {
      mostrarMobiliario();
    }

    else if (marcador.classList.contains("monumento")) {

      actualizarPanel(

        "Monumento central",

        [
          ["Ubicación", "Centro de la plaza"],
          ["Función", "Hito urbano"],
          ["Zona", "Área central"],
          ["Acceso", "Ruta peatonal"]
        ],

        "🗿"

      );

    }

    else if (marcador.classList.contains("encuentro")) {

      actualizarPanel(

        "Zona de encuentro",

        [
          ["Uso", "Reunión y descanso"],
          ["Acceso", "Peatonal"],
          ["Conexión", "Ruta accesible"],
          ["Espacio", "Área pública"]
        ],

        "👥"

      );

    }

    else if (marcador.classList.contains("edificio")) {

      actualizarPanel(

        "Edificio principal",

        [
          ["Entorno", "Plaza de Armas"],
          ["Acceso", "Zona urbana"],
          ["Conexión", "Ruta peatonal"],
          ["Referencia", "Tingo María"]
        ],

        "🏢"

      );

    }

  });

});


// ==========================================
// ESTADO INICIAL
// ==========================================

mostrarRampa();
