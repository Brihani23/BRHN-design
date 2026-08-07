"use client";

import Link from "next/link";

const logos = [
  {
    name: "Roger",
    src: "/logos/roger.png",
    href: "/proyectos/roger",
  },
  {
    name: "BIGTREE",
    src: "/logos/bigtree.png",
    href: "/proyectos/bigtree",
  },
  {
    name: "HUGE STEPS",
    src: "/logos/huge-steps.png",
    href: "/proyectos/huge-steps",
  },
];

const repeatedLogos = [...logos, ...logos];

export default function TrustedBy() {
  return (
    <section
      className="trusted"
      aria-labelledby="trusted-title"
    >
      <div className="content-section__top">
        <span>05</span>
        <span>Han confiado en nosotros</span>
      </div>

      <div className="trusted__heading">
        <h2 id="trusted-title">
          Han confiado
          <br />
          en nosotros.
        </h2>

        <p>
          Cada proyecto representa una colaboración cercana, estratégica y
          construida para generar resultados reales.
        </p>
      </div>

      <div className="trusted__marquee">
        <div className="trusted__track">
          {repeatedLogos.map((logo, index) => (
            <Link
              aria-label={`Ver proyecto de ${logo.name}`}
              className="trusted__item"
              href={logo.href}
              key={`${logo.name}-${index}`}
            >
              <img
                src={logo.src}
                alt={logo.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}