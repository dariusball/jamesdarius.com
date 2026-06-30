import Link from "next/link";
import type { Service } from "@/types";
import FlameMark from "./FlameMark";

/** Maps each service to a small accent so the four cards feel distinct. */
const ACCENTS: Record<Service["id"], string> = {
  speaking: "text-ember-500",
  facilitation: "text-lapis-500",
  consulting: "text-ember-600",
  yoga: "text-lapis-600",
};

/**
 * A single service offering, rendered as a clearly designed card with its own
 * heading, tagline, description, highlights, and a contact CTA.
 */
export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <article
      id={service.id}
      className="flex h-full flex-col rounded-2xl border border-sand-200 bg-ivory p-7 shadow-sm transition-shadow hover:shadow-md sm:p-9"
    >
      <div className="flex items-start justify-between gap-4">
        <FlameMark className={`h-8 w-8 ${ACCENTS[service.id]}`} />
        <span className="font-display text-2xl font-semibold text-sand-200">
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-sand-900">
        {service.name}
      </h3>
      <p className="mt-1 text-sand-600">{service.tagline}</p>

      <p className="mt-4 text-sand-600">{service.description}</p>

      <ul className="mt-5 space-y-2 text-sm text-sand-600">
        {service.highlights.map((h, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true" className="mt-1 text-ember-500">
              ·
            </span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <Link
          href={`/contact?topic=${service.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-lapis-600 transition-colors hover:text-ember-600"
        >
          Inquire about {service.name}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
