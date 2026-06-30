/**
 * Central site configuration.
 *
 * Edit these values once and they propagate to metadata, the header/footer,
 * sitemap, and structured data. Keep production URLs and contact details here.
 */
export const site = {
  name: "James Darius Ball",
  // The three words, kept separately so the landing page and structured data
  // can reference them individually.
  firstName: "James",
  middleName: "DARIUS",
  lastName: "Ball",
  role: "Director of Future Cities, National Building Museum",
  tagline: "Good thoughts, good words, good deeds.",
  description:
    "James Darius Ball — designer, sustainability leader, speaker, facilitator, and Zoroastrian. Director of Future Cities at the National Building Museum, building a culture that treats the built environment as our shared habitat.",

  // Update to the production domain before launch.
  url: "https://jamesdarius.com",

  // Primary contact address (used by mailto fallbacks + footer).
  email: "hello@jamesdarius.com",

  // Social / professional links. LinkedIn is the primary traffic driver.
  social: {
    linkedin: "https://www.linkedin.com/in/jamesdariusball",
  },

  // Default Open Graph image (LinkedIn/social preview). Replace with a real
  // 1200x630 image at /public/og/default.jpg before launch.
  ogImage: "/og/default.jpg",
} as const;

/** Primary navigation — the three destination pages plus contact. */
export const nav = [
  { label: "My Story", href: "/story" },
  { label: "Darius", href: "/darius" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;
