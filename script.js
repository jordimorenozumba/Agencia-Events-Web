
/* =====================================
   AGENCIA DE EVENTOS
   Funciones e interacciones
===================================== */

// MENÚ DE NAVEGACIÓN

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú" : "Abrir menú"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("active");
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-label", "Abrir menú");
    });
  });
}

// FORMULARIO DE CONTACTO

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const interest = document.getElementById("interest").value;
    const message = document.getElementById("message").value.trim();
    const privacy = document.getElementById("privacy").checked;

    if (!name || !email || !interest || !message) {
      formStatus.textContent =
        "Por favor, completa todos los campos.";

      return;
    }

    if (!privacy) {
      formStatus.textContent =
        "Debes aceptar la política de privacidad.";

      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      formStatus.textContent =
        "Introduce un correo electrónico válido.";

      return;
    }

    // Todavía no enviamos los datos a Firebase.
    // Lo conectaremos en el siguiente paso.

    formStatus.textContent =
      "¡Formulario validado! Estamos preparando el envío.";

    console.log("Datos del formulario:", {
      name,
      email,
      interest,
      message
    });
  });
}

// AÑO AUTOMÁTICO EN EL FOOTER

const footer = document.querySelector(".footer");

if (footer) {
  const copyright = footer.querySelector("p");

  if (copyright) {
    copyright.textContent =
      `© ${new Date().getFullYear()} · Todos los derechos reservados.`;
  }
}
