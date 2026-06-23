"use client";

import { useState } from "react";
import Link from "next/link";

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
    <section className="py-[160px] bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3 space-y-4">
            <h2 className="font-headline-lg text-headline-lg">Your Questions — Answered</h2>
            <p className="font-body-md text-body-md text-secondary">
              Tim ahli kami berdedikasi untuk memahami kebutuhan unik Anda. Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami.
            </p>
            <Link 
              href="/contact" 
              className="inline-block text-primary-container font-label-sm uppercase tracking-widest border-b border-primary-container pb-1 pt-4 hover:tracking-[0.2em] transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
          <div className="md:w-2/3 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="group border-b border-outline-variant/10 overflow-hidden">
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 flex items-center justify-between text-left hover:text-primary-container transition-colors duration-300"
                  >
                    <span className="font-body-lg text-body-lg font-medium">{faq.question}</span>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="pb-6 text-secondary font-body-md text-body-md">{faq.answer}</p>
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
