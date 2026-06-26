import type { LucideIcon } from "lucide-react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  lines: string[];
  subtitle?: string;
}

export const contactInfoItems: ContactInfo[] = [
  {
    icon: MapPin,
    title: "Showroom Location",
    lines: ["123 Luxury Drive, Automotive District", "Jakarta Selatan, DKI Jakarta 12345"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+62 812 3456 7890"],
    subtitle: "24/7 Concierge Hotline",
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["inquiries@xrent.com", "partnerships@xrent.com"],
  },
  {
    icon: Clock,
    title: "Operating Hours",
    lines: ["Monday - Friday: 09:00 AM - 08:00 PM", "Saturday - Sunday: 10:00 AM - 06:00 PM"],
  },
];

export const WHATSAPP_NUMBER = "6281234567890";
