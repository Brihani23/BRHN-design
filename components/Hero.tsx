export default function Hero() {
  return (
    <section
      className="hero"
      id="inicio"
    >
      <div
        aria-hidden="true"
        className="hero__ambient"
      />

      <div className="hero__content">
        <div className="hero__eyebrow">
          <span>Casa de diseño integral</span>
          <span>Guadalajara · México</span>
        </div>

        <h1>
          Diseñamos lo que
          <br />
          una idea necesita
          <br />
          para{" "}
          <span className="hero__highlight">
            existir.
          </span>
        </h1>

        <div className="hero__bottom">
          <p>
            Producto, identidad, estrategia y tecnología
            conectadas en un solo sistema.
          </p>

          <a
            className="hero__button"
            href="/#proyectos"
          >
            <span>Explorar BRHN</span>
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>
    </section>
  );
}