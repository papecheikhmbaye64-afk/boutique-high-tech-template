import { store } from "../data/store";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import OrderForm from "../components/OrderForm";
import Reveal from "../components/Reveal";

export default function Checkout() {
  const t = store.order;
  useDocumentTitle(t.title);

  return (
    <div className="page">
      <div className="container">
        <Reveal className="section-head">
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </Reveal>
        <OrderForm />
      </div>
    </div>
  );
}
