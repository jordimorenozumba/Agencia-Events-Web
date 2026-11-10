
/* =====================================
   AGENCIA DE EVENTOS
   Funciones e interacciones
===================================== */

import { sendContact } from "./firebase.js";

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

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (event) => {
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

    const submitButton = contactForm.querySelector(
      'button[type="submit"]'
    );

    try {
      if (submitButton) submitButton.disabled = true;

      formStatus.textContent = "Enviando mensaje...";

      await sendContact({
        name,
        email,
        interest,
        message
      });

      formStatus.textContent =
        "¡Gracias! Hemos recibido tu mensaje. Nos pondremos en contacto contigo.";

      contactForm.reset();

    } catch (error) {
      console.error("Error al enviar el formulario:", error);

      formStatus.textContent =
        "No hemos podido enviar tu mensaje. Inténtalo de nuevo más tarde.";

    } finally {
      if (submitButton) submitButton.disabled = false;
    }
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
