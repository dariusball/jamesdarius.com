"use client";

import { useRef, useState } from "react";
import Link from "next/link";

/**
 * NameReveal — the landing-page interaction.
 *
 * One of the three words of the name, each in its own typeface. Behaviour:
 *
 * • Mouse: as soon as the pointer moves over the word it is replaced in place
 *   by its descriptive text; a click navigates to `href`.
 *
 * • Touch: the FIRST tap reveals the text; a SECOND tap navigates. The revealed
 *   text reads "Click for more…" and a "Continue →" cue is shown.
 *
 * • Keyboard: focusing reveals; Enter navigates.
 *
 * Hover detection is per-interaction via Pointer Events (reading `pointerType`)
 * rather than a media query, so a mouse works even on hybrid / touchscreen
 * laptops that report `(hover: none)`.
 *
 * The whole component is a real anchor wrapping the destination, so the link is
 * crawlable for SEO and works without JS.
 */
export default function NameReveal({
  word,
  subtitle,
  href,
  /** Per-word font + size classes (e.g. handwriting / decorative / bubble). */
  wordClassName = "",
}: {
  word: string;
  subtitle: string;
  href: string;
  wordClassName?: string;
}) {
  const [revealed, setRevealed] = useState(false);
  // Tracks the most recent pointer type so onClick can tell touch from mouse.
  const lastPointer = useRef<string>("mouse");

  function handleClick(e: React.MouseEvent) {
    // On touch, the first tap reveals instead of navigating.
    if (lastPointer.current !== "mouse" && !revealed) {
      e.preventDefault();
      setRevealed(true);
    }
  }

  return (
    <Link
      href={href}
      onPointerDown={(e) => (lastPointer.current = e.pointerType)}
      onPointerEnter={(e) => e.pointerType === "mouse" && setRevealed(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setRevealed(false)}
      onFocus={() => setRevealed(true)}
      onBlur={() => setRevealed(false)}
      onClick={handleClick}
      aria-label={`${word}. ${subtitle}`}
      className="group block rounded-sm text-center outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
    >
      {/* Both layers occupy the same grid cell so the text appears exactly where
          the word was — a true in-place swap. */}
      <span className="grid min-h-[24vw] place-items-center sm:min-h-[16vw] lg:min-h-[12rem]">
        {/* The word */}
        <span
          aria-hidden="true"
          className={`col-start-1 row-start-1 whitespace-nowrap leading-[0.95] text-sand-900 transition-opacity duration-300 ${wordClassName} ${
            revealed ? "opacity-0" : "opacity-100"
          }`}
        >
          {word}
        </span>

        {/* Its text, revealed in place */}
        <span
          aria-hidden="true"
          className={`col-start-1 row-start-1 max-w-xl px-6 transition-opacity duration-300 ${
            revealed ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="block font-display text-xl font-medium leading-snug text-sand-800 sm:text-2xl">
            {subtitle}
          </span>
          <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm font-semibold uppercase tracking-widest2 text-ember-600">
            Continue <span aria-hidden="true">→</span>
          </span>
        </span>
      </span>
    </Link>
  );
}
