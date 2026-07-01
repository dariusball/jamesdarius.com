import { experience, education, awards, publications } from "@/content/resume";
import { site } from "@/lib/site";
import FadeIn from "./FadeIn";

/**
 * Full résumé: Experience (each employer with one or more positions),
 * Education, Leadership & Awards, and Publications & Presentations. A clean,
 * formal two-column timeline that reads like a résumé.
 */
export default function ResumeSection() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="container-x mt-24"
    >
      <div className="border-t border-sand-200 pt-12">
        <h2
          id="resume-heading"
          className="font-display text-3xl font-semibold tracking-tight text-sand-900 sm:text-4xl"
        >
          Résumé
        </h2>
        <p className="mt-3 max-w-2xl text-sand-600">
          A career spent chasing one question: how do we transform our built
          world to be better for both people and the planet?
        </p>
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-lapis-200 bg-lapis-50 px-5 py-2 text-sm font-semibold text-lapis-700 transition-colors hover:border-lapis-300 hover:bg-lapis-100"
        >
          View on LinkedIn
          <span aria-hidden="true">↗</span>
        </a>

        {/* ── Experience ─────────────────────────────────────────────────── */}
        <SubHeading>Experience</SubHeading>
        <ol className="space-y-10">
          {experience.map((entry) => (
            <FadeIn key={entry.id}>
              <li className="grid gap-3 sm:grid-cols-[12rem,1fr] sm:gap-8">
                <div>
                  <h4 className="font-display text-xl font-semibold text-sand-900">
                    {entry.organization}
                  </h4>
                  {entry.location ? (
                    <p className="mt-0.5 text-sm text-sand-500">
                      {entry.location}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-6">
                  {entry.positions.map((pos, i) => (
                    <div key={i}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h5 className="font-semibold text-sand-800">
                          {pos.title}
                        </h5>
                        <span className="text-sm font-medium uppercase tracking-wide text-ember-600">
                          {pos.period}
                        </span>
                      </div>
                      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sand-600 marker:text-sand-300">
                        {pos.bullets.map((bullet, j) => (
                          <li key={j}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>

        {/* ── Education ──────────────────────────────────────────────────── */}
        <SubHeading>Education</SubHeading>
        <ul className="space-y-5">
          {education.map((ed) => (
            <li
              key={ed.id}
              className="grid gap-1 sm:grid-cols-[12rem,1fr] sm:gap-8"
            >
              <div className="text-sm font-medium uppercase tracking-wide text-ember-600">
                {ed.year}
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-sand-900">
                  {ed.school}
                </h4>
                <p className="text-sand-600">{ed.credential}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* ── Leadership & Awards ────────────────────────────────────────── */}
        <SubHeading>Leadership &amp; Awards</SubHeading>
        <ul className="space-y-3">
          {awards.map((a, i) => (
            <li
              key={i}
              className="grid gap-1 sm:grid-cols-[12rem,1fr] sm:gap-8"
            >
              <div className="text-sm font-medium uppercase tracking-wide text-ember-600">
                {a.year}
              </div>
              <p className="text-sand-700">{a.text}</p>
            </li>
          ))}
        </ul>

        {/* ── Publications & Presentations ───────────────────────────────── */}
        <SubHeading>Publications &amp; Presentations</SubHeading>
        <ul className="space-y-3">
          {publications.map((p, i) => (
            <li
              key={i}
              className="grid gap-1 sm:grid-cols-[12rem,1fr] sm:gap-8"
            >
              <div className="text-sm font-medium uppercase tracking-wide text-ember-600">
                {p.year}
              </div>
              <p className="text-sand-700">
                {p.title}
                {p.source ? (
                  <span className="text-sand-500"> · {p.source}</span>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Small internal section label used between résumé blocks. */
function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-8 mt-16 text-xs font-semibold uppercase tracking-widest2 text-sand-500">
      {children}
    </h3>
  );
}
