import { store } from "../data/store";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import Link from "../router/Link";

export default function NotFound() {
  const t = store.notFound;
  useDocumentTitle(t.title);

  return (
    <div className="page">
      <div className="container">
        <div className="empty-card" role="status">
          <h1 className="empty-title">{t.title}</h1>
          <p>{t.text}</p>
          <Link to="/" className="btn btn-dark">{t.cta}</Link>
        </div>
      </div>
    </div>
  );
}
