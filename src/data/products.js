/**
 * ============================================================
 *  CATALOGUE : CATÉGORIES ET PRODUITS
 *  Remplacez les exemples ci-dessous par votre propre catalogue.
 *  Le design n'a pas besoin d'être modifié.
 * ============================================================
 */

// Les images se placent dans src/assets/ puis s'importent ici.
// Pour remplacer une photo : gardez le même nom de fichier, ou changez l'import.
import phoneProA from "../assets/phone-pro-1.jpeg";
import phoneProB from "../assets/phone-pro-2.jpeg";
import phoneOneA from "../assets/phone-one-1.jpeg";
import phoneOneB from "../assets/phone-one-2.jpeg";
import tabletAirA from "../assets/tablet-air-1.jpeg";
import tabletAirB from "../assets/tablet-air-2.jpeg";
import tabletMini from "../assets/tablet-mini-1.jpeg";
import laptopPro from "../assets/laptop-pro-1.jpeg";
import laptopAir from "../assets/laptop-air-1.jpeg";
import headphonesA from "../assets/headphones-1.jpeg";
import headphonesB from "../assets/headphones-2.jpeg";
import earbuds from "../assets/earbuds-1.jpeg";
import watchA from "../assets/watch-1.jpeg";
import watchB from "../assets/watch-2.jpeg";
import watchC from "../assets/watch-3.jpeg";
import watchUltraA from "../assets/watch-ultra-1.jpeg";
import watchUltraB from "../assets/watch-ultra-2.jpeg";
import accessories from "../assets/accessories-1.jpeg";

/* ============================================================
   CATÉGORIES
   - name : doit être identique au champ "category" des produits.
   - image : visuel affiché dans la section "Explorer par univers".
   Ajoutez ou supprimez des catégories librement.
   ============================================================ */
export const categories = [
  {
    name: "Smartphones",
    description: "Des écrans nets, de bons appareils photo et une batterie qui suit.",
    image: phoneOneB,
  },
  {
    name: "Tablettes",
    description: "Pour lire, dessiner, noter ou regarder une série confortablement.",
    image: tabletAirA,
  },
  {
    name: "Ordinateurs",
    description: "Portables fins et puissants, pour le travail comme pour la création.",
    image: laptopPro,
  },
  {
    name: "Audio",
    description: "Casques et écouteurs avec réduction de bruit et bonne autonomie.",
    image: headphonesB,
  },
  {
    name: "Montres",
    description: "Suivi sport, sommeil et notifications, directement au poignet.",
    image: watchA,
  },
  {
    name: "Accessoires",
    description: "Chargeurs, étuis et câbles qui servent tous les jours.",
    image: accessories,
  },
];

/* ============================================================
   AJOUTER UN PRODUIT
   Copiez un objet ci-dessous, collez-le dans la liste, puis modifiez :

   id          Numéro unique (ne réutilisez jamais un id existant).
   name        Nom affiché. L'adresse de la page en est déduite
               automatiquement : "Nova X Pro" → /produit/nova-x-pro
   category    Une des catégories ci-dessus (même orthographe).
   price       Prix de vente, en nombre : 899 ou 899.90
   oldPrice    Ancien prix barré. Mettez null pour ne rien afficher.
   summary     Une ligne sous le nom, sur les cartes.
   description Court paragraphe sur la page produit.
   images      Liste de photos. La première sert de visuel principal.
   features    Puces affichées sous la description (3 ou 4 maximum).
   colors      Optionnel : [{ name: "Noir", value: "#111111" }].
               Mettez [] si le produit n'a pas de variantes.
   ============================================================ */
export const products = [
  {
    id: 1,
    name: "Nova X Pro",
    category: "Smartphones",
    price: 899,
    oldPrice: 999,
    summary: "Écran 6,7 pouces, 256 Go de stockage.",
    description:
      "Un écran lumineux et fluide, un appareil photo fiable de jour comme de nuit, et une batterie qui tient la journée sans y penser.",
    images: [phoneProA, phoneProB],
    features: ["256 Go", "Écran 6,7 pouces", "Batterie 24 h"],
    colors: [
      { name: "Cuivre", value: "#c9783f" },
      { name: "Nuit", value: "#2c2f45" },
    ],
  },
  {
    id: 2,
    name: "Tab Air",
    category: "Tablettes",
    price: 649,
    oldPrice: null,
    summary: "11 pouces, compatible stylet.",
    description:
      "Assez fine pour se glisser dans un sac, assez rapide pour prendre des notes, monter une vidéo ou lire ses documents sans ralentissement.",
    images: [tabletAirA, tabletAirB],
    features: ["11 pouces", "128 Go", "Stylet compatible"],
    colors: [],
  },
  {
    id: 3,
    name: "Haven Pro",
    category: "Audio",
    price: 349,
    oldPrice: 399,
    summary: "Casque à réduction de bruit, 40 h d'autonomie.",
    description:
      "Un casque fermé dont la réduction de bruit se remarque dans les transports, avec des coussins qui restent confortables après plusieurs heures.",
    images: [headphonesA, headphonesB],
    features: ["Réduction de bruit", "Autonomie 40 h", "Bluetooth 5.3"],
    colors: [
      { name: "Graphite", value: "#2b2b2b" },
      { name: "Vert sauge", value: "#a9c9b0" },
    ],
  },
  {
    id: 4,
    name: "Pulse Watch",
    category: "Montres",
    price: 329,
    oldPrice: null,
    summary: "Suivi sport et sommeil, étanche 50 m.",
    description:
      "Un cadran lisible en plein soleil, le suivi du sommeil et de l'activité, et les notifications importantes au poignet.",
    images: [watchA, watchB, watchC],
    features: ["Étanche 50 m", "GPS intégré", "Autonomie 2 jours"],
    colors: [],
  },
  {
    id: 5,
    name: "Pulse Buds",
    category: "Audio",
    price: 229,
    oldPrice: 249,
    summary: "Écouteurs sans fil avec réduction de bruit.",
    description:
      "Des écouteurs légers qui restent en place pendant le sport, avec un boîtier de charge assez compact pour une poche de jean.",
    images: [earbuds],
    features: ["Réduction de bruit", "30 h avec le boîtier", "Résistants à l'eau"],
    colors: [],
  },
  {
    id: 6,
    name: "AeroBook Pro",
    category: "Ordinateurs",
    price: 1499,
    oldPrice: 1649,
    summary: "14 pouces, 16 Go de RAM, 512 Go SSD.",
    description:
      "Un écran précis, une batterie qui tient la journée et les performances nécessaires pour travailler sans ralentissement.",
    images: [laptopPro, laptopAir],
    features: ["16 Go de RAM", "512 Go SSD", "14 pouces", "Autonomie 18 h"],
    colors: [],
  },
  {
    id: 7,
    name: "Nova One",
    category: "Smartphones",
    price: 649,
    oldPrice: 699,
    summary: "Écran 6,1 pouces, charge rapide.",
    description:
      "Un smartphone compact, simple à prendre en main, avec un bon appareil photo et assez de stockage pour garder toutes ses photos.",
    images: [phoneOneA, phoneOneB],
    features: ["128 Go", "Écran 6,1 pouces", "Charge rapide"],
    colors: [],
  },
  {
    id: 8,
    name: "Tab Mini",
    category: "Tablettes",
    price: 449,
    oldPrice: null,
    summary: "8,3 pouces, légère et endurante.",
    description:
      "Le format idéal pour lire dans les transports ou garder à portée de main à la maison, avec une journée complète d'autonomie.",
    images: [tabletMini],
    features: ["8,3 pouces", "64 Go", "Autonomie 10 h"],
    colors: [],
  },
  {
    id: 9,
    name: "AeroBook Air",
    category: "Ordinateurs",
    price: 1199,
    oldPrice: 1299,
    summary: "13 pouces, 1,2 kg, sans ventilateur.",
    description:
      "Un portable très léger et silencieux, pensé pour ceux qui travaillent partout et veulent un chargeur dans le sac le moins souvent possible.",
    images: [laptopAir],
    features: ["13 pouces", "8 Go de RAM", "256 Go SSD", "1,2 kg"],
    colors: [],
  },
  {
    id: 10,
    name: "Pulse Watch Ultra",
    category: "Montres",
    price: 549,
    oldPrice: 599,
    summary: "Boîtier titane, GPS double fréquence.",
    description:
      "Une montre robuste pour la randonnée et la course longue distance, avec un écran qui reste lisible sous la pluie et en plein soleil.",
    images: [watchUltraA, watchUltraB],
    features: ["Boîtier titane", "GPS double fréquence", "Autonomie 3 jours"],
    colors: [],
  },
  {
    id: 11,
    name: "Kit Nomade",
    category: "Accessoires",
    price: 79,
    oldPrice: null,
    summary: "Chargeur magnétique et étui de transport.",
    description:
      "Un chargeur sans fil et un étui qui rangent le câble, le bloc secteur et les écouteurs au même endroit.",
    images: [accessories],
    features: ["Charge sans fil 15 W", "Câble 1 m inclus", "Étui de transport"],
    colors: [],
  },
];
