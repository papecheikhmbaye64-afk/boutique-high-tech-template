# Boutique high-tech — Template React multi-produits

Template e-commerce premium, responsive, prêt à personnaliser : catalogue, fiches produit, panier, commande et page À propos. Aucune dépendance autre que React.

## Installation

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dossier dist/ prêt à déployer
npm run preview
```

## Pages

| Adresse            | Page                                              |
| ------------------ | ------------------------------------------------- |
| `/`                | Accueil : hero, catégories, produits, à la une    |
| `/produits`        | Catalogue avec filtres par catégorie et recherche |
| `/produit/:nom`    | Fiche produit (galerie, variantes, quantité)      |
| `/panier`          | Panier                                            |
| `/commande`        | Formulaire de commande                            |
| `/a-propos`        | À propos                                          |

## Personnalisation rapide

| Je veux changer…                     | Où                                   |
| ------------------------------------ | ------------------------------------ |
| Nom de la boutique                   | `src/data/store.js` → `name`         |
| Textes (hero, sections, panier…)     | `src/data/store.js`                  |
| Devise, livraison, quantité max      | `src/data/store.js`                  |
| Produits, prix, descriptions         | `src/data/products.js`               |
| Catégories                           | `src/data/products.js` → `categories`|
| Images                               | `src/assets/` + imports des deux fichiers ci-dessus |
| Couleurs du design                   | variables `:root` de `src/index.css` |
| Envoi des commandes                  | `src/services/orderService.js`       |

Détails pas à pas : [`DOCUMENTATION.md`](./DOCUMENTATION.md).

## Structure

```
src/
├── assets/        photos
├── components/    Header, Footer, Hero, Categories, CategoryCard, ProductCard,
│                  ProductGrid, ProductGallery, ProductInfo, FeaturedProduct,
│                  CartItem, OrderTotals, OrderForm, Benefits, TrustSection, ...
├── context/       panier (CartProvider)
├── data/          store.js (boutique) · products.js (catalogue)
├── pages/         Home, Products, Product, Cart, Checkout, About, NotFound
├── router/        mini routeur sans dépendance
├── services/      orderService.js
└── utils/         format.js, catalog.js
```

## Déploiement

Les adresses sont propres (`/produit/nova-x-pro`) : l'hébergeur doit renvoyer `index.html` pour toutes les adresses. C'est déjà prévu pour Netlify (`public/_redirects`) et Vercel (`vercel.json`). Si le site n'est pas à la racine du domaine, définissez `base` dans `vite.config.js`.

## Crédits

Les photos de démonstration sont des exemples : remplacez-les par vos propres visuels (et vérifiez leurs droits d'utilisation) avant publication.
