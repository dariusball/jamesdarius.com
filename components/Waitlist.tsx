import FadeIn from "./FadeIn";
import WaitlistForm from "./WaitlistForm";

export default function Waitlist() {
  return (
    <section id="waitlist" className="scroll-mt-16 py-28 sm:py-36">
      <div className="container-x">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-stone-800 px-8 py-16 sm:px-16 sm:py-20">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sage-500/30 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <p className="text-sm uppercase tracking-widest2 text-sage-300">
                Join the waitlist
              </p>
              <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-cream sm:text-5xl">
                Be among the first to
                <br />
                bring IZUMI home.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-cream/80">
                We open in limited batches to keep every basin considered. Leave
                your details and we&apos;ll be in touch with early access and
                founding-member pricing.
              </p>

              <div className="mt-10">
                <WaitlistForm variant="panel" />
              </div>

              <p className="mt-5 text-xs text-cream/60">
                No spam. Just a note when we&apos;re ready for you.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
