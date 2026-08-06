import ContactForm from "@/components/ContactForm";
import DesignPortal from "@/components/DesignPortal";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* 01 — METODOLOGÍA */}
        <DesignPortal />

        {/* 02 — QUIÉNES SOMOS */}
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
              Diseñamos sin fronteras
              <br />
              entre disciplinas.
            </h2>

            <div className="content-section__copy">
              <p>
                BRHN es una casa de diseño integral donde convergen
                espacios, productos físicos, productos digitales y marcas
                bajo una sola visión.
              </p>

              <p>
                Conectamos estrategia, creatividad y ejecución para
                desarrollar soluciones coherentes, funcionales y preparadas
                para el mundo real.
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

        {/* 03 — SERVICIOS */}
        <ServicesSection />

        {/* 04 — HAN CONFIADO EN NOSOTROS */}
        <TrustedBy />

        {/* 05 — CONTACTO */}
        <section
          className="contact-section contact-section--form"
          id="contacto"
        >
          <div className="contact-section__heading">
            <p>05 / Iniciar un proyecto</p>

            <h2>
              Hagamos que
              <br />
              esa idea exista.
            </h2>
          </div>

          <div className="contact-section__form-area">
            <div className="contact-section__intro">
              <span>Cuéntanos sobre tu proyecto</span>

              <p>
                No necesitas tener todo resuelto. Comencemos por entender
                qué quieres crear, mejorar o transformar.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}