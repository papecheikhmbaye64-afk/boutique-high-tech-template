import { store } from "../data/store";
import { formatPrice } from "../utils/format";
import { productPath } from "../utils/catalog";
import Link from "../router/Link";
import Icon from "./Icon";
import QuantityStepper from "./QuantityStepper";

export default function CartItem({ line, onQuantity, onRemove }) {
  const { product, color, quantity, lineTotal, key } = line;
  return (
    <li className="cart-item">
      <Link to={productPath(product)} className="cart-thumb" aria-label={product.name}>
        <img src={product.images[0].src} alt="" />
      </Link>
      <div className="cart-main">
        <p className="cart-category">{product.category}</p>
        <Link to={productPath(product)} className="cart-name">{product.name}</Link>
        {color && <p className="cart-meta">{store.labels.color} : {color}</p>}
        <p className="cart-unit">{formatPrice(product.price)}</p>
      </div>
      <div className="cart-side">
        <p className="cart-total">{formatPrice(lineTotal)}</p>
        <QuantityStepper small value={quantity} onChange={(q) => onQuantity(key, q)} label={`${store.labels.quantity} : ${product.name}`} />
        <button type="button" className="cart-remove" onClick={() => onRemove(key)}>
          <Icon name="trash" size={15} />
          {store.cart.remove}
        </button>
      </div>
    </li>
  );
}
