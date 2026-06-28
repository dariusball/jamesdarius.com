import FadeIn from "./FadeIn";

const pillars = [
  {
    jp: "水",
    title: "Water",
    body: "A whisper-quiet recirculating spring keeps water moving and oxygenated — the sound of a garden stream, sized for a sink.",
  },
  {
    jp: "石",
    title: "Stone",
    body: "Hand-finished basalt and river stone ground each piece. Every basin weathers gently, embracing the wabi-sabi beauty of age.",
  },
  {
    jp: "緑",
    title: "Green",
    body: "Curated mosses and low-light botanicals turn handwashing into a moment with nature, purifying the air around you.",
  },
];

export default function Concept() {
  return (
    <section id="concept" className="hairline scroll-mt-16 py-28 sm:py-36">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="text-sm uppercase tracking-widest2 text-sage-600">
                The concept
              </p>
              <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-stone-800 sm:text-5xl">
                A garden, brought
                <br />
                indoors.
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <p className="text-lg leading-relaxed text-stone-600">
                IZUMI began with a simple question: why should the most-used
                room in the home feel the least alive? Inspired by the{" "}
                <span className="italic">tsukubai</span> water basins of Japanese
                tea gardens, IZUMI is a biophilic retrofit that sits atop your
                existing counter — no demolition, no plumber, no permits.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                It draws from <span className="italic">wabi-sabi</span>, the
                quiet acceptance of impermanence and imperfection. Stone darkens
                with use. Moss finds its own shape. The result is a bathroom that
                breathes — calmer, greener, and unmistakably yours.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={0.1 * i} as="article">
              <div className="font-serif text-3xl text-sage-500">
                {pillar.jp}
              </div>
              <h3 className="mt-4 font-serif text-xl text-stone-800">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {pillar.body}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
