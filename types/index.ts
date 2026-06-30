// Shared domain types for jamesdarius.com.

/** A service offering rendered as a card on the Services page. */
export interface Service {
  /** Stable id, also used as a DOM key + anchor. */
  id: "speaking" | "facilitation" | "consulting" | "yoga";
  /** Service name, e.g. "Public Speaking". */
  name: string;
  /** One-line positioning statement. */
  tagline: string;
  /** Longer description (placeholder TODO copy until finalized). */
  description: string;
  /** Bullet-point highlights. */
  highlights: string[];
}

/** A single résumé / career-history entry on the My Story page. */
export interface ResumeEntry {
  /** Stable id / DOM key. */
  id: string;
  /** Organization name. */
  organization: string;
  /** Role / title held. */
  role: string;
  /** Date range, e.g. "2009 – 2011". */
  period: string;
  /** Optional location. */
  location?: string;
  /** Bullet-point accomplishments (placeholder TODO until finalized). */
  bullets: string[];
}

/**
 * Categories for the Darius page content grid. Add new values here and they
 * automatically appear as filters — no layout changes required.
 */
export type ContentCategory = "writing" | "talk" | "media" | "video";

/**
 * A single public-facing content entry (article, talk, media appearance, or
 * video). This is the CMS-friendly model: add entries to content/contentItems.ts
 * and they render in the filterable grid without touching component code.
 */
export interface ContentItem {
  /** Stable id / DOM key. */
  id: string;
  /** Headline / title of the piece. */
  title: string;
  /** One or more categories this item belongs to (drives filtering). */
  categories: ContentCategory[];
  /** Short description / excerpt. */
  description: string;
  /** Outlet, publication, or venue (e.g. "GreenBiz", "TEDx"). */
  source?: string;
  /** ISO date string (YYYY-MM-DD) — used for sorting + display. */
  date?: string;
  /** External link to the piece (article, recording, etc.). */
  href?: string;
  /**
   * For video items: an embeddable URL (YouTube/Vimeo embed form). When
   * present, the grid renders an inline player instead of a link card.
   */
  embedUrl?: string;
  /** Optional thumbnail image path. */
  image?: string;
  /** Marks an item as featured (rendered larger / first). */
  featured?: boolean;
}

/** Request body accepted by POST /api/contact. */
export interface ContactRequest {
  name: string;
  email: string;
  message: string;
  /** Optional subject / reason for reaching out. */
  topic?: string;
  /** Honeypot field — should always be empty for real humans. */
  company?: string;
}

/** Response shape returned by POST /api/contact. */
export interface ContactResponse {
  ok: boolean;
  message: string;
}
