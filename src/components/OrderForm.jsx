import { useEffect, useRef, useState } from "react";
import { store } from "../data/store";
import { useCart } from "../context/cart";
import { formatPrice, plural } from "../utils/format";
import { submitOrder } from "../services/orderService";
import Link from "../router/Link";
import Icon from "./Icon";
import OrderTotals from "./OrderTotals";
import Reveal from "./Reveal";
import "./OrderForm.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9\s.-]{8,16}$/;
const INITIAL = { fullName: "", email: "", phone: "", address: "", city: "" };
const FIELD_ORDER = ["fullName", "email", "phone", "address", "city"];

function validate(values) {
  const errors = {};
  const msg = store.order.errors;
  if (values.fullName.trim().length < 3) errors.fullName = msg.fullName;
  if (!EMAIL_RE.test(values.email.trim())) errors.email = msg.email;
  if (!PHONE_RE.test(values.phone.trim())) errors.phone = msg.phone;
  if (values.address.trim().length < 5) errors.address = msg.address;
  if (!values.city.trim()) errors.city = msg.city;
  return errors;
}

function Field({ name, type = "text", autoComplete, value, error, valid, onChange, onBlur, className = "" }) {
  const { label, placeholder } = store.order.fields[name];
  const state = error ? "invalid" : valid ? "valid" : "";
  return (
    <div className={`field ${state} ${className}`}>
      <label htmlFor={name}>{label}</label>
      <div className="field-control">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        {valid && <span className="field-icon ok"><Icon name="check" size={16} /></span>}
      </div>
      {error && (
        <p id={`${name}-error`} className="field-error">
          <Icon name="alert" size={14} />
          {error}
        </p>
      )}
    </div>
  );
}

export default function OrderForm() {
  const { lines, count, subtotal, shipping, total, clear } = useCart();
  const [values, setValues] = useState(INITIAL);
  const [touched, setTouched] = useState({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [done, setDone] = useState(null); // récapitulatif conservé après vidage du panier
  const successRef = useRef(null);
  const t = store.order;

  const errors = validate(values);
  const showError = (name) => (touched[name] || attempted) && errors[name];
  const isValid = (name) => touched[name] && !errors[name] && values[name].trim() !== "";

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  if (status === "success") {
    return (
      <Reveal className="order-card order-success" role="status">
        <span className="success-icon"><Icon name="check" size={28} /></span>
        <h2 ref={successRef} tabIndex={-1}>{t.success.title}</h2>
        <p>{t.success.text}</p>
        <p className="success-recap">
          {done.count} {plural(done.count, store.cart.itemOne, store.cart.itemMany)} — <strong>{formatPrice(done.total)}</strong>
        </p>
        <Link to="/" className="btn btn-dark">{t.success.back}</Link>
      </Reveal>
    );
  }

  if (lines.length === 0) {
    return (
      <Reveal className="order-card order-success">
        <p className="empty-title">{t.empty}</p>
        <Link to="/produits" className="btn btn-dark">{store.cart.continue}</Link>
      </Reveal>
    );
  }

  const handleChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  const handleBlur = (e) => setTouched((x) => ({ ...x, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAttempted(true);
    const firstInvalid = FIELD_ORDER.find((name) => errors[name]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    setStatus("loading");
    try {
      await submitOrder({
        customer: values,
        items: lines.map((l) => ({ id: l.id, name: l.product.name, color: l.color, quantity: l.quantity, unitPrice: l.product.price })),
        subtotal,
        shipping,
        total,
      });
      setDone({ count, total });
      clear();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const loading = status === "loading";
  const fieldProps = (name) => ({
    name,
    value: values[name],
    error: showError(name),
    valid: isValid(name),
    onChange: handleChange,
    onBlur: handleBlur,
  });

  return (
    <Reveal className="order-layout">
      <form className="order-card order-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <Field {...fieldProps("fullName")} autoComplete="name" />
          <Field {...fieldProps("email")} type="email" autoComplete="email" />
          <Field {...fieldProps("phone")} type="tel" autoComplete="tel" className="span-2" />
          <Field {...fieldProps("address")} autoComplete="street-address" className="span-2" />
          <Field {...fieldProps("city")} autoComplete="address-level2" className="span-2" />
        </div>

        {status === "error" && (
          <p className="form-alert" role="alert">
            <Icon name="alert" size={16} /> {t.genericError}
          </p>
        )}

        <button type="submit" className="btn btn-dark btn-block btn-lg" disabled={loading} aria-busy={loading}>
          {loading ? (
            <>
              <span className="spinner" aria-hidden="true" />
              {t.ctaLoading}
            </>
          ) : (
            <>
              {t.cta}
              <Icon name="arrow" size={18} />
            </>
          )}
        </button>
      </form>

      <aside className="order-card order-summary" aria-label={t.summaryTitle}>
        <h2>{t.summaryTitle}</h2>
        <ul className="summary-items">
          {lines.map((l) => (
            <li key={l.key} className="summary-product">
              <img src={l.product.images[0].src} alt="" />
              <div>
                <p className="summary-name">{l.product.name}</p>
                <p className="summary-meta">
                  {l.color ? `${l.color} · ` : ""}× {l.quantity}
                </p>
              </div>
              <p className="summary-price">{formatPrice(l.lineTotal)}</p>
            </li>
          ))}
        </ul>
        <OrderTotals subtotal={subtotal} shipping={shipping} total={total} />
        <p className="summary-note">{t.summaryNote}</p>
      </aside>
    </Reveal>
  );
}
