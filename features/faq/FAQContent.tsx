"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { faqCategories, faqCategoriesId } from "@/data/faq";
import { WHATSAPP_NUMBER } from "@/data/contact";
import { useLanguage } from "@/lib/LanguageContext";
import PageHero from "@/components/ui/PageHero";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const copy = {
  en: {
    categoriesLabel: "Categories",
    chatTitle: "Still have questions?",
    chatDesc: "Our team is available 24/7. Chat with us directly on WhatsApp.",
    chatBtn: "Chat Now",
    ctaHeading: "Ready to book your luxury experience?",
    ctaBody: "Browse our curated fleet and reserve your perfect vehicle today.",
    ctaBtnContact: "Contact Us",
    ctaBtnFleet: "View Fleet",
  },
  id: {
    categoriesLabel: "Kategori",
    chatTitle: "Masih ada pertanyaan?",
    chatDesc: "Tim kami tersedia 24/7. Chat langsung dengan kami di WhatsApp.",
    chatBtn: "Chat Sekarang",
    ctaHeading: "Siap memesan pengalaman mewah Anda?",
    ctaBody: "Jelajahi armada kami dan reservasi kendaraan sempurna Anda hari ini.",
    ctaBtnContact: "Hubungi Kami",
    ctaBtnFleet: "Lihat Armada",
  },
} as const;

export default function FAQContent() {
  const { t, lang } = useLanguage();
  const c = copy[lang];

  const currentCategories = lang === "id" ? faqCategoriesId : faqCategories;

  const [openKey, setOpenKey] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(currentCategories[0].category);

  const toggle = (key: string) => setOpenKey(openKey === key ? null : key);

  const safeCat = currentCategories.find((cat) => cat.category === activeCategory)
    ? activeCategory
    : currentCategories[0].category;

  const safeActiveData = currentCategories.find((cat) => cat.category === safeCat);

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div className="pt-20 bg-background min-h-screen pb-20">

      {/* Hero */}
      <PageHero
        eyebrow={t("page.faq.eyebrow")}
        title={
          <>
            {t("page.faq.title1")}{" "}
            <span className="text-primary-container">{t("page.faq.title2")}</span>
          </>
        }
        description={t("page.faq.description")}
        heightClass="h-[35vh] min-h-[260px]"
      />

      {/* FAQ Body */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-5">
              {c.categoriesLabel}
            </p>
            <nav className="space-y-1">
              {currentCategories.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => {
                    setActiveCategory(cat.category);
                    setOpenKey(null);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    safeCat === cat.category
                      ? "bg-primary-container text-white"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </nav>

            <motion.div
              className="mt-10 p-6 bg-[#0a0a0a] border border-white/10 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <MessageCircle size={28} className="text-primary-container mb-3" />
              <h3 className="text-white font-semibold mb-2">{c.chatTitle}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{c.chatDesc}</p>
             <a href={waHref} target="_blank" rel="noopener noreferrer" className="text-primary-container text-sm font-semibold">
              {c.chatBtn}
                 <span>{"→"}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Accordion */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <motion.h2
              key={safeCat}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl font-semibold text-white mb-8 pb-4 border-b border-white/5"
            >
              {safeCat}
            </motion.h2>

            <motion.div
              key={safeCat + "-list"}
              className="space-y-0"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {safeActiveData?.items.map((item, i) => {
                const key = `${safeCat}-${i}`;
                const isOpen = openKey === key;
                return (
                  <motion.div
                    key={key}
                    variants={fadeUp}
                    custom={i}
                    className="border-b border-white/5 overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full py-6 flex items-center justify-between text-left gap-4 group"
                    >
                      <span
                        className={`font-medium text-[15px] transition-colors ${
                          isOpen
                            ? "text-primary-container"
                            : "text-white group-hover:text-primary-container"
                        }`}
                      >
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown
                          size={18}
                          className={`shrink-0 ${
                            isOpen ? "text-primary-container" : "text-white/30"
                          }`}
                        />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                          <p className="pb-6 text-white/55 text-[14px] leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Bottom CTA */}
      <motion.section
        className="max-w-[1280px] mx-auto px-5 md:px-6 pb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#0a0a0a] border border-white/10 rounded-xl px-8 py-8">
          <div>
            <h3 className="text-white font-semibold text-xl mb-1">{c.ctaHeading}</h3>
            <p className="text-white/50 text-sm">{c.ctaBody}</p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="border border-white/20 text-white px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-widest hover:border-white/50 transition-all"
            >
              {c.ctaBtnContact}
            </Link>
            <Link
              href="/fleet"
              className="bg-primary-container text-white px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
            >
              {c.ctaBtnFleet}
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  );
}