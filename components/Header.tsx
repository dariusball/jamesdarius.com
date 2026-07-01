import Link from "next/link";
import { nav } from "@/lib/site";
import FlameMark from "./FlameMark";

/**
 * Site header for the interior (non-landing) pages. Kept deliberately clean:
 * the full name is NOT repeated here (it lives on the landing page). A small
 * flame mark links home, and the four destinations sit to the right.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-sand-200/70 bg-ivory/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          className="inline-flex items-center rounded-sm text-ember-500 transition-colors hover:text-ember-600"
        >
          <FlameMark className="h-6 w-6" />
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
