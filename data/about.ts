import type { LucideIcon } from "lucide-react";
import { ShieldCheck, Clock, Star, Headphones, MapPin, Zap } from "lucide-react";

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

export const aboutStats: Stat[] = [
  { value: "50+", label: "Luxury Vehicles" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Concierge Support" },
  { value: "8+", label: "Years of Excellence" },
];

export const aboutValues: Value[] = [
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
];

export const milestones: Milestone[] = [
  { year: "2016", event: "xRENT Founded", desc: "Started with a small curated fleet of 5 premium vehicles in Jakarta." },
  { year: "2018", event: "Fleet Expansion", desc: "Grew to 20+ vehicles including first supercar collection: Ferrari & Lamborghini." },
  { year: "2020", event: "Concierge Launch", desc: "Introduced our signature 24/7 concierge service and door-to-door delivery." },
  { year: "2022", event: "National Reach", desc: "Expanded operations to Bali, Surabaya, and Bandung with 40+ vehicles." },
  { year: "2024", event: "Today", desc: "50+ elite vehicles, 99% client satisfaction, and the gold standard for luxury rentals in Indonesia." },
];
