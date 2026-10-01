/* =========================================================
   EL AULA DE ECONOMÍA · SCRIPT.JS
   Navegación y elementos interactivos
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const inicio = document.getElementById("inicio");
  const niveles = document.getElementById("niveles");
  const pantallas = document.querySelectorAll(".pantalla");


  /* =====================================================
     FUNCIONES DE NAVEGACIÓN
  ===================================================== */

  function ocultarTodo() {

    if (inicio) {
      inicio.style.display = "none";
    }

    if (niveles) {
      niveles.style.display = "none";
    }

    pantallas.forEach((pantalla) => {
      pantalla.classList.remove("activa");
    });
  }


  function mostrarInicio() {

    ocultarTodo();

    if (inicio) {
      inicio.style.display = "block";
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  function mostrarNiveles() {

    ocultarTodo();

    if (niveles) {
      niveles.style.display = "block";
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  function mostrarPantalla(id) {

    if (!id) return;

    if (id === "inicio") {
      mostrarInicio();
      return;
    }

    if (id === "niveles") {
      mostrarNiveles();
      return;
    }

    const destino = document.getElementById(id);

    if (!destino) {
      console.warn("No existe la sección:", id);
      return;
    }

    /*
      Si el destino es una pantalla independiente,
      ocultamos el resto y la mostramos.
    */

    if (destino.classList.contains("pantalla")) {

      ocultarTodo();

      destino.classList.add("activa");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      return;
    }


    /*
      Si el destino está dentro de otra pantalla
      (por ejemplo un bloque de 4.º ESO),
      mostramos primero su pantalla padre.
    */

    const pantallaPadre = destino.closest(".pantalla");

    if (pantallaPadre) {

      ocultarTodo();

      pantallaPadre.classList.add("activa");

      setTimeout(() => {

        destino.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }, 50);

      return;
    }


    /*
      Elemento normal de la página
    */

    ocultarTodo();

    destino.style.display = "block";

    destino.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }


  /* =====================================================
     MENÚ SUPERIOR
  ===================================================== */

  document.querySelectorAll(".menu-principal a").forEach((enlace) => {

    enlace.addEventListener("click", (evento) => {

      evento.preventDefault();

      const href = enlace.getAttribute("href");

      if (!href) return;

      const id = href.replace("#", "");

      mostrarPantalla(id);
    });

  });


  /* =====================================================
     BOTONES DATA-IR
  ===================================================== */

  document.querySelectorAll("[data-ir]").forEach((boton) => {

    boton.addEventListener("click", (evento) => {

      evento.preventDefault();
      evento.stopPropagation();

      const destino = boton.dataset.ir;

      mostrarPantalla(destino);
    });

  });


  /* =====================================================
     TARJETAS DE NIVELES
  ===================================================== */

  document.querySelectorAll("[data-destino]").forEach((tarjeta) => {

    tarjeta.addEventListener("click", () => {

      const destino = tarjeta.dataset.destino;

      mostrarPantalla(destino);
    });

  });


  /* =====================================================
     BOTONES HOME
  ===================================================== */

  document.querySelectorAll(".btn-home").forEach((boton) => {

    boton.addEventListener("click", (evento) => {

      evento.preventDefault();
      evento.stopPropagation();

      mostrarInicio();
    });

  });


  /* =====================================================
     BLOQUES DE 4.º ESO
  ===================================================== */

  document.querySelectorAll("#cuarto-eso .bloque").forEach((bloque) => {

    bloque.addEventListener("click", (evento) => {

      /*
        Si hacemos clic sobre un tema,
        no cerramos el bloque.
      */

      if (evento.target.closest(".tema")) {
        return;
      }

      const estabaAbierto = bloque.classList.contains("abierto");

      /*
        Cerramos los demás bloques.
      */

      document.querySelectorAll("#cuarto-eso .bloque").forEach((otro) => {

        if (otro !== bloque) {
          otro.classList.remove("abierto");
        }

      });

      /*
        Abrimos/cerramos el seleccionado.
      */

      if (estabaAbierto) {
        bloque.classList.remove("abierto");
      } else {
        bloque.classList.add("abierto");
      }

    });

  });


  /* =====================================================
     TEMAS DE 4.º ESO
  ===================================================== */

  document.querySelectorAll("[data-tema]").forEach((tema) => {

    tema.addEventListener("click", (evento) => {

      evento.preventDefault();
      evento.stopPropagation();

      const destino = tema.dataset.tema;

      mostrarPantalla(destino);
    });

  });


  /* =====================================================
     PROYECTOS DESPLEGABLES
  ===================================================== */

  document.querySelectorAll(".proyecto-desplegable").forEach((boton) => {

    boton.addEventListener("click", (evento) => {

      evento.preventDefault();
      evento.stopPropagation();

      const proyecto = boton.closest(".proyecto-transversal");

      if (!proyecto) return;

      proyecto.classList.toggle("abierto");

      const flecha = boton.querySelector(".flecha-proyecto");

      if (flecha) {

        flecha.textContent =
          proyecto.classList.contains("abierto") ? "⌃" : "⌄";

      }

    });

  });


  /* =====================================================
     INSPÍRATE · ACORDEONES
  ===================================================== */

  document.querySelectorAll(".inspirate-categoria").forEach((categoria) => {

    const boton =
      categoria.querySelector(".inspirate-categoria-boton") ||
      categoria.querySelector("button");

    if (!boton) return;

    boton.addEventListener("click", () => {

      const estabaAbierta = categoria.classList.contains("abierta");

      /*
        Cerramos las demás categorías.
      */

      document.querySelectorAll(".inspirate-categoria").forEach((otra) => {

        if (otra !== categoria) {
          otra.classList.remove("abierta");
        }

      });

      /*
        Abrimos/cerramos la seleccionada.
      */

      if (estabaAbierta) {
        categoria.classList.remove("abierta");
      } else {
        categoria.classList.add("abierta");
      }

    });

  });


  /* =====================================================
     DETAILS / EJERCICIOS CORREGIDOS
  ===================================================== */

  document.querySelectorAll("details").forEach((detalle) => {

    detalle.addEventListener("toggle", () => {

      if (!detalle.open) return;

      /*
        Dejamos abierto únicamente el ejercicio
        que el alumno está consultando.
      */

      const contenedor = detalle.parentElement;

      if (!contenedor) return;

      contenedor.querySelectorAll("details").forEach((otro) => {

        if (otro !== detalle) {
          otro.open = false;
        }

      });

    });

  });


  /* =====================================================
     ESTADO INICIAL
  ===================================================== */

  mostrarInicio();

});
