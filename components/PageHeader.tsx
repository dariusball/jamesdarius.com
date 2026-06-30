import type { ReactNode } from "react";

/**
 * Consistent page-intro block: a small eyebrow label, a large display title,
 * and an optional lead paragraph. Generous whitespace, photography-forward
 * layouts can sit below it.
 */
export default function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <header className="container-x pb-10 pt-16 sm:pt-20">
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-ember-600">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-sand-900 sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      {lead ? (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand-600">
          {lead}
        </p>
      ) : null}
    </header>
  );
}
