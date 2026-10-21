import { store } from "../data/store";
import Icon from "./Icon";
import Reveal from "./Reveal";
import "./TrustSection.css";

export default function TrustSection() {
  return (
    <section className="trust" aria-label="Nos engagements">
      <Reveal className="container">
        <ul className="trust-list">
          {store.trust.map((item) => (
            <li key={item.title} className="trust-item">
              <span className="trust-icon"><Icon name={item.icon} size={22} /></span>
              <div>
                <p className="trust-title">{item.title}</p>
                <p className="trust-text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
