import { store } from "../data/store";
import { plural } from "../utils/format";
import { categorySlug } from "../utils/catalog";
import Link from "../router/Link";
import Icon from "./Icon";

export default function CategoryCard({ category, count, active, onActivate }) {
  const { cta, countOne, countMany } = store.home.categories;

  return (
    <article className={`cat ${active ? "active" : ""}`}>
      <img src={category.image} alt="" loading="lazy" />
      <div className="cat-shade" />

      {active ? (
        <div className="cat-body">
          <span className="cat-count">{count} {plural(count, countOne, countMany)}</span>
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          <Link to={`/produits?categorie=${categorySlug(category)}`} className="btn btn-light cat-link">
            {cta}
            <Icon name="arrow" size={16} />
          </Link>
        </div>
      ) : (
        <button type="button" className="cat-collapsed" onClick={onActivate} aria-expanded="false" aria-label={category.name}>
          <span className="cat-label">{category.name}</span>
          <span className="cat-plus"><Icon name="plus" size={16} /></span>
        </button>
      )}
    </article>
  );
}
