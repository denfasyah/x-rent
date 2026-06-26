"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  category: string;
  items: FaqItem[];
}

const faqData: FaqCategory[] = [
  {
    category: "Booking & Reservation",
    items: [
      {
        question: "Bagaimana cara memesan kendaraan di xRENT?",
        answer: "Proses pemesanan sangat mudah. Pilih kendaraan di halaman Fleet, klik tombol 'Book via WhatsApp', isi formulir reservasi dengan nama, tanggal sewa, dan lokasi pengantaran, lalu Anda akan diarahkan ke WhatsApp kami. Tim concierge akan mengkonfirmasi ketersediaan dalam waktu singkat.",
      },
      {
        question: "Berapa lama proses konfirmasi booking?",
        answer: "Kami biasanya mengkonfirmasi ketersediaan kendaraan dalam waktu 15-30 menit setelah permintaan diterima. Untuk pemesanan di luar jam operasional, konfirmasi akan dikirimkan di hari kerja berikutnya.",
      },
      {
        question: "Bisakah saya membatalkan atau mengubah reservasi?",
        answer: "Ya, pembatalan atau perubahan reservasi dapat dilakukan maksimal 48 jam sebelum tanggal sewa dimulai tanpa dikenakan biaya. Perubahan kurang dari 48 jam mungkin dikenakan biaya administrasi. Hubungi tim kami via WhatsApp untuk proses lebih lanjut.",
      },
      {
        question: "Apakah saya bisa memesan untuk orang lain?",
        answer: "Tentu saja. Anda bisa memesan atas nama orang lain, namun pengemudi utama harus hadir saat pengambilan kendaraan dengan membawa dokumen identitas dan SIM yang valid.",
      },
    ],
  },
  {
    category: "Dokumen & Persyaratan",
    items: [
      {
        question: "Dokumen apa saja yang diperlukan untuk menyewa?",
        answer: "Anda memerlukan: (1) KTP atau Paspor yang masih berlaku, (2) SIM A yang masih berlaku minimal 2 tahun, (3) Kartu kredit atau bukti kemampuan finansial untuk deposit. Untuk kendaraan kategori supercar, mungkin diperlukan dokumen tambahan.",
      },
      {
        question: "Apakah diperlukan deposit jaminan?",
        answer: "Ya, setiap penyewaan memerlukan deposit jaminan yang besarnya bervariasi tergantung kategori kendaraan. Deposit akan dikembalikan sepenuhnya dalam 1-3 hari kerja setelah kendaraan dikembalikan dalam kondisi semula.",
      },
      {
        question: "Berapa batas usia minimum untuk menyewa?",
        answer: "Pengemudi harus berusia minimal 21 tahun dan memiliki SIM yang sudah aktif minimal 2 tahun. Untuk kendaraan supercar (Ferrari, Lamborghini, dll), batas usia minimum adalah 25 tahun.",
      },
    ],
  },
  {
    category: "Kendaraan & Layanan",
    items: [
      {
        question: "Apakah semua kendaraan diasuransikan?",
        answer: "Ya, semua kendaraan dalam armada xRENT dilindungi oleh asuransi komprehensif premium. Asuransi mencakup kerusakan akibat kecelakaan, pencurian, dan tanggung jawab pihak ketiga. Detail cakupan akan dijelaskan saat proses reservasi.",
      },
      {
        question: "Apakah tersedia layanan antar-jemput kendaraan?",
        answer: "Kami menawarkan layanan pengantaran dan penjemputan ke lokasi pilihan Anda (hotel, bandara, rumah, kantor) untuk wilayah DKI Jakarta, Bali, Surabaya, dan Bandung. Untuk lokasi di luar area tersebut dapat dikenakan biaya tambahan.",
      },
      {
        question: "Bagaimana dengan kebijakan jarak tempuh?",
        answer: "Sebagian besar penyewaan kami sudah termasuk jarak tempuh tidak terbatas (unlimited mileage). Untuk beberapa kendaraan tertentu mungkin berlaku batas jarak harian — detailnya akan tertera di halaman masing-masing kendaraan.",
      },
      {
        question: "Apakah kendaraan bisa dibawa ke luar kota atau luar pulau?",
        answer: "Perjalanan antar kota dalam pulau yang sama umumnya diizinkan dengan pemberitahuan sebelumnya. Perjalanan antar pulau memerlukan izin khusus dan mungkin dikenakan biaya tambahan. Hubungi tim kami untuk rencana perjalanan Anda.",
      },
    ],
  },
  {
    category: "Pembayaran & Harga",
    items: [
      {
        question: "Metode pembayaran apa yang diterima?",
        answer: "Kami menerima berbagai metode pembayaran: transfer bank, kartu kredit/debit, dan dompet digital (GoPay, OVO, Dana). Detail metode pembayaran akan dikonfirmasi oleh tim concierge kami.",
      },
      {
        question: "Apakah ada biaya tersembunyi?",
        answer: "Tidak ada biaya tersembunyi. Harga yang tercantum adalah harga sewa per hari sudah termasuk asuransi dan unlimited mileage. Biaya tambahan hanya berlaku jika ada layanan tambahan yang diminta (seperti supir, pengantaran ke luar kota, dll).",
      },
      {
        question: "Kapan saya harus membayar?",
        answer: "Pembayaran DP (minimal 50%) dilakukan setelah konfirmasi ketersediaan dari tim kami. Pelunasan dapat dilakukan saat pengantaran kendaraan atau sesuai kesepakatan dengan tim kami.",
      },
    ],
  },
];

export default function FAQContent() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);

  const toggle = (key: string) => setOpenKey(openKey === key ? null : key);
  const activeData = faqData.find((c) => c.category === activeCategory);

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
        <div className="relative z-10 text-center px-5 md:px-6 max-w-[1280px] mx-auto mt-10">
          <p className="text-primary-container text-xs uppercase tracking-[0.3em] font-semibold mb-4">Help Center</p>
          <h1 className="text-[36px] md:text-[56px] font-semibold text-white leading-tight mb-4">
            Frequently Asked <span className="text-primary-container">Questions</span>
          </h1>
          <p className="text-white/60 text-[15px] md:text-[17px] font-light max-w-xl mx-auto">
            Everything you need to know about renting with xRENT. Can't find your answer? Chat with us directly.
          </p>
        </div>
      </section>

      {/* FAQ Body */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Sidebar: Categories */}
          <div className="lg:col-span-1">
            <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-5">Categories</p>
            <nav className="space-y-1">
              {faqData.map((cat) => (
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

            {/* WhatsApp CTA */}
            <div className="mt-10 p-6 bg-[#0a0a0a] border border-white/10 rounded-xl">
              <MessageCircle size={28} className="text-primary-container mb-3" />
              <h3 className="text-white font-semibold mb-2">Still have questions?</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">Our team is available 24/7. Chat with us directly on WhatsApp.</p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-container text-sm font-semibold hover:text-white transition-colors"
              >
                Chat Now
                <span className="text-xs">→</span>
              </a>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-semibold text-white mb-8 pb-4 border-b border-white/5">{activeCategory}</h2>
            <div className="space-y-0">
              {activeData?.items.map((item, i) => {
                const key = `${activeCategory}-${i}`;
                const isOpen = openKey === key;
                return (
                  <div key={key} className="border-b border-white/5 overflow-hidden">
                    <button
                      onClick={() => toggle(key)}
                      className="w-full py-6 flex items-center justify-between text-left gap-4 group"
                    >
                      <span className={`font-medium text-[15px] transition-colors ${isOpen ? "text-primary-container" : "text-white group-hover:text-primary-container"}`}>
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary-container" : "text-white/30"}`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-60 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"}`}
                    >
                      <p className="text-white/55 text-[14px] leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 pb-8">
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
      </section>
    </div>
  );
}
