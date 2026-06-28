"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { faqs, faqsId } from "@/data/faq";
import { useLanguage } from "@/lib/LanguageContext";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const accordionVariant: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function FAQ() {
  const { t, lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentFaqs = lang === "id" ? faqsId : faqs;

  return (
    <section className="py-20 md:py-24 bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {/* Left — label + heading + contact link */}
          <motion.div variants={fadeUp} className="md:w-1/3 space-y-4">
            <span className="inline-flex items-center gap-2 text-white font-label-sm text-label-sm uppercase tracking-widest">
              {t("faq.label")}
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg leading-[1.1] tracking-tight text-white">
              {t("faq.heading")}
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              {t("faq.description")}
            </p>
            <div className="flex flex-col gap-2 mt-4">
              {/* <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-white font-medium hover:text-primary-container transition-colors duration-300 font-body-md text-body-md w-fit"
              >
                <span className="w-6 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-8" />
                {t("faq.contactLink")}
              </Link> */}
              <Link
                href="/faq"
                className="group inline-flex items-center gap-3 text-white font-medium hover:text-primary-container transition-colors duration-300 font-body-md text-body-md w-fit"
              >
                <span className="w-6 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-8" />
                {t("faq.allFaqLink")}
              </Link>
            </div>
          </motion.div>

          {/* Right — accordion */}
          <motion.div variants={fadeUp} className="md:w-2/3 space-y-0">
            {currentFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div key={index} custom={index} variants={accordionVariant} className="border-b border-white/5 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 flex items-center justify-between text-left hover:text-primary-container transition-colors duration-300 gap-4"
                  >
                    <span className="font-body-lg text-body-lg font-medium">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-secondary transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary-container" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
                    }`}
                  >
                    <p className="text-secondary font-body-md text-body-md leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
