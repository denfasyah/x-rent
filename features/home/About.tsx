"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const bentoItem: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

const IMG_COMFORT = "https://lh3.googleusercontent.com/aida-public/AB6AXuDPzN5u9ppNQ8Lkp2-Z_yRwx2YlnEGY76kSHLe3hHVl-7oRiCRPHdY45ftoTxi85nETAelT-Oly4WMIfG8tR94g788nuJ6H4hDL8g-BWxrbghukHmh5pZo8Wsn_k4YrE1WpAr0c4T8Qn46fCOEWYlm2yh_ue7MdAQTxoFsGP6z3VBssjKXVl1r4PGaza2wQS22uvecJY8zCx0nt_do0-a3iIOgjxM_Yja9VtjvXSaGKD60WGUkUKfND5xx2eggC8VQuaG3PqKCgIPIf";
const IMG_STRESS_FREE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCiUg9lQA8M6zHXZUBe2OTFv4P2ACBE_-mXIypoNDSBcUkNLU5aWanik8FU4XpT7DlTXkXAXRl_D-ZbsX0yvZwiBR5GXeZpJqca6sb2O2w6UxHLLB0ogyyX-d98-LIW4FR1a4ooiN18RkoTMB0iBLCkFabIWiBYC4npcxpHyJDj04UEP1bHGv7wZvcjOa2VZ9O_QG34xBrd3IJg9x48A1aPmxbv0d5JnY0M3xVLxbaiHwI06IZasCOuhZBvAWDGlCdpm4--exenlzgk";
const IMG_BANNER = "/cars/porsche9111.png";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-24 bg-black" id="about">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 flex flex-col gap-10">

        {/* ── Part 1: Split headline + copy ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 md:items-end"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.h2
            variants={fadeUp}
            className="font-headline-xl text-headline-xl-mobile md:text-headline-lg leading-[1.1] tracking-tight text-white"
          >
            {t("about.heading").split("\n").map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h2>
          <motion.div variants={fadeUp} className="flex flex-col gap-6 md:max-w-sm">
            <p className="font-body-md text-body-md text-secondary">{t("about.description")}</p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-white font-medium hover:text-primary-container transition-colors duration-300 font-body-md text-body-md w-fit"
            >
              <span className="w-6 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-8" />
              {t("about.cta")}
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Part 2: Full-width cinematic banner ── */}
        <motion.div
          className="relative w-full aspect-[16/7] sm:aspect-[16/6] overflow-hidden rounded-sm"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <img
            src={IMG_BANNER}
            alt={t("about.bento.thrill")}
            className="w-full h-full object-cover grayscale-[0.15] scale-105 hover:scale-100 transition-transform duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <motion.div
            className="absolute bottom-0 left-0 p-8 sm:p-10 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg leading-[1.1] text-white mb-3">
              {t("about.bento.thrill").split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h3>
            <p className="text-secondary font-body-md text-body-md">
              {t("about.bento.thrillDesc")}
            </p>
          </motion.div>
        </motion.div>

        {/* ── Part 3: Bento grid — Mobile ── */}
        <motion.div
          className="flex flex-col gap-1 lg:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Easy Comfort */}
          <motion.div variants={bentoItem} custom={0} className="relative overflow-hidden rounded-sm h-[320px]">
            <img src={IMG_COMFORT} alt={t("about.bento.comfort")} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">{t("about.bento.comfort")}</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[260px]">
                {t("about.bento.comfortDesc")}
              </p>
            </div>
          </motion.div>

          {/* Freedom of Choice */}
          <motion.div variants={bentoItem} custom={1} className="bg-primary-container rounded-sm p-8 flex flex-col justify-between min-h-[260px]">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-white">{t("about.bento.freedom")}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{t("about.bento.freedomDesc")}</p>
            </div>
            <Link
              href="/fleet"
              className="group inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all duration-300 mt-8"
            >
              {t("about.bento.freedomCta")}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Seamless Process */}
          <motion.div variants={bentoItem} custom={2} className="bg-[#111111] border border-white/5 rounded-sm p-8 flex flex-col justify-between min-h-[200px]">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-white">{t("about.bento.seamless")}</h3>
              <p className="text-secondary text-sm leading-relaxed">{t("about.bento.seamlessDesc")}</p>
            </div>
            <Link
              href="/#how-it-works"
              className="group inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all duration-300 mt-6"
            >
              {t("about.bento.seamlessCta")}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stress-Free Service */}
          <motion.div variants={bentoItem} custom={3} className="relative overflow-hidden rounded-sm h-[320px]">
            <img src={IMG_STRESS_FREE} alt={t("about.bento.stressFree")} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">{t("about.bento.stressFree")}</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[260px]">
                {t("about.bento.stressFreeDesc")}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Part 3: Bento — Desktop ── */}
        <motion.div
          className="hidden lg:grid gap-1"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            height: "560px",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Col 1: Easy Comfort — spans both rows */}
          <motion.div
            variants={bentoItem}
            custom={0}
            className="relative overflow-hidden rounded-sm"
            style={{ gridColumn: "1", gridRow: "1 / 3" }}
          >
            <img src={IMG_COMFORT} alt={t("about.bento.comfort")} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">{t("about.bento.comfort")}</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[220px]">
                {t("about.bento.comfortDesc")}
              </p>
            </div>
          </motion.div>

          {/* Col 2 top: Freedom of Choice */}
          <motion.div
            variants={bentoItem}
            custom={1}
            className="bg-primary-container rounded-sm p-8 flex flex-col justify-between"
            style={{ gridColumn: "2", gridRow: "1" }}
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-white">{t("about.bento.freedom")}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{t("about.bento.freedomDesc")}</p>
            </div>
            <Link
              href="/fleet"
              className="group inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all duration-300"
            >
              {t("about.bento.freedomCta")}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Col 2 bottom: Seamless Process */}
          <motion.div
            variants={bentoItem}
            custom={2}
            className="bg-[#111111] border border-white/5 rounded-sm p-8 flex flex-col justify-between"
            style={{ gridColumn: "2", gridRow: "2" }}
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-white">{t("about.bento.seamless")}</h3>
              <p className="text-secondary text-sm leading-relaxed">{t("about.bento.seamlessDesc")}</p>
            </div>
            <Link
              href="/#how-it-works"
              className="group inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all duration-300"
            >
              {t("about.bento.seamlessCta")}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Col 3: Stress-Free Service — spans both rows */}
          <motion.div
            variants={bentoItem}
            custom={3}
            className="relative overflow-hidden rounded-sm"
            style={{ gridColumn: "3", gridRow: "1 / 3" }}
          >
            <img src={IMG_STRESS_FREE} alt={t("about.bento.stressFree")} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">{t("about.bento.stressFree")}</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[220px]">
                {t("about.bento.stressFreeDesc")}
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}