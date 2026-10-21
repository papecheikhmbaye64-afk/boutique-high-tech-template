import { store } from "../data/store";

/** Formate un montant selon la devise définie dans data/store.js. */
export function formatPrice(amount) {
  const number = amount.toLocaleString(store.locale, {
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
  });
  return store.currency.position === "before"
    ? `${store.currency.symbol}${number}`
    : `${number}\u00a0${store.currency.symbol}`;
}

/** Pluriel simple : plural(2, "article", "articles") → "articles" */
export const plural = (n, one, many) => (n > 1 ? many : one);
