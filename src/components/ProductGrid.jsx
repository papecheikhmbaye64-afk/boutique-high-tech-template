import Reveal from "./Reveal";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

/**
 * layout "bento" : rythme 2 cartes larges puis 3 cartes (accueil).
 * layout "grid"  : grille régulière (page Produits).
 */
export default function ProductGrid({ products, layout = "grid" }) {
  return (
    <Reveal as="ul" className={`pgrid pgrid-${layout}`}>
      {products.map((product, i) => (
        <li key={product.id}>
          <ProductCard product={product} variant={layout === "bento" && i % 5 < 2 ? "wide" : "tall"} />
        </li>
      ))}
    </Reveal>
  );
}
