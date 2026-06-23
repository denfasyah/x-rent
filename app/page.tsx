import Hero from "@/features/home/Hero";
import Fleet from "@/features/home/Fleet";
import Benefits from "@/features/home/Benefits";
import Testimonials from "@/features/home/Testimonials";
import FAQ from "@/features/home/FAQ";
import CTA from "@/features/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full font-sans dark:bg-black">
      <Hero />
      <Fleet />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}
