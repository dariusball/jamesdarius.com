"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#concept", label: "Concept" },
  { href: "#tiers", label: "Collection" },
  { href: "#gallery", label: "Gallery" },
  { href: "#waitlist", label: "Waitlist" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-serif text-xl tracking-widest2 text-stone-800"
          aria-label="IZUMI — back to top"
        >
          泉 <span className="ml-1 text-base tracking-[0.3em]">IZUMI</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm text-stone-600 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-stone-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#waitlist"
          className="rounded-full border border-stone-300 px-4 py-1.5 text-sm text-stone-700 transition-colors hover:border-stone-500 hover:text-stone-900"
        >
          Join
        </a>
      </nav>
    </header>
  );
}
