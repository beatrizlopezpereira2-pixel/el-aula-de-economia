document.addEventListener("DOMContentLoaded", function () {

  const inicio = document.getElementById("inicio");
  const pantallas = document.querySelectorAll(".pantalla");


  /* =========================================================
     OCULTAR TODAS LAS PANTALLAS
  ========================================================= */

  function ocultarTodo() {

    if (inicio) {
      inicio.style.display = "none";
    }

    pantallas.forEach(function (pantalla) {
      pantalla.style.display = "none";
      pantalla.classList.remove("activa");
    });

  }


  /* =========================================================
     MOSTRAR UNA PANTALLA
  ========================================================= */

  function mostrar(id) {

    ocultarTodo();

    if (id === "inicio") {

      if (inicio) {
        inicio.style.display = "block";
      }

    } else {

      const pantalla = document.getElementById(id);

      if (pantalla) {
        pantalla.style.display = "block";
        pantalla.classList.add("activa");
      }

    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  /* =========================================================
     MENÚ PRINCIPAL
  ========================================================= */

  document
    .querySelectorAll(".menu-principal a")
    .forEach(function (enlace) {

      enlace.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = enlace
          .getAttribute("href")
          .replace("#", "");

        mostrar(destino);

      });

    });


  /* =========================================================
     LOGO → INICIO
  ========================================================= */

  const marca = document.querySelector(".marca");

  if (marca) {

    marca.addEventListener("click", function (e) {

      e.preventDefault();
      mostrar("inicio");

    });

  }


  /* =========================================================
     BOTONES data-ir
  ========================================================= */

  document
    .querySelectorAll("[data-ir]")
    .forEach(function (boton) {

      boton.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = boton.getAttribute("data-ir");

        mostrar(destino);

      });

    });


  /* =========================================================
     TARJETAS data-destino
  ========================================================= */

  document
    .querySelectorAll("[data-destino]")
    .forEach(function (tarjeta) {

      tarjeta.addEventListener("click", function () {

        const destino = tarjeta.getAttribute("data-destino");

        mostrar(destino);

      });

    });


  /* =========================================================
     TEMAS 4.º ESO
  ========================================================= */

  document
    .querySelectorAll("[data-tema]")
    .forEach(function (tema) {

      tema.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        const destino = tema.getAttribute("data-tema");

        mostrar(destino);

      });

    });


  /* =========================================================
     PERMITIR ENLACES DIRECTOS
     Ejemplo:
     .../index.html#inspirate
  ========================================================= */

  function abrirDesdeURL() {

    const hash = window.location.hash.replace("#", "");

    if (hash && document.getElementById(hash)) {
      mostrar(hash);
    } else {
      mostrar("inicio");
    }

  }


  /* =========================================================
     BOTÓN ATRÁS / ADELANTE DEL NAVEGADOR
  ========================================================= */

  window.addEventListener("hashchange", function () {

    const hash = window.location.hash.replace("#", "");

    if (hash && document.getElementById(hash)) {
      mostrar(hash);
    }

  });


  /* =========================================================
     INICIO DE LA WEB
  ========================================================= */

  abrirDesdeURL();

});
