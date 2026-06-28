"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { getAboutStats, getAboutValues, getMilestones } from "@/data/about";
import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/lib/LanguageContext";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
};

const copy = {
  en: {
    intro: {
      heading: "Driven by Excellence.\nDefined by You.",
      p1: "Since 2016, xRENT has been the premier choice for luxury vehicle rentals in Indonesia. We understand that our clients aren't just looking for a car; they are seeking an experience that reflects their standards and aspirations.",
      p2: "Our curated fleet features only the most sought-after marques — from the raw power of Lamborghini to the refined elegance of Rolls-Royce. Every vehicle is maintained to showroom perfection, ensuring your journey is nothing short of flawless.",
      statLabel: "Years of Excellence",
      statSub: "Setting the standard in luxury mobility.",
    },
    values: {
      eyebrow: "Our DNA",
      heading: "The Principles That\nDrive Us",
    },
    timeline: {
      heading: "Our Journey",
    },
    cta: {
      heading: "Experience The Standard",
      body: "Join thousands of satisfied clients who have elevated their journey with xRENT.",
      btn: "View Our Fleet",
    },
  },
  id: {
    intro: {
      heading: "Didorong oleh Keunggulan.\nDidefinisikan oleh Anda.",
      p1: "Sejak 2016, xRENT telah menjadi pilihan utama untuk penyewaan kendaraan mewah di Indonesia. Kami memahami bahwa klien kami tidak hanya mencari mobil; mereka mencari pengalaman yang mencerminkan standar dan aspirasi mereka.",
      p2: "Armada pilihan kami hanya menampilkan merek paling bergengsi — dari tenaga mentah Lamborghini hingga keanggunan Rolls-Royce. Setiap kendaraan dirawat hingga sempurna seperti di showroom, memastikan perjalanan Anda tidak kurang dari sempurna.",
      statLabel: "Tahun Keunggulan",
      statSub: "Menetapkan standar dalam mobilitas mewah.",
    },
    values: {
      eyebrow: "DNA Kami",
      heading: "Prinsip yang\nMenggerakkan Kami",
    },
    timeline: {
      heading: "Perjalanan Kami",
    },
    cta: {
      heading: "Rasakan Standarnya",
      body: "Bergabunglah dengan ribuan klien puas yang telah meningkatkan perjalanan mereka bersama xRENT.",
      btn: "Lihat Armada Kami",
    },
  },
} as const;

export default function AboutContent() {
  const { t, lang } = useLanguage();
  const stats = getAboutStats(lang);
  const values = getAboutValues(lang);
  const milestones = getMilestones(lang);
  const c = copy[lang];

  return (
    <div className="pt-20 bg-background min-h-screen pb-20">

      {/* ── Hero ── */}
      <PageHero
        eyebrow={t("page.about.eyebrow")}
        title={
          <>
            {t("page.about.title1")} <br />
            <span className="text-primary-container">{t("page.about.title2")}</span>
          </>
        }
        description={t("page.about.description")}
        backgroundSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCSQ1kNVeI65ZOSY8XWs3aLXGiAU7xKt0tTSZZ_guXWbdYqC4pU7Yv0uHG_pVICUL2szkKnpVy51AVJzAm7TUutRvq8J9giHEn7wjVvtEKWF68xQHlUdMZg6ZF21f640I73EM2794jhWiXsZz4DsNepVpDbjbj0QoK4oJki4Uw1Umced5auPH2Or_JX4AVVIEZzGP44cB0Y2_RRdRUU5nWDQl9VfYivvrkcfpUsYePuf822KMRpSUer12zGGnxYv4SeJ6pAp4rkEyQw"
        heightClass="h-[50vh] min-h-[380px]"
      />

      {/* ── Introduction ── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-semibold text-white leading-tight">
              {c.intro.heading.split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/60 text-lg leading-relaxed font-light">
              {c.intro.p1}
            </motion.p>
            <motion.p variants={itemVariants} className="text-white/60 text-lg leading-relaxed font-light">
              {c.intro.p2}
            </motion.p>
          </motion.div>

          <motion.div
            className="relative"
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiUg9lQA8M6zHXZUBe2OTFv4P2ACBE_-mXIypoNDSBcUkNLU5aWanik8FU4XpT7DlTXkXAXRl_D-ZbsX0yvZwiBR5GXeZpJqca6sb2O2w6UxHLLB0ogyyX-d98-LIW4FR1a4ooiN18RkoTMB0iBLCkFabIWiBYC4npcxpHyJDj04UEP1bHGv7wZvcjOa2VZ9O_QG34xBrd3IJg9x48A1aPmxbv0d5JnY0M3xVLxbaiHwI06IZasCOuhZBvAWDGlCdpm4--exenlzgk"
                alt="xRENT Experience"
                className="w-full h-full object-cover grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            {/* Floating stat box */}
            <motion.div
              className="absolute -bottom-8 -left-8 md:-left-16 bg-[#111111] p-8 border border-white/10 rounded-xl w-64 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <AnimatedCounter text="8+" className="text-primary-container text-4xl font-bold mb-2 block" />
              <div className="text-white font-medium mb-1">{c.intro.statLabel}</div>
              <div className="text-white/50 text-sm">{c.intro.statSub}</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="py-12 md:py-16 text-center px-4">
                <AnimatedCounter text={stat.value} className="text-3xl md:text-5xl font-semibold text-white mb-2 block" />
                <div className="text-primary-container text-xs uppercase tracking-[0.2em] font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-20 lg:py-32">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-primary-container text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            {c.values.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            {c.values.heading.split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              className="bg-[#0a0a0a] border border-white/5 p-10 rounded-xl hover:border-white/20 transition-colors duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary-container/20 group-hover:text-primary-container transition-all duration-500">
                <value.icon size={24} className="text-white/70 group-hover:text-primary-container transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
              <p className="text-white/50 leading-relaxed font-light">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Milestones / Timeline ── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-20 border-t border-white/5">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">{c.timeline.heading}</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-16">
            {milestones.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? "md:flex-row-reverse" : ""}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-3 h-3 bg-primary-container rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-[6px] md:mt-0 ring-4 ring-black" />

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}>
                    <div className="text-primary-container font-mono text-xl font-bold mb-2">{m.year}</div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{m.event}</h3>
                    <p className="text-white/50 leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <motion.section
        className="max-w-[1280px] mx-auto px-5 md:px-6 pt-10 pb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0a0a0a] border border-white/10 rounded-xl px-8 py-10 text-center md:text-left">
          <div>
            <h3 className="text-white font-semibold text-2xl mb-2">{c.cta.heading}</h3>
            <p className="text-white/50">{c.cta.body}</p>
          </div>
          <Link
            href="/fleet"
            className="shrink-0 bg-white text-black px-8 py-4 rounded-sm text-sm font-semibold uppercase tracking-widest hover:bg-primary-container hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            {c.cta.btn}
            <ArrowRight size={16} />
          </Link>
        </div>
      </motion.section>

    </div>
  );
}