export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__identity">
          <span className="site-footer__brand">BRHN</span>

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

          <a href="mailto:hola@brhn.mx">
            hola@brhn.mx
          </a>
        </div>

        <div className="site-footer__column">
          <span>Navegación</span>

          <a href="#inicio">Inicio</a>
          <a href="#capacidades">Sistema</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>

      <div
        className="site-footer__word"
        aria-hidden="true"
      >
        <span>B</span>
        <span>R</span>
        <span>H</span>
        <span>N</span>
      </div>

      <div className="site-footer__bottom">
        <span>© {currentYear} BRHN</span>

        <a href="#inicio">
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}