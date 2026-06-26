import FAQContent from "@/features/faq/FAQContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | xRENT - Luxury Car Rental",
  description:
    "Find answers to frequently asked questions about booking, requirements, vehicles, and payments at xRENT luxury car rental.",
};

export default function FAQPage() {
  return <FAQContent />;
}
