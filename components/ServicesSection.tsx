"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  getProjectsByService,
  type Project,
} from "../lib/projects";

type Service = {
  id: "espacios" | "digital" | "productos" | "marcas";
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  headline: string;
  detail: string;
  image: string;
  items: string[];
  applications: string;
  projects: Project[];
};

const services: Service[] = [
  {
    id: "espacios",
    number: "01",
    title: "Espacios",
    shortTitle: "Diseño de espacios",
    subtitle: "Comercial · Residencial · Experiencia",
    description:
      "Diseñamos espacios funcionales, atractivos y pensados para las personas.",
    headline: "Diseño de espacios",
    detail:
      "Creamos entornos que conectan función, identidad y experiencia, respondiendo al contexto y a las necesidades reales de cada proyecto.",
    image: "/services/espacios.png",
    items: [
      "Concepto y distribución",
      "Interiorismo",
      "Materiales e iluminación",
      "Mobiliario personalizado",
      "Recorridos y experiencia",
      "Acompañamiento de implementación",
    ],
    applications:
      "Retail, hogares, oficinas, clínicas, restaurantes, showrooms y espacios temporales.",
    projects: getProjectsByService("espacios"),
  },
  {
    id: "digital",
    number: "02",
    title: "Digital",
    shortTitle: "Productos digitales",
    subtitle: "UX/UI · Aplicaciones · Web",
    description:
      "Creamos productos digitales claros, útiles y fáciles de usar.",
    headline: "Productos digitales",
    detail:
      "Diseñamos experiencias digitales centradas en las personas, preparadas para funcionar, crecer y evolucionar junto con cada proyecto.",
    image: "/services/digital.png",
    items: [
      "Investigación UX",
      "Diseño UX/UI",
      "Aplicaciones móviles",
      "Sitios y plataformas web",
      "Ecommerce",
      "Sistemas de diseño",
    ],
    applications:
      "Apps, ecommerce, plataformas SaaS, portales, dashboards y sistemas internos.",
    projects: getProjectsByService("digital"),
  },
  {
    id: "productos",
    number: "03",
    title: "Productos",
    shortTitle: "Productos físicos",
    subtitle: "Diseño industrial · Prototipos · Producción",
    description:
      "Convertimos ideas en productos funcionales y viables para fabricar.",
    headline: "Productos físicos",
    detail:
      "Desarrollamos productos desde el concepto inicial hasta su definición material, prototipado y preparación para producción.",
    image: "/services/productos.png",
    items: [
      "Investigación",
      "Conceptualización",
      "Diseño industrial",
      "Modelado CAD",
      "Prototipado",
      "Preparación para manufactura",
    ],
    applications:
      "Mobiliario, dispositivos, herramientas, accesorios, empaques y productos de consumo.",
    projects: getProjectsByService("productos"),
  },
  {
    id: "marcas",
    number: "04",
    title: "Marcas",
    shortTitle: "Diseño de marcas",
    subtitle: "Estrategia · Identidad · Comunicación",
    description:
      "Creamos marcas claras, coherentes y reconocibles.",
    headline: "Diseño de marcas",
    detail:
      "Construimos identidades capaces de comunicar una idea con claridad, diferenciarse y mantenerse consistentes en todos sus puntos de contacto.",
    image: "/services/marcas.png",
    items: [
      "Estrategia",
      "Naming",
      "Identidad visual",
      "Dirección creativa",
      "Packaging",
      "Lanzamiento",
    ],
    applications:
      "Marcas nuevas, renovaciones, productos, negocios, servicios y experiencias comerciales.",
    projects: getProjectsByService("marcas"),
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] =
    useState<Service | null>(null);

  useEffect(() => {
    if (!activeService) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveService(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeService]);

  const closeModal = () => {
    setActiveService(null);
  };

  const goToContact = () => {
    closeModal();

    window.setTimeout(() => {
      document.querySelector("#contacto")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 150);
  };

  return (
    <>
      <section
        className="services-section"
        id="servicios"
      >
        <div className="content-section__top">
          <span>03</span>
          <span>Servicios / Qué diseñamos</span>
        </div>

        <div className="services-section__heading">
          <p>
            Cuatro disciplinas conectadas para desarrollar soluciones
            completas.
          </p>

          <h2>
            De lo físico
            <br />
            a lo digital.
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <button
              className="service-card"
              key={service.id}
              onClick={() => setActiveService(service)}
              type="button"
            >
              <div className="service-card__top">
                <span>{service.number}</span>
                <span>Servicios / BRHN</span>
              </div>

              <div className="service-card__heading">
                <p>{service.subtitle}</p>
                <h3>{service.title}</h3>
              </div>

              <p className="service-card__description">
                {service.description}
              </p>

              <ul className="service-card__list">
                {service.items.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">↗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="service-card__action">
                <span>Conocer el servicio</span>
                <span aria-hidden="true">↘</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeService && (
        <div
          aria-label={`Información sobre ${activeService.title}`}
          aria-modal="true"
          className="service-modal"
          role="dialog"
        >
          <div className="service-modal__panel">
            <img
              alt=""
              aria-hidden="true"
              className="service-modal__background"
              src={activeService.image}
            />

            <div className="service-modal__overlay" />

            <header className="service-modal__top">
              <div>
                <span>{activeService.number}</span>
                <span>Servicios / {activeService.title}</span>
              </div>

              <button
                aria-label="Cerrar servicio"
                onClick={closeModal}
                type="button"
              >
                <span>Cerrar</span>
                <span aria-hidden="true">×</span>
              </button>
            </header>

            <div className="service-modal__scroll">
              <section className="service-modal__hero">
                <div className="service-modal__content">
                  <div className="service-modal__intro">
                    <p>{activeService.subtitle}</p>

                    <h2>{activeService.headline}</h2>

                    <p>{activeService.detail}</p>
                  </div>

                  <div className="service-modal__information">
                    <div>
                      <span>Capacidades</span>

                      <ul>
                        {activeService.items.map((item) => (
                          <li key={item}>
                            <span aria-hidden="true">↗</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-modal__applications">
                      <span>Aplicaciones</span>

                      <p>{activeService.applications}</p>

                      <button
                        onClick={goToContact}
                        type="button"
                      >
                        <span>Platicar sobre este servicio</span>
                        <span aria-hidden="true">↘</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="service-modal__scroll-hint"
                >
                  <span>Explorar proyectos</span>
                  <span>↓</span>
                </div>
              </section>

              <section className="service-projects">
                <div className="service-projects__header">
                  <div>
                    <span>{activeService.number}</span>
                    <span>Trabajo seleccionado</span>
                  </div>

                  <h3>
                    Proyectos
                    <br />
                    destacados.
                  </h3>
                </div>

                {activeService.projects.length > 0 ? (
                  <div className="service-projects__list">
                    {activeService.projects.map((project) => (
                      <article
                        className="service-project"
                        key={project.id}
                      >
                        <Link
                          className="service-project__image"
                          href={`/proyectos/${project.id}`}
                          onClick={closeModal}
                        >
                          <img
                            alt={`Proyecto ${project.title}`}
                            src={project.cover}
                          />

                          <div className="service-project__image-overlay" />

                          <div className="service-project__image-top">
                            <span>{project.number}</span>
                            <span>BRHN / Caso seleccionado</span>
                          </div>

                          <h4>{project.title}</h4>
                        </Link>

                        <div className="service-project__information">
                          <div>
                            <span>{project.category}</span>

                            <p>{project.description}</p>
                          </div>

                          <ul>
                            {project.tags.map((tag) => (
                              <li key={tag}>
                                <span>{tag}</span>
                                <span aria-hidden="true">↗</span>
                              </li>
                            ))}
                          </ul>

                          <div className="service-project__actions">
                            <Link
                              className="service-project__case"
                              href={`/proyectos/${project.id}`}
                              onClick={closeModal}
                            >
                              <span>Ver proyecto completo</span>
                              <span aria-hidden="true">↗</span>
                            </Link>

                            <button
                              onClick={goToContact}
                              type="button"
                            >
                              <span>Hablar sobre un proyecto similar</span>
                              <span aria-hidden="true">↗</span>
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="service-projects__empty">
                    <span>Proyectos en preparación</span>

                    <p>
                      Estamos documentando nuestros primeros casos de{" "}
                      {activeService.shortTitle.toLowerCase()}.
                    </p>

                    <button
                      onClick={goToContact}
                      type="button"
                    >
                      <span>Iniciar un proyecto</span>
                      <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}