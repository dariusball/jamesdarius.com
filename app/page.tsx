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
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4 py-20 text-black">
      <h1 className="sr-only">
        {site.firstName} {site.middleName} {site.lastName} — {site.role}
      </h1>

      <div className="flex w-full max-w-5xl flex-col items-center gap-8 sm:gap-10">
        {/* "James" — handwritten */}
        <NameReveal
          word="James"
          subtitle="My first name and my Dad's middle name… Click for more of my life story."
          href="/story"
          wordClassName="font-hand text-[26vw] font-bold sm:text-[18vw] lg:text-[13rem]"
        />
        {/* "DARIUS" — elegant */}
        <NameReveal
          word="DARIUS"
          subtitle="My middle name and also a Persian king… Click to learn about being a Zoroastrian and other perspectives I have."
          href="/darius"
          wordClassName="font-elegant text-[16vw] font-bold tracking-tight sm:text-[12vw] lg:text-[9.5rem]"
        />
        {/* "Ball" — bubble letters */}
        <NameReveal
          word="Ball"
          subtitle="My last name and also the shape of planet Earth… Click to learn about my professional work."
          href="/services"
          wordClassName="font-bubble text-[20vw] font-extrabold sm:text-[14vw] lg:text-[11rem]"
        />
      </div>

      {/* Quiet footer affordance — present but unobtrusive. */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Link
          href="/contact"
          className="text-sm font-medium text-neutral-400 underline-offset-4 transition-colors hover:text-black hover:underline"
        >
          Be in touch
        </Link>
      </div>
    </main>
  );
}
