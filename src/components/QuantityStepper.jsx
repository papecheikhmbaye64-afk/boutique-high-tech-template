import { store } from "../data/store";
import Icon from "./Icon";
import "./QuantityStepper.css";

export default function QuantityStepper({ value, onChange, label = store.labels.quantity, small = false }) {
  const max = store.maxQuantity;
  return (
    <div className={`stepper ${small ? "stepper-sm" : ""}`} role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(value - 1)} disabled={value <= 1} aria-label="Diminuer la quantité">
        <Icon name="minus" size={16} />
      </button>
      <output aria-live="polite">{value}</output>
      <button type="button" onClick={() => onChange(value + 1)} disabled={value >= max} aria-label="Augmenter la quantité">
        <Icon name="plus" size={16} />
      </button>
    </div>
  );
}
