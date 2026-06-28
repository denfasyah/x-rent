"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { getHowItWorksSteps } from "@/data/how-it-works";
import { useLanguage } from "@/lib/LanguageContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stepVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function HowItWorks() {
  const { t, lang } = useLanguage();
  const steps = getHowItWorksSteps(lang);

  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden" id="how-it-works">
      {/* bottom-left accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-60 bottom-0 h-[600px] w-[600px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #b81d1d 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-6">

        {/* ── Header ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 md:items-end mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-white font-label-sm text-label-sm uppercase tracking-widest">
              {t("howitworks.label")}
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg leading-[1.1] tracking-tight text-white">
              {t("howitworks.heading").split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col gap-6 md:max-w-sm">
            <p className="font-body-md text-body-md text-secondary">
              {t("howitworks.description")}
            </p>
            <Link
              href="/fleet"
              className="group inline-flex items-center gap-3 text-white font-medium hover:text-primary-container transition-colors duration-300 font-body-md text-body-md w-fit"
            >
              <span className="w-6 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-8" />
              {t("howitworks.cta")}
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Steps ── */}
        <div className="relative">
          {/* connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[52px] left-0 right-0 h-[1px] bg-white/5 mx-[calc(100%/8)]"
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={stepVariant}
                className={`group relative flex flex-col gap-6 p-8 lg:p-10 bg-transparent hover:bg-white/[0.02] transition-colors duration-300 ${
                  i < steps.length - 1 ? "lg:border-r border-white/5" : ""  // ✅ fix di sini
                }`}
              >
                {/* Step number */}
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center justify-center w-[52px] h-[52px] shrink-0">
                    <span className="absolute inset-0 rounded-full border border-white/10 group-hover:border-primary-container/40 transition-colors duration-300" />
                    <span className="absolute inset-[6px] rounded-full bg-transparent group-hover:bg-primary-container/10 transition-all duration-300" />
                    <span className="relative font-label-sm text-label-sm text-secondary group-hover:text-primary-container transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  <span className="flex-1 h-[1px] bg-white/5 hidden lg:block" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-white leading-snug">{step.title}</h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">{step.desc}</p>
                </div>

                {/* Detail pill */}
                <div className="mt-auto inline-flex w-fit items-center gap-2 border border-white/5 bg-white/[0.03] px-3 py-1.5 rounded-sm group-hover:border-primary-container/20 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container shrink-0" />
                  <span className="text-[11px] font-medium text-secondary uppercase tracking-wider">
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom CTA banner ── */}
        <motion.div
          className="mt-12 relative overflow-hidden rounded-sm border border-white/5 bg-white/[0.02]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 40%, rgba(184,29,29,0.06) 100%)",
            }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 md:p-12">
            <div className="flex flex-col gap-2 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                {t("howitworks.readycta.heading")}
              </h3>
              <p className="font-body-md text-body-md text-secondary">
                {t("howitworks.readycta.body")}
              </p>
            </div>
            <Link
              href="/fleet"
              className="shrink-0 group inline-flex items-center gap-3 bg-primary-container text-white px-8 py-4 font-label-sm text-label-sm uppercase tracking-[0.15em] hover:brightness-110 transition-all duration-300"
            >
              {t("howitworks.readycta.btn")}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}