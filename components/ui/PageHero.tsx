"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface PageHeroProps {
  /** Small uppercase label above the title */
  eyebrow: string;
  /** Main h1 — use <span> inside for accent colouring */
  title: ReactNode;
  /** Optional subtitle paragraph */
  description?: string;
  /** Optional background image URL. Falls back to gradient-only. */
  backgroundSrc?: string;
  /** Tailwind height class. Default: "h-[40vh] min-h-[300px]" */
  heightClass?: string;
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as any } },
};

export default function PageHero({
  eyebrow,
  title,
  description,
  backgroundSrc,
  heightClass = "h-[40vh] min-h-[300px]",
}: PageHeroProps) {
  return (
    <section
      className={`relative w-full overflow-hidden border-b border-white/5 flex items-center justify-center ${heightClass}`}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        {backgroundSrc ? (
          <img
            src={backgroundSrc}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center brightness-50"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-black/80 to-background" />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/20" />
        {/* Subtle grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-5 md:px-6 max-w-[1280px] mx-auto mt-10"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={item}
          className="text-primary-container text-xs uppercase tracking-[0.3em] font-semibold mb-4"
        >
          {eyebrow}
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={item}
          className="text-[36px] md:text-[60px] font-semibold text-white leading-tight mb-4"
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            variants={item}
            className="text-white/60 text-[15px] md:text-[17px] font-light max-w-xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
