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
 * • Touch: the FIRST tap reveals the text; a SECOND tap navigates (the copy
 *   itself says "click for more…").
 *
 * • Keyboard: focusing reveals; Enter navigates.
 *
 * The word and its text share one grid cell, and the text is kept short enough
 * to fit within the word's height — so the three words can stack tightly like a
 * single graphic with no layout shift when a word is revealed.
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

  // The revealed copy opens with the name ("James, …"); bold that leading word.
  const commaIndex = subtitle.indexOf(",");
  const leadWord = commaIndex >= 0 ? subtitle.slice(0, commaIndex) : subtitle;
  const restOfSubtitle = commaIndex >= 0 ? subtitle.slice(commaIndex) : "";

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
      aria-label={subtitle}
      className="group block rounded-sm text-center outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
    >
      {/* Both layers share one grid cell so the text appears exactly where the
          word was — a true in-place swap with no reserved extra height. */}
      <span className="grid place-items-center">
        {/* The word */}
        <span
          aria-hidden="true"
          className={`col-start-1 row-start-1 whitespace-nowrap leading-[0.92] transition-opacity duration-300 ${wordClassName} ${
            revealed ? "opacity-0" : "opacity-100"
          }`}
        >
          {word}
        </span>

        {/* Its text, revealed in place — kept short so it fits the word height. */}
        <span
          aria-hidden="true"
          className={`col-start-1 row-start-1 mx-auto max-w-md px-4 font-display text-base font-medium leading-snug text-sand-800 transition-opacity duration-300 sm:text-lg ${
            revealed ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-bold text-sand-900">{leadWord}</span>
          {restOfSubtitle}
        </span>
      </span>
    </Link>
  );
}
