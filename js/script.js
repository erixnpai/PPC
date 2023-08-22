// Seleccionar la barra de navegación y las secciones
let navbar = document.querySelector(".navbar");  // Elemento de la barra de navegación
let sections = document.querySelectorAll("section");  // Todas las secciones
let navLinks = document.querySelectorAll("header nav a");  // Enlaces de navegación

// Manejar la navegación activa en función de la posición de desplazamiento
window.onscroll = () => {
  sections.forEach((sec) => {  // Por cada sección
    let top = window.scrollY;  // Posición de desplazamiento actual
    let offset = sec.offsetTop - 150;  // Desplazamiento de la sección menos un margen
    let height = sec.offsetHeight;  // Altura de la sección
    let id = sec.getAttribute("id");  // ID de la sección

    // Si la posición está dentro de los límites de la sección
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {  // Por cada enlace de navegación
        links.classList.remove("active");  // Eliminar la clase "active"
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");  // Agregar la clase "active" al enlace correspondiente a la sección
      });
    }
  });
};

// Configurar ScrollReveal para animaciones de aparición
ScrollReveal({
  reset: true,      // Restablecer animaciones en cada carga
  distance: "80px", // Distancia desde la que aparecerán los elementos
  duration: 2000,   // Duración de la animación
  delay: 200,       // Retardo antes de que comience la animación
});

// Aplicar animaciones de aparición a elementos específicos
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });  // Desde arriba
ScrollReveal().reveal(".home-img", { origin: "bottom" });           // Desde abajo