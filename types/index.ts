// Shared domain types for the IZUMI landing page.

/** A single product tier rendered as a card in the Tiers section. */
export interface Tier {
  /** Stable id, also used as a DOM key. */
  id: "wabi" | "kurama" | "bespoke";
  /** Tier name, e.g. "Wabi". */
  name: string;
  /** Japanese rendering of the tier name. */
  nameJp: string;
  /** Short positioning line shown under the name. */
  tagline: string;
  /** Display price (string so we can show "From …" / "Inquire"). */
  price: string;
  /** Bullet-point feature list. */
  features: string[];
  /** Whether to visually emphasise this tier as the recommended option. */
  featured?: boolean;
  /** Call-to-action label for the tier card. */
  cta: string;
}

/** A gallery image used by the lightbox grid. */
export interface GalleryImage {
  /** Image source URL (Unsplash placeholder or local asset). */
  src: string;
  /** Accessible alt text / lightbox caption. */
  alt: string;
  /** Natural width, used by the lightbox for sizing. */
  width: number;
  /** Natural height, used by the lightbox for sizing. */
  height: number;
}

/** Request body accepted by POST /api/waitlist. */
export interface WaitlistRequest {
  name: string;
  email: string;
  /** Optional tier the visitor is interested in. */
  tier?: string;
}

/** Response shape returned by POST /api/waitlist. */
export interface WaitlistResponse {
  ok: boolean;
  message: string;
}
