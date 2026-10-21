/**
 * ============================================================
 *  CONFIGURATION DE LA BOUTIQUE
 *  Nom, textes, navigation, livraison et devise.
 *  Les produits et catégories sont dans data/products.js.
 *  Les couleurs du design sont dans les variables de src/index.css.
 * ============================================================
 */

// Images de la page d'accueil et de la page "À propos".
// Placez vos fichiers dans src/assets/ puis changez simplement l'import.
import heroImage from "../assets/accessories-1.jpeg";
import aboutImage from "../assets/laptop-air-1.jpeg";
import reasonSelection from "../assets/tablet-air-2.jpeg";
import reasonDelivery from "../assets/accessories-1.jpeg";
import reasonSupport from "../assets/watch-2.jpeg";

export const store = {
  // Nom affiché dans le header, le footer et l'onglet du navigateur.
  name: "NEXORA",

  // Format des prix : position "after" → 1 499 €   |   "before" → $1,499
  locale: "fr-FR",
  currency: { symbol: "€", position: "after" },

  // Quantité maximale d'un même produit dans le panier.
  maxQuantity: 10,

  // Livraison : "cost" est le tarif, offert à partir de "freeFrom".
  // cost: 0 → toujours offerte. freeFrom: 0 → jamais offerte.
  shipping: { cost: 9, freeFrom: 150 },

  // Produit affiché en grand sur l'accueil (id dans products.js).
  featuredProductId: 6,

  // Liens du header (l'accueil se fait via le nom de la boutique).
  nav: [
    { label: "Produits", to: "/produits" },
    { label: "À propos", to: "/a-propos" },
  ],

  // Textes réutilisés dans plusieurs pages.
  labels: {
    home: "Accueil",
    discover: "Découvrir",
    discoverProduct: "Découvrir le produit",
    seeAll: "Voir tous les produits",
    addToCart: "Ajouter au panier",
    added: "Ajouté au panier",
    viewCart: "Voir le panier",
    cart: "Panier",
    color: "Couleur",
    quantity: "Quantité",
    save: "économisez",
  },

  // Information de livraison sous le bouton d'achat.
  delivery: { label: "Livraison suivie", detail: "Expédié sous 24 h" },

  /* ---------- Page d'accueil ---------- */
  hero: {
    title: "Technologie pensée pour votre quotidien",
    text: "Smartphones, ordinateurs, audio et montres connectées. Une sélection courte, des prix clairs et une livraison suivie.",
    cta: "Découvrir les produits",
    image: heroImage,
    imageAlt: "Smartphones, écouteurs et chargeur sans fil sur fond bleu",
  },
  home: {
    categories: {
      title: "Explorer par univers",
      subtitle: "Choisissez une famille pour voir les produits qui s'y trouvent.",
      cta: "Voir les produits",
      countOne: "produit",
      countMany: "produits",
    },
    products: {
      title: "Nos produits",
      subtitle: "Une sélection restreinte, avec des prix affichés clairement.",
      count: 5, // nombre de produits affichés sur l'accueil
    },
    featured: {
      title: "À la une",
      subtitle: "Le produit que nous recommandons en priorité.",
    },
  },

  // Bandeau d'engagements. icon : "truck" | "shield" | "refresh" | "headset"
  trust: [
    { icon: "truck", title: "Livraison suivie", text: "Expédition sous 24 h" },
    { icon: "shield", title: "Paiement sécurisé", text: "Vos données protégées" },
    { icon: "refresh", title: "Retour sous 30 jours", text: "Satisfait ou remboursé" },
    { icon: "headset", title: "Support client", text: "Une équipe qui répond" },
  ],

  /* ---------- Page Produits ---------- */
  catalog: {
    title: "Produits",
    subtitle: "Tout le catalogue, à filtrer par famille.",
    all: "Tous",
    searchLabel: "Rechercher un produit",
    searchPlaceholder: "Rechercher",
    empty: "Aucun produit ne correspond à votre recherche.",
    reset: "Afficher tous les produits",
    related: "Dans le même esprit",
  },

  /* ---------- Panier ---------- */
  cart: {
    title: "Votre panier",
    itemOne: "article",
    itemMany: "articles",
    empty: "Votre panier est vide.",
    emptyText: "Ajoutez un produit pour commencer.",
    summary: "Récapitulatif",
    subtotal: "Sous-total",
    shipping: "Livraison",
    shippingFree: "Offerte",
    freeHint: "Plus que {amount} pour la livraison offerte.",
    total: "Total",
    checkout: "Passer à la commande",
    continue: "Continuer les achats",
    remove: "Supprimer",
  },

  /* ---------- Commande ---------- */
  order: {
    title: "Finalisez votre commande",
    subtitle: "Renseignez vos informations pour recevoir votre commande rapidement.",
    summaryTitle: "Votre commande",
    summaryNote: "Aucun paiement n'est demandé à cette étape.",
    cta: "Confirmer la commande",
    ctaLoading: "Envoi en cours…",
    empty: "Aucun article à commander pour le moment.",
    success: {
      title: "Votre commande a bien été enregistrée.",
      text: "Merci ! Nous vous contacterons très vite pour confirmer la livraison.",
      back: "Retour à la boutique",
    },
    genericError: "Une erreur est survenue. Veuillez réessayer.",
    fields: {
      fullName: { label: "Nom complet", placeholder: "Prénom Nom" },
      email: { label: "Adresse email", placeholder: "nom@exemple.com" },
      phone: { label: "Téléphone", placeholder: "+00 000 000 000" },
      address: { label: "Adresse de livraison", placeholder: "Rue, quartier, numéro" },
      city: { label: "Ville", placeholder: "Votre ville" },
    },
    errors: {
      fullName: "Veuillez renseigner votre nom complet.",
      email: "Veuillez renseigner une adresse email valide.",
      phone: "Veuillez renseigner votre numéro de téléphone.",
      address: "Veuillez renseigner votre adresse de livraison.",
      city: "Veuillez renseigner votre ville.",
    },
  },

  /* ---------- À propos ---------- */
  about: {
    title: "À propos",
    subtitle: "Une boutique de matériel high-tech, pensée pour acheter sans se perdre.",
    image: aboutImage,
    imageAlt: "Ordinateur portable ouvert sur fond bleu clair",
    blocks: [
      {
        title: "Notre vision",
        text: "Acheter de la technologie ne devrait pas demander des heures de comparaison. Nous gardons peu de produits par catégorie, et chacun a sa place.",
      },
      {
        title: "Notre approche",
        text: "Chaque produit est testé avant d'être référencé. Les fiches indiquent ce qui compte vraiment : stockage, autonomie, poids, garantie.",
      },
    ],
    reasons: {
      title: "Pourquoi nous choisir",
      subtitle: "Trois engagements que nous tenons au quotidien.",
      items: [
        {
          tag: "Sélection",
          title: "Peu de produits, bien choisis",
          description: "Pas de catalogue interminable : seulement ce que nous recommanderions à un proche.",
          image: reasonSelection,
        },
        {
          tag: "Livraison",
          title: "Une commande suivie",
          description: "Expédition sous 24 h et suivi de colis du départ jusqu'à la livraison.",
          image: reasonDelivery,
        },
        {
          tag: "Service",
          title: "Une vraie personne répond",
          description: "Un doute avant l'achat ou un souci après ? Notre équipe répond rapidement.",
          image: reasonSupport,
        },
      ],
    },
  },

  /* ---------- Pied de page ---------- */
  footer: {
    tagline: "Du matériel high-tech choisi avec soin.",
    copyright: "Tous droits réservés.",
    // Colonnes de liens. "to" = page du site, "href" = lien externe, mailto: ou tel:
    columns: [
      {
        title: "Pages",
        links: [
          { label: "Accueil", to: "/" },
          { label: "Produits", to: "/produits" },
          { label: "À propos", to: "/a-propos" },
          { label: "Panier", to: "/panier" },
        ],
      },
      {
        title: "Assistance",
        links: [
          { label: "contact@nexora.example", href: "mailto:contact@nexora.example" },
          { label: "+00 000 000 000", href: "tel:+000000000000" },
        ],
      },
    ],
    // ex : [{ label: "Instagram", href: "https://instagram.com/votre-boutique" }]
    socials: [],
  },

  notFound: {
    title: "Page introuvable",
    text: "Cette page n'existe pas ou a été déplacée.",
    cta: "Retour à l'accueil",
  },
};
