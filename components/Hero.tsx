"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Soft natural background wash — no images required. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-stone-50 to-sage-100"
      />
      <div
        aria-hidden
        className="absolute -right-32 top-1/4 -z-10 h-[32rem] w-[32rem] rounded-full bg-sage-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-stone-200/50 blur-3xl"
      />

      <div className="container-x py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-sm uppercase tracking-widest2 text-sage-600"
        >
          Biophilic bathroom retrofit
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-6xl font-light leading-none text-stone-800 sm:text-7xl lg:text-8xl"
        >
          IZUMI
          <span className="ml-4 align-middle text-4xl text-sage-500 sm:text-5xl lg:text-6xl">
            泉
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600"
        >
          A wellspring for the everyday. IZUMI turns any countertop into a
          living water garden — no plumbing, no renovation. Just stone, water,
          and quiet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 max-w-2xl"
        >
          <WaitlistForm variant="hero" />
          <p className="mt-4 text-xs text-stone-500">
            Join the waitlist for early access and founding-member pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
