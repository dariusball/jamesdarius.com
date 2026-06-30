/**
 * FlameMark — a small, abstract flame glyph used as a subtle Zoroastrian nod
 * (the sacred fire). Kept minimal and geometric so it reads as a refined mark,
 * not a literal illustration. Inherits `currentColor`, so color it via Tailwind
 * text utilities (e.g. `text-ember-500`).
 */
export default function FlameMark({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2c.6 3.2-1.8 4.6-3.2 6.4C7.2 10.4 6.5 12.4 6.5 14a5.5 5.5 0 0 0 11 0c0-2.2-1.1-3.9-2.3-5.2-.4 1-1.2 1.7-2.2 1.9.8-2.3.3-5.6-1-8.7Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M12 13c.3 1.4-.7 2-1.3 2.8-.4.5-.6 1.1-.6 1.7a1.9 1.9 0 0 0 3.8 0c0-.9-.4-1.5-.9-2.1-.4-.5-.8-1-1-2.4Z"
        fill="#faf7f0"
        opacity="0.7"
      />
    </svg>
  );
}
