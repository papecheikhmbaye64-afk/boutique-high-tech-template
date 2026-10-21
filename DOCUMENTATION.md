# Documentation

## 1. Lancer le projet
`npm install` puis `npm run dev`. Pour publier : `npm run build` et déployez le dossier `dist/`.

## 2. Changer le nom de la boutique
`src/data/store.js` → `name`. Il apparaît dans le header, le footer, l'onglet du navigateur et la clé de sauvegarde du panier. Pensez aussi à `index.html` (titre et description par défaut) et aux coordonnées du footer (`footer.columns`).

## 3. Ajouter ou modifier un produit
Ouvrez `src/data/products.js`. Copiez un objet de la liste `products`, collez-le, puis changez :

- `id` : numéro unique
- `name` : l'adresse de la page est créée automatiquement (`Nova X Pro` → `/produit/nova-x-pro`)
- `category` : exactement le nom d'une catégorie
- `price` et `oldPrice` (`null` pour ne pas afficher d'ancien prix ; la remise en % est calculée)
- `summary` (carte), `description` (fiche), `features` (puces)
- `images` : la première est l'image principale
- `colors` : variantes de couleur, ou `[]`

Pour supprimer un produit, supprimez son objet.

## 4. Catégories
`categories` dans `products.js`. Chaque catégorie a un `name`, une `description` et une `image` (section « Explorer par univers »). Le champ `category` des produits doit reprendre le même nom.

## 5. Images
1. Copiez vos photos dans `src/assets/` (JPEG ou WebP, environ 1200 px de large, moins de 200 Ko si possible).
2. Importez-les en haut de `products.js` : `import monImage from "../assets/mon-image.jpg";`
3. Utilisez la variable dans `images` ou `image`.

Pour remplacer une photo sans toucher au code, gardez le même nom de fichier. Les images de l'accueil et de la page À propos s'importent en haut de `store.js`.

## 6. Textes
Tout est dans `src/data/store.js` : hero (`hero`), titres des sections (`home`), engagements (`trust`), catalogue (`catalog`), panier (`cart`), commande (`order`), À propos (`about`), pied de page (`footer`).

## 7. Produit mis en avant
`featuredProductId` dans `store.js` : mettez l'`id` du produit à afficher en grand sur l'accueil. Il n'est pas répété dans la grille « Nos produits » (nombre affiché : `home.products.count`).

## 8. Devise et livraison
`currency` (symbole et position), `locale` (format des nombres), `shipping` (`cost` : tarif, `freeFrom` : seuil de livraison offerte), `maxQuantity`.

## 9. Couleurs
Variables `:root` en haut de `src/index.css`. Modifier `--primary`, `--primary-mid` et `--primary-strong` change tout le fond bleu. `--ink` est le noir des boutons, `--radius-lg` l'arrondi des cartes.

## 10. Recevoir les commandes
Le formulaire envoie ses données à `src/services/orderService.js`. Aujourd'hui c'est une simulation : remplacez la fonction par un appel à votre API, Formspree, Google Sheets, Stripe, etc. L'objet reçu contient `customer`, `items`, `subtotal`, `shipping` et `total`.

## 11. Ajouter une page
Créez `src/pages/MaPage.jsx`, puis ajoutez une ligne dans la liste `routes` de `src/App.jsx`. Pour l'ajouter au menu : `nav` dans `store.js`.

## 12. Panier
Le panier est enregistré dans le navigateur (localStorage). Une ligne = un produit + une couleur. La logique est dans `src/context/CartProvider.jsx`.
