import type { ContentItem } from "@/types";

/**
 * Public-facing content for the Musings page grid: writing, talks, media, and
 * video.
 *
 * These entries were gathered from public sources (GreenBiz / Trellis,
 * BuildingGreen, the National Building Museum, VERGE, The AFIRE Podcast). This
 * is the CMS-friendly source of truth — add a new object here and it appears in
 * the filterable grid automatically.
 *
 * Field guide: categories ("writing" | "talk" | "media" | "video"); href
 * (external link); embedUrl (YouTube/Vimeo *embed* URL — renders inline for
 * videos); date ("YYYY-MM-DD", used for sorting + display); featured (larger).
 */
export const contentItems: ContentItem[] = [
  {
    id: "verge-over-unders",
    title: "VERGE Over/Unders: Energy and Buildings",
    categories: ["video", "talk"],
    description:
      "A fast-paced take on the most over- and under-hyped trends in energy and buildings, from the VERGE stage with GreenBiz analyst Sarah Golden.",
    source: "GreenBiz · VERGE",
    date: "2023-10-24",
    embedUrl: "https://www.youtube.com/embed/thzUm5U4uVQ",
    featured: true,
  },
  {
    id: "building-systems-change",
    title: "Building systems and how to change them",
    categories: ["writing"],
    description:
      "Why transforming the built environment is a question of systems — culture, paradigm, and narrative — not just technology or policy.",
    source: "Trellis (GreenBiz)",
    href: "https://trellis.net/article/building-systems-and-how-change-them/",
  },
  {
    id: "commercial-milestone-2024",
    title: "The commercial building industry faces a milestone year in 2024",
    categories: ["writing"],
    description:
      "The policy, market, and technology forces converging on commercial real estate — and what they mean for decarbonization.",
    source: "Trellis (GreenBiz)",
    date: "2024-01-11",
    href: "https://trellis.net/article/commercial-building-industry-faces-milestone-year-2024/",
  },
  {
    id: "declaration-de-chaillot",
    title:
      "Exploring the first international declaration on pathways to building decarbonization",
    categories: ["writing"],
    description:
      "Inside the Buildings and Climate Global Forum in Paris, where representatives from 70 countries signed the Déclaration de Chaillot.",
    source: "Trellis (GreenBiz)",
    date: "2024-03-08",
    href: "https://trellis.net/article/exploring-first-international-declaration-pathways-building-decarbonization/",
  },
  {
    id: "most-valuable-guides-2024",
    title: "The most valuable guides to building decarbonization in 2024",
    categories: ["writing"],
    description:
      "A curated shortlist of the resources most worth your time for decarbonizing the built environment.",
    source: "Trellis (GreenBiz)",
    date: "2023-12-07",
    href: "https://trellis.net/article/most-valuable-guides-building-decarbonization-2024/",
  },
  {
    id: "greenbuild-themes",
    title: "These themes are the talk of green building professionals",
    categories: ["writing"],
    description:
      "Dispatches from Greenbuild — one of the largest gatherings of green building professionals — on what the field is really talking about.",
    source: "Trellis (GreenBiz)",
    date: "2023-11-01",
    href: "https://trellis.net/article/these-themes-are-talk-green-building-professionals/",
  },
  {
    id: "doe-regional-incubators",
    title: "DOE awards $4 million to build regional energy incubators",
    categories: ["writing"],
    description:
      "How federal investment is seeding regional capacity to accelerate the clean-energy transition in buildings.",
    source: "Trellis (GreenBiz)",
    href: "https://trellis.net/article/doe-awards-4-million-build-regional-energy-incubators/",
  },
  {
    id: "dear-buildings",
    title: "Dear buildings, I love you, you're not perfect, please change",
    categories: ["writing"],
    description:
      "A personal essay — a love letter to the built world and a plea for the evolution of our craft.",
    source: "LinkedIn",
    href: "https://www.linkedin.com/pulse/dear-buildings-i-love-you-youre-perfect-please-change-ball",
  },
  {
    id: "future-fridays-resilience",
    title: "Future Fridays: Cities as Centers of Resilience",
    categories: ["talk"],
    description:
      "Hosting the National Building Museum's Future Cities series, convening experts on building vibrant, resilient cities.",
    source: "National Building Museum",
    href: "https://nbm.org/event/future-fridays-cities-as-centers-of-resilience/",
  },
  {
    id: "afire-meaning-of-buildings",
    title: "Future City: The Meaning of Buildings",
    categories: ["media"],
    description:
      "A conversation on the past, present, and future of the structures we live and work in every day.",
    source: "The AFIRE Podcast",
    href: "https://open.spotify.com/episode/6czjHcqZxsqGWeE3MOJOgm",
  },
  {
    id: "impact-speaker",
    title: "Speaker — Sustainability, Travel & Tourism",
    categories: ["talk"],
    description:
      "Featured speaker bringing a systems view of sustainability and the built environment to new audiences.",
    source: "Impact",
    href: "http://impactnational.ca/speaker/james-darius-ball/",
  },
];
