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

  const galleryImages =
    project.images.slice(1);

  return (
    <>
      <Navbar />

      <main className="project-page">
        <section className="project-page__hero">
          <div className="project-page__top">
            <span>{project.number}</span>
            <span>Proyecto / BRHN</span>
          </div>

          <div className="project-page__heading">
            <div className="project-page__title">
              <p>{project.category}</p>
              <h1>{project.title}</h1>
            </div>

            <p className="project-page__description">
              {project.description}
            </p>
          </div>

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

          <figure className="project-page__cover">
            <img
              alt={`Portada del proyecto ${project.title}`}
              src={project.cover}
            />
          </figure>
        </section>

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
        </section>

        <section className="project-page__gallery">
          <div className="project-page__gallery-top">
            <span>02 / Desarrollo</span>
            <span>Galería del proyecto</span>
          </div>

          <ProjectGallery
            images={galleryImages}
            title={project.title}
          />
        </section>

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