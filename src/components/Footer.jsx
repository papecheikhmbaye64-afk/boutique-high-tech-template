import { store } from "../data/store";
import Link from "../router/Link";
import "./Footer.css";

function FooterLink({ item }) {
  return item.to ? <Link to={item.to}>{item.label}</Link> : <a href={item.href}>{item.label}</a>;
}

export default function Footer() {
  const { tagline, copyright, columns, socials } = store.footer;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-intro">
              <p className="footer-brand">{store.name}</p>
              {tagline && <p className="footer-tagline">{tagline}</p>}
            </div>
            <div className="footer-columns">
              {columns.map((col) => (
                <nav key={col.title} aria-label={col.title} className="footer-col">
                  <p className="footer-col-title">{col.title}</p>
                  {col.links.map((item) => (
                    <FooterLink key={item.label} item={item} />
                  ))}
                </nav>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} {store.name}. {copyright}</p>
            {socials.length > 0 && (
              <ul className="footer-socials">
                {socials.map((s) => (
                  <li key={s.label}><a href={s.href} rel="noopener noreferrer" target="_blank">{s.label}</a></li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
