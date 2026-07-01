# James Darius Ball — jamesdarius.com

Personal site for **James Darius Ball** — Director of Future Cities at the
National Building Museum; speaker, facilitator, sustainability consultant,
Zoroastrian, and yoga/meditation mentor.

A custom replacement for the previous Squarespace site, built to be calm,
warm, photography-forward, and easy to extend.

## The idea

The landing page is just the name — **James DARIUS Ball** — large and centered.
Each word is independently interactive (hover on desktop, tap on mobile) and
navigates to its own destination:

| Word     | Hover/tap reveals…                                            | Goes to        |
| -------- | ------------------------------------------------------------- | -------------- |
| `James`  | first name & his Dad's middle name — his life story          | `/history`     |
| `DARIUS` | a Persian king — being Zoroastrian & his perspectives        | `/musings`     |
| `Ball`   | the shape of planet Earth — his professional work            | `/offerings`   |

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens centralized in `tailwind.config.ts`)
- **framer-motion** for subtle reveals
- **Resend** for the contact form email (optional; degrades gracefully)
- Deploys cleanly to **Vercel**

## Project structure

```
app/
  layout.tsx          Root layout: fonts (Fraunces + Inter), default SEO, JSON-LD
  page.tsx            LANDING — minimal name with the NameReveal interaction
  history/page.tsx    HISTORY — personal video, approved narrative, résumé
  musings/page.tsx    MUSINGS — perspectives (TODO copy) + filterable content grid
  offerings/page.tsx  OFFERINGS — four offerings + booking extension point
  contact/page.tsx    CONTACT — form (→ dariusball@gmail.com) + community slot
  api/contact/route.ts  Contact form handler (Resend + honeypot)
  sitemap.ts / robots.ts  SEO
  globals.css

components/
  NameReveal.tsx      The reusable landing-page word interaction
  Header.tsx Footer.tsx PageShell.tsx PageHeader.tsx
  StoryNarrative.tsx ResumeSection.tsx VideoEmbed.tsx
  ContentGrid.tsx     Filterable/categorized grid (client)
  ServiceCard.tsx ContactForm.tsx ComingSoon.tsx
  FadeIn.tsx FlameMark.tsx

content/               ← edit these to update copy without touching layout
  storyParagraphs.ts  The approved life-story narrative (verbatim)
  resume.ts           Career history (placeholder TODO bullets)
  services.ts         The four service offerings (placeholder TODO copy)
  contentItems.ts     CMS-friendly content entries for the Darius grid

lib/
  site.ts             Name, URL, email, social, nav — single source of truth
  seo.ts              Per-page metadata + Open Graph helper
  extensions.ts       Documented extension points + feature flags

types/index.ts        Shared domain types
public/og/            Open Graph / social preview images (see README there)
```

### Where to edit what

- **Copy** lives in `content/*` and `lib/site.ts` — not in components.
- **Colors / fonts / spacing** live in `tailwind.config.ts`.
- **Add a content item** (article, talk, media, video): append to
  `content/contentItems.ts`. It appears in the grid automatically; videos with
  an `embedUrl` render an inline player.
- **Swap the History video**: pass a different embed URL to `<VideoEmbed src="…" />`
  in `app/history/page.tsx`.

## Local setup

Requires Node 18+.

```bash
npm install
cp .env.example .env.local   # optional — only needed for real email delivery
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

### Environment variables

All optional for local dev (the contact form logs to the console if email isn't
configured). See `.env.example` for the full list:

- `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_NOTIFY_EMAIL` — contact email
- `NEXT_PUBLIC_FEATURE_PAYMENTS`, `NEXT_PUBLIC_FEATURE_COMMUNITY` — feature flags

## Deploying to Vercel

1. Push this repo to GitHub (see below).
2. In Vercel, **New Project → Import** the GitHub repo. Framework preset:
   **Next.js** (auto-detected). No build config changes needed.
3. Add the environment variables from `.env.example` under **Settings → Environment
   Variables** (only needed for live contact-form email).
4. Deploy, then point `jamesdarius.com` at the project under **Settings → Domains**.

## Future extension points (intentionally not built yet)

- **Payments / booking** — paid consulting/session booking. Scaffolded in
  `lib/extensions.ts`; a placeholder card sits on the Services page behind the
  `NEXT_PUBLIC_FEATURE_PAYMENTS` flag.
- **Community** — a members/movement space. Scaffolded the same way behind
  `NEXT_PUBLIC_FEATURE_COMMUNITY`, with a placeholder on the Contact page.

## Content still to finalize

Search the repo for `TODO` to find placeholders awaiting real copy:

- A few résumé roles need exact titles/dates confirmed (`content/resume.ts`)
- Musings page perspectives / Zoroastrian narrative (`app/musings/page.tsx`)
- A 1200×630 OG image (`public/og/`)
