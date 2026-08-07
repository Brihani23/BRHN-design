"use client";

import { useEffect, useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) {
        return null;
      }

      return current === 0 ? images.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) {
        return null;
      }

      return current === images.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="project-page__gallery-grid">
        {images.map((image, index) => (
          <button
            aria-label={`Abrir imagen ${index + 1} de ${title}`}
            className={
              index === 0
                ? "project-page__gallery-item project-page__gallery-item--wide"
                : "project-page__gallery-item"
            }
            key={`${image}-${index}`}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <img
              alt={`${title} — imagen ${index + 1}`}
              loading={index > 1 ? "lazy" : "eager"}
              src={image}
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          aria-label={`Galería ampliada de ${title}`}
          aria-modal="true"
          className="project-lightbox"
          role="dialog"
        >
          <div
            className="project-lightbox__backdrop"
            onClick={closeLightbox}
            role="presentation"
          />

          <button
            aria-label="Cerrar imagen"
            className="project-lightbox__close"
            onClick={closeLightbox}
            type="button"
          >
            <span>Cerrar</span>
            <span aria-hidden="true">×</span>
          </button>

          {images.length > 1 && (
            <button
              aria-label="Imagen anterior"
              className="project-lightbox__arrow project-lightbox__arrow--previous"
              onClick={showPrevious}
              type="button"
            >
              ←
            </button>
          )}

          <figure className="project-lightbox__figure">
            <img
              alt={`${title} — imagen ampliada ${activeIndex + 1}`}
              src={images[activeIndex]}
            />

            <figcaption>
              <span>{title}</span>
              <span>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>

          {images.length > 1 && (
            <button
              aria-label="Imagen siguiente"
              className="project-lightbox__arrow project-lightbox__arrow--next"
              onClick={showNext}
              type="button"
            >
              →
            </button>
          )}
        </div>
      )}
    </>
  );
}