import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Star, Headphones, MapPin, Zap } from "lucide-react";

const stats = [
  { value: "50+", label: "Luxury Vehicles" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Concierge Support" },
  { value: "8+", label: "Years of Excellence" },
];

const features = [
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

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-[160px] overflow-hidden"
      id="why-choose-us"
      style={{ background: "linear-gradient(160deg, #141414 0%, #1a1a1a 50%, #111111 100%)" }}
    >
      {/* subtle background grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* top-right accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #b81d1d 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-6">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 md:items-end mb-20">
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-white font-label-sm text-label-sm uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl leading-[1.1] tracking-tight text-white">
              The standard for<br />luxury car rental
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:max-w-sm">
            <p className="font-body-md text-body-md text-secondary">
              We don't just rent cars — we curate experiences. Every detail, every vehicle,
              every interaction is designed to exceed the expectations of those who settle for nothing less than extraordinary.
            </p>
            <Link
              href="/fleet"
              className="group inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all duration-300 w-fit"
            >
              Browse Our Fleet
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-2 py-8 px-6 ${
                i !== stats.length - 1
                  ? "border-r border-white/5"
                  : ""
              } ${i >= 2 ? "border-t border-white/5 md:border-t-0" : ""}`}
            >
              <span
                className="font-headline-xl leading-none tracking-tight text-white"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
              >
                {stat.value}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Feature cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-sm overflow-hidden">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col gap-5 p-8 bg-[#141414] hover:bg-[#1a1a1a] transition-colors duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-white/5 border border-white/5 group-hover:border-primary-container/30 group-hover:bg-primary-container/10 transition-all duration-300">
                <Icon
                  size={22}
                  className="text-secondary group-hover:text-primary-container transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  {desc}
                </p>
              </div>
              <div className="mt-auto h-[1px] w-0 bg-primary-container group-hover:w-8 transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}