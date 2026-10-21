import { categories, products } from "../data/products";

/** "Nova X Pro" → "nova-x-pro" */
export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Produits prêts à l'emploi : adresse de page et textes alternatifs ajoutés. */
export const allProducts = products.map((p) => ({
  ...p,
  slug: slugify(p.name),
  images: p.images.map((src, i) => ({ src, alt: `${p.name}, vue ${i + 1}` })),
}));

export const productPath = (product) => `/produit/${product.slug}`;
export const categorySlug = (category) => slugify(category.name);

export const getProductBySlug = (slug) => allProducts.find((p) => p.slug === slug);
export const getProductById = (id) => allProducts.find((p) => p.id === id);
export const countInCategory = (category) =>
  allProducts.filter((p) => p.category === category.name).length;

export { categories };
