import type { ContentItem } from "@/types";

/**
 * Public-facing content for the Darius page grid: writing, talks, media
 * appearances, and videos.
 *
 * This is the CMS-friendly source of truth — add a new object here and it
 * appears in the filterable grid automatically. No layout code needs to change.
 *
 * Field guide:
 *  - categories: one or more of "writing" | "talk" | "media" | "video"
 *  - href:       external link to the piece (article, recording, etc.)
 *  - embedUrl:   for videos, a YouTube/Vimeo *embed* URL — renders inline
 *  - date:       ISO "YYYY-MM-DD" (used for sorting + display)
 *  - featured:   render larger / first
 *
 * The entries below are illustrative placeholders (marked TODO) so the grid is
 * populated during design. Replace them with real items.
 */
export const contentItems: ContentItem[] = [
  {
    id: "todo-feature-talk",
    title: "TODO: Featured talk title",
    categories: ["talk", "video"],
    description:
      "TODO: Short description of this talk. Replace embedUrl with a real YouTube/Vimeo embed link to play it inline.",
    source: "TODO: Venue",
    date: "2025-01-01",
    embedUrl: "", // e.g. "https://www.youtube.com/embed/VIDEO_ID"
    featured: true,
  },
  {
    id: "todo-greenbiz-article",
    title: "TODO: Article headline",
    categories: ["writing"],
    description:
      "TODO: One- or two-sentence excerpt summarizing the piece.",
    source: "GreenBiz",
    date: "2024-09-01",
    href: "#",
  },
  {
    id: "todo-media-appearance",
    title: "TODO: Media appearance / interview",
    categories: ["media"],
    description:
      "TODO: Describe the interview or appearance and where it ran.",
    source: "TODO: Outlet",
    date: "2024-06-01",
    href: "#",
  },
  {
    id: "todo-essay",
    title: "TODO: Essay on the culture of building",
    categories: ["writing"],
    description:
      "TODO: Excerpt — the built environment as our shared habitat.",
    source: "TODO: Publication",
    date: "2024-03-01",
    href: "#",
  },
  {
    id: "todo-panel",
    title: "TODO: Panel / fireside chat",
    categories: ["talk"],
    description: "TODO: Describe the session and the audience.",
    source: "TODO: Conference",
    date: "2023-11-01",
    href: "#",
  },
];
