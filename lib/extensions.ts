/**
 * Extension points for features that are intentionally NOT built yet.
 *
 * These exist so the future work has an obvious, documented home and the UI can
 * already reserve space for it behind a feature flag. Flip a flag to `true`
 * (ideally driven by an env var) once the real implementation lands.
 *
 * ── Payments / booking ───────────────────────────────────────────────────────
 * Planned: paid booking for consulting / sessions (e.g. Stripe Checkout or
 * Payment Links, or a scheduler like Cal.com/Calendly with payment).
 * To implement:
 *   1. Add a route handler under app/api/checkout/route.ts that creates a
 *      Stripe Checkout Session (npm i stripe; set STRIPE_SECRET_KEY).
 *   2. Replace the <ComingSoon> booking placeholder on the Services page with a
 *      "Book & pay" button that POSTs to it.
 *   3. Set NEXT_PUBLIC_FEATURE_PAYMENTS=true to reveal the UI.
 *
 * ── Community ────────────────────────────────────────────────────────────────
 * Planned: a members area / community space (movement-building).
 * To implement:
 *   1. Decide on the backend (e.g. a hosted community tool, or auth + DB).
 *   2. Add routes under app/community/* and any needed API handlers.
 *   3. Set NEXT_PUBLIC_FEATURE_COMMUNITY=true to reveal the UI + nav entry.
 */
export const features = {
  payments: process.env.NEXT_PUBLIC_FEATURE_PAYMENTS === "true",
  community: process.env.NEXT_PUBLIC_FEATURE_COMMUNITY === "true",
} as const;
