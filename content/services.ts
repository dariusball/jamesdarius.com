import type { Service } from "@/types";

/**
 * The four service offerings on the Services page.
 *
 * Descriptions and highlights are placeholder TODO copy — replace with the
 * finalized text once drafted. Order here is the order rendered on the page.
 */
export const services: Service[] = [
  {
    id: "speaking",
    name: "Public Speaking",
    tagline: "Keynotes and talks on the future of our built world.",
    description:
      "TODO: Description of public speaking offering — topics, formats, and the message about a culture of building.",
    highlights: [
      "TODO: Signature talk topic",
      "TODO: Audience / format",
      "TODO: What attendees take away",
    ],
  },
  {
    id: "facilitation",
    name: "Facilitation & MC",
    tagline: "Meeting and event facilitation, and MC work.",
    description:
      "TODO: Description of facilitation and MC services — workshops, convenings, panels, and live events.",
    highlights: [
      "TODO: Facilitation format",
      "TODO: MC / hosting",
      "TODO: Outcome you can expect",
    ],
  },
  {
    id: "consulting",
    name: "Sustainability Consulting",
    tagline: "Strategy and guidance for a healthier built environment.",
    description:
      "TODO: Description of sustainability consulting — who it's for and the kinds of engagements offered.",
    highlights: [
      "TODO: Engagement type",
      "TODO: Areas of expertise",
      "TODO: Deliverables",
    ],
  },
  {
    id: "yoga",
    name: "Yoga & Meditation Support",
    tagline: "Mentoring and spiritual support — private or group.",
    description:
      "TODO: Description of yoga and meditation support — private sessions, group offerings, and mentoring.",
    highlights: [
      "TODO: Private sessions",
      "TODO: Group offerings",
      "TODO: Approach / philosophy",
    ],
  },
];
