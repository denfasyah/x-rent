import ContactContent from "@/features/contact/ContactContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | xRENT - Luxury Car Rental",
  description:
    "Get in touch with the xRENT concierge team. We are available 24/7 to help you reserve the perfect luxury vehicle.",
};

export default function ContactPage() {
  return <ContactContent />;
}
