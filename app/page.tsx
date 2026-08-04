import DesignPortal from "@/components/DesignPortal";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <DesignPortal />

        <section
          className="content-section content-section--about"
          id="nosotros"
        >
          <div className="content-section__top">
            <span>02</span>
            <span>Quiénes somos</span>
          </div>

          <div className="content-section__layout">
            <h2>
              Una casa para ideas que necesitan más que una sola
              disciplina.
            </h2>

            <div className="content-section__copy">
              <p>
                BRHN es una casa de diseño integral que conecta
                estrategia, identidad, producto, experiencia y
                tecnología.
              </p>

              <p>
                Trabajamos desde el origen de una idea hasta su
                implementación, construyendo soluciones coherentes,
                funcionales y preparadas para entrar al mundo real.
              </p>
            </div>
          </div>

          <div
            className="content-section__word"
            aria-hidden="true"
          >
            BRHN
          </div>
        </section>

        <section
          className="content-section content-section--approach"
          id="metodo"
        >
          <div className="content-section__top">
            <span>03</span>
            <span>Nuestro enfoque</span>
          </div>

          <div className="approach-heading">
            <p>
              Diseño sin fronteras entre lo físico y lo digital.
            </p>

            <h2>
              Pensamos.
              <br />
              Diseñamos.
              <br />
              Construimos.
            </h2>
          </div>

          <div className="approach-grid">
            <article>
              <span>01</span>
              <h3>Visión integral</h3>
              <p>
                Entendemos cada proyecto como un sistema, no como una
                colección de piezas aisladas.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Experimentación</h3>
              <p>
                Exploramos nuevas formas, herramientas y modelos para
                encontrar soluciones que no sean evidentes.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Ejecución real</h3>
              <p>
                Diseñamos pensando en cómo se producirá, operará,
                venderá y evolucionará cada solución.
              </p>
            </article>
          </div>
        </section>

        <section
          className="contact-section"
          id="contacto"
        >
          <p>04 / Iniciar un proyecto</p>

          <h2>
            Hagamos que
            <br />
            esa idea exista.
          </h2>

          <a href="mailto:hola@brhn.mx">
            <span>Hablemos</span>
            <span>↗</span>
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}