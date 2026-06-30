# Open Graph / social preview images

LinkedIn is the primary traffic driver, so social share cards matter.

Place a **1200×630** image named `default.jpg` (or `.png`) in this folder. It's
referenced by `lib/site.ts` (`ogImage`) and used as the default Open Graph image
across every page via `lib/seo.ts`.

For richer per-page cards, pass an `image` to `pageMetadata({ ... })` in any
page's `metadata` export and drop the corresponding image here.

Until a real image is added, the `<meta>` tags will point at a missing file —
harmless, but the preview card won't show artwork. Replace before launch.
