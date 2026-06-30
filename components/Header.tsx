import Link from "next/link";
import { nav, site } from "@/lib/site";
import FlameMark from "./FlameMark";

/**
 * Site header for the interior (non-landing) pages. The landing page is kept
 * deliberately chrome-free, so it does NOT render this. Here a quiet wordmark
 * links home and the four destinations sit to the right.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-sand-200/70 bg-ivory/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-sand-900"
        >
          <FlameMark className="h-5 w-5 text-ember-500" />
          <span>
            James <span className="text-ember-600">Darius</span> Ball
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-5 sm:gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-sand-600 transition-colors hover:text-ember-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
