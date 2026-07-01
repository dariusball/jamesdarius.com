import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import ContentGrid from "@/components/ContentGrid";
import { contentItems } from "@/content/contentItems";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Musings",
  description:
    "A collection of James Darius Ball's public-facing writing, talks, media, and video on the built environment and sustainability.",
  path: "/musings",
});

/**
 * Musings — linked from "DARIUS" on the landing page.
 *
 * A filterable grid of public-facing content (writing, talks, media, video),
 * sourced from content/contentItems.ts. (A longer-form perspectives / faith
 * section can be added above the grid later once that copy is written.)
 */
export default function MusingsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Musings"
        title={
          <>
            Darius.
            <span className="block text-lapis-600">
              My middle name, and a Persian king.
            </span>
          </>
        }
        lead="Writing, talks, media, and video on the built environment, sustainability, and the perspectives that shape my work. Filter by type below."
      />

      <section aria-labelledby="content-heading" className="container-x mt-6">
        <h2 id="content-heading" className="sr-only">
          Writing, talks &amp; media
        </h2>
        <ContentGrid items={contentItems} />
      </section>
    </PageShell>
  );
}
