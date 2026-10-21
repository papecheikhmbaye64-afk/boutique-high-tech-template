import { createContext, useContext } from "react";

// Préfixe de déploiement (ex : "/boutique/" si le site n'est pas à la racine).
// Se règle avec l'option "base" de vite.config.js.
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export const stripBase = (pathname) =>
  BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || "/" : pathname;

export const RouterContext = createContext(null);
export const useRouter = () => useContext(RouterContext);

/** Associe une adresse à une route : "/produit/:slug" → { slug: "nova-x-pro" } */
export function matchRoute(routes, pathname) {
  const parts = pathname.replace(/\/+$/, "").split("/");
  for (const route of routes) {
    const pattern = route.path.replace(/\/+$/, "").split("/");
    if (pattern.length !== parts.length) continue;
    const params = {};
    const ok = pattern.every((seg, i) => {
      if (seg.startsWith(":")) {
        params[seg.slice(1)] = decodeURIComponent(parts[i]);
        return true;
      }
      return seg === parts[i];
    });
    if (ok) return { route, params };
  }
  return null;
}
