document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     ELEMENTOS PRINCIPALES
  ===================================================== */

  const inicio = document.getElementById("inicio");
  const niveles = document.getElementById("niveles");
  const pantallas = document.querySelectorAll(".pantalla");


  /* =====================================================
     FUNCIONES DE NAVEGACIÓN
  ===================================================== */

  function ocultarPantallas() {
    pantallas.forEach(function (pantalla) {
      pantalla.classList.remove("activa");
    });
  }


  function mostrarInicio() {
    ocultarPantallas();

    inicio.style.display = "";
    niveles.style.display = "";

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  function mostrarPantalla(id) {

    const destino = document.getElementById(id);

    if (!destino) {
      return;
    }

    ocultarPantallas();

    inicio.style.display = "none";

if (id === "niveles") {
  niveles.style.display = "";
} else {
  niveles.style.display = "none";
  destino.classList.add("activa");
}
    

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  /* =====================================================
     TARJETAS DE NIVELES
     4.º ESO · 1.º BACH · 2.º BACH · FP
  ===================================================== */

  document.querySelectorAll("[data-destino]").forEach(function (tarjeta) {

    tarjeta.addEventListener("click", function () {

      const destino = tarjeta.dataset.destino;

      mostrarPantalla(destino);

    });

  });


  /* =====================================================
     TEMAS DE 4.º ESO
  ===================================================== */

  document.querySelectorAll("[data-tema]").forEach(function (tema) {

    tema.addEventListener("click", function () {

      const destino = tema.dataset.tema;

      mostrarPantalla(destino);

    });

  });


  /* =====================================================
     BOTONES ANTERIOR / SIGUIENTE
  ===================================================== */

  document.querySelectorAll("[data-ir]").forEach(function (boton) {

    boton.addEventListener("click", function () {

      const destino = boton.dataset.ir;


      /* VOLVER AL INICIO */

      if (destino === "inicio") {

        mostrarInicio();
        return;

      }


      /* BLOQUES DE 4.º ESO */

      if (
        destino === "bloque-a" ||
        destino === "bloque-b" ||
        destino === "bloque-c" ||
        destino === "bloque-d"
      ) {

        const cuartoESO = document.getElementById("cuarto-eso");
        const bloque = document.getElementById(destino);

        ocultarPantallas();

        inicio.style.display = "none";
        niveles.style.display = "none";

        cuartoESO.classList.add("activa");

        if (bloque) {
          bloque.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }

        return;

      }


      /* RESTO DE PANTALLAS */

      mostrarPantalla(destino);

    });

  });


  /* =====================================================
     BOTONES HOME 🏠
  ===================================================== */

  document.querySelectorAll(".btn-home").forEach(function (boton) {

    boton.addEventListener("click", function () {

      mostrarInicio();

    });

  });


  /* =====================================================
     MENÚ SUPERIOR
  ===================================================== */

  const enlacesMenu = document.querySelectorAll(".menu-principal a");

  enlacesMenu.forEach(function (enlace) {

    enlace.addEventListener("click", function (evento) {

      const href = enlace.getAttribute("href");


      /* INICIO */

      if (href === "#inicio") {

        evento.preventDefault();

        mostrarInicio();

      }


      /* MI AULA */

      if (href === "#niveles") {

        evento.preventDefault();

        ocultarPantallas();

        inicio.style.display = "";
        niveles.style.display = "";

        niveles.scrollIntoView({
          behavior: "smooth"
        });

      }


      /* PROYECTO */

      if (href === "#proyecto") {

        evento.preventDefault();

        mostrarPantalla("cuarto-eso");

        setTimeout(function () {

          const proyecto = document.getElementById("proyecto");

          if (proyecto) {

            proyecto.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

        }, 100);

      }

      /* SOBRE MÍ */

if (href === "#sobre-mi") {
  evento.preventDefault();
  mostrarPantalla("sobre-mi");
  return;
}
    });

  });

  

  /* =====================================================
     PROYECTO EMPRENDEDOR DESPLEGABLE
  ===================================================== */

  const botonProyecto = document.getElementById("boton-proyecto");
  const proyecto = document.getElementById("proyecto");
  const flechaProyecto = document.getElementById("flecha-proyecto");


  if (botonProyecto && proyecto) {

    botonProyecto.addEventListener("click", function () {

      proyecto.classList.toggle("abierto");


      if (flechaProyecto) {

        if (proyecto.classList.contains("abierto")) {
          flechaProyecto.textContent = "▲";
        } else {
          flechaProyecto.textContent = "▼";
        }

      }

    });

  }


  /* =====================================================
     ESTADO INICIAL
  ===================================================== */

  mostrarInicio();
  /* ================================================
     BLOQUES DESPLEGABLES · 4.º ESO
  ================================================= */

  document.querySelectorAll("#cuarto-eso .bloque").forEach(function (bloque) {

    bloque.addEventListener("click", function (evento) {

      if (evento.target.closest(".tema")) {
        return;
      }

      bloque.classList.toggle("abierto");

    });

  });
  mostrarInicio();
  
});
