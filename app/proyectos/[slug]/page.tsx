import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
            <div>
              <p>{project.category}</p>
              <h1>{project.title}</h1>
            </div>

            <p>{project.description}</p>
          </div>

          <div className="project-page__cover">
            <img
              src={project.cover}
              alt={`Portada del proyecto ${project.title}`}
            />
          </div>
        </section>

        <section className="project-page__summary">
          <div>
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

          <div className="project-page__gallery-grid">
            {project.images.slice(1).map((image, index) => (
              <figure
                className={
                  index === 0
                    ? "project-page__gallery-item project-page__gallery-item--wide"
                    : "project-page__gallery-item"
                }
                key={image}
              >
                <img
                  src={image}
                  alt={`${project.title} — imagen ${index + 2}`}
                />
              </figure>
            ))}
          </div>
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