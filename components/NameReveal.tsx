"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * NameReveal — the landing-page interaction.
 *
 * One of the three words of the name, each in its own typeface. Behaviour:
 *
 * • Desktop (hover-capable): hovering (or keyboard-focusing) the word REPLACES
 *   it in place with its descriptive text; a click/Enter navigates to `href`.
 *
 * • Mobile / touch (no hover): the FIRST tap replaces the word with its text; a
 *   SECOND tap navigates. The revealed text itself reads "Click for more…", and
 *   a "Continue →" cue is shown, so the next step is never ambiguous.
 *
 * The whole component is a real anchor wrapping the destination, so the link is
 * crawlable for SEO and works without JS.
 */
export default function NameReveal({
  word,
  subtitle,
  href,
  /** Per-word font + size classes (e.g. handwritten / elegant / bubble). */
  wordClassName = "",
}: {
  word: string;
  subtitle: string;
  href: string;
  wordClassName?: string;
}) {
  const [revealed, setRevealed] = useState(false);
  const isTouch = useRef(false);

  // Detect coarse / hover-less pointers once on mount.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    isTouch.current = window.matchMedia("(hover: none)").matches;
  }, []);

  function handleActivate(e: React.MouseEvent) {
    // On touch devices the first tap should reveal, not navigate.
    if (isTouch.current && !revealed) {
      e.preventDefault();
      setRevealed(true);
    }
    // Otherwise the wrapping <Link> handles navigation as normal.
  }

  return (
    <Link
      href={href}
      onClick={handleActivate}
      onMouseEnter={() => !isTouch.current && setRevealed(true)}
      onMouseLeave={() => !isTouch.current && setRevealed(false)}
      onFocus={() => setRevealed(true)}
      onBlur={() => setRevealed(false)}
      aria-label={`${word}. ${subtitle}`}
      className="group block rounded-sm text-center outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-white"
    >
      {/* Both layers occupy the same grid cell so the text appears exactly where
          the word was — a true in-place swap. */}
      <span className="grid min-h-[26vw] place-items-center sm:min-h-[17vw] lg:min-h-[13rem]">
        {/* The word */}
        <span
          aria-hidden="true"
          className={`col-start-1 row-start-1 whitespace-nowrap leading-[0.95] text-black transition-opacity duration-300 ${wordClassName} ${
            revealed ? "opacity-0" : "opacity-100"
          }`}
        >
          {word}
        </span>

        {/* Its text, revealed in place */}
        <span
          aria-hidden="true"
          className={`col-start-1 row-start-1 max-w-xl px-6 text-black transition-opacity duration-300 ${
            revealed ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="block font-sans text-xl font-medium leading-snug sm:text-2xl">
            {subtitle}
          </span>
          <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-semibold uppercase tracking-widest2">
            Continue <span aria-hidden="true">→</span>
          </span>
        </span>
      </span>
    </Link>
  );
}
