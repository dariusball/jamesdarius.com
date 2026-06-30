import type { MetadataRoute } from "next";
import { site, nav } from "@/lib/site";

/** Generates /sitemap.xml from the site config + nav. */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...nav.map((n) => n.href)];
  const now = new Date();

  return routes.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
