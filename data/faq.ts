export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

// Short list used on the homepage FAQ section (always shown in current language via translations)
export const faqs: FaqItem[] = [
  {
    question: "What documents are required to rent?",
    answer:
      "You will need a valid government-issued ID (National ID/Passport), a valid driver's license, and any supporting documents as per our terms and conditions.",
  },
  {
    question: "Is a security deposit required?",
    answer:
      "Yes, a security deposit is required for every rental. It will be fully refunded after the vehicle is returned in its original condition.",
  },
  {
    question: "Is a delivery and pickup service available?",
    answer:
      "We offer free delivery and pickup for major city areas. For other locations, an additional fee may apply.",
  },
  {
    question: "What is the mileage policy?",
    answer:
      "Most of our rentals include a generous daily mileage allowance. Unlimited mileage options are available for certain models.",
  },
];

// Indonesian variants for homepage FAQ (used when lang === "id")
export const faqsId: FaqItem[] = [
  {
    question: "Dokumen apa saja yang diperlukan untuk menyewa?",
    answer:
      "Anda memerlukan identitas resmi yang valid (KTP/Passport), SIM yang masih berlaku, dan dokumen pendukung lainnya sesuai syarat dan ketentuan kami.",
  },
  {
    question: "Apakah diperlukan deposit jaminan?",
    answer:
      "Ya, untuk setiap penyewaan kami memerlukan deposit jaminan yang akan dikembalikan sepenuhnya setelah kendaraan dikembalikan dalam kondisi semula.",
  },
  {
    question: "Apakah tersedia layanan antar-jemput?",
    answer:
      "Kami menawarkan layanan pengantaran dan penjemputan gratis untuk wilayah kota utama. Untuk lokasi lainnya, dapat dikenakan biaya tambahan.",
  },
  {
    question: "Bagaimana dengan kebijakan jarak tempuh?",
    answer:
      "Sebagian besar penyewaan kami mencakup jarak tempuh harian yang dermawan. Ada opsi untuk jarak tempuh tak terbatas pada model tertentu.",
  },
];

// Full categorized list used on the dedicated /faq page — English
export const faqCategories: FaqCategory[] = [
  {
    category: "Booking & Reservation",
    items: [
      {
        question: "How do I book a vehicle at xRENT?",
        answer:
          "The booking process is simple. Choose a vehicle on the Fleet page, click 'Book via WhatsApp', fill in the reservation form with your name, rental dates, and delivery location, and you'll be directed to our WhatsApp. Our concierge team will confirm availability promptly.",
      },
      {
        question: "How long does booking confirmation take?",
        answer:
          "We typically confirm vehicle availability within 15–30 minutes of receiving a request. For bookings outside operating hours, confirmation will be sent on the next business day.",
      },
      {
        question: "Can I cancel or modify my reservation?",
        answer:
          "Yes, cancellations or changes can be made up to 48 hours before the rental start date at no charge. Changes within 48 hours may incur an administrative fee. Contact our team via WhatsApp to proceed.",
      },
      {
        question: "Can I book for someone else?",
        answer:
          "Absolutely. You can book on behalf of someone else, but the primary driver must be present at vehicle pickup with valid ID and driver's license.",
      },
    ],
  },
  {
    category: "Documents & Requirements",
    items: [
      {
        question: "What documents are required to rent?",
        answer:
          "You will need: (1) A valid National ID or Passport, (2) A valid driver's license with at least 2 years of history, (3) A credit card or proof of financial capability for the deposit. Additional documents may be required for supercar-category vehicles.",
      },
      {
        question: "Is a security deposit required?",
        answer:
          "Yes, every rental requires a security deposit. The amount varies depending on the vehicle category. The deposit will be fully refunded within 1–3 business days after the vehicle is returned in its original condition.",
      },
      {
        question: "What is the minimum age requirement to rent?",
        answer:
          "The driver must be at least 21 years old and hold a driver's license that has been active for at least 2 years. For supercar vehicles (Ferrari, Lamborghini, etc.), the minimum age is 25.",
      },
    ],
  },
  {
    category: "Vehicles & Services",
    items: [
      {
        question: "Are all vehicles insured?",
        answer:
          "Yes, all vehicles in the xRENT fleet are covered by premium comprehensive insurance. Coverage includes damage from accidents, theft, and third-party liability.",
      },
      {
        question: "Is a vehicle delivery and pickup service available?",
        answer:
          "We offer delivery and pickup to your chosen location (hotel, airport, home, office) within the DKI Jakarta, Bali, Surabaya, and Bandung areas. An additional fee may apply for locations outside these areas.",
      },
      {
        question: "What is the mileage policy?",
        answer:
          "Most of our rentals include unlimited mileage. For certain vehicles, a daily mileage limit may apply — details will be listed on each vehicle's page.",
      },
      {
        question: "Can the vehicle be taken to another city or island?",
        answer:
          "Inter-city travel within the same island is generally permitted with prior notice. Inter-island travel requires special permission and may incur additional charges. Contact our team for your travel plans.",
      },
    ],
  },
  {
    category: "Payment & Pricing",
    items: [
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept various payment methods: bank transfer, credit/debit card, and digital wallets (GoPay, OVO, Dana). Payment method details will be confirmed by our concierge team.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "There are no hidden fees. The listed price is the daily rental rate inclusive of insurance and unlimited mileage. Additional charges only apply for requested add-on services.",
      },
      {
        question: "When do I need to pay?",
        answer:
          "A down payment (minimum 50%) is made after confirmation of availability from our team. The remaining balance can be settled at vehicle delivery or as agreed with our team.",
      },
    ],
  },
];

// Indonesian FAQ categories (for ID language)
export const faqCategoriesId: FaqCategory[] = [
  {
    category: "Pemesanan & Reservasi",
    items: [
      {
        question: "Bagaimana cara memesan kendaraan di xRENT?",
        answer:
          "Proses pemesanan sangat mudah. Pilih kendaraan di halaman Fleet, klik tombol 'Book via WhatsApp', isi formulir reservasi dengan nama, tanggal sewa, dan lokasi pengantaran, lalu Anda akan diarahkan ke WhatsApp kami. Tim concierge akan mengkonfirmasi ketersediaan dalam waktu singkat.",
      },
      {
        question: "Berapa lama proses konfirmasi booking?",
        answer:
          "Kami biasanya mengkonfirmasi ketersediaan kendaraan dalam waktu 15-30 menit setelah permintaan diterima. Untuk pemesanan di luar jam operasional, konfirmasi akan dikirimkan di hari kerja berikutnya.",
      },
      {
        question: "Bisakah saya membatalkan atau mengubah reservasi?",
        answer:
          "Ya, pembatalan atau perubahan reservasi dapat dilakukan maksimal 48 jam sebelum tanggal sewa dimulai tanpa dikenakan biaya. Perubahan kurang dari 48 jam mungkin dikenakan biaya administrasi. Hubungi tim kami via WhatsApp untuk proses lebih lanjut.",
      },
      {
        question: "Apakah saya bisa memesan untuk orang lain?",
        answer:
          "Tentu saja. Anda bisa memesan atas nama orang lain, namun pengemudi utama harus hadir saat pengambilan kendaraan dengan membawa dokumen identitas dan SIM yang valid.",
      },
    ],
  },
  {
    category: "Dokumen & Persyaratan",
    items: [
      {
        question: "Dokumen apa saja yang diperlukan untuk menyewa?",
        answer:
          "Anda memerlukan: (1) KTP atau Paspor yang masih berlaku, (2) SIM A yang masih berlaku minimal 2 tahun, (3) Kartu kredit atau bukti kemampuan finansial untuk deposit. Untuk kendaraan kategori supercar, mungkin diperlukan dokumen tambahan.",
      },
      {
        question: "Apakah diperlukan deposit jaminan?",
        answer:
          "Ya, setiap penyewaan memerlukan deposit jaminan yang besarnya bervariasi tergantung kategori kendaraan. Deposit akan dikembalikan sepenuhnya dalam 1-3 hari kerja setelah kendaraan dikembalikan dalam kondisi semula.",
      },
      {
        question: "Berapa batas usia minimum untuk menyewa?",
        answer:
          "Pengemudi harus berusia minimal 21 tahun dan memiliki SIM yang sudah aktif minimal 2 tahun. Untuk kendaraan supercar (Ferrari, Lamborghini, dll), batas usia minimum adalah 25 tahun.",
      },
    ],
  },
  {
    category: "Kendaraan & Layanan",
    items: [
      {
        question: "Apakah semua kendaraan diasuransikan?",
        answer:
          "Ya, semua kendaraan dalam armada xRENT dilindungi oleh asuransi komprehensif premium. Asuransi mencakup kerusakan akibat kecelakaan, pencurian, dan tanggung jawab pihak ketiga.",
      },
      {
        question: "Apakah tersedia layanan antar-jemput kendaraan?",
        answer:
          "Kami menawarkan layanan pengantaran dan penjemputan ke lokasi pilihan Anda (hotel, bandara, rumah, kantor) untuk wilayah DKI Jakarta, Bali, Surabaya, dan Bandung. Untuk lokasi di luar area tersebut dapat dikenakan biaya tambahan.",
      },
      {
        question: "Bagaimana dengan kebijakan jarak tempuh?",
        answer:
          "Sebagian besar penyewaan kami sudah termasuk jarak tempuh tidak terbatas (unlimited mileage). Untuk beberapa kendaraan tertentu mungkin berlaku batas jarak harian — detailnya akan tertera di halaman masing-masing kendaraan.",
      },
      {
        question: "Apakah kendaraan bisa dibawa ke luar kota atau luar pulau?",
        answer:
          "Perjalanan antar kota dalam pulau yang sama umumnya diizinkan dengan pemberitahuan sebelumnya. Perjalanan antar pulau memerlukan izin khusus dan mungkin dikenakan biaya tambahan. Hubungi tim kami untuk rencana perjalanan Anda.",
      },
    ],
  },
  {
    category: "Pembayaran & Harga",
    items: [
      {
        question: "Metode pembayaran apa yang diterima?",
        answer:
          "Kami menerima berbagai metode pembayaran: transfer bank, kartu kredit/debit, dan dompet digital (GoPay, OVO, Dana). Detail metode pembayaran akan dikonfirmasi oleh tim concierge kami.",
      },
      {
        question: "Apakah ada biaya tersembunyi?",
        answer:
          "Tidak ada biaya tersembunyi. Harga yang tercantum adalah harga sewa per hari sudah termasuk asuransi dan unlimited mileage. Biaya tambahan hanya berlaku jika ada layanan tambahan yang diminta.",
      },
      {
        question: "Kapan saya harus membayar?",
        answer:
          "Pembayaran DP (minimal 50%) dilakukan setelah konfirmasi ketersediaan dari tim kami. Pelunasan dapat dilakukan saat pengantaran kendaraan atau sesuai kesepakatan dengan tim kami.",
      },
    ],
  },
];
