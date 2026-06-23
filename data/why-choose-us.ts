import type { LucideIcon } from "lucide-react";
import { ShieldCheck, Clock, Star, Headphones, MapPin, Zap } from "lucide-react";

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const stats: Stat[] = [
  { value: "50+", label: "Luxury Vehicles" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Concierge Support" },
  { value: "8+", label: "Years of Excellence" },
];

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Fully Insured Fleet",
    desc: "Every vehicle in our collection comes with comprehensive insurance coverage, so you drive with complete peace of mind.",
  },
  {
    icon: Clock,
    title: "Instant Confirmation",
    desc: "Book your dream car and receive confirmation within minutes. No waiting, no back-and-forth — just seamless booking.",
  },
  {
    icon: Star,
    title: "White-Glove Experience",
    desc: "From vehicle delivery to return, every touchpoint is handled with meticulous attention to detail and luxury standards.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    desc: "Our dedicated team is available around the clock to assist you — whether on the road or planning your next journey.",
  },
  {
    icon: MapPin,
    title: "Door-to-Door Delivery",
    desc: "We bring the car to you. Choose your location — hotel, airport, or home — and we'll handle the rest.",
  },
  {
    icon: Zap,
    title: "No Hidden Fees",
    desc: "Transparent pricing, always. What you see is what you pay — no surprises, no fine print, just honest luxury.",
  },
];
