"use client";

import { FormEvent, useState } from "react";

const serviceOptions = [
  "Diseño de espacios",
  "Productos digitales",
  "Productos físicos",
  "Diseño de marca",
  "Proyecto integral",
  "Aún no estoy seguro",
];

const WHATSAPP_NUMBER = "5213323124060";
const CONTACT_EMAIL = "brhn.estudio@gmail.com";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const buildMessage = (form: HTMLFormElement) => {
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const comments = String(formData.get("comments") ?? "").trim();

    const subject = `Nuevo proyecto BRHN — ${
      service || "Consulta general"
    }`;

    const message = [
      "Hola BRHN 👋",
      "",
      "Me gustaría platicar sobre un proyecto.",
      "",
      `Nombre: ${name}`,
      `Empresa o proyecto: ${company || "No especificado"}`,
      `Teléfono: ${phone}`,
      `Correo: ${email}`,
      `Interés: ${service || "No especificado"}`,
      "",
      "Comentarios:",
      comments || "Sin comentarios adicionales.",
    ].join("\n");

    return {
      subject,
      message,
    };
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const { message } = buildMessage(form);

    setSubmitted(true);

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleEmail = () => {
    const form = document.querySelector(
      ".contact-form",
    ) as HTMLFormElement | null;

    if (!form) return;

    if (!form.reportValidity()) return;

    const { subject, message } = buildMessage(form);

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      <div className="contact-form__grid">
        <label className="contact-form__field">
          <span>Nombre *</span>

          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            autoComplete="name"
            required
          />
        </label>

        <label className="contact-form__field">
          <span>Empresa o proyecto</span>

          <input
            type="text"
            name="company"
            placeholder="Nombre de tu proyecto"
            autoComplete="organization"
          />
        </label>

        <label className="contact-form__field">
          <span>Teléfono *</span>

          <input
            type="tel"
            name="phone"
            placeholder="+52 33 0000 0000"
            autoComplete="tel"
            required
          />
        </label>

        <label className="contact-form__field">
          <span>Correo *</span>

          <input
            type="email"
            name="email"
            placeholder="nombre@correo.com"
            autoComplete="email"
            required
          />
        </label>

        <label className="contact-form__field contact-form__field--full">
          <span>¿Qué te interesa? *</span>

          <select
            name="service"
            defaultValue=""
            required
          >
            <option
              value=""
              disabled
            >
              Selecciona una opción
            </option>

            {serviceOptions.map((service) => (
              <option
                key={service}
                value={service}
              >
                {service}
              </option>
            ))}
          </select>
        </label>

        <label className="contact-form__field contact-form__field--full">
          <span>Cuéntanos brevemente</span>

          <textarea
            name="comments"
            rows={4}
            placeholder="¿Qué quieres crear, mejorar o transformar?"
          />
        </label>
      </div>

      <div className="contact-form__actions">
        <button
          type="submit"
          className="contact-form__submit"
        >
          <span>Enviar por WhatsApp</span>
          <span aria-hidden="true">↗</span>
        </button>

        <button
          type="button"
          className="contact-form__email"
          onClick={handleEmail}
        >
          <span>Enviar por correo</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>

      {submitted && (
        <p className="contact-form__message">
          Abrimos WhatsApp con la información lista para enviar.
        </p>
      )}
    </form>
  );
}