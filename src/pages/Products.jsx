import { useState } from "react";
import { store } from "../data/store";
import { allProducts, categories, categorySlug } from "../utils/catalog";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import { useRouter } from "../router/context";
import ProductGrid from "../components/ProductGrid";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";

export default function Products() {
  const t = store.catalog;
  const { search, navigate } = useRouter();
  const [query, setQuery] = useState("");
  const slug = new URLSearchParams(search).get("categorie");
  const active = categories.find((c) => categorySlug(c) === slug) ?? null;
  useDocumentTitle(active ? active.name : t.title);

  const term = query.trim().toLowerCase();
  const visible = allProducts.filter(
    (p) =>
      (!active || p.category === active.name) &&
      (!term || `${p.name} ${p.category} ${p.summary}`.toLowerCase().includes(term)),
  );

  const choose = (category) =>
    navigate(category ? `/produits?categorie=${categorySlug(category)}` : "/produits", { replace: true, scroll: false });

  return (
    <div className="page">
      <div className="container">
        <Reveal className="section-head">
          <h1>{active ? active.name : t.title}</h1>
          <p>{active ? active.description : t.subtitle}</p>
        </Reveal>

        <div className="filters">
          <div className="pills" role="group" aria-label="Catégories">
            <button type="button" className={`pill ${!active ? "active" : ""}`} aria-pressed={!active} onClick={() => choose(null)}>
              {t.all}
            </button>
            {categories.map((c) => (
              <button
                key={c.name}
                type="button"
                className={`pill ${active === c ? "active" : ""}`}
                aria-pressed={active === c}
                onClick={() => choose(c)}
              >
                {c.name}
              </button>
            ))}
          </div>
          <label className="search">
            <span className="sr-only">{t.searchLabel}</span>
            <Icon name="search" size={18} />
            <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.searchPlaceholder} />
          </label>
        </div>

        {visible.length > 0 ? (
          <ProductGrid key={`${slug}-${term}`} products={visible} />
        ) : (
          <div className="empty-card" role="status">
            <p>{t.empty}</p>
            <button type="button" className="btn btn-dark" onClick={() => { setQuery(""); choose(null); }}>
              {t.reset}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
