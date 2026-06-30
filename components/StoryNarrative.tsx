import { storyParagraphs } from "@/content/storyParagraphs";
import FadeIn from "./FadeIn";

/**
 * Renders the approved life-story narrative as clean paragraph blocks with
 * generous whitespace. The first paragraph is given a larger "lead" treatment;
 * the rest read as comfortable long-form prose.
 */
export default function StoryNarrative() {
  return (
    <div className="container-prose">
      <div className="space-y-7">
        {storyParagraphs.map((paragraph, i) => (
          <FadeIn key={i} delay={i === 0 ? 0 : 0.02}>
            <p
              className={
                i === 0
                  ? "font-display text-xl leading-relaxed text-sand-800 sm:text-2xl"
                  : "text-lg leading-loose text-sand-700"
              }
            >
              {paragraph}
            </p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
