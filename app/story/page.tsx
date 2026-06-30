import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import VideoEmbed from "@/components/VideoEmbed";
import StoryNarrative from "@/components/StoryNarrative";
import ResumeSection from "@/components/ResumeSection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "My Story",
  description:
    "From a red brick schoolhouse in West Caldwell to Pratt, Habitat for Humanity, Yale, and the National Building Museum — the life story of James Darius Ball.",
  path: "/story",
});

/**
 * My Story — linked from "James" on the landing page.
 *
 * A video slot at the top (to be recorded later), the full approved narrative
 * below it, and a formal résumé section to close.
 */
export default function StoryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="My Story"
        title={
          <>
            James.
            <span className="block text-sand-500">
              My first name, and my Dad&apos;s middle name.
            </span>
          </>
        }
        lead="A charmed childhood, a winding path through design and sustainability, and a question I keep returning to — how do we build a world where people thrive?"
      />

      {/* Video slot. Source: https://www.youtube.com/watch?v=HZQQnCjvVaY&t=10s
          (embed form, starting at 0:10). */}
      <div className="container-x mt-4">
        <VideoEmbed
          src="https://www.youtube.com/embed/HZQQnCjvVaY?start=10"
          title="James Darius Ball — My Story"
        />
      </div>

      <div className="mt-16 sm:mt-20">
        <StoryNarrative />
      </div>

      <ResumeSection />
    </PageShell>
  );
}
