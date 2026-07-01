import type { Metadata } from "next";
import NameReveal from "@/components/NameReveal";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `${site.name} — ${site.role}`,
  description: site.description,
  path: "/",
});

/**
 * Landing page — deliberately minimal.
 *
 * Just the name, large and centered, each word independently interactive via
 * <NameReveal />. No hero image, no nav clutter, no marketing copy. A small,
 * quiet contact link sits at the bottom so visitors are never stranded.
 */
export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-paper px-4 py-20">
      {/* Cream cover matching the name artwork's background, so the stacked
          images blend into one continuous graphic. */}

      <h1 className="sr-only">
        {site.firstName} {site.middleName} {site.lastName} — {site.role}
      </h1>

      {/* The three name images stacked directly into a single graphic. */}
      <div className="flex w-full max-w-2xl flex-col items-center">
        {/* "James" — handwriting artwork */}
        <NameReveal
          image="/name/james.png"
          imageWidth={1275}
          imageHeight={592}
          imageClassName="w-[70%] sm:w-[66%]"
          word="James"
          subtitle="James, also my Dad's middle name, click for more of my life story."
          href="/history"
        />
        {/* "DARIUS" — decorative artwork */}
        <NameReveal
          image="/name/darius.png"
          imageWidth={1684}
          imageHeight={584}
          imageClassName="-mt-[3%] w-[92%] sm:w-[88%]"
          word="DARIUS"
          subtitle="Darius, also a Persian King, click for more of my perspectives."
          href="/musings"
        />
        {/* "Ball" — bubble artwork */}
        <NameReveal
          image="/name/ball.png"
          imageWidth={1053}
          imageHeight={526}
          imageClassName="-mt-[2%] w-[56%] sm:w-[54%]"
          word="Ball"
          subtitle="Ball, also the shape of the planet I am working to sustain, click for more about my services."
          href="/offerings"
        />
      </div>

      {/* Light hint that the names are interactive. */}
      <p className="mt-10 text-center font-display text-lg font-light italic text-sand-400 sm:mt-12">
        click a name to reveal more…
      </p>
    </main>
  );
}
