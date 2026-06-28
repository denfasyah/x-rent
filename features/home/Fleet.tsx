"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { getCars } from "@/data/cars";
import CarCard from "@/features/fleet/CarCard";
import { useLanguage } from "@/lib/LanguageContext";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function Fleet() {
  const { t, lang } = useLanguage();

  return (
    <section className="py-20 md:py-24 bg-black" id="fleet">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">

        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between mb-10 gap-8 md:items-end"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="md:w-1/2">
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg leading-[1.1] font-medium tracking-tight text-white">
              {t("fleet.heading").split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="md:w-1/2 md:max-w-md flex flex-col justify-end gap-6">
            <p className="font-body-md text-body-md text-secondary">{t("fleet.description")}</p>
            <Link
              href="/fleet"
              className="group inline-flex items-center gap-3 text-white font-medium hover:text-primary-container transition-colors duration-300 font-body-md text-body-md w-fit"
            >
              <span className="w-6 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-8" />
              {t("fleet.cta")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Cars Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {getCars(lang).map((car, i) => (
            <motion.div key={car.id} custom={i} variants={cardVariant}>
              <CarCard car={car} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}