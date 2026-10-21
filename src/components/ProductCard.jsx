import { store } from "../data/store";
import { formatPrice } from "../utils/format";
import { productPath } from "../utils/catalog";
import Link from "../router/Link";
import Icon from "./Icon";
import "./ProductCard.css";

/** variant "tall" : carte claire verticale. "wide" : carte noire horizontale (grands écrans). */
export default function ProductCard({ product, variant = "tall" }) {
  const onSale = product.oldPrice && product.oldPrice > product.price;

  return (
    <article className={`pcard pcard-${variant}`}>
      <div className="pcard-media">
        <img src={product.images[0].src} alt="" loading="lazy" draggable="false" />
        <span className="pcard-tag">{product.category}</span>
        <span className="pcard-go" aria-hidden="true"><Icon name="arrow" size={18} /></span>
      </div>
      <div className="pcard-body">
        <h3 className="pcard-name">
          <Link to={productPath(product)} className="pcard-link">{product.name}</Link>
        </h3>
        <p className="pcard-summary">{product.summary}</p>
        <div className="pcard-foot">
          <p className="pcard-price">
            {formatPrice(product.price)}
            {onSale && <s>{formatPrice(product.oldPrice)}</s>}
          </p>
          <span className="pcard-cta">{store.labels.discover}</span>
        </div>
      </div>
    </article>
  );
}
