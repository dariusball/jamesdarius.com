import type {
  ResumeEntry,
  ResumeEducation,
  ResumeAward,
  ResumePublication,
} from "@/types";

/**
 * Full résumé for the History-page résumé section, transcribed from James's
 * résumé. Ordered most-recent-first.
 *
 * The current National Building Museum role (Director of Future Cities) leads
 * the list; the remaining entries are the professional experience as provided.
 */
export const experience: ResumeEntry[] = [
  {
    id: "nbm",
    organization: "National Building Museum",
    location: "Washington, D.C.",
    positions: [
      {
        title: "Director of Future Cities",
        period: "Present",
        bullets: [
          "Leads the Future Cities initiative, advancing the built environment as fundamental to human life — our shared habitat.",
          "Hosts “Future Fridays,” convening leading experts and practitioners on building vibrant, resilient cities.",
        ],
      },
    ],
  },
  {
    id: "greenbiz",
    organization: "GreenBiz Group",
    location: "Remote",
    positions: [
      {
        title: "Director of Buildings",
        period: "May 2023 – June 2024",
        bullets: [
          "Grew GreenBiz's audience with global companies in the building sector as their first subject matter expert on sustainable real estate. Authored a newsletter, curated sessions at conferences, and built strategic partnerships with market-leading companies and non-profits.",
          "Conceived and convened the inaugural Building Product Forum at Circularity, the top circular economy conference in North America.",
        ],
      },
    ],
  },
  {
    id: "juno",
    organization: "Juno Residential",
    location: "Remote",
    positions: [
      {
        title: "Director of Sustainability",
        period: "December 2022 – May 2023",
        bullets: [
          "Updated the company's go-to-market strategy, sales process, and CRM tools to position Juno as a leader in ClimateTech and establish profitable relationships with sustainability-motivated developers.",
          "Managed policy advocacy and brought in federal grants and loan opportunities.",
        ],
      },
      {
        title: "Senior Sustainability Manager",
        period: "April 2022 – December 2022",
        bullets: [
          "Created a best-in-class sustainability program comprising a mass timber, all-electric, and energy-efficient apartment design.",
          "Established standard operating procedures for achieving green certifications, accessing green loans, and attracting ESG investment.",
        ],
      },
    ],
  },
  {
    id: "magrann",
    organization: "MaGrann Associates",
    location: "Washington, D.C.",
    positions: [
      {
        title: "Vice President of Business Development",
        period: "June 2017 – April 2022",
        bullets: [
          "Led the firm's development of MEP engineering, sustainability consulting, and building performance services for building owners, developers, and architects. Surpassed annual sales goals, created new lines of business, and deepened client relationships to grow the firm's market share, geographic reach, and industry reputation.",
          "Restructured and managed the sales and marketing team, improving key performance indicators with reduced staff. Wrote the strategic plan for the firm's growth and implemented internal programs to improve corporate culture, management operating system, recruiting, and diversity.",
        ],
      },
      {
        title: "Regional Manager",
        period: "June 2016 – June 2017",
        bullets: [
          "Managed the National Capital Region's sustainable building services, with notable projects including the winner of the 2019 LEED for Homes Award and the first multifamily net-zero energy project in the region.",
        ],
      },
    ],
  },
  {
    id: "cadmus",
    organization: "The Cadmus Group",
    location: "Arlington, VA",
    positions: [
      {
        title: "Senior Analyst",
        period: "November 2012 – November 2013",
        bullets: [
          "Managed the EPA Indoor airPLUS program and Federal Radon Action Plan accounts. Wrote the technical requirements for the first update of the Indoor airPLUS program.",
          "Facilitated meetings of top federal and NGO leaders and represented the EPA at national conferences and webinars as a speaker and industry expert.",
        ],
      },
    ],
  },
  {
    id: "energy-inspectors",
    organization: "Energy Inspectors",
    location: "Phoenix, AZ",
    positions: [
      {
        title: "Sales Manager",
        period: "February 2011 – October 2012",
        bullets: [
          "Led client relationship management and technical consulting for the region.",
          "Achieved a 50% increase in annual revenue by innovating and developing programs for homebuilders pursuing green certification programs.",
        ],
      },
    ],
  },
  {
    id: "habitat",
    organization: "Habitat for Humanity Central Arizona",
    location: "Phoenix, AZ",
    positions: [
      {
        title: "Sustainable Building Manager",
        period: "February 2008 – January 2011",
        bullets: [
          "Founded the affiliate's green building program — embedding sustainability in operations, homeowner trainings, and development — establishing it as the largest builder of LEED homes in Arizona.",
          "Built the first LEED Platinum Habitat for Humanity home in the US. Designed and built two net-zero energy homes, one built in four days as the Legacy Project for USGBC's Greenbuild 2009.",
        ],
      },
    ],
  },
];

export const education: ResumeEducation[] = [
  {
    id: "cornell",
    school: "Cornell University",
    credential: "Professional Certificate in Commercial Real Estate",
    year: "2020",
  },
  {
    id: "yale",
    school: "Yale University",
    credential: "Master of Environmental Management",
    year: "2016",
  },
  {
    id: "pratt",
    school: "Pratt Institute",
    credential: "Bachelor of Industrial Design, Minor in Art History",
    year: "2006",
  },
];

export const awards: ResumeAward[] = [
  { text: "DC's Building Innovation Hub Advisory Board", year: "Present" },
  {
    text: "Subcommittee Co-Chair, ULI Washington Collaborative Economic Development Council",
    year: "Present",
  },
  {
    text: "Chair, Net Zero Energy Coalition: National Capital Region",
    year: "2018 – 2024",
  },
  {
    text: "Member, Hyattsville Environmental Committee",
    year: "2022 – 2024",
  },
  {
    text: "DC Building Industry Association Liaison to DC's DOEE",
    year: "2022",
  },
  { text: "Yale Sustainability Award", year: "2016" },
  {
    text: "Yale School of Forestry & Environmental Studies Kroon Cup",
    year: "2016",
  },
  { text: "Chair, Yale Built Environment Committee", year: "2015" },
];

export const publications: ResumePublication[] = [
  {
    title:
      "Amazon, Google and Harvard demonstrate the value created by regenerative buildings",
    source: "GreenBiz.com",
    year: "2024",
  },
  {
    title:
      "Sustainable Real Estate: A Game Changer for Institutional Investors",
    source: "GreenFin",
    year: "2024",
  },
  {
    title: "The Regenerative Revolution: Google, Amazon, Harvard",
    source: "Living Future",
    year: "2024",
  },
  { title: "Building Product Forum", source: "Circularity", year: "2024" },
  {
    title:
      "Johnson Controls is bringing sustainability from the basement to the boardroom",
    source: "GreenBiz.com",
    year: "2024",
  },
  {
    title: "Disruptive Perspectives and Pathways",
    source: "GreenBiz",
    year: "2024",
  },
  {
    title: "The most valuable guides to building decarbonization in 2024",
    source: "GreenBiz.com",
    year: "2023",
  },
  { title: "Live Stream Sidebar Host", source: "VERGE", year: "2023" },
  {
    title: "These themes are the talk of green building professionals",
    source: "GreenBiz.com",
    year: "2023",
  },
  {
    title:
      "As sales of heat pumps grow it's critical to deploy them properly",
    source: "GreenBiz.com",
    year: "2023",
  },
  {
    title: "A cheat sheet for managing refrigerants",
    source: "GreenBiz.com",
    year: "2023",
  },
  {
    title: "Nature-Based Housing",
    source: "Interstate Commission on the Potomac River Basin",
    year: "2022",
  },
  {
    title: "Health in Resilient Housing",
    source: "AIADC's DesignDC",
    year: "2021",
  },
  {
    title:
      "DC's Building Energy Performance Standard Should Drive “Coopetition”",
    year: "2021",
  },
  {
    title: "The Risks of Net-Zero Energy",
    source: "Montgomery County Energy Summit",
    year: "2020",
  },
  { title: "Managing Moisture", source: "Philadelphia BIA", year: "2020" },
  { title: "The State of Green Building", source: "DC BIA", year: "2020" },
  {
    title: "Commissioning for Codes",
    source: "Green Building United",
    year: "2020",
  },
  {
    title:
      "The Inhumanity of Buildings: Our Dynamic Society's Conflict with Static Architecture",
    year: "2016",
  },
  {
    title: "The Academic Value of Yale's Carbon Charge Experiment",
    source: "Yale",
    year: "2016",
  },
  {
    title: "Circular Economy at Scale: Six International Case Studies",
    source: "BuildingGreen.com",
    year: "2015",
  },
];
