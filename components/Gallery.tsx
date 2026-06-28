"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FadeIn from "./FadeIn";
import type { GalleryImage } from "@/types";

/**
 * Placeholder imagery from Unsplash.
 * To swap: replace the `src` URLs below with your own assets
 * (e.g. "/gallery/basin-01.jpg" placed in /public/gallery).
 * See README → "Swapping placeholder images".
 */
const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1545580653-2a7a4d20df9c?auto=format&fit=crop&w=1200&q=80",
    alt: "Still water over dark river stones",
    width: 1200,
    height: 1500,
  },
  {
    src: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimal stone basin with moss",
    width: 1200,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    alt: "Japanese garden with raked gravel",
    width: 1200,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    alt: "Soft green moss detail",
    width: 1200,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
    alt: "Botanical greenery in natural light",
    width: 1200,
    height: 1500,
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    alt: "Calm water surface with reflection",
    width: 1200,
    height: 800,
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="hairline scroll-mt-16 py-28 sm:py-36">
      <div className="container-x">
        <FadeIn className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest2 text-sage-600">
            Gallery
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-stone-800 sm:text-5xl">
            Moments of stillness.
          </h2>
        </FadeIn>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>button]:mb-4">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(i)}
              className="group block w-full overflow-hidden rounded-xl"
              aria-label={`View image: ${image.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full transform-gpu transition duration-700 ease-out group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={Math.max(index, 0)}
        close={() => setIndex(-1)}
        slides={images.map((image) => ({
          src: image.src,
          alt: image.alt,
          width: image.width,
          height: image.height,
        }))}
        styles={{ container: { backgroundColor: "rgba(37, 35, 32, 0.94)" } }}
      />
    </section>
  );
}
