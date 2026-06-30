import type { Metadata } from "next";
import { site } from "./site";

/**
 * Build per-page metadata with sensible Open Graph + Twitter defaults.
 *
 * LinkedIn (and most social platforms) read Open Graph tags, so every page
 * gets a title, description, canonical URL, and an OG image. Pass a page-
 * specific `image` to override the site default for richer share cards.
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/story". */
  path: string;
  /** Optional OG image path relative to site root. */
  image?: string;
}): Metadata {
  const { title, description, path } = opts;
  const url = new URL(path, site.url).toString();
  const image = opts.image ?? site.ogImage;
  // Title shown verbatim on the homepage; suffixed with the name elsewhere.
  const fullTitle = path === "/" ? title : `${title} — ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
