import { useEffect } from "react";
import { store } from "../data/store";

/** Titre de l'onglet : "Page — NOM DE LA BOUTIQUE". Sans argument : nom seul. */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${store.name}` : `${store.name} — Boutique high-tech`;
  }, [title]);
}
