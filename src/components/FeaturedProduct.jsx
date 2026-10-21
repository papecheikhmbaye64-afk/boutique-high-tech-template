import { store } from "../data/store";
import { allProducts, getProductById } from "../utils/catalog";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import Reveal from "./Reveal";

export default function FeaturedProduct() {
  const product = getProductById(store.featuredProductId) ?? allProducts[0];
  const { title, subtitle } = store.home.featured;

  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Reveal>
        <Reveal className="hero-card">
          <ProductGallery images={product.images} />
          <ProductInfo product={product} mode="featured" />
        </Reveal>
      </div>
    </section>
  );
}
