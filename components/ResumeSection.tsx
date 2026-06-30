import { resume } from "@/content/resume";
import { site } from "@/lib/site";
import FadeIn from "./FadeIn";

/**
 * Formal career-history layout. A simple two-column timeline: period on the
 * left, role + organization + bullets on the right. Reads as a clean résumé.
 */
export default function ResumeSection() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="container-x mt-24">
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
          View full résumé on LinkedIn
          <span aria-hidden="true">↗</span>
        </a>

        <ol className="mt-12 space-y-10">
          {resume.map((entry) => (
            <FadeIn key={entry.id}>
              <li className="grid gap-3 sm:grid-cols-[10rem,1fr] sm:gap-8">
                <div className="text-sm font-semibold uppercase tracking-wide text-ember-600">
                  {entry.period}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-sand-900">
                    {entry.organization}
                  </h3>
                  <p className="mt-0.5 text-sand-700">
                    {entry.role}
                    {entry.location ? (
                      <span className="text-sand-500"> · {entry.location}</span>
                    ) : null}
                  </p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sand-600 marker:text-sand-300">
                    {entry.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
