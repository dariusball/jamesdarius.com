import type { ResumeEntry } from "@/types";

/**
 * Career history for the History-page résumé section.
 *
 * Populated from publicly available sources (National Building Museum, GreenBiz/
 * Trellis, Yale CBEY, BuildingGreen). A few roles list only what's public —
 * exact dates and titles for the residential-energy consulting years
 * (Energy Inspectors, Cadmus, MaGrann, Juno) should be confirmed against the
 * LinkedIn profile. Ordered most-recent-first, education last.
 */
export const resume: ResumeEntry[] = [
  {
    id: "nbm",
    organization: "National Building Museum",
    role: "Director of Future Cities",
    period: "Present",
    location: "Washington, D.C.",
    bullets: [
      "Leads the Future Cities initiative, advancing the built environment as fundamental to human life — our shared habitat.",
      "Hosts “Future Fridays,” the initiative's online series convening leading experts and practitioners on building vibrant, resilient cities.",
    ],
  },
  {
    id: "greenbiz",
    organization: "GreenBiz Group (now Trellis)",
    role: "Director, Buildings",
    period: "",
    bullets: [
      "Led the Buildings program — including the Buildings track at the VERGE conference — accelerating the just transition to a clean economy.",
      "Author on building decarbonization for GreenBiz / Trellis and BuildingGreen.",
      "Two decades pushing the industry toward healthy, carbon-free, beautiful spaces for all people.",
    ],
  },
  {
    id: "juno",
    organization: "Juno Residential",
    role: "Sustainability leadership",
    period: "",
    bullets: [
      "Sustainability strategy for residential development.",
      "TODO: Confirm exact title, dates, and highlights from LinkedIn.",
    ],
  },
  {
    id: "magrann",
    organization: "MaGrann Associates",
    role: "Green building & residential energy consulting",
    period: "",
    bullets: [
      "Consulting on high-performance and energy-efficient residential buildings.",
      "TODO: Confirm exact title, dates, and highlights from LinkedIn.",
    ],
  },
  {
    id: "cadmus",
    organization: "The Cadmus Group",
    role: "Energy & sustainability consulting",
    period: "",
    bullets: [
      "Sustainability and energy consulting work.",
      "TODO: Confirm exact title, dates, and highlights from LinkedIn.",
    ],
  },
  {
    id: "energy-inspectors",
    organization: "Energy Inspectors",
    role: "Residential energy",
    period: "",
    bullets: [
      "Residential energy rating / inspection work.",
      "TODO: Confirm exact title, dates, and highlights from LinkedIn.",
    ],
  },
  {
    id: "habitat",
    organization: "Habitat for Humanity, Central Arizona (AmeriCorps)",
    role: "Sustainability",
    period: "",
    location: "Arizona",
    bullets: [
      "Built the first LEED Platinum Habitat for Humanity home in the United States.",
      "Cutting-edge sustainability work that launched a career centered on better habitats for people to thrive in.",
    ],
  },
  {
    id: "yale",
    organization: "Yale School of the Environment",
    role: "Master of Environmental Management (MEM)",
    period: "Education",
    location: "New Haven, CT",
    bullets: [
      "Focused on systems science — the insight that culture and paradigm, not policy or economics alone, ultimately change a system.",
      "Filled gaps in writing and statistics; freedom to experiment, research, and learn.",
    ],
  },
  {
    id: "pratt",
    organization: "Pratt Institute",
    role: "Bachelor of Industrial Design",
    period: "Education",
    location: "Brooklyn, NY",
    bullets: [
      "Discovered industrial design — the realization that everything around us results from someone's decisions about how it should look, work, and feel.",
    ],
  },
  {
    id: "service",
    organization: "Leadership & Service",
    role: "Selected volunteer roles",
    period: "Ongoing",
    bullets: [
      "Chair, Net-Zero Energy Coalition.",
      "Advisory Board, DC's Building Innovation Hub.",
      "Environmental Committee, City of Hyattsville, MD.",
    ],
  },
];
