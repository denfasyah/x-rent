import type { LucideIcon } from "lucide-react";
import { ShieldCheck, Clock, Star, Headphones, MapPin, Zap } from "lucide-react";
import { Language } from "@/lib/LanguageContext";

export interface Stat {
  value: string;
  label: string;
}

export interface Value {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Milestone {
  year: string;
  event: string;
  desc: string;
}

const aboutStatsData = {
  en: [
    { value: "50+", label: "Luxury Vehicles" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "24/7", label: "Concierge Support" },
    { value: "8+", label: "Years of Excellence" },
  ],
  id: [
    { value: "50+", label: "Kendaraan Mewah" },
    { value: "99%", label: "Kepuasan Klien" },
    { value: "24/7", label: "Dukungan Konsierje" },
    { value: "8+", label: "Tahun Keunggulan" },
  ]
};

const aboutValuesData = {
  en: [
    {
      icon: ShieldCheck,
      title: "Fully Insured Fleet",
      desc: "Every vehicle comes with comprehensive insurance coverage, so you drive with complete peace of mind.",
    },
    {
      icon: Clock,
      title: "Instant Confirmation",
      desc: "Book your dream car and receive confirmation within minutes. No waiting, no back-and-forth.",
    },
    {
      icon: Star,
      title: "White-Glove Experience",
      desc: "From vehicle delivery to return, every touchpoint is handled with meticulous luxury standards.",
    },
    {
      icon: Headphones,
      title: "24/7 Concierge",
      desc: "Our dedicated team is available around the clock — whether on the road or planning your next journey.",
    },
    {
      icon: MapPin,
      title: "Door-to-Door Delivery",
      desc: "We bring the car to you. Choose your location — hotel, airport, or home — and we'll handle the rest.",
    },
    {
      icon: Zap,
      title: "No Hidden Fees",
      desc: "Transparent pricing, always. What you see is what you pay — no surprises, no fine print.",
    },
  ],
  id: [
    {
      icon: ShieldCheck,
      title: "Armada Berasuransi Penuh",
      desc: "Setiap kendaraan dilengkapi dengan perlindungan asuransi komprehensif, sehingga Anda dapat berkendara dengan tenang.",
    },
    {
      icon: Clock,
      title: "Konfirmasi Instan",
      desc: "Pesan mobil impian Anda dan terima konfirmasi dalam hitungan menit. Tanpa menunggu, tanpa basa-basi.",
    },
    {
      icon: Star,
      title: "Pengalaman Kelas Atas",
      desc: "Dari pengiriman kendaraan hingga pengembalian, setiap interaksi ditangani dengan standar kemewahan yang teliti.",
    },
    {
      icon: Headphones,
      title: "Konsierje 24/7",
      desc: "Tim berdedikasi kami tersedia setiap saat — baik saat Anda di jalan atau merencanakan perjalanan berikutnya.",
    },
    {
      icon: MapPin,
      title: "Pengiriman Door-to-Door",
      desc: "Kami mengantarkan mobil kepada Anda. Pilih lokasi Anda — hotel, bandara, atau rumah — dan kami akan mengurus sisanya.",
    },
    {
      icon: Zap,
      title: "Tanpa Biaya Tersembunyi",
      desc: "Harga yang transparan, selalu. Apa yang Anda lihat adalah apa yang Anda bayar — tanpa kejutan, tanpa syarat tersembunyi.",
    },
  ]
};

const milestonesData = {
  en: [
    { year: "2016", event: "xRENT Founded", desc: "Started with a small curated fleet of 5 premium vehicles in Jakarta." },
    { year: "2018", event: "Fleet Expansion", desc: "Grew to 20+ vehicles including first supercar collection: Ferrari & Lamborghini." },
    { year: "2020", event: "Concierge Launch", desc: "Introduced our signature 24/7 concierge service and door-to-door delivery." },
    { year: "2022", event: "National Reach", desc: "Expanded operations to Bali, Surabaya, and Bandung with 40+ vehicles." },
    { year: "2024", event: "Today", desc: "50+ elite vehicles, 99% client satisfaction, and the gold standard for luxury rentals in Indonesia." },
  ],
  id: [
    { year: "2016", event: "xRENT Didirikan", desc: "Dimulai dengan 5 armada kendaraan premium pilihan di Jakarta." },
    { year: "2018", event: "Perluasan Armada", desc: "Berkembang menjadi 20+ kendaraan termasuk koleksi supercar pertama: Ferrari & Lamborghini." },
    { year: "2020", event: "Peluncuran Konsierje", desc: "Memperkenalkan layanan konsierje 24/7 khas kami dan pengiriman door-to-door." },
    { year: "2022", event: "Jangkauan Nasional", desc: "Memperluas operasi ke Bali, Surabaya, dan Bandung dengan 40+ kendaraan." },
    { year: "2024", event: "Hari Ini", desc: "50+ kendaraan elit, 99% kepuasan klien, dan standar emas untuk penyewaan mewah di Indonesia." },
  ]
};

export const getAboutStats = (lang: Language): Stat[] => aboutStatsData[lang];
export const getAboutValues = (lang: Language): Value[] => aboutValuesData[lang];
export const getMilestones = (lang: Language): Milestone[] => milestonesData[lang];
