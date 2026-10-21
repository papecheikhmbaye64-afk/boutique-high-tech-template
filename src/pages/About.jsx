import { store } from "../data/store";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import Benefits from "../components/Benefits";
import TrustSection from "../components/TrustSection";
import Reveal from "../components/Reveal";

export default function About() {
  const { title, subtitle, image, imageAlt, blocks, reasons } = store.about;
  useDocumentTitle(title);

  return (
    <>
      <div className="page page-about">
        <div className="container">
          <Reveal className="section-head">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </Reveal>

          <Reveal className="hero-card about-card">
            <div className="about-image"><img src={image} alt={imageAlt} /></div>
            <div className="about-copy">
              {blocks.map((block) => (
                <div key={block.title}>
                  <h2>{block.title}</h2>
                  <p>{block.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <Benefits title={reasons.title} subtitle={reasons.subtitle} items={reasons.items} />
      <TrustSection />
    </>
  );
}
