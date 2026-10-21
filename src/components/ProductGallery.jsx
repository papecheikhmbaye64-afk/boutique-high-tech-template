import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import "./ProductGallery.css";

const SWIPE_THRESHOLD = 40;

export default function ProductGallery({ images }) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const startX = useRef(null);
  const closeRef = useRef(null);
  const count = images.length;
  const current = images[index];

  const go = useCallback((step) => setIndex((i) => (i + step + count) % count), [count]);

  // Lightbox : clavier, blocage du scroll, focus
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, go]);

  const onPointerDown = (e) => { startX.current = e.clientX; };
  const onPointerUp = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > SWIPE_THRESHOLD) go(dx < 0 ? 1 : -1);
  };

  return (
    <div className="gallery" role="group" aria-roledescription="carrousel" aria-label="Galerie du produit">
      <div
        className="gallery-stage"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => { startX.current = null; }}
      >
        <img key={index} src={current.src} alt={current.alt} className="gallery-image" draggable="false" />

        {count > 1 && (
          <>
            <button type="button" className="gallery-btn prev" onClick={() => go(-1)} aria-label="Image précédente">
              <Icon name="prev" size={18} />
            </button>
            <button type="button" className="gallery-btn next" onClick={() => go(1)} aria-label="Image suivante">
              <Icon name="next" size={18} />
            </button>
          </>
        )}
        <button type="button" className="gallery-btn zoom" onClick={() => setLightbox(true)} aria-label="Agrandir l'image">
          <Icon name="expand" size={16} />
        </button>
        <span className="gallery-counter" aria-live="polite">{index + 1} / {count}</span>
      </div>

      {count > 1 && (
        <div className="gallery-thumbs">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={`gallery-thumb ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Afficher l'image ${i + 1}`}
              aria-current={i === index}
            >
              <img src={img.src} alt="" loading="lazy" draggable="false" />
            </button>
          ))}
        </div>
      )}

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image agrandie" onClick={() => setLightbox(false)}>
          <img src={current.src} alt={current.alt} onClick={(e) => e.stopPropagation()} />
          <button ref={closeRef} type="button" className="gallery-btn lightbox-close" onClick={() => setLightbox(false)} aria-label="Fermer">
            <Icon name="close" size={18} />
          </button>
          {count > 1 && (
            <>
              <button type="button" className="gallery-btn prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Image précédente">
                <Icon name="prev" size={18} />
              </button>
              <button type="button" className="gallery-btn next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Image suivante">
                <Icon name="next" size={18} />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
