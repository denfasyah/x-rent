import AboutContent from "@/features/about/AboutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | xRENT - Luxury Car Rental",
  description:
    "Learn about xRENT's story, mission, and the values that have made us Indonesia's premier luxury car rental service since 2016.",
};

export default function AboutPage() {
  return <AboutContent />;
}
