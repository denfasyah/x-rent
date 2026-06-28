import type { Language } from "@/lib/LanguageContext";

export interface HowItWorksStep {
  number: string;
  title: string;
  desc: string;
  detail: string;
}

const stepsEn: HowItWorksStep[] = [
  {
    number: "01",
    title: "Browse & Choose",
    desc: "Explore our curated collection of luxury and sports cars. Filter by category, specs, or price — then pick the one that calls to you.",
    detail: "50+ vehicles available",
  },
  {
    number: "02",
    title: "Book in Minutes",
    desc: "Select your dates, pick your preferred delivery location, and complete the booking. Instant confirmation — no waiting, no calls required.",
    detail: "Confirmation under 5 min",
  },
  {
    number: "03",
    title: "We Deliver to You",
    desc: "Our team brings the car directly to your door — hotel, airport, office, wherever you are. White-glove handover, every time.",
    detail: "Door-to-door delivery",
  },
  {
    number: "04",
    title: "Drive & Enjoy",
    desc: "Take the wheel and experience the road as it was meant to be driven. Our concierge team stays available 24/7 throughout your journey.",
    detail: "24/7 support on the road",
  },
];

const stepsId: HowItWorksStep[] = [
  {
    number: "01",
    title: "Telusuri & Pilih",
    desc: "Jelajahi koleksi mobil mewah dan sport kami. Filter berdasarkan kategori, spesifikasi, atau harga — lalu pilih yang paling cocok untuk Anda.",
    detail: "50+ kendaraan tersedia",
  },
  {
    number: "02",
    title: "Pesan dalam Menit",
    desc: "Pilih tanggal, tentukan lokasi pengiriman favorit, dan selesaikan pemesanan. Konfirmasi instan — tanpa menunggu, tanpa telepon.",
    detail: "Konfirmasi dalam 5 menit",
  },
  {
    number: "03",
    title: "Kami Antar ke Anda",
    desc: "Tim kami mengantarkan mobil langsung ke pintu Anda — hotel, bandara, kantor, di manapun Anda berada. Serah terima berkelas, setiap saat.",
    detail: "Pengiriman door-to-door",
  },
  {
    number: "04",
    title: "Berkendara & Nikmati",
    desc: "Ambil kemudi dan rasakan jalan sebagaimana mestinya. Tim concierge kami tersedia 24/7 sepanjang perjalanan Anda.",
    detail: "Dukungan 24/7 di jalan",
  },
];

export function getHowItWorksSteps(lang: Language): HowItWorksStep[] {
  return lang === "id" ? stepsId : stepsEn;
}

/** Backward-compat default export (English) */
export const howItWorksSteps = stepsEn;
