import { useEffect, useMemo, useReducer } from "react";
import { store } from "../data/store";
import { getProductById, slugify } from "../utils/catalog";
import { CartContext, lineKey } from "./cart";

// Le panier est conservé dans le navigateur (localStorage).
const STORAGE_KEY = `${slugify(store.name)}-cart`;

function load() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(data) ? data.filter((l) => getProductById(l.id) && l.quantity > 0) : [];
  } catch {
    return [];
  }
}

const clamp = (q) => Math.min(store.maxQuantity, Math.max(1, q));

function reducer(items, action) {
  switch (action.type) {
    case "add": {
      const { id, color, quantity } = action;
      const key = lineKey(id, color);
      const found = items.find((l) => lineKey(l.id, l.color) === key);
      if (found) {
        return items.map((l) => (l === found ? { ...l, quantity: clamp(l.quantity + quantity) } : l));
      }
      return [...items, { id, color, quantity: clamp(quantity) }];
    }
    case "set":
      return items.map((l) => (lineKey(l.id, l.color) === action.key ? { ...l, quantity: clamp(action.quantity) } : l));
    case "remove":
      return items.filter((l) => lineKey(l.id, l.color) !== action.key);
    case "clear":
      return [];
    default:
      return items;
  }
}

export default function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* stockage indisponible : le panier reste en mémoire */
    }
  }, [items]);

  const value = useMemo(() => {
    const lines = items.map((l) => {
      const product = getProductById(l.id);
      return { ...l, key: lineKey(l.id, l.color), product, lineTotal: product.price * l.quantity };
    });
    const subtotal = lines.reduce((sum, l) => sum + l.lineTotal, 0);
    const { cost, freeFrom } = store.shipping;
    const isFree = cost === 0 || (freeFrom > 0 && subtotal >= freeFrom);
    const shipping = subtotal === 0 || isFree ? 0 : cost;
    return {
      lines,
      subtotal,
      shipping,
      total: subtotal + shipping,
      count: lines.reduce((sum, l) => sum + l.quantity, 0),
      addItem: (id, quantity = 1, color = null) => dispatch({ type: "add", id, color, quantity }),
      setQuantity: (key, quantity) => dispatch({ type: "set", key, quantity }),
      removeItem: (key) => dispatch({ type: "remove", key }),
      clear: () => dispatch({ type: "clear" }),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
