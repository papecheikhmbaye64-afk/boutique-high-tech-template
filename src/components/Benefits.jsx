import { useEffect, useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import "./Benefits.css";

const AUTOPLAY_MS = 5000;
const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Position relative circulaire d'une carte par rapport à la carte active. */
function relativeOffset(index, active, total) {
  let offset = index - active;
  const half = Math.floor(total / 2);
  if (offset > half) offset -= total;
  if (offset < -half) offset += total;
  return offset;
}

/** Carrousel 3D. items : [{ tag, title, description, image }] */
export default function Benefits({ title, subtitle, items: benefits }) {
  const total = benefits.length;
  const [active, setActive] = useState(Math.min(1, total - 1));
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [hovered, setHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const go = (step) => setActive((i) => (i + step + total) % total);

  useEffect(() => {
    if (!playing || hovered || total < 2) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [playing, hovered, total]);

  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const dx = e.changedTouches[0].clientX - touchStart;
    setTouchStart(null);
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  const current = benefits[active];

  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Reveal>

        <Reveal
          className="coverflow"
          role="group"
          aria-roledescription="carrousel"
          aria-label={title}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
        >
          <div className="coverflow-stage">
            {benefits.map((item, i) => {
              const offset = relativeOffset(i, active, total);
              return (
                <article
                  key={item.title}
                  className={`cover-card ${offset === 0 ? "active" : ""}`}
                  style={{ "--offset": offset, "--abs": Math.abs(offset) }}
                  aria-hidden={offset !== 0}
                  onClick={() => setActive(i)}
                >
                  <img src={item.image} alt="" loading="lazy" />
                  <div className="cover-shade" />
                  <span className="cover-tag">{item.tag}</span>
                  <div className="cover-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="coverflow-controls">
            <button type="button" className="cf-btn" onClick={() => go(-1)} aria-label="Précédent">
              <Icon name="prev" size={18} />
            </button>
            <div className="cf-dots">
              {benefits.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  className={`cf-dot ${i === active ? "active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Afficher : ${item.title}`}
                  aria-current={i === active}
                />
              ))}
            </div>
            <button type="button" className="cf-btn" onClick={() => go(1)} aria-label="Suivant">
              <Icon name="next" size={18} />
            </button>
            <button
              type="button"
              className="cf-btn cf-play"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Mettre en pause le défilement" : "Reprendre le défilement"}
            >
              <Icon name={playing ? "pause" : "play"} size={14} filled={!playing} />
            </button>
          </div>

          <p className="sr-only" aria-live="polite">{current.title} — {current.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
