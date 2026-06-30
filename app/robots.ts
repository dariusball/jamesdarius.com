import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Generates /robots.txt — allow all, point crawlers at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
