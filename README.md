# IZUMI 泉 — Biophilic Bathroom Retrofit

Marketing landing page for **IZUMI (泉)**, a no-plumbing, countertop water
basin inspired by Japanese garden aesthetics and *wabi-sabi* philosophy.

Built as a single scrolling page: Hero → Concept → Collection (tiers) →
Gallery → Waitlist.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for scroll animations
- [yet-another-react-lightbox](https://yet-another-react-lightbox.com/) for the gallery
- [Resend](https://resend.com/) for waitlist email notifications
- Fonts: **Noto Serif JP** (headings) + **Inter** (body) via `next/font`

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Create your local env file
cp .env.example .env.local
#    (the app runs fine without filling these in — see "Email" below)

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server              |
| `npm run build` | Production build                  |
| `npm run start` | Run the production build          |
| `npm run lint`  | Lint with ESLint / Next.js config |

## Environment variables

All variables are optional for local development. See `.env.example`.

| Variable                | Required? | Description                                              |
| ----------------------- | --------- | -------------------------------------------------------- |
| `RESEND_API_KEY`        | For email | Resend API key from <https://resend.com/api-keys>.       |
| `WAITLIST_FROM_EMAIL`   | For email | Verified sender, e.g. `IZUMI <waitlist@yourdomain.com>`. |
| `WAITLIST_NOTIFY_EMAIL` | For email | Inbox that receives each new signup.                     |

**Email behaviour:** the waitlist form posts to `/api/waitlist`. If the three
Resend variables are **not** set, the route still returns success and logs the
signup to the server console — so you can demo the full flow without an account.
Once all three are set, each signup is emailed to `WAITLIST_NOTIFY_EMAIL`.

## Deploying to Vercel

This project deploys to [Vercel](https://vercel.com/) with **zero config**.

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project** and import the repo.
3. (Optional) Add the `RESEND_API_KEY` / `WAITLIST_*` environment variables
   under **Settings → Environment Variables** to enable email.
4. Deploy. Vercel auto-detects Next.js — no build settings needed.

## Swapping placeholder images

Gallery images are defined in [`components/Gallery.tsx`](components/Gallery.tsx)
in the `images` array. They currently point at [Unsplash](https://unsplash.com/)
URLs.

To use your own photos:

1. Drop files into `public/gallery/` (e.g. `public/gallery/basin-01.jpg`).
2. Update each entry's `src` to the public path (e.g. `/gallery/basin-01.jpg`)
   and set the correct `width` / `height` (used by the lightbox for sizing).

```ts
const images: GalleryImage[] = [
  { src: "/gallery/basin-01.jpg", alt: "Stone basin", width: 1600, height: 1067 },
  // …
];
```

> If you keep remote URLs from a new host, add that hostname to
> `images.remotePatterns` in [`next.config.mjs`](next.config.mjs).

## Editing content

All copy is hardcoded in components — there is no CMS.

| Section    | File                      |
| ---------- | ------------------------- |
| Navigation | `components/Header.tsx`   |
| Hero       | `components/Hero.tsx`     |
| Concept    | `components/Concept.tsx`  |
| Tiers      | `components/Tiers.tsx`    |
| Gallery    | `components/Gallery.tsx`  |
| Waitlist   | `components/Waitlist.tsx` |
| Footer     | `components/Footer.tsx`   |

Product tiers (Wabi, Kurama, Bespoke) live in the `tiers` array in
`components/Tiers.tsx`. Shared types are in [`types/index.ts`](types/index.ts).

## Project structure

```
app/
  layout.tsx            # fonts, metadata, global shell
  page.tsx              # composes the sections
  globals.css           # Tailwind + base styles
  api/waitlist/route.ts # POST handler for signups
components/             # one file per section + shared bits
types/index.ts          # shared TypeScript types
```

## License

Placeholder marketing content for demonstration purposes.
