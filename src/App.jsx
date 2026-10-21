import { matchRoute, useRouter } from "./router/context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./pages/pages.css";

// Pages du site. Pour en ajouter une : créez le fichier dans src/pages/ puis ajoutez une ligne ici.
const routes = [
  { path: "/", page: Home },
  { path: "/produits", page: Products },
  { path: "/produit/:slug", page: Product },
  { path: "/panier", page: Cart },
  { path: "/commande", page: Checkout },
  { path: "/a-propos", page: About },
];

export default function App() {
  const { pathname } = useRouter();
  const match = matchRoute(routes, pathname);
  const Page = match ? match.route.page : NotFound;

  return (
    <>
      <Header />
      <main>
        <Page params={match?.params ?? {}} />
      </main>
      <Footer />
    </>
  );
}
