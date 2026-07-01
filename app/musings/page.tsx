import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";
import FlameMark from "@/components/FlameMark";
import ContentGrid from "@/components/ContentGrid";
import { contentItems } from "@/content/contentItems";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Musings",
  description:
    "On being Zoroastrian, the perspectives that shape my work, and a collection of my public-facing writing, talks, and media.",
  path: "/musings",
});

/**
 * Musings — linked from "DARIUS" on the landing page.
 *
 * Two halves:
 *  (a) Zoroastrian identity, conversion story, and personal perspectives —
 *      structured here with placeholder TODO copy to be written separately.
 *  (b) A filterable grid of public-facing content (writing, talks, media,
 *      video), sourced from content/contentItems.ts.
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
        lead="The perspectives I carry — Zoroastrian faith, a systems view of the world, and a belief that culture is what truly changes a system."
      />

      {/* ── (a) Perspectives / Zoroastrian identity ───────────────────────── */}
      <section
        aria-labelledby="perspectives-heading"
        className="container-prose mt-8"
      >
        <div className="flex items-center gap-3">
          <FlameMark className="h-7 w-7 text-ember-500" />
          <h2
            id="perspectives-heading"
            className="font-display text-2xl font-semibold tracking-tight text-sand-900 sm:text-3xl"
          >
            Perspectives &amp; faith
          </h2>
        </div>

        {/* Placeholder structure — replace each block with the developed copy. */}
        <div className="mt-8 space-y-12">
          <FadeIn>
            <article>
              <h3 className="font-display text-xl text-lapis-700">
                Becoming Zoroastrian
              </h3>
              <p className="mt-3 text-lg leading-loose text-sand-700">
                TODO: The conversion story — claiming the heritage I grew up
                adjacent to but never inside of, and what the trip to India
                opened up. (Copy to be developed separately.)
              </p>
            </article>
          </FadeIn>

          <FadeIn>
            <article>
              <h3 className="font-display text-xl text-lapis-700">
                Good thoughts, good words, good deeds
              </h3>
              <p className="mt-3 text-lg leading-loose text-sand-700">
                TODO: What the central Zoroastrian teaching means to me and how
                it shows up in daily life, meditation, and work. (Copy to be
                developed separately.)
              </p>
            </article>
          </FadeIn>

          <FadeIn>
            <article>
              <h3 className="font-display text-xl text-lapis-700">
                A systems view of the world
              </h3>
              <p className="mt-3 text-lg leading-loose text-sand-700">
                TODO: Perspectives on culture, paradigm, and narrative as the
                real levers of change — and other viewpoints I hold. (Copy to be
                developed separately.)
              </p>
            </article>
          </FadeIn>
        </div>
      </section>

      {/* ── (b) Public-facing content grid ────────────────────────────────── */}
      <section
        aria-labelledby="content-heading"
        className="container-x mt-24 border-t border-sand-200 pt-16"
      >
        <h2
          id="content-heading"
          className="font-display text-3xl font-semibold tracking-tight text-sand-900 sm:text-4xl"
        >
          Writing, talks &amp; media
        </h2>
        <p className="mt-3 max-w-2xl text-sand-600">
          A growing collection of public-facing work. Filter by type — articles,
          talks, media appearances, and video.
        </p>

        <div className="mt-10">
          <ContentGrid items={contentItems} />
        </div>
      </section>
    </PageShell>
  );
}
