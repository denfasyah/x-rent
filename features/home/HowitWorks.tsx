import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Browse & Choose",
    desc: "Explore our curated collection of luxury and sports cars. Filter by category, specs, or price — then pick the one that calls to you.",
    detail: "50+ vehicles available",
  },
  {
    number: "02",
    title: "Book in Minutes",
    desc: "Select your dates, pick your preferred delivery location, and complete the booking. Instant confirmation — no waiting, no calls required.",
    detail: "Confirmation under 5 min",
  },
  {
    number: "03",
    title: "We Deliver to You",
    desc: "Our team brings the car directly to your door — hotel, airport, office, wherever you are. White-glove handover, every time.",
    detail: "Door-to-door delivery",
  },
  {
    number: "04",
    title: "Drive & Enjoy",
    desc: "Take the wheel and experience the road as it was meant to be driven. Our concierge team stays available 24/7 throughout your journey.",
    detail: "24/7 support on the road",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-[160px] bg-black relative overflow-hidden" id="how-it-works">
      {/* bottom-left accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-60 bottom-0 h-[600px] w-[600px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #b81d1d 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-6">

        {/* ── Header — same pattern as WhyChooseUs / Fleet ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 md:items-end mb-24">
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-white font-label-sm text-label-sm uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl leading-[1.1] tracking-tight text-white">
              From browse<br />to the open road
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:max-w-sm">
            <p className="font-body-md text-body-md text-secondary">
              Renting a luxury car should feel as smooth as the ride itself.
              That's why we've stripped away the friction — from browsing our
              collection to handing you the keys in minutes.
            </p>
            <Link
              href="/fleet"
              className="group inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all duration-300 w-fit"
            >
              Start Browsing
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Steps — desktop: horizontal row, mobile: stacked ── */}
        <div className="relative">

          {/* connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[52px] left-0 right-0 h-[1px] bg-white/5 mx-[calc(100%/8)]"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`group relative flex flex-col gap-6 p-8 lg:p-10 bg-transparent hover:bg-white/[0.02] transition-colors duration-300 ${
                  i < steps.length - 1 ? "lg:border-r border-white/5" : ""
                }`}
              >
                {/* Step number + connector dot */}
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center justify-center w-[52px] h-[52px] shrink-0">
                    {/* outer ring */}
                    <span className="absolute inset-0 rounded-full border border-white/10 group-hover:border-primary-container/40 transition-colors duration-300" />
                    {/* inner fill on hover */}
                    <span className="absolute inset-[6px] rounded-full bg-transparent group-hover:bg-primary-container/10 transition-all duration-300" />
                    <span className="relative font-label-sm text-label-sm text-secondary group-hover:text-primary-container transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  {/* short line connecting to content */}
                  <span className="flex-1 h-[1px] bg-white/5 hidden lg:block" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Detail pill */}
                <div className="mt-auto inline-flex w-fit items-center gap-2 border border-white/5 bg-white/[0.03] px-3 py-1.5 rounded-sm group-hover:border-primary-container/20 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container shrink-0" />
                  <span className="text-[11px] font-medium text-secondary uppercase tracking-wider">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA banner ── */}
        <div className="mt-24 relative overflow-hidden rounded-sm border border-white/5 bg-white/[0.02]">
          {/* subtle gradient right side */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 40%, rgba(184,29,29,0.06) 100%)",
            }}
          />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 md:p-12">
            <div className="flex flex-col gap-2 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                Ready to take the wheel?
              </h3>
              <p className="font-body-md text-body-md text-secondary">
                Your next unforgettable drive is just a few clicks away.
              </p>
            </div>
            <Link
              href="/fleet"
              className="shrink-0 group inline-flex items-center gap-3 bg-primary-container text-white px-8 py-4 font-label-sm text-label-sm uppercase tracking-[0.15em] hover:brightness-110 transition-all duration-300"
            >
              Take The Wheel
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}