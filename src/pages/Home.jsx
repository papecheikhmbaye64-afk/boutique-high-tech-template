import { store } from "../data/store";
import { allProducts } from "../utils/catalog";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import Link from "../router/Link";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";
import FeaturedProduct from "../components/FeaturedProduct";
import TrustSection from "../components/TrustSection";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";

export default function Home() {
  useDocumentTitle();
  const { title, subtitle, count } = store.home.products;
  // Le produit mis en avant a sa propre section : on ne le répète pas dans la grille.
  const shown = allProducts.filter((p) => p.id !== store.featuredProductId).slice(0, count);

  return (
    <>
      <Hero />
      <Categories />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </Reveal>
          <ProductGrid products={shown} layout="bento" />
          <div className="section-cta">
            <Link to="/produits" className="btn btn-dark">
              {store.labels.seeAll}
              <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProduct />
      <TrustSection />
    </>
  );
}
