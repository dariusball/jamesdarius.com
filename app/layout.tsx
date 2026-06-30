import type { Metadata, Viewport } from "next";
import {
  Inter,
  Fraunces,
  Homemade_Apple,
  Cinzel_Decorative,
  Baloo_2,
} from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

// Clean, modern sans for body + UI.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Warm, characterful display serif for headings throughout the site.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

// ── Landing-page name fonts — one distinct face per word ──────────────────────
// "James"  → authentic handwriting (a real-pen cursive)
const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-hand",
});
// "DARIUS" → decorative, regal Roman capitals
const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-decorative",
});
// "Ball"   → bubble letters (rendered as outline only via .text-outline)
const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-bubble",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "James Darius Ball",
    "Future Cities",
    "National Building Museum",
    "sustainability",
    "built environment",
    "public speaking",
    "facilitation",
    "Zoroastrian",
    "yoga",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: [site.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f0",
};

// Person structured data — helps Google/LinkedIn understand the site subject.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [site.social.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${homemadeApple.variable} ${cinzelDecorative.variable} ${baloo.variable}`}
    >
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
