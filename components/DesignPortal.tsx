"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

type PathwayId = "crear" | "construir" | "lanzar";

type Pathway = {
  id: PathwayId;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  className: string;
  items: {
    number: string;
    title: string;
    description: string;
  }[];
};

const pathways: Pathway[] = [
  {
    id: "crear",
    number: "01",
    title: "Crear",
    subtitle: "Producto · Identidad · Concepto",
    description:
      "Convertimos oportunidades en conceptos útiles, reconocibles y capaces de diferenciarse.",
    className: "design-card--create",
    items: [
      {
        number: "01",
        title: "Descubrir",
        description:
          "Investigamos el contexto, las personas, el mercado y las oportunidades reales del proyecto.",
      },
      {
        number: "02",
        title: "Definir",
        description:
          "Construimos una dirección estratégica clara antes de comenzar a diseñar.",
      },
      {
        number: "03",
        title: "Diseñar",
        description:
          "Creamos productos, identidades y conceptos coherentes, útiles y memorables.",
      },
    ],
  },
  {
    id: "construir",
    number: "02",
    title: "Construir",
    subtitle: "Experiencia · Tecnología · Operación",
    description:
      "Diseñamos la experiencia completa y desarrollamos las herramientas que la hacen funcionar.",
    className: "design-card--build",
    items: [
      {
        number: "01",
        title: "Experiencia",
        description:
          "Organizamos procesos, interacciones y puntos de contacto físicos y digitales.",
      },
      {
        number: "02",
        title: "Desarrollo",
        description:
          "Construimos plataformas, sitios, aplicaciones, prototipos y sistemas operativos.",
      },
      {
        number: "03",
        title: "Validación",
        description:
          "Probamos, corregimos y optimizamos antes de llevar la solución a escala.",
      },
    ],
  },
  {
    id: "lanzar",
    number: "03",
    title: "Lanzar",
    subtitle: "Estrategia · Mercado · Crecimiento",
    description:
      "Preparamos cada sistema para entrar al mercado, operar, comunicar y evolucionar.",
    className: "design-card--launch",
    items: [
      {
        number: "01",
        title: "Posicionamiento",
        description:
          "Definimos la propuesta, el mercado y el lugar que debe ocupar la solución.",
      },
      {
        number: "02",
        title: "Comunicación",
        description:
          "Diseñamos mensajes, campañas, contenidos y herramientas comerciales.",
      },
      {
        number: "03",
        title: "Evolución",
        description:
          "Medimos resultados y desarrollamos nuevas oportunidades de crecimiento.",
      },
    ],
  },
];

export default function DesignPortal() {
  const sectionRef = useRef<HTMLElement>(null);

  const [activePathway, setActivePathway] =
    useState<Pathway | null>(null);

  const [cardsLocked, setCardsLocked] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* =======================================================
     FRAME
     ======================================================= */

  const frameWidth = useTransform(
    scrollYProgress,
    [0, 0.26],
    ["86vw", "100vw"],
    {
      clamp: true,
    },
  );

  const frameHeight = useTransform(
    scrollYProgress,
    [0, 0.26],
    ["78vh", "100vh"],
    {
      clamp: true,
    },
  );

  const frameRadius = useTransform(
    scrollYProgress,
    [0, 0.26],
    [34, 0],
    {
      clamp: true,
    },
  );

  const frameY = useTransform(
    scrollYProgress,
    [0, 0.26],
    [62, 0],
    {
      clamp: true,
    },
  );

  /* =======================================================
     MANIFIESTO
     ======================================================= */

  const statementOpacity = useTransform(
    scrollYProgress,
    [0.07, 0.18, 0.36, 0.46],
    [0, 1, 1, 0],
    {
      clamp: true,
    },
  );

  const statementY = useTransform(
    scrollYProgress,
    [0.07, 0.2, 0.46],
    [70, 0, -70],
    {
      clamp: true,
    },
  );

  const statementScale = useTransform(
    scrollYProgress,
    [0.2, 0.46],
    [1, 0.92],
    {
      clamp: true,
    },
  );

  /* =======================================================
     TARJETAS
     ======================================================= */

  /*
   * La opacidad solo se utiliza durante la entrada.
   * Cuando cardsLocked es true, se fuerza a 1.
   */
  const cardsEntranceOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.56],
    [0, 1],
    {
      clamp: true,
    },
  );

  const cardsY = useTransform(
    scrollYProgress,
    [0.4, 0.82],
    [160, 0],
    {
      clamp: true,
    },
  );

  const cardsScale = useTransform(
    scrollYProgress,
    [0.4, 0.82],
    [0.86, 1],
    {
      clamp: true,
    },
  );

  const firstCardX = useTransform(
    scrollYProgress,
    [0.48, 0.9],
    ["68%", "0%"],
    {
      clamp: true,
    },
  );

  const secondCardY = useTransform(
    scrollYProgress,
    [0.48, 0.9],
    ["18%", "0%"],
    {
      clamp: true,
    },
  );

  const thirdCardX = useTransform(
    scrollYProgress,
    [0.48, 0.9],
    ["-68%", "0%"],
    {
      clamp: true,
    },
  );

  const hintOpacity = useTransform(
    scrollYProgress,
    [0.76, 0.9],
    [0, 1],
    {
      clamp: true,
    },
  );

  /*
   * Congela las tarjetas al llegar a su posición final.
   * Solo se liberan al volver claramente hacia el Hero.
   */
  useMotionValueEvent(
    scrollYProgress,
    "change",
    (progress) => {
      if (progress >= 0.88 && !cardsLocked) {
        setCardsLocked(true);
      }

      if (progress <= 0.42 && cardsLocked) {
        setCardsLocked(false);
      }
    },
  );

  /* =======================================================
     PANEL EXPANDIDO
     ======================================================= */

  useEffect(() => {
    if (!activePathway) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePathway(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePathway]);

  return (
    <>
      <section
        ref={sectionRef}
        className="design-portal"
        id="capacidades"
      >
        <div className="design-portal__sticky">
          <motion.div
            className="design-portal__frame"
            style={{
              width: frameWidth,
              height: frameHeight,
              borderRadius: frameRadius,
              y: frameY,
            }}
          >
            <div className="design-portal__topbar">
              <span>BRHN / Sistema integral</span>
              <span>De la idea al mercado</span>
            </div>

            <motion.div
              className="design-portal__statement"
              style={{
                opacity: statementOpacity,
                y: statementY,
                scale: statementScale,
              }}
            >
              <p>Una forma distinta de construir ideas</p>

              <h2>
                Una sola visión.
                <br />
                <span>Múltiples disciplinas.</span>
              </h2>

              <p className="design-portal__statement-copy">
                Diseño, estrategia y tecnología conectadas desde
                el origen.
              </p>
            </motion.div>

            <motion.div
              className="design-portal__cards"
              style={{
                opacity: cardsLocked ? 1 : cardsEntranceOpacity,
                y: cardsLocked ? 0 : cardsY,
                scale: cardsLocked ? 1 : cardsScale,
              }}
            >
              {pathways.map((pathway, index) => {
                const animatedMovement =
                  index === 0
                    ? {
                        x: firstCardX,
                      }
                    : index === 1
                      ? {
                          y: secondCardY,
                        }
                      : {
                          x: thirdCardX,
                        };

                const lockedMovement =
                  index === 1
                    ? {
                        y: 0,
                      }
                    : {
                        x: 0,
                      };

                return (
                  <motion.button
                    key={pathway.id}
                    layoutId={`pathway-${pathway.id}`}
                    type="button"
                    className={`design-card ${pathway.className}`}
                    style={
                      cardsLocked
                        ? lockedMovement
                        : animatedMovement
                    }
                    onClick={() => {
                      setActivePathway(pathway);
                    }}
                    whileHover={{
                      y: -8,
                      rotate:
                        index === 0
                          ? -0.35
                          : index === 2
                            ? 0.35
                            : 0,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    transition={{
                      layout: {
                        duration: 0.72,
                        ease: [0.76, 0, 0.24, 1],
                      },
                      duration: 0.28,
                    }}
                  >
                    <CardContent pathway={pathway} />
                  </motion.button>
                );
              })}
            </motion.div>

            <motion.p
              className="design-portal__hint"
              style={{
                opacity: cardsLocked ? 1 : hintOpacity,
              }}
            >
              Selecciona una tarjeta para explorar
            </motion.p>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activePathway && (
          <motion.div
            className="pathway-overlay"
            initial={{
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            animate={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
            exit={{
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            transition={{
              duration: 0.28,
            }}
            onClick={() => {
              setActivePathway(null);
            }}
          >
            <motion.article
              layoutId={`pathway-${activePathway.id}`}
              className={`pathway-expanded ${activePathway.className}`}
              transition={{
                layout: {
                  duration: 0.72,
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div className="pathway-expanded__top">
                <div>
                  <span>{activePathway.number}</span>

                  <span>
                    BRHN / {activePathway.title}
                  </span>
                </div>

                <button
                  type="button"
                  className="pathway-expanded__close"
                  onClick={() => {
                    setActivePathway(null);
                  }}
                  aria-label={`Cerrar información de ${activePathway.title}`}
                >
                  <span>Cerrar</span>
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="pathway-expanded__body">
                <motion.div
                  className="pathway-expanded__intro"
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                    duration: 0.48,
                  }}
                >
                  <p>{activePathway.subtitle}</p>

                  <h2>{activePathway.title}</h2>

                  <p>{activePathway.description}</p>
                </motion.div>

                <motion.div
                  className="pathway-expanded__steps"
                  initial={{
                    opacity: 0,
                    y: 34,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.38,
                    duration: 0.52,
                  }}
                >
                  {activePathway.items.map((item) => (
                    <article
                      key={item.number}
                      className="pathway-expanded__step"
                    >
                      <span>{item.number}</span>

                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </motion.div>
              </div>

              <div
                className="pathway-expanded__letter"
                aria-hidden="true"
              >
                {activePathway.title.charAt(0)}
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CardContent({
  pathway,
}: {
  pathway: Pathway;
}) {
  return (
    <>
      <div className="design-card__top">
        <span>{pathway.number}</span>
        <span>BRHN</span>
      </div>

      <div
        className="design-card__graphic"
        aria-hidden="true"
      >
        <span>{pathway.title.charAt(0)}</span>
      </div>

      <div className="design-card__content">
        <p>{pathway.subtitle}</p>

        <div className="design-card__title-row">
          <h3>{pathway.title}</h3>
          <span aria-hidden="true">↗</span>
        </div>

        <p>{pathway.description}</p>
      </div>
    </>
  );
}