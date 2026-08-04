"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 130],
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0],
  );

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.1],
  );

  return (
    <section
      ref={heroRef}
      className="hero"
      id="inicio"
    >
      <motion.div
        className="hero__ambient"
        style={{
          scale: backgroundScale,
        }}
        aria-hidden="true"
      />

      <motion.div
        className="hero__content"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <motion.div
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.15,
          }}
        >
          <span>Casa de diseño integral</span>
          <span>Guadalajara · México</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.05,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Diseñamos lo que una idea necesita para{" "}
          <span className="hero__highlight">
            existir.
          </span>
        </motion.h1>

        <motion.div
          className="hero__bottom"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.75,
          }}
        >
          <p>
            Producto, identidad, estrategia y tecnología
            conectadas en un solo sistema.
          </p>

          <a
            href="#capacidades"
            className="hero__button"
          >
            <span>Explorar BRHN</span>
            <span aria-hidden="true">↘</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}