import { BASE, useRouter } from "./context";

/** Lien interne : change de page sans rechargement. */
export default function Link({ to, onClick, children, ...rest }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={BASE + to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
