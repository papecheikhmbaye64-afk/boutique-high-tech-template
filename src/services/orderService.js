/**
 * Envoi de la commande.
 * Pour l'instant : simulation (1,2 s). Remplacez le corps de cette fonction
 * par un appel à votre API, Formspree, Google Sheets, Stripe, etc.
 *
 * L'objet "order" contient : customer (coordonnées), items (produit, couleur,
 * quantité, prix), subtotal, shipping et total.
 *
 *   const res = await fetch("https://votre-api/orders", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(order),
 *   });
 *   if (!res.ok) throw new Error("Échec de l'envoi");
 */
export function submitOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, order }), 1200);
  });
}
