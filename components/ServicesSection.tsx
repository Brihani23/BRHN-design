"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type Service = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  headline: string;
  detail: string;
  image: string;
  items: string[];
  applications: string;
};

const services: Service[] = [
  {
    id: "espacios",
    number: "01",
    title: "Espacios",
    subtitle: "Comercial · Residencial · Experiencia",
    description:
      "Diseñamos espacios funcionales, atractivos y pensados para las personas.",
    headline: "Diseño de espacios",
    detail:
      "Creamos entornos que conectan función, identidad y experiencia, respondiendo al contexto y a las necesidades reales de cada proyecto.",
    image: "/espacios.png",
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
  },
  {
    id: "digital",
    number: "02",
    title: "Digital",
    subtitle: "UX/UI · Aplicaciones · Web",
    description:
      "Creamos productos digitales claros, útiles y fáciles de usar.",
    headline: "Productos digitales",
    detail:
      "Diseñamos experiencias digitales centradas en las personas y preparadas para crecer junto con cada proyecto.",
    image: "/digital.png",
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
  },
  {
    id: "productos",
    number: "03",
    title: "Productos",
    subtitle: "Diseño industrial · Prototipos · Producción",
    description:
      "Convertimos ideas en productos funcionales y viables para fabricar.",
    headline: "Productos físicos",
    detail:
      "Desarrollamos productos desde el concepto inicial hasta su validación, prototipado y preparación para manufactura.",
    image: "/productos.png",
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
  },
  {
    id: "marcas",
    number: "04",
    title: "Marcas",
    subtitle: "Estrategia · Identidad · Comunicación",
    description:
      "Creamos marcas claras, coherentes y reconocibles.",
    headline: "Diseño de marcas",
    detail:
      "Construimos identidades capaces de comunicar una idea con fuerza y mantenerse consistentes en todos sus puntos de contacto.",
    image: "/marcas.png",
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
            Cuatro disciplinas conectadas por una misma visión.
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
              type="button"
              onClick={() => setActiveService(service)}
              aria-label={`Conocer el servicio de ${service.title}`}
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
                <span aria-hidden="true">↗</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeService && (
          <motion.div
            className="service-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveService(null)}
          >
            <motion.article
              className="service-modal__panel"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                duration: 0.65,
                ease: [0.76, 0, 0.24, 1],
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <motion.img
                className="service-modal__background"
                src={activeService.image}
                alt=""
                aria-hidden="true"
                initial={{
                  scale: 1.08,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 1.05,
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <div className="service-modal__overlay" />

              <div className="service-modal__top">
                <div>
                  <span>{activeService.number}</span>

                  <span>
                    Servicios / {activeService.title}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  aria-label={`Cerrar servicio de ${activeService.title}`}
                >
                  <span>Cerrar</span>
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="service-modal__content">
                <motion.div
                  className="service-modal__intro"
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.5,
                  }}
                >
                  <p>{activeService.subtitle}</p>

                  <h2>{activeService.headline}</h2>

                  <p>{activeService.detail}</p>
                </motion.div>

                <motion.div
                  className="service-modal__information"
                  initial={{
                    opacity: 0,
                    y: 32,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.34,
                    duration: 0.55,
                  }}
                >
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

                    <a
                      href="#contacto"
                      onClick={() => setActiveService(null)}
                    >
                      <span>
                        Platicar sobre este servicio
                      </span>

                      <span aria-hidden="true">↘</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}