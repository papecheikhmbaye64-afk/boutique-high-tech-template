import { store } from "../data/store";
import { formatPrice } from "../utils/format";

/** Sous-total, livraison et total : utilisé dans le panier et la commande. */
export default function OrderTotals({ subtotal, shipping, total }) {
  const t = store.cart;
  return (
    <dl className="totals">
      <div><dt>{t.subtotal}</dt><dd>{formatPrice(subtotal)}</dd></div>
      <div><dt>{t.shipping}</dt><dd>{shipping === 0 ? t.shippingFree : formatPrice(shipping)}</dd></div>
      <div className="totals-total"><dt>{t.total}</dt><dd>{formatPrice(total)}</dd></div>
    </dl>
  );
}
