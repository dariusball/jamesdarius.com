/**
 * A small, tasteful "coming soon" placeholder used to reserve space for a
 * future feature (e.g. booking/payments, community) without building it yet.
 */
export default function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-sand-300 bg-sand-50 p-7 text-center sm:p-9">
      <span className="inline-block rounded-full bg-ember-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ember-700">
        Coming soon
      </span>
      <h3 className="mt-4 font-display text-xl font-semibold text-sand-900">
        {title}
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-sand-600">
        {description}
      </p>
    </div>
  );
}
