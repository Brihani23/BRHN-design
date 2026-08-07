import Link from "next/link";

const navItems = [
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Capacidades", href: "/#capacidades" },
  { label: "Método", href: "/#metodo" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <Link
        aria-label="BRHN — volver al inicio"
        className="navbar__brand"
        href="/#inicio"
      >
        BRHN
      </Link>

      <nav
        aria-label="Navegación principal"
        className="navbar__links"
      >
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        className="navbar__cta"
        href="/#contacto"
      >
        Iniciar proyecto
      </Link>
    </header>
  );
}