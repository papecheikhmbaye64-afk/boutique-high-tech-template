import { store } from "../data/store";
import Link from "../router/Link";
import Icon from "./Icon";
import "./Hero.css";

export default function Hero() {
  const { hero } = store;
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-card hero-home">
          <div className="hero-copy">
            <h1>{hero.title}</h1>
            <p>{hero.text}</p>
            <Link to="/produits" className="btn btn-light btn-lg">
              {hero.cta}
              <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div className="hero-visual">
            <img src={hero.image} alt={hero.imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}
