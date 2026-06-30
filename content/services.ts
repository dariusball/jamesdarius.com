import type { Service } from "@/types";

/**
 * The four service offerings on the Services page.
 *
 * NOTE: This is draft copy written as a sensible first pass ("best practices"
 * for each offering) — review and replace with your final wording. Order here
 * is the order rendered on the page.
 */
export const services: Service[] = [
  {
    id: "speaking",
    name: "Public Speaking",
    tagline: "Keynotes and talks on the future of our built world.",
    description:
      "Keynotes, conference sessions, and guest lectures that reframe the built environment as our shared habitat. Drawing on his work leading Future Cities at the National Building Museum — and a career spanning design, sustainability, and systems science — James moves audiences from problem to paradigm, blending story, evidence, and a clear call to build a better culture of building. Every talk is tailored to your audience and outcomes.",
    highlights: [
      "Signature keynote — “A Culture of Building”: why culture, not policy alone, changes a system",
      "Audiences: industry conferences, universities, civic and corporate events",
      "Formats: keynote, fireside chat, or guest lecture (30–60 min, in person or virtual)",
    ],
  },
  {
    id: "facilitation",
    name: "Facilitation & MC",
    tagline: "Meeting and event facilitation, and MC work.",
    description:
      "Warm, structured facilitation that helps groups think clearly and decide together — plus polished MC and hosting that keeps an event moving and human. From strategy offsites and stakeholder convenings to panels and multi-day summits, James designs the arc, holds the room, and makes sure every voice is heard and every session lands on a real outcome.",
    highlights: [
      "Workshops & offsites: agenda design, live facilitation, and synthesis",
      "MC / host: conferences, galas, panels, and award ceremonies",
      "Outcomes: clear decisions, shared ownership, and momentum to act",
    ],
  },
  {
    id: "consulting",
    name: "Sustainability Consulting",
    tagline: "Strategy and guidance for a healthier built environment.",
    description:
      "Advisory work for organizations building — or rethinking — how they design, develop, and operate. With two decades across green building, residential energy, and systems-level research (Habitat for Humanity to Yale to the National Building Museum), James helps teams cut through “green” as a marketing term and get to the real evolution of the craft: places that are measurably better for both people and the planet.",
    highlights: [
      "Engagements: strategy sprints, advisory retainers, and program design",
      "Expertise: green & healthy building, residential energy, and sustainability strategy",
      "Deliverables: roadmaps, frameworks, and clear, prioritized next steps",
    ],
  },
  {
    id: "yoga",
    name: "Yoga & Meditation Support",
    tagline: "Mentoring and spiritual support — private or group.",
    description:
      "Certified in India and grounded in a deepening Zoroastrian practice, James offers yoga and meditation support for individuals and groups seeking more peace and presence. Sessions meet you where you are — breath, movement, stillness, and the simple compass of good thoughts, good words, good deeds — whether you want a private practice, a team reset, or ongoing mentorship.",
    highlights: [
      "Private sessions: one-on-one practice and mentoring",
      "Group offerings: team resets, workshops, and retreats",
      "Approach: gentle, practical, and rooted in everyday peace",
    ],
  },
];
