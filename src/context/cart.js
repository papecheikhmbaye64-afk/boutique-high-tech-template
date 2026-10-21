import { createContext, useContext } from "react";

export const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

/** Une ligne du panier = un produit + une couleur. */
export const lineKey = (id, color) => `${id}|${color ?? ""}`;
