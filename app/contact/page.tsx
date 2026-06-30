import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import ComingSoon from "@/components/ComingSoon";
import { features } from "@/lib/extensions";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Be in touch with James Darius Ball — speaking, facilitation, consulting, yoga & meditation, or just to connect.",
  path: "/contact",
});

/**
 * Contact page. Reads an optional `?topic=` query param (set by the service
 * cards) to pre-select the subject. Includes a placeholder extension point for
 * a future community feature (see lib/extensions.ts).
 */
export default function ContactPage({
  searchParams,
}: {
  searchParams: { topic?: string };
}) {
  const initialTopic = searchParams?.topic ?? "";

  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Be in touch"
        lead="I'm excited to meet new people, build a community, and mobilize a movement. Whether it's a project, a stage, a session, or just a hello — reach out."
      />

      <div className="container-x grid gap-12 lg:grid-cols-[1.4fr,1fr]">
        <div>
          <ContactForm initialTopic={initialTopic} />
        </div>

        <aside className="space-y-8">
          <div>
            <h2 className="font-display text-lg font-semibold text-sand-900">
              Prefer email?
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 inline-block text-lapis-600 underline-offset-4 hover:text-ember-600 hover:underline"
            >
              {site.email}
            </a>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-sand-900">
              Connect
            </h2>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-lapis-600 underline-offset-4 hover:text-ember-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>

          {/* Future community extension point — hidden until the flag is on. */}
          {features.community ? null : (
            <ComingSoon
              title="A community is coming"
              description="A space to gather around the work of building human places where we can thrive. Want in early? Send a note and I'll keep you posted."
            />
          )}
        </aside>
      </div>
    </PageShell>
  );
}
