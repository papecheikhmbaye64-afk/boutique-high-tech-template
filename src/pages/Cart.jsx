import { store } from "../data/store";
import { useCart } from "../context/cart";
import { formatPrice, plural } from "../utils/format";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import Link from "../router/Link";
import CartItem from "../components/CartItem";
import OrderTotals from "../components/OrderTotals";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import "../components/Cart.css";

export default function Cart() {
  const t = store.cart;
  const { lines, count, subtotal, shipping, total, setQuantity, removeItem } = useCart();
  useDocumentTitle(t.title);

  const { freeFrom } = store.shipping;
  const missing = freeFrom - subtotal;
  const showHint = shipping > 0 && missing > 0;

  return (
    <div className="page">
      <div className="container">
        <Reveal className="section-head">
          <h1>{t.title}</h1>
          {count > 0 && <p>{count} {plural(count, t.itemOne, t.itemMany)}</p>}
        </Reveal>

        {lines.length === 0 ? (
          <div className="empty-card" role="status">
            <p className="empty-title">{t.empty}</p>
            <p>{t.emptyText}</p>
            <Link to="/produits" className="btn btn-dark">{t.continue}</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <ul className="cart-list">
              {lines.map((line) => (
                <CartItem key={line.key} line={line} onQuantity={setQuantity} onRemove={removeItem} />
              ))}
            </ul>

            <aside className="cart-summary" aria-label={t.summary}>
              <h2>{t.summary}</h2>
              <OrderTotals subtotal={subtotal} shipping={shipping} total={total} />
              {showHint && <p className="cart-hint">{t.freeHint.replace("{amount}", formatPrice(missing))}</p>}
              <Link to="/commande" className="btn btn-light btn-block btn-lg">
                {t.checkout}
                <Icon name="arrow" size={18} />
              </Link>
              <Link to="/produits" className="cart-continue">{t.continue}</Link>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
