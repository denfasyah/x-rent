import type { Metadata } from "next";
import Hero from "@/features/home/Hero";
import Fleet from "@/features/home/Fleet";
import WhyChooseUs from "@/features/home/WhyChooseUs";
import Testimonials from "@/features/home/Testimonials";
import FAQ from "@/features/home/FAQ";
import CTA from "@/features/home/CTA";
import About from "@/features/home/About";
import HowItWorks from "@/features/home/HowitWorks";

export const metadata: Metadata = {
  title: "Home",
  description:
    "xRENT — Indonesia's premier luxury car rental service. Curated fleet of 50+ elite vehicles with 24/7 concierge and door-to-door delivery.",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full font-sans dark:bg-black">
      <Hero />
      <Fleet />
      <About />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}
