import { useEffect, useState } from "react";
import { store } from "../data/store";
import { useCart } from "../context/cart";
import { useRouter } from "../router/context";
import Link from "../router/Link";
import Icon from "./Icon";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();
  const { count } = useCart();
  const close = () => setOpen(false);
  const { labels, nav } = store;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header ${open ? "is-open" : ""}`}>
      <div className="header-bar">
        <Link to="/" className="header-logo" onClick={close}>
          {store.name}
        </Link>

        <nav className="header-nav" aria-label="Navigation principale">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} aria-current={pathname === item.to ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link
            to="/panier"
            className="header-cart"
            aria-label={`${labels.cart}, ${count} ${count > 1 ? store.cart.itemMany : store.cart.itemOne}`}
            onClick={close}
          >
            <Icon name="bag" size={18} />
            <span key={count} className="header-cart-count">{count}</span>
          </Link>

          <button
            type="button"
            className="menu-button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? (
              <Icon name="close" size={18} />
            ) : (
              <span className="burger" aria-hidden="true">
                <span />
                <span />
              </span>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <nav aria-label="Menu mobile">
            {[{ label: labels.home, to: "/" }, ...nav].map((item) => (
              <Link key={item.to} to={item.to} onClick={close}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link to="/panier" className="btn btn-dark btn-block" onClick={close}>
            {labels.viewCart}
          </Link>
        </div>
      )}
    </header>
  );
}
