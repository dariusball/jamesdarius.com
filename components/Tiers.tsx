import FadeIn from "./FadeIn";
import type { Tier } from "@/types";

const tiers: Tier[] = [
  {
    id: "wabi",
    name: "Wabi",
    nameJp: "侘",
    tagline: "The essential kit",
    price: "From $480",
    cta: "Join the waitlist",
    features: [
      "Cast-stone basin in natural basalt",
      "Silent recirculating spring pump",
      "Starter moss & pebble set",
      "Countertop install in minutes",
      "Drop-in to any existing sink",
    ],
  },
  {
    id: "kurama",
    name: "Kurama",
    nameJp: "鞍馬",
    tagline: "The expanded sensory experience",
    price: "From $920",
    cta: "Join the waitlist",
    featured: true,
    features: [
      "Everything in Wabi",
      "Layered river-stone water feature",
      "Curated low-light botanical garden",
      "Warm under-basin lighting on a timer",
      "Cedar aroma diffusion module",
      "Seasonal botanical refresh kit",
    ],
  },
  {
    id: "bespoke",
    name: "Bespoke",
    nameJp: "誂",
    tagline: "Made-to-order, by artisans",
    price: "By inquiry",
    cta: "Request a consultation",
    features: [
      "One-to-one design with our studio",
      "Hand-carved stone of your choosing",
      "Bespoke planting & water composition",
      "Custom dimensions for any space",
      "White-glove install & lifetime care",
    ],
  },
];

export default function Tiers() {
  return (
    <section
      id="tiers"
      className="hairline scroll-mt-16 bg-stone-50/60 py-28 sm:py-36"
    >
      <div className="container-x">
        <FadeIn className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest2 text-sage-600">
            The collection
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-stone-800 sm:text-5xl">
            Three ways to bring the spring home.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            Each IZUMI is built to the same standard of calm. Choose the depth of
            the experience that suits your space.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.id} delay={0.1 * i} as="article">
              <div
                className={`flex h-full flex-col rounded-2xl p-8 transition-colors ${
                  tier.featured
                    ? "bg-sage-500 text-cream"
                    : "bg-cream text-stone-800"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl">{tier.name}</h3>
                  <span
                    className={`font-serif text-2xl ${
                      tier.featured ? "text-cream/70" : "text-sage-400"
                    }`}
                  >
                    {tier.nameJp}
                  </span>
                </div>

                <p
                  className={`mt-1 text-sm ${
                    tier.featured ? "text-cream/80" : "text-stone-500"
                  }`}
                >
                  {tier.tagline}
                </p>

                {tier.featured && (
                  <span className="mt-4 w-fit rounded-full bg-cream/15 px-3 py-1 text-xs uppercase tracking-widest2">
                    Most loved
                  </span>
                )}

                <p className="mt-6 font-serif text-3xl font-light">
                  {tier.price}
                </p>

                <ul
                  className={`mt-8 flex-1 space-y-3 text-sm ${
                    tier.featured ? "text-cream/90" : "text-stone-600"
                  }`}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span
                        aria-hidden
                        className={
                          tier.featured ? "text-cream/60" : "text-sage-400"
                        }
                      >
                        —
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#waitlist"
                  className={`mt-10 rounded-md px-5 py-3 text-center text-sm tracking-wide transition-colors ${
                    tier.featured
                      ? "bg-cream text-stone-800 hover:bg-white"
                      : "border border-stone-300 text-stone-700 hover:border-stone-500 hover:text-stone-900"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
