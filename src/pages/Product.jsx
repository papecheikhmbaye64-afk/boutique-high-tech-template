import { store } from "../data/store";
import { allProducts, getProductBySlug } from "../utils/catalog";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import Link from "../router/Link";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductGrid from "../components/ProductGrid";
import TrustSection from "../components/TrustSection";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import NotFound from "./NotFound";

export default function Product({ params }) {
  const product = getProductBySlug(params.slug);
  useDocumentTitle(product?.name);
  if (!product) return <NotFound />;

  // Même catégorie d'abord, puis le reste du catalogue pour compléter.
  const others = allProducts.filter((p) => p.id !== product.id);
  const related = [
    ...others.filter((p) => p.category === product.category),
    ...others.filter((p) => p.category !== product.category),
  ].slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container">
          <nav className="crumbs" aria-label="Fil d'Ariane">
            <Link to="/">{store.labels.home}</Link>
            <Icon name="next" size={14} />
            <Link to="/produits">{store.catalog.title}</Link>
            <Icon name="next" size={14} />
            <span aria-current="page">{product.name}</span>
          </nav>
          <div className="hero-card">
            <ProductGallery key={`gallery-${product.id}`} images={product.images} />
            <ProductInfo key={`info-${product.id}`} product={product} />
          </div>
        </div>
      </section>

      <TrustSection />

      <section className="section related">
        <div className="container">
          <Reveal className="section-head">
            <h2>{store.catalog.related}</h2>
          </Reveal>
          <ProductGrid products={related} />
        </div>
      </section>
    </>
  );
}
