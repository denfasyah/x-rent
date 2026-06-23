"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Dokumen apa saja yang diperlukan untuk menyewa?",
    answer: "Anda memerlukan identitas resmi yang valid (KTP/Passport), SIM yang masih berlaku, dan dokumen pendukung lainnya sesuai syarat dan ketentuan kami."
  },
  {
    question: "Apakah diperlukan deposit jaminan?",
    answer: "Ya, untuk setiap penyewaan kami memerlukan deposit jaminan yang akan dikembalikan sepenuhnya setelah kendaraan dikembalikan dalam kondisi semula."
  },
  {
    question: "Apakah tersedia layanan antar-jemput?",
    answer: "Kami menawarkan layanan pengantaran dan penjemputan gratis untuk wilayah kota utama. Untuk lokasi lainnya, dapat dikenakan biaya tambahan."
  },
  {
    question: "Bagaimana dengan kebijakan jarak tempuh?",
    answer: "Sebagian besar penyewaan kami mencakup jarak tempuh harian yang dermawan. Ada opsi untuk jarak tempuh tak terbatas pada model tertentu."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row gap-10">

          {/* Left — label + heading + contact link */}
          <div className="md:w-1/3 space-y-4">
            <span className="inline-flex items-center gap-2 text-white font-label-sm text-label-sm uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg leading-[1.1] tracking-tight text-white">
              Your Questions — Answered
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              Tim ahli kami berdedikasi untuk memahami kebutuhan unik Anda. Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-white font-medium hover:text-primary-container transition-colors duration-300 font-body-md text-body-md w-fit mt-2"
            >
              <span className="w-6 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-8" />
              Contact Us
            </Link>
          </div>

          {/* Right — accordion */}
          <div className="md:w-2/3 space-y-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-white/5 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 flex items-center justify-between text-left hover:text-primary-container transition-colors duration-300 gap-4"
                  >
                    <span className="font-body-lg text-body-lg font-medium">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-secondary transition-transform duration-300 ${isOpen ? "rotate-180 text-primary-container" : ""}`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-40 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"}`}
                  >
                    <p className="text-secondary font-body-md text-body-md leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
