"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { aboutStats, aboutValues, milestones } from "@/data/about";

/* ─────────────────────────────────────────────
   Variants — TypeScript-safe, no custom fn
───────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function AboutContent() {
  return (
    <div className="pt-20 bg-background min-h-screen pb-20">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/5 h-[50vh] min-h-[380px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="About hero - luxury cars"
            className="w-full h-full object-cover brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSQ1kNVeI65ZOSY8XWs3aLXGiAU7xKt0tTSZZ_guXWbdYqC4pU7Yv0uHG_pVICUL2szkKnpVy51AVJzAm7TUutRvq8J9giHEn7wjVvtEKWF68xQHlUdMZg6ZF21f640I73EM2794jhWiXsZz4DsNepVpDbjbj0QoK4oJki4Uw1Umced5auPH2Or_JX4AVVIEZzGP44cB0Y2_RRdRUU5nWDQl9VfYivvrkcfpUsYePuf822KMRpSUer12zGGnxYv4SeJ6pAp4rkEyQw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/20" />
        </div>

        <motion.div
          className="relative z-10 text-center px-5 md:px-6 max-w-[1280px] mx-auto mt-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-primary-container text-xs uppercase tracking-[0.3em] font-semibold mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-[40px] md:text-[64px] font-semibold text-white leading-tight mb-5"
          >
            Redefining Luxury <br />
            <span className="text-primary-container">Car Rental</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-white/70 text-[16px] md:text-[18px] font-light max-w-2xl mx-auto"
          >
            Born from a passion for automobiles and a commitment to extraordinary
            service, xRENT has been setting the standard for premium car rental
            in Indonesia since 2016.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left copy */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={itemVariants}>
              <p className="text-primary-container text-xs uppercase tracking-[0.3em] font-semibold mb-4">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
                More than a rental — <br />a curated experience.
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                xRENT was founded on a single belief: that driving a world-class
                vehicle should be an experience, not just a transaction. We
                hand-pick every car in our fleet, maintain them to showroom
                standards, and deliver them with the kind of white-glove service
                usually reserved for five-star hotels.
              </p>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="border-l-2 border-primary-container pl-6">
                <h3 className="text-white font-semibold text-lg mb-2">Our Mission</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  To make world-class luxury vehicles accessible to those who
                  appreciate excellence — delivering unforgettable journeys with
                  zero compromise on quality or service.
                </p>
              </div>
              <div className="border-l-2 border-white/20 pl-6">
                <h3 className="text-white font-semibold text-lg mb-2">Our Vision</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  To become Southeast Asia&apos;s most trusted and prestigious luxury
                  car rental company, known for our curated fleet and unmatched
                  concierge experience.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                href="/fleet"
                className="group inline-flex items-center gap-3 text-white font-medium hover:text-primary-container transition-colors duration-300 w-fit"
              >
                <span className="w-6 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-10" />
                Explore Our Fleet
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="relative group"
            variants={slideRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="absolute -inset-4 bg-primary-container/5 rounded-2xl blur-3xl opacity-60" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPzN5u9ppNQ8Lkp2-Z_yRwx2YlnEGY76kSHLe3hHVl-7oRiCRPHdY45ftoTxi85nETAelT-Oly4WMIfG8tR94g788nuJ6H4hDL8g-BWxrbghukHmh5pZo8Wsn_k4YrE1WpAr0c4T8Qn46fCOEWYlm2yh_ue7MdAQTxoFsGP6z3VBssjKXVl1r4PGaza2wQS22uvecJY8zCx0nt_do0-a3iIOgjxM_Yja9VtjvXSaGKD60WGUkUKfND5xx2eggC8VQuaG3PqKCgIPIf"
                alt="Luxury car interior"
                className="w-full h-full object-cover grayscale-[0.15] transition-transform duration-[2000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ background: "linear-gradient(160deg, #141414 0%, #1a1a1a 50%, #111111 100%)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 py-16">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {aboutStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className={`flex flex-col gap-2 py-10 px-6 ${
                  i !== aboutStats.length - 1 ? "border-r border-white/5" : ""
                } ${i >= 2 ? "border-t border-white/5 md:border-t-0" : ""}`}
              >
                <span
                  className="font-semibold leading-none tracking-tight text-white"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-white/50">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-24 lg:py-32">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={itemVariants}
            className="text-primary-container text-xs uppercase tracking-[0.3em] font-semibold mb-4"
          >
            Our Standards
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-white mb-5"
          >
            Why Clients Choose xRENT
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-white/60 max-w-xl mx-auto text-lg font-light"
          >
            Every decision we make is guided by one question: does this create a
            better experience for our clients?
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {aboutValues.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group flex flex-col gap-5 p-8 bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/5 group-hover:border-primary-container/40 group-hover:bg-primary-container/10 transition-all duration-300">
                <Icon
                  size={22}
                  className="text-white/50 group-hover:text-primary-container transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
              <div className="mt-auto h-[1px] w-0 bg-primary-container group-hover:w-8 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-[#050505] border-t border-b border-white/5 py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={itemVariants}
              className="text-primary-container text-xs uppercase tracking-[0.3em] font-semibold mb-4"
            >
              Our Journey
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-semibold text-white mb-5"
            >
              Milestones That Shaped xRENT
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((item, i) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-start gap-8 flex-row ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  variants={slideUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-container border-2 border-background mt-1.5" />
                  <div className="hidden md:block md:w-1/2" />
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-10">
                    <span className="text-primary-container text-xs font-bold uppercase tracking-widest">
                      {item.year}
                    </span>
                    <h3 className="text-white font-semibold text-xl mt-1 mb-2">
                      {item.event}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-24 lg:py-32">
        <motion.div
          className="relative overflow-hidden bg-[#0a0a0a] border border-white/10 p-10 md:p-20 text-center rounded-2xl"
          variants={slideUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="absolute inset-0 z-0">
            <img
              alt="CTA background"
              className="w-full h-full object-cover brightness-30"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-ZZqZwJyahnH62H2krJFjyDaW_SeyMQayXx-fTkpwkj-cZJcSkCKxWYA2WgULl0ZWo2lfuT8NZJ73jY-eM3hud4FUXcYHfPbIQRvmvLdUowBDUAEmkpsLScjdjt-aIEK85ZA2_mjlwSl05uN1hmfYdR3JkvG4R1xYhk80qp6NGiWRh_vkeXj2lvJuad8MEP1DthzlLIgaAiSb7518aqexvHNuUR3ubaEpHJ2HKV6UZrq_MSqr17zk6O8t5_E6rF9TzeLQ1WTqtxdI"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-semibold text-white mb-5">
              Ready to Experience the Difference?
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10 font-light">
              Browse our curated collection of the world&apos;s finest vehicles and
              reserve yours today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/fleet"
                className="inline-block bg-primary-container text-white px-8 md:px-10 py-4 rounded-sm text-[12px] font-semibold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                View Our Fleet
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-white/20 text-white px-8 md:px-10 py-4 rounded-sm text-[12px] font-semibold uppercase tracking-[0.2em] hover:border-white/60 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}