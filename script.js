document.addEventListener("DOMContentLoaded", function () {

  const inicio = document.getElementById("inicio");
  const niveles = document.getElementById("niveles");
  const pantallas = document.querySelectorAll(".pantalla");

  function ocultarTodo() {
    if (inicio) inicio.style.display = "none";
    if (niveles) niveles.style.display = "none";

    pantallas.forEach(function (p) {
      p.style.display = "none";
      p.classList.remove("activa");
    });
  }

  function mostrar(id) {

    ocultarTodo();

    if (id === "inicio") {
      if (inicio) inicio.style.display = "block";
    }

    else if (id === "niveles") {
      if (niveles) niveles.style.display = "block";
    }

    else {
      const seccion = document.getElementById(id);

      if (seccion) {
        seccion.style.display = "block";
        seccion.classList.add("activa");
      }
    }

    window.scrollTo(0, 0);
  }


  /* MENÚ SUPERIOR */

  document.querySelectorAll(".menu-principal a").forEach(function (enlace) {

    enlace.addEventListener("click", function (e) {

      e.preventDefault();

      const id = enlace.getAttribute("href").substring(1);

      mostrar(id);

    });

  });


  /* BOTONES DATA-IR */

  document.querySelectorAll("[data-ir]").forEach(function (boton) {

    boton.addEventListener("click", function (e) {

      e.preventDefault();

      mostrar(boton.getAttribute("data-ir"));

    });

  });


  /* TARJETAS DE CURSOS */

  document.querySelectorAll("[data-destino]").forEach(function (tarjeta) {

    tarjeta.addEventListener("click", function () {

      mostrar(tarjeta.getAttribute("data-destino"));

    });

  });


  /* TEMAS */

  document.querySelectorAll("[data-tema]").forEach(function (tema) {

    tema.addEventListener("click", function (e) {

      e.stopPropagation();

      mostrar(tema.getAttribute("data-tema"));

    });

  });


  /* BOTÓN HOME */

  document.querySelectorAll(".btn-home").forEach(function (boton) {

    boton.addEventListener("click", function () {

      mostrar("inicio");

    });

  });


  /* BLOQUES 4 ESO */

  document.querySelectorAll("#cuarto-eso .bloque").forEach(function (bloque) {

    bloque.addEventListener("click", function () {

      bloque.classList.toggle("abierto");

    });

  });


  /* PROYECTOS */

  document.querySelectorAll(".proyecto-desplegable").forEach(function (boton) {

    boton.addEventListener("click", function () {

      const proyecto = boton.closest(".proyecto-transversal");

      if (proyecto) {
        proyecto.classList.toggle("abierto");
      }

    });

  });


  /* AL CARGAR: INICIO */

  mostrar("inicio");

});
