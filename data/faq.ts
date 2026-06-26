export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

// Short list used on the homepage FAQ section
export const faqs: FaqItem[] = [
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

// Full categorized list used on the dedicated /faq page
export const faqCategories: FaqCategory[] = [
  {
    category: "Booking & Reservation",
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
