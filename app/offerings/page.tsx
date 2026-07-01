import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import ComingSoon from "@/components/ComingSoon";
import FadeIn from "@/components/FadeIn";
import { services } from "@/content/services";
import { features } from "@/lib/extensions";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Offerings",
  description:
    "Public speaking, facilitation & MC work, sustainability consulting, and yoga & meditation support with James Darius Ball.",
  path: "/offerings",
});

/**
 * Offerings — linked from "Ball" on the landing page.
 *
 * Four service offerings as clearly designed cards, plus a placeholder
 * extension point for future booking/payments (see lib/extensions.ts).
 */
export default function OfferingsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Offerings"
        title={
          <>
            Ball.
            <span className="block text-sand-500">
              My last name, and the shape of planet Earth.
            </span>
          </>
        }
        lead="Ways we can work together — on stage, in the room, on strategy, and on the mat."
      />

      <section
        aria-label="Service offerings"
        className="container-x mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {services.map((service, i) => (
          <FadeIn key={service.id} delay={i * 0.04}>
            <ServiceCard service={service} index={i} />
          </FadeIn>
        ))}
      </section>

      {/* Future payment / booking extension point. Hidden until the feature
          flag is enabled (see lib/extensions.ts). */}
      <section className="container-x mt-16">
        {features.payments ? (
          // TODO: Replace with real "Book & pay" flow (Stripe Checkout, etc.).
          <ComingSoon
            title="Book a session"
            description="Booking is now available — wire this block up to checkout."
          />
        ) : (
          <ComingSoon
            title="Online booking & payments"
            description="Soon you'll be able to book and pay for consulting and sessions right here. In the meantime, reach out and we'll set it up together."
          />
        )}
      </section>

      <section className="container-x mt-12 text-center">
        <p className="text-sand-600">
          Not sure which fits?{" "}
          <Link
            href="/contact"
            className="font-semibold text-lapis-600 underline-offset-4 hover:text-ember-600 hover:underline"
          >
            Be in touch
          </Link>{" "}
          and we&apos;ll find the right shape together.
        </p>
      </section>
    </PageShell>
  );
}
