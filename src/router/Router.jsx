import { useCallback, useEffect, useMemo, useState } from "react";
import { BASE, RouterContext, stripBase } from "./context";

const read = () => ({ pathname: stripBase(window.location.pathname), search: window.location.search });

/** Mini routeur (History API) : évite une dépendance supplémentaire. */
export default function Router({ children }) {
  const [location, setLocation] = useState(read);

  useEffect(() => {
    const onPop = () => setLocation(read());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((to, { replace = false, scroll = true } = {}) => {
    window.history[replace ? "replaceState" : "pushState"](null, "", BASE + to);
    setLocation(read());
    if (scroll) window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const value = useMemo(() => ({ ...location, navigate }), [location, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}
