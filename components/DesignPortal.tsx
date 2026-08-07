"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

type PathwayId =
  | "escuchamos"
  | "alineamos"
  | "construimos";

type Pathway = {
  id: PathwayId;
  number: string;
  title: string;
  letter: string;
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
    id: "escuchamos",
    number: "01",
    title: "Escuchamos",
    letter: "E",
    subtitle: "Contexto · Entorno · Necesidades",
    description:
      "Antes de proponer una solución, entendemos profundamente a las personas y al proyecto.",
    className: "design-card--create",
    items: [
      {
        number: "01",
        title: "Conversación",
        description:
          "Hablamos contigo para conocer tu historia, tus inquietudes y la razón detrás del proyecto.",
      },
      {
        number: "02",
        title: "Contexto",
        description:
          "Analizamos tu entorno, industria, mercado, usuarios y las condiciones reales que rodean la idea.",
      },
      {
        number: "03",
        title: "Necesidades",
        description:
          "Identificamos qué necesita resolverse y qué aspectos son realmente importantes antes de diseñar.",
      },
    ],
  },

  {
    id: "alineamos",
    number: "02",
    title: "Alineamos",
    letter: "A",
    subtitle: "Ideas · Objetivos · Presupuesto",
    description:
      "Convertimos tus ideas y expectativas en una dirección clara, compartida y viable.",
    className: "design-card--build",
    items: [
      {
        number: "01",
        title: "Visión",
        description:
          "Ordenamos tus ideas para definir con claridad qué queremos construir y por qué.",
      },
      {
        number: "02",
        title: "Objetivos",
        description:
          "Establecemos qué debe lograr el proyecto y cómo evaluaremos que la solución funcione.",
      },
      {
        number: "03",
        title: "Alcance",
        description:
          "Alineamos presupuesto, prioridades, tiempos y entregables para avanzar sobre una base realista.",
      },
    ],
  },

  {
    id: "construimos",
    number: "03",
    title: "Construimos",
    letter: "C",
    subtitle: "Colaboración · Diseño · Ejecución",
    description:
      "Un equipo eficiente trabaja de forma coordinada contigo para desarrollar la mejor respuesta.",
    className: "design-card--launch",
    items: [
      {
        number: "01",
        title: "Equipo",
        description:
          "Reunimos las disciplinas necesarias según las necesidades específicas de cada proyecto.",
      },
      {
        number: "02",
        title: "Colaboración",
        description:
          "Trabajamos de la mano contigo, compartiendo avances, decisiones y ajustes durante todo el proceso.",
      },
      {
        number: "03",
        title: "Resultado",
        description:
          "Materializamos una solución coherente, funcional y diseñada para responder al contexto real.",
      },
    ],
  },
];

export default function DesignPortal() {
  const sectionRef =
    useRef<HTMLElement>(null);

  const [activePathway, setActivePathway] =
    useState<Pathway | null>(null);

  const [cardsLocked, setCardsLocked] =
    useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [
      "start start",
      "end end",
    ],
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
    [
      0.07,
      0.18,
      0.36,
      0.46,
    ],
    [
      0,
      1,
      1,
      0,
    ],
    {
      clamp: true,
    },
  );

  const statementY = useTransform(
    scrollYProgress,
    [
      0.07,
      0.2,
      0.46,
    ],
    [
      70,
      0,
      -70,
    ],
    {
      clamp: true,
    },
  );

  const statementScale = useTransform(
    scrollYProgress,
    [
      0.2,
      0.46,
    ],
    [
      1,
      0.92,
    ],
    {
      clamp: true,
    },
  );

  /* =======================================================
     TARJETAS
  ======================================================= */

  const cardsEntranceOpacity =
    useTransform(
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

  const finalContentOpacity =
    useTransform(
      scrollYProgress,
      [0.76, 0.9],
      [0, 1],
      {
        clamp: true,
      },
    );

  /* =======================================================
     LOCK FINAL
  ======================================================= */

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (progress) => {
      if (
        progress >= 0.88 &&
        !cardsLocked
      ) {
        setCardsLocked(true);
      }

      if (
        progress <= 0.42 &&
        cardsLocked
      ) {
        setCardsLocked(false);
      }
    },
  );

  /* =======================================================
     MODAL
  ======================================================= */

  useEffect(() => {
    if (!activePathway) {
      document.body.style.overflow =
        "";
      return;
    }

    document.body.style.overflow =
      "hidden";

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setActivePathway(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        "";

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [activePathway]);

  return (
    <>
      <section
        ref={sectionRef}
        className="design-portal"
        id="metodo"
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
              <span>
                BRHN / Nuestro proceso
              </span>

              <span>
                Del contexto a la solución
              </span>
            </div>

            <motion.div
              className="design-portal__statement"
              style={{
                opacity: statementOpacity,
                y: statementY,
                scale: statementScale,
              }}
            >
              <p>
                Cada proyecto comienza con
                una conversación
              </p>

              <h2>
                Escuchamos antes
                <br />

                <span>
                  de diseñar.
                </span>
              </h2>

              <p className="design-portal__statement-copy">
                Entendemos, alineamos y
                construimos cada solución
                de la mano contigo.
              </p>
            </motion.div>

            <motion.div
              className="design-portal__section-title"
              style={{
                opacity:
                  cardsLocked
                    ? 1
                    : finalContentOpacity,
              }}
            >
              <span>
                01
              </span>

              <div>
                <p>
                  Nuestra metodología
                </p>

                <h2>
                  Escuchar. Alinear.
                  <br />
                  Construir juntos.
                </h2>
              </div>
            </motion.div>

            <motion.div
              className="design-portal__cards"
              style={{
                opacity:
                  cardsLocked
                    ? 1
                    : cardsEntranceOpacity,

                y:
                  cardsLocked
                    ? 0
                    : cardsY,

                scale:
                  cardsLocked
                    ? 1
                    : cardsScale,
              }}
            >
              {pathways.map(
                (
                  pathway,
                  index,
                ) => {
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
                      onClick={() =>
                        setActivePathway(
                          pathway,
                        )
                      }
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

                          ease: [
                            0.76,
                            0,
                            0.24,
                            1,
                          ],
                        },

                        duration: 0.28,
                      }}
                    >
                      <CardContent
                        pathway={
                          pathway
                        }
                      />
                    </motion.button>
                  );
                },
              )}
            </motion.div>

            <motion.p
              className="design-portal__hint"
              style={{
                opacity:
                  cardsLocked
                    ? 1
                    : finalContentOpacity,
              }}
            >
              Selecciona una etapa para
              explorar
            </motion.p>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activePathway && (
          <motion.div
            className="pathway-overlay"
            initial={{
              backgroundColor:
                "rgba(0, 0, 0, 0)",
            }}
            animate={{
              backgroundColor:
                "rgba(0, 0, 0, 0.42)",
            }}
            exit={{
              backgroundColor:
                "rgba(0, 0, 0, 0)",
            }}
            transition={{
              duration: 0.28,
            }}
            onClick={() =>
              setActivePathway(null)
            }
          >
            <motion.article
              layoutId={`pathway-${activePathway.id}`}
              className={`pathway-expanded ${activePathway.className}`}
              transition={{
                layout: {
                  duration: 0.72,

                  ease: [
                    0.76,
                    0,
                    0.24,
                    1,
                  ],
                },
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div className="pathway-expanded__top">
                <div>
                  <span>
                    {
                      activePathway.number
                    }
                  </span>

                  <span>
                    BRHN /{" "}
                    {
                      activePathway.title
                    }
                  </span>
                </div>

                <button
                  type="button"
                  className="pathway-expanded__close"
                  onClick={() =>
                    setActivePathway(
                      null,
                    )
                  }
                  aria-label={`Cerrar información de ${activePathway.title}`}
                >
                  <span>
                    Cerrar
                  </span>

                  <span
                    aria-hidden="true"
                  >
                    ×
                  </span>
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
                  <p>
                    {
                      activePathway.subtitle
                    }
                  </p>

                  <h2>
                    {
                      activePathway.title
                    }
                  </h2>

                  <p>
                    {
                      activePathway.description
                    }
                  </p>
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
                  {activePathway.items.map(
                    (item) => (
                      <article
                        key={
                          item.number
                        }
                        className="pathway-expanded__step"
                      >
                        <span>
                          {
                            item.number
                          }
                        </span>

                        <div>
                          <h3>
                            {
                              item.title
                            }
                          </h3>

                          <p>
                            {
                              item.description
                            }
                          </p>
                        </div>
                      </article>
                    ),
                  )}
                </motion.div>
              </div>

              <div
                className="pathway-expanded__letter"
                aria-hidden="true"
              >
                {
                  activePathway.letter
                }
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
        <span>
          {pathway.number}
        </span>

        <span>
          BRHN
        </span>
      </div>

      <div
        className="design-card__graphic"
        aria-hidden="true"
      >
        <span>
          {pathway.letter}
        </span>
      </div>

      <div className="design-card__content">
        <p>
          {pathway.subtitle}
        </p>

        <div className="design-card__title-row">
          <h3>
            {pathway.title}
          </h3>

          <span aria-hidden="true">
            ↗
          </span>
        </div>

        <p>
          {pathway.description}
        </p>
      </div>
    </>
  );
}