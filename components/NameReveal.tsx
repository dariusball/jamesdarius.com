"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

/**
 * NameReveal — the landing-page interaction.
 *
 * One of the three words of the name. Behaviour:
 *
 * • Desktop (hover-capable): hovering (or keyboard-focusing) the word reveals
 *   its subtitle; a click/Enter navigates to `href`.
 *
 * • Mobile / touch (no hover): the FIRST tap reveals the subtitle; a SECOND tap
 *   on the word navigates. A clear "Continue →" affordance is always shown once
 *   revealed, so the path forward is never ambiguous.
 *
 * The word itself is a real anchor (wrapping the destination) so the link is
 * crawlable for SEO and works without JS; the reveal/tap logic is layered on
 * top and degrades gracefully.
 */
export default function NameReveal({
  word,
  subtitle,
  href,
  /** Accent the middle word ("DARIUS") differently if desired. */
  accent = "ember",
}: {
  word: string;
  subtitle: string;
  href: string;
  accent?: "ember" | "lapis";
}) {
  const router = useRouter();
  const subtitleId = useId();
  const [revealed, setRevealed] = useState(false);
  const isTouch = useRef(false);

  // Detect coarse / hover-less pointers once on mount.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    isTouch.current = window.matchMedia("(hover: none)").matches;
  }, []);

  const accentText = accent === "lapis" ? "text-lapis-600" : "text-ember-600";
  const accentUnderline =
    accent === "lapis" ? "bg-lapis-400" : "bg-ember-400";

  function handleActivate(e: React.MouseEvent) {
    // On touch devices the first tap should reveal, not navigate.
    if (isTouch.current && !revealed) {
      e.preventDefault();
      setRevealed(true);
    }
    // Otherwise the wrapping <Link> handles navigation as normal.
  }

  return (
    <div className="group flex flex-col items-center text-center">
      <Link
        href={href}
        onClick={handleActivate}
        onMouseEnter={() => !isTouch.current && setRevealed(true)}
        onMouseLeave={() => !isTouch.current && setRevealed(false)}
        onFocus={() => setRevealed(true)}
        onBlur={() => setRevealed(false)}
        aria-describedby={subtitleId}
        className="relative inline-block rounded-sm font-display text-[15vw] font-semibold leading-[0.95] tracking-tight outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-4 focus-visible:ring-offset-ivory sm:text-[11vw] lg:text-[9rem]"
      >
        {/* Color shifts to the accent on hover/focus/reveal. `accentText` is one
            of the static literals below so Tailwind's JIT picks it up. */}
        <span
          className={`transition-colors duration-300 ${
            revealed ? accentText : "text-sand-900"
          }`}
        >
          {word}
        </span>
        {/* Animated underline that grows on hover/reveal. */}
        <span
          aria-hidden="true"
          className={`absolute -bottom-1 left-1/2 h-[3px] -translate-x-1/2 rounded-full ${accentUnderline} transition-all duration-300 ${
            revealed ? "w-2/3 opacity-100" : "w-0 opacity-0"
          }`}
        />
      </Link>

      {/* Reveal region. Reserves no fixed height on small screens to keep the
          page calm; transitions opacity + height via max-height. */}
      <div
        id={subtitleId}
        className={`overflow-hidden transition-all duration-300 ease-out ${
          revealed ? "mt-5 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"
        }`}
      >
        <p className="mx-auto max-w-md px-6 text-base leading-relaxed text-sand-600 sm:text-lg">
          {subtitle}
        </p>
        <Link
          href={href}
          className={`mt-3 inline-flex items-center gap-1.5 text-sm font-semibold ${accentText} transition-opacity hover:opacity-80`}
        >
          Continue
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
