import Link from "next/link";
import { nav, site } from "@/lib/site";

/** Site footer for interior pages — quiet links, contact, and the Zoroastrian motto. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-sand-200 bg-sand-50">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="font-display text-xl font-semibold text-sand-900">
            James <span className="text-ember-600">Darius</span> Ball
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-sand-600">
            {site.role}. Building a culture that treats the built environment as
            our shared habitat.
          </p>
          <p className="mt-4 font-display text-sm italic text-lapis-600">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          <p className="mb-1 font-semibold text-sand-900">Explore</p>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sand-600 transition-colors hover:text-ember-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm">
          <p className="mb-1 font-semibold text-sand-900">Connect</p>
          <a
            href={`mailto:${site.email}`}
            className="text-sand-600 transition-colors hover:text-ember-600"
          >
            {site.email}
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sand-600 transition-colors hover:text-ember-600"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="container-x flex flex-col gap-2 border-t border-sand-200 py-6 text-xs text-sand-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
