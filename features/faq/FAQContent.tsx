"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqCategories } from "@/data/faq";
import { WHATSAPP_NUMBER } from "@/data/contact";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function FAQContent() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].category);

  const toggle = (key: string) => setOpenKey(openKey === key ? null : key);
  const activeData = faqCategories.find((c) => c.category === activeCategory);

  return (
    <div className="pt-20 bg-background min-h-screen pb-20">

      {/* Hero */}
      <section className="relative w-full overflow-hidden border-b border-white/5 h-[35vh] min-h-[260px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-background" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <motion.div
          className="relative z-10 text-center px-5 md:px-6 max-w-[1280px] mx-auto mt-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} custom={0} className="text-primary-container text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Help Center
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-[36px] md:text-[56px] font-semibold text-white leading-tight mb-4">
            Frequently Asked <span className="text-primary-container">Questions</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-white/60 text-[15px] md:text-[17px] font-light max-w-xl mx-auto">
            Everything you need to know about renting with xRENT. Can&apos;t find your answer? Chat with us directly.
          </motion.p>
        </motion.div>
      </section>

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
            <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-5">Categories</p>
            <nav className="space-y-1">
              {faqCategories.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => { setActiveCategory(cat.category); setOpenKey(null); }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.category
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
              <h3 className="text-white font-semibold mb-2">Still have questions?</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">Our team is available 24/7. Chat with us directly on WhatsApp.</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-container text-sm font-semibold hover:text-white transition-colors"
              >
                Chat Now <span className="text-xs">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Accordion */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <motion.h2
              key={activeCategory}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl font-semibold text-white mb-8 pb-4 border-b border-white/5"
            >
              {activeCategory}
            </motion.h2>

            <motion.div
              key={activeCategory + "-list"}
              className="space-y-0"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {activeData?.items.map((item, i) => {
                const key = `${activeCategory}-${i}`;
                const isOpen = openKey === key;
                return (
                  <motion.div key={key} variants={fadeUp} custom={i} className="border-b border-white/5 overflow-hidden">
                    <button
                      onClick={() => toggle(key)}
                      className="w-full py-6 flex items-center justify-between text-left gap-4 group"
                    >
                      <span className={`font-medium text-[15px] transition-colors ${isOpen ? "text-primary-container" : "text-white group-hover:text-primary-container"}`}>
                        {item.question}
                      </span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown size={18} className={`shrink-0 ${isOpen ? "text-primary-container" : "text-white/30"}`} />
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
                          <p className="pb-6 text-white/55 text-[14px] leading-relaxed">{item.answer}</p>
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
            <h3 className="text-white font-semibold text-xl mb-1">Ready to book your luxury experience?</h3>
            <p className="text-white/50 text-sm">Browse our curated fleet and reserve your perfect vehicle today.</p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/contact" className="border border-white/20 text-white px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-widest hover:border-white/50 transition-all">
              Contact Us
            </Link>
            <Link href="/fleet" className="bg-primary-container text-white px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
              View Fleet
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
