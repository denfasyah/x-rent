"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
};

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">
        <motion.div
          className="relative overflow-hidden group rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={scaleIn}
        >
          <img 
            className="w-full h-[400px] object-cover brightness-50 grayscale-[0.5] transition-transform duration-1000 group-hover:scale-105" 
            alt="Ready to Redefine Your Drive" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPzN5u9ppNQ8Lkp2-Z_yRwx2YlnEGY76kSHLe3hHVl-7oRiCRPHdY45ftoTxi85nETAelT-Oly4WMIfG8tR94g788nuJ6H4hDL8g-BWxrbghukHmh5pZo8Wsn_k4YrE1WpAr0c4T8Qn46fCOEWYlm2yh_ue7MdAQTxoFsGP6z3VBssjKXVl1r4PGaza2wQS22uvecJY8zCx0nt_do0-a3iIOgjxM_Yja9VtjvXSaGKD60WGUkUKfND5xx2eggC8VQuaG3PqKCgIPIf" 
          />
          <motion.div
            variants={fadeUp}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-6"
          >
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg leading-[1.1] tracking-tight text-white">
              {t("cta.heading")}
            </h2>
            <p className="max-w-md font-body-lg text-body-lg text-secondary">
              {t("cta.description")}
            </p>
            <Link 
              href="/contact" 
              className="bg-primary-container text-white px-12 py-4 font-label-sm uppercase tracking-widest hover:brightness-125 transition-all duration-300 shadow-2xl shadow-primary-container/20 mt-4"
            >
              {t("cta.btn")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
