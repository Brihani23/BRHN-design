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

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "");
    const company = String(formData.get("company") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const email = String(formData.get("email") ?? "");
    const service = String(formData.get("service") ?? "");
    const comments = String(formData.get("comments") ?? "");

    const subject = encodeURIComponent(
      `Nuevo proyecto BRHN — ${service || "Consulta general"}`,
    );

    const body = encodeURIComponent(
      [
        "Hola BRHN,",
        "",
        "Me gustaría platicar sobre un proyecto.",
        "",
        `Nombre: ${name}`,
        `Empresa o proyecto: ${company || "No especificado"}`,
        `Teléfono: ${phone}`,
        `Correo: ${email}`,
        `Interés: ${service}`,
        "",
        "Comentarios:",
        comments || "Sin comentarios adicionales.",
      ].join("\n"),
    );

    setSubmitted(true);

    window.location.href =
      `mailto:hola@brhn.mx?subject=${subject}&body=${body}`;
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

      <button
        type="submit"
        className="contact-form__submit"
      >
        <span>Enviar proyecto</span>
        <span aria-hidden="true">↗</span>
      </button>

      {submitted && (
        <p className="contact-form__message">
          Abriremos tu aplicación de correo con la información lista para enviar.
        </p>
      )}
    </form>
  );
}