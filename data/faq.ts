export interface FaqItem {
  question: string;
  answer: string;
}

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
