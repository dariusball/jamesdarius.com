"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Subtle "fade + rise" reveal as content scrolls into view. Respects reduced
 * motion automatically (framer-motion reads the user setting), keeping the
 * site calm rather than gimmicky.
 */
export default function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
