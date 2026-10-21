import { useEffect, useRef, useState } from "react";
import { store } from "../data/store";
import { useCart } from "../context/cart";
import { formatPrice } from "../utils/format";
import { productPath } from "../utils/catalog";
import Link from "../router/Link";
import Icon from "./Icon";
import QuantityStepper from "./QuantityStepper";
import "./ProductInfo.css";

/**
 * Bloc d'informations d'un produit.
 * mode "page"     : fiche produit complète (variantes, quantité, ajout au panier).
 * mode "featured" : version courte pour l'accueil, avec un lien vers la fiche.
 */
export default function ProductInfo({ product, mode = "page" }) {
  const { labels, delivery } = store;
  const { addItem } = useCart();
  const [color, setColor] = useState(product.colors[0] ?? null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const timer = useRef(null);
  const Title = mode === "page" ? "h1" : "h2";
  const onSale = product.oldPrice && product.oldPrice > product.price;
  const discount = onSale ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleAdd = () => {
    addItem(product.id, quantity, color?.name ?? null);
    setAdded(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="info">
      <p className="info-category">{product.category}</p>
      <Title className="info-title">{product.name}</Title>

      <p className="info-price">
        {formatPrice(product.price)}
        {onSale && <s className="info-compare">{formatPrice(product.oldPrice)}</s>}
        {onSale && <span className="info-save">−{discount} %</span>}
      </p>

      <p className="info-description">{product.description}</p>

      {product.features.length > 0 && (
        <ul className="info-features">
          {product.features.map((feature) => (
            <li key={feature}>
              <Icon name="check" size={14} />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {mode === "featured" ? (
        <Link to={productPath(product)} className="btn btn-light info-cta">
          {labels.discoverProduct}
          <Icon name="arrow" size={18} />
        </Link>
      ) : (
        <>
          {product.colors.length > 0 && (
            <div className="info-colors">
              <p id="color-label" className="info-colors-label">
                {labels.color} : <strong>{color.name}</strong>
              </p>
              <div className="color-list" role="radiogroup" aria-labelledby="color-label">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    role="radio"
                    aria-checked={c.name === color.name}
                    aria-label={c.name}
                    title={c.name}
                    className={`color-dot ${c.name === color.name ? "active" : ""}`}
                    style={{ "--dot": c.value }}
                    onClick={() => setColor(c)}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="info-buy">
            <QuantityStepper value={quantity} onChange={setQuantity} />
            <button type="button" className="btn btn-light info-add" onClick={handleAdd}>
              {added ? (
                <>
                  <Icon name="check" size={18} />
                  {labels.added}
                </>
              ) : (
                <>
                  <Icon name="bag" size={18} />
                  {labels.addToCart}
                </>
              )}
            </button>
          </div>

          <p className="info-status" aria-live="polite">
            {added && <Link to="/panier">{labels.viewCart}</Link>}
          </p>

          <p className="info-delivery">
            <span className="dot-live" aria-hidden="true" />
            <strong>{delivery.label}</strong>
            {delivery.detail && <span> — {delivery.detail}</span>}
          </p>
        </>
      )}
    </div>
  );
}
