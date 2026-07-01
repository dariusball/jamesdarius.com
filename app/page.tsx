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
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ivory px-4 py-20">
      {/* Uniform ivory cover — kept flat so the revealed text's ivory backing
          blends seamlessly into the page background. */}

      <h1 className="sr-only">
        {site.firstName} {site.middleName} {site.lastName} — {site.role}
      </h1>

      {/* Tight spacing stacks the three words into a single graphic. */}
      <div className="flex w-full max-w-5xl flex-col items-center gap-0">
        {/* "James" — authentic handwriting, warm ember */}
        <NameReveal
          word="James"
          subtitle="James, also my Dad's middle name, click for more of my life story."
          href="/history"
          wordClassName="font-hand text-ember-600 text-[13vw] sm:text-[9vw] lg:text-[7rem] -translate-x-[34%] translate-y-[14%]"
        />
        {/* "DARIUS" — decorative, regal capitals in Persian lapis */}
        <NameReveal
          word="DARIUS"
          subtitle="Darius, also a Persian King, click for more of my perspectives."
          href="/musings"
          wordClassName="font-elegant text-lapis-600 text-[15vw] font-bold sm:text-[11vw] lg:text-[8.5rem]"
        />
        {/* "Ball" — bubble letters, outline only, in deep crimson */}
        <NameReveal
          word="Ball"
          subtitle="Ball, also the shape of the planet I am working to sustain, click for more about my services."
          href="/offerings"
          wordClassName="font-bubble text-outline [--oc:#7d2b1d] text-[22vw] font-extrabold sm:text-[15vw] lg:text-[12rem]"
        />
      </div>

      {/* Light hint that the names are interactive. */}
      <p className="mt-10 text-center font-display text-lg font-light italic text-sand-400 sm:mt-12">
        click a name to reveal more…
      </p>
    </main>
  );
}
