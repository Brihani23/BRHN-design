"use client";

import { motion } from "motion/react";

const links = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Método", href: "#metodo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a href="#inicio" className="navbar__brand">
        BRHN
      </a>

      <nav className="navbar__links" aria-label="Navegación principal">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contacto" className="navbar__cta">
        Iniciar proyecto
      </a>
    </motion.header>
  );
}