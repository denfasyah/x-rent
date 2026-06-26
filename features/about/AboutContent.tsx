"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Star, Headphones, MapPin, Zap } from "lucide-react";

const stats = [
  { value: "50+", label: "Luxury Vehicles" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Concierge Support" },
  { value: "8+", label: "Years of Excellence" },
];

const values = [
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

const milestones = [
  { year: "2016", event: "xRENT Founded", desc: "Started with a small curated fleet of 5 premium vehicles in Jakarta." },
  { year: "2018", event: "Fleet Expansion", desc: "Grew to 20+ vehicles including first supercar collection: Ferrari & Lamborghini." },
  { year: "2020", event: "Concierge Launch", desc: "Introduced our signature 24/7 concierge service and door-to-door delivery." },
  { year: "2022", event: "National Reach", desc: "Expanded operations to Bali, Surabaya, and Bandung with 40+ vehicles." },
  { year: "2024", event: "Today", desc: "50+ elite vehicles, 99% client satisfaction, and the gold standard for luxury rentals in Indonesia." },
];

export default function AboutContent() {
  return (
    <div className="pt-20 bg-background min-h-screen pb-20">

      {/* Hero */}
      <section className="relative w-full overflow-hidden border-b border-white/5 h-[50vh] min-h-[380px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="About hero - luxury cars"
            className="w-full h-full object-cover brightness-50"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSQ1kNVeI65ZOSY8XWs3aLXGiAU7xKt0tTSZZ_guXWbdYqC4pU7Yv0uHG_pVICUL2szkKnpVy51AVJzAm7TUutRvq8J9giHEn7wjVvtEKWF68xQHlUdMZg6ZF21f640I73EM2794jhWiXsZz4DsNepVpDbjbj0QoK4oJki4Uw1Umced5auPH2Or_JX4AVVIEZzGP44cB0Y2_RRdRUU5nWDQl9VfYivvrkcfpUsYePuf822KMRpSUer12zGGnxYv4SeJ6pAp4rkEyQw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 text-center px-5 md:px-6 max-w-[1280px] mx-auto mt-10">
          <p className="text-primary-container text-xs uppercase tracking-[0.3em] font-semibold mb-4">Our Story</p>
          <h1 className="text-[40px] md:text-[64px] font-semibold text-white leading-tight mb-5">
            Redefining Luxury <br />
            <span className="text-primary-container">Car Rental</span>
          </h1>
          <p className="text-white/70 text-[16px] md:text-[18px] font-light max-w-2xl mx-auto">
            Born from a passion for automobiles and a commitment to extraordinary service, xRENT has been setting the standard for premium car rental in Indonesia since 2016.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-primary-container text-xs uppercase tracking-[0.3em] font-semibold mb-4">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">
                More than a rental — <br />a curated experience.
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                xRENT was founded on a single belief: that driving a world-class vehicle should be an experience, not just a transaction. We hand-pick every car in our fleet, maintain them to showroom standards, and deliver them with the kind of white-glove service usually reserved for five-star hotels.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-primary-container pl-6">
                <h3 className="text-white font-semibold text-lg mb-2">Our Mission</h3>
                <p className="text-white/60 leading-relaxed">To make world-class luxury vehicles accessible to those who appreciate excellence — delivering unforgettable journeys with zero compromise on quality or service.</p>
              </div>
              <div className="border-l-2 border-white/20 pl-6">
                <h3 className="text-white font-semibold text-lg mb-2">Our Vision</h3>
                <p className="text-white/60 leading-relaxed">To become Southeast Asia's most trusted and prestigious luxury car rental company, known for our curated fleet and unmatched concierge experience.</p>
              </div>
            </div>
            <Link
              href="/fleet"
              className="group inline-flex items-center gap-3 text-white font-medium hover:text-primary-container transition-colors duration-300 w-fit"
            >
              <span className="w-6 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-10" />
              Explore Our Fleet
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: cinematic image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-container/5 rounded-2xl blur-3xl opacity-60" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPzN5u9ppNQ8Lkp2-Z_yRwx2YlnEGY76kSHLe3hHVl-7oRiCRPHdY45ftoTxi85nETAelT-Oly4WMIfG8tR94g788nuJ6H4hDL8g-BWxrbghukHmh5pZo8Wsn_k4YrE1WpAr0c4T8Qn46fCOEWYlm2yh_ue7MdAQTxoFsGP6z3VBssjKXVl1r4PGaza2wQS22uvecJY8zCx0nt_do0-a3iIOgjxM_Yja9VtjvXSaGKD60WGUkUKfND5xx2eggC8VQuaG3PqKCgIPIf"
                alt="Luxury car interior"
                className="w-full h-full object-cover grayscale-[0.15] transition-transform duration-[2000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "linear-gradient(160deg, #141414 0%, #1a1a1a 50%, #111111 100%)" }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-2 py-10 px-6 ${i !== stats.length - 1 ? "border-r border-white/5" : ""} ${i >= 2 ? "border-t border-white/5 md:border-t-0" : ""}`}
              >
                <span className="font-semibold leading-none tracking-tight text-white" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-widest text-white/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values / Why Choose Us */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-24 lg:py-32">
        <div className="text-center mb-16">
          <p className="text-primary-container text-xs uppercase tracking-[0.3em] font-semibold mb-4">Our Standards</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">Why Clients Choose xRENT</h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg font-light">
            Every decision we make is guided by one question: does this create a better experience for our clients?
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-xl overflow-hidden">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group flex flex-col gap-5 p-8 bg-[#0a0a0a] hover:bg-[#111] transition-colors duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/5 group-hover:border-primary-container/40 group-hover:bg-primary-container/10 transition-all duration-300">
                <Icon size={22} className="text-white/50 group-hover:text-primary-container transition-colors duration-300" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
              <div className="mt-auto h-[1px] w-0 bg-primary-container group-hover:w-8 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#050505] border-t border-b border-white/5 py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6">
          <div className="text-center mb-16">
            <p className="text-primary-container text-xs uppercase tracking-[0.3em] font-semibold mb-4">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">Milestones That Shaped xRENT</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((item, i) => (
                <div key={item.year} className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-container border-2 border-background mt-1.5" />
                  {/* Spacer for desktop alternation */}
                  <div className="hidden md:block md:w-1/2" />
                  {/* Content */}
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-10">
                    <span className="text-primary-container text-xs font-bold uppercase tracking-widest">{item.year}</span>
                    <h3 className="text-white font-semibold text-xl mt-1 mb-2">{item.event}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-24 lg:py-32">
        <div className="relative overflow-hidden bg-[#0a0a0a] border border-white/10 p-10 md:p-20 text-center rounded-2xl">
          <div className="absolute inset-0 z-0">
            <img
              alt="CTA background"
              className="w-full h-full object-cover brightness-30"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-ZZqZwJyahnH62H2krJFjyDaW_SeyMQayXx-fTkpwkj-cZJcSkCKxWYA2WgULl0ZWo2lfuT8NZJ73jY-eM3hud4FUXcYHfPbIQRvmvLdUowBDUAEmkpsLScjdjt-aIEK85ZA2_mjlwSl05uN1hmfYdR3JkvG4R1xYhk80qp6NGiWRh_vkeXj2lvJuad8MEP1DthzlLIgaAiSb7518aqexvHNuUR3ubaEpHJ2HKV6UZrq_MSqr17zk6O8t5_E6rF9TzeLQ1WTqtxdI"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-semibold text-white mb-5">Ready to Experience the Difference?</h2>
            <p className="text-white/60 text-base md:text-lg mb-10 font-light">Browse our curated collection of the world's finest vehicles and reserve yours today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/fleet"
                className="inline-block bg-primary-container text-white px-8 md:px-10 py-4 rounded-sm text-[12px] font-semibold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all duration-300"
              >
                View Our Fleet
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-white/20 text-white px-8 md:px-10 py-4 rounded-sm text-[12px] font-semibold uppercase tracking-[0.2em] hover:border-white/60 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
