import type { Metadata } from "next";
import Link from "next/link";
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
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Warm cover: a faint ember glow instead of a hero image — calm and
          confident, not stark. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 40%, rgba(217,142,43,0.12), rgba(250,247,240,0) 70%)",
        }}
      />

      <h1 className="sr-only">
        {site.firstName} {site.middleName} {site.lastName} — {site.role}
      </h1>

      <div className="flex w-full max-w-5xl flex-col items-center gap-6 sm:gap-8">
        {/* "James" — authentic handwriting, smaller */}
        <NameReveal
          word="James"
          subtitle="My first name and my Dad's middle name… Click for more of my life story."
          href="/story"
          wordClassName="font-hand text-[13vw] sm:text-[9vw] lg:text-[7rem]"
        />
        {/* "DARIUS" — decorative, regal capitals */}
        <NameReveal
          word="DARIUS"
          subtitle="My middle name and also a Persian king… Click to learn about being a Zoroastrian and other perspectives I have."
          href="/darius"
          wordClassName="font-elegant text-[15vw] font-bold sm:text-[11vw] lg:text-[8.5rem]"
        />
        {/* "Ball" — bubble letters, outline only */}
        <NameReveal
          word="Ball"
          subtitle="My last name and also the shape of planet Earth… Click to learn about my professional work."
          href="/services"
          wordClassName="font-bubble text-outline text-[22vw] font-extrabold sm:text-[15vw] lg:text-[12rem]"
        />
      </div>

      {/* Quiet footer affordance — present but unobtrusive. */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Link
          href="/contact"
          className="text-sm font-medium text-sand-500 underline-offset-4 transition-colors hover:text-ember-600 hover:underline"
        >
          Be in touch
        </Link>
      </div>
    </main>
  );
}
