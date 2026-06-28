import type { Metadata, Viewport } from "next";
import { Inter, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-noto-serif-jp",
});

const siteUrl = "https://izumi.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "IZUMI 泉 — Biophilic Bathroom Retrofit",
  description:
    "IZUMI (泉) brings the calm of a Japanese garden into your bathroom. A no-plumbing, countertop water basin inspired by stone, water, and wabi-sabi.",
  keywords: [
    "biophilic design",
    "Japanese garden",
    "bathroom retrofit",
    "wabi-sabi",
    "countertop basin",
    "IZUMI",
  ],
  openGraph: {
    title: "IZUMI 泉 — Biophilic Bathroom Retrofit",
    description:
      "A no-plumbing, countertop water basin inspired by Japanese garden aesthetics. Join the waitlist.",
    url: siteUrl,
    siteName: "IZUMI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IZUMI 泉 — Biophilic Bathroom Retrofit",
    description:
      "A no-plumbing, countertop water basin inspired by Japanese garden aesthetics.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f4ef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerifJp.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
