import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectGallery from "@/components/ProjectGallery";

import {
  getProjectById,
  projects,
} from "../../../lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const galleryImages = project.images.slice(1);

  return (
    <>
      <Navbar />

      <main className="project-page">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="project-page__hero">
          <div className="project-page__top">
            <span>{project.number}</span>
            <span>Proyecto / BRHN</span>
          </div>

          {/* =================================================
              METADATOS
          ================================================= */}

          <div
            aria-label="Información del proyecto"
            className="project-page__meta"
          >
            <div>
              <span>Año</span>
              <p>{project.year}</p>
            </div>

            <div>
              <span>Cliente</span>
              <p>{project.client}</p>
            </div>

            <div>
              <span>Disciplina</span>
              <p>{project.discipline}</p>
            </div>

            <div>
              <span>Alcance</span>
              <p>{project.scope}</p>
            </div>
          </div>

          {/* =================================================
              COVER + INFORMACIÓN DEL PROYECTO
          ================================================= */}

          <div className="project-page__feature">
            <figure className="project-page__cover">
              <img
                alt={`Portada del proyecto ${project.title}`}
                src={project.cover}
              />
            </figure>

            <aside className="project-page__story">
              <span className="project-page__story-label">
                Sobre el proyecto
              </span>

              <h1>{project.title}</h1>

              <div className="project-page__story-content">
                <div>
                  <span>El reto</span>
                  <p>{project.challenge}</p>
                </div>

                <div>
                  <span>Lo que hicimos</span>
                  <p>{project.solution}</p>
                </div>

                <div>
                  <span>Herramientas y disciplinas</span>
                  <p>{project.tags.join(" · ")}</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* =====================================================
            CONTEXTO
        ===================================================== */}

        <section className="project-page__summary">
          <div className="project-page__summary-heading">
            <span>01 / Contexto</span>

            <h2>El proyecto.</h2>
          </div>

          <div className="project-page__summary-grid">
            <article>
              <span>Reto</span>
              <p>{project.challenge}</p>
            </article>

            <article>
              <span>Solución</span>
              <p>{project.solution}</p>
            </article>

            <article>
              <span>Resultado</span>
              <p>{project.result}</p>
            </article>
          </div>

          {project.stats && project.stats.length > 0 && (
            <div className="project-page__stats">
              {project.stats.map((stat) => (
                <div
                  className="project-page__stat"
                  key={`${stat.value}-${stat.label}`}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* =====================================================
            GALERÍA
        ===================================================== */}

        <section className="project-page__gallery">
          <div className="project-page__gallery-top">
            <span>02 / Desarrollo</span>

            <span>
              {String(galleryImages.length).padStart(2, "0")} imágenes
            </span>
          </div>

          <ProjectGallery
            images={galleryImages}
            title={project.title}
          />
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="project-page__closing">
          <p>¿Tienes una idea similar?</p>

          <h2>
            Hagamos que
            <br />
            exista.
          </h2>

          <Link href="/#contacto">
            <span>Iniciar un proyecto</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}