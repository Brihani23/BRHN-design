"use client";

import {
  FormEvent,
  useState,
} from "react";

const serviceOptions = [
  "Diseño de espacios",
  "Productos digitales",
  "Productos físicos",
  "Diseño de marca",
  "Proyecto integral",
  "Aún no estoy seguro",
];

export default function ContactForm() {
  const [submitted, setSubmitted] =
    useState<"whatsapp" | "email" | null>(null);

  const readForm = (
    form: HTMLFormElement,
  ) => {
    const formData = new FormData(form);

    return {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      service: String(formData.get("service") ?? ""),
      comments: String(formData.get("comments") ?? ""),
    };
  };

  const buildMessage = (
    data: ReturnType<typeof readForm>,
  ) =>
    [
      "Hola BRHN,",
      "",
      "Me gustaría platicar sobre un proyecto.",
      "",
      `Nombre: ${data.name}`,
      `Empresa o proyecto: ${data.company || "No especificado"}`,
      `Teléfono: ${data.phone}`,
      `Correo: ${data.email}`,
      `Interés: ${data.service}`,
      "",
      "Comentarios:",
      data.comments || "Sin comentarios adicionales.",
    ].join("\n");

  const handleWhatsApp = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const data = readForm(form);
    const message = encodeURIComponent(
      buildMessage(data),
    );

    setSubmitted("whatsapp");

    window.open(
      `https://wa.me/523323124060?text=${message}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const handleEmail = () => {
    const form =
      document.querySelector<HTMLFormElement>(
        ".contact-form",
      );

    if (!form || !form.reportValidity()) {
      return;
    }

    const data = readForm(form);

    const subject = encodeURIComponent(
      `Nuevo proyecto BRHN — ${data.service || "Consulta general"}`,
    );

    const body = encodeURIComponent(
      buildMessage(data),
    );

    setSubmitted("email");

    window.location.href =
      `mailto:brhn.estudio@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      className="contact-form"
      id="contacto"
      onSubmit={handleWhatsApp}
    >
      <div className="contact-form__grid">
        <label className="contact-form__field">
          <span>Nombre *</span>

          <input
            autoComplete="name"
            name="name"
            placeholder="Tu nombre"
            required
            type="text"
          />
        </label>

        <label className="contact-form__field">
          <span>Empresa o proyecto</span>

          <input
            autoComplete="organization"
            name="company"
            placeholder="Nombre de tu proyecto"
            type="text"
          />
        </label>

        <label className="contact-form__field">
          <span>Teléfono *</span>

          <input
            autoComplete="tel"
            name="phone"
            placeholder="+52 33 0000 0000"
            required
            type="tel"
          />
        </label>

        <label className="contact-form__field">
          <span>Correo *</span>

          <input
            autoComplete="email"
            name="email"
            placeholder="nombre@correo.com"
            required
            type="email"
          />
        </label>

        <label className="contact-form__field contact-form__field--full">
          <span>¿Qué te interesa? *</span>

          <select
            defaultValue=""
            name="service"
            required
          >
            <option
              disabled
              value=""
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
            placeholder="¿Qué quieres crear, mejorar o transformar?"
            rows={4}
          />
        </label>
      </div>

      <div className="contact-form__actions">
        <button
          className="contact-form__submit"
          type="submit"
        >
          <span>Enviar por WhatsApp</span>
          <span aria-hidden="true">↗</span>
        </button>

        <button
          className="contact-form__email"
          onClick={handleEmail}
          type="button"
        >
          <span>Enviar por correo</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>

      {submitted && (
        <p className="contact-form__message">
          {submitted === "whatsapp"
            ? "Abrimos WhatsApp con la información lista para enviar."
            : "Abrimos tu aplicación de correo con la información lista para enviar."}
        </p>
      )}
    </form>
  );
}