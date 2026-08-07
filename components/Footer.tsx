import Link from "next/link";

const socialLinks = [
  {
    label: "Instagram",
    href: "",
  },
  {
    label: "Behance",
    href: "",
  },
  {
    label: "LinkedIn",
    href: "",
  },
];

export default function Footer() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__identity">
          <span className="site-footer__brand">
            BRHN
          </span>

          <p>
            Casa de diseño integral.
            <br />
            Ideas construidas para existir.
          </p>
        </div>

        <div className="site-footer__column">
          <span>Ubicación</span>
          <p>Guadalajara, México</p>
          <p>Proyectos globales</p>
        </div>

        <div className="site-footer__column">
          <span>Contacto</span>

          <a href="mailto:brhn.estudio@gmail.com">
            brhn.estudio@gmail.com
          </a>
        </div>

        <div className="site-footer__column">
          <span>Social</span>

          {socialLinks.map((social) =>
            social.href ? (
              <a
                href={social.href}
                key={social.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                {social.label} ↗
              </a>
            ) : (
              <span
                className="site-footer__social-disabled"
                key={social.label}
              >
                {social.label}
              </span>
            ),
          )}
        </div>

        <div className="site-footer__column">
          <span>Navegación</span>

          <Link href="/#inicio">Inicio</Link>
          <Link href="/#proyectos">Proyectos</Link>
          <Link href="/#capacidades">Capacidades</Link>
          <Link href="/#metodo">Método</Link>
          <Link href="/#contacto">Contacto</Link>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="site-footer__word"
      >
        <span>B</span>
        <span>R</span>
        <span>H</span>
        <span>N</span>
      </div>

      <div className="site-footer__bottom">
        <span>© {currentYear} BRHN</span>

        <Link href="/#inicio">
          Volver arriba ↑
        </Link>
      </div>
    </footer>
  );
}