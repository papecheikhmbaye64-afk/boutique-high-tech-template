const PATHS = {
  bag: "M6 8h12l-1 12H7zM9 8V7a3 3 0 016 0v1",
  search: "M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4",
  trash: "M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6",
  arrow: "M5 12h14M13 6l6 6-6 6",
  check: "M5 13l4 4L19 7",
  prev: "M15 18l-6-6 6-6",
  next: "M9 18l6-6-6-6",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  close: "M6 6l12 12M18 6L6 18",
  expand: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5",
  play: "M8 5v14l11-7z",
  pause: "M8 5v14M16 5v14",
  alert: "M12 8v5M12 16.5v.5M10.3 3.9L2.4 18a2 2 0 001.7 3h15.8a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z",
  truck: "M3 6h11v10H3zM14 9h4l3 3v4h-7M7.5 19.5a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6zM17.5 19.5a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
  refresh: "M20 11a8 8 0 00-14.9-3M4 5v4h4M4 13a8 8 0 0014.9 3M20 19v-4h-4",
  headset: "M4 14v-2a8 8 0 0116 0v2M4 14h3v5H4zM17 14h3v5h-3zM20 19c0 1.5-2 2-5 2",
};

export default function Icon({ name, size = 20, filled = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
