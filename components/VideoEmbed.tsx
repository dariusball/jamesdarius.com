/**
 * VideoEmbed — a responsive 16:9 video slot.
 *
 * When `src` is provided it renders an iframe (YouTube/Vimeo embed URL or a
 * direct file via <video>). When omitted, it renders a tasteful placeholder
 * card so the layout is complete before the real recording exists.
 */
export default function VideoEmbed({
  src,
  title = "Video",
  placeholderLabel = "Video coming soon",
}: {
  src?: string;
  title?: string;
  placeholderLabel?: string;
}) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-sand-200 bg-sand-100 shadow-sm">
      {src ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
          {/* Simple play glyph. */}
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ivory/80 text-ember-600 shadow-sm ring-1 ring-sand-200">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <p className="text-sm font-medium text-sand-500">{placeholderLabel}</p>
        </div>
      )}
    </div>
  );
}
