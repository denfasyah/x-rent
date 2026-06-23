import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { howItWorksSteps } from "@/data/how-it-works";

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden" id="how-it-works">
      {/* bottom-left accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-60 bottom-0 h-[600px] w-[600px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #b81d1d 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-6">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 md:items-end mb-12">
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-white font-label-sm text-label-sm uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg leading-[1.1] tracking-tight text-white">
              From browse<br />to the open road
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:max-w-sm">
            <p className="font-body-md text-body-md text-secondary">
              Renting a luxury car should feel as smooth as the ride itself.
              That&apos;s why we&apos;ve stripped away the friction — from browsing our
              collection to handing you the keys in minutes.
            </p>
            <Link
              href="/fleet"
              className="group inline-flex items-center gap-3 text-white font-medium hover:text-primary-container transition-colors duration-300 font-body-md text-body-md w-fit"
            >
              <span className="w-6 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-8" />
              Start Browsing
            </Link>
          </div>
        </div>

        {/* ── Steps ── */}
        <div className="relative">
          {/* connecting line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[52px] left-0 right-0 h-[1px] bg-white/5 mx-[calc(100%/8)]"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-0">
            {howItWorksSteps.map((step, i) => (
              <div
                key={step.number}
                className={`group relative flex flex-col gap-6 p-8 lg:p-10 bg-transparent hover:bg-white/[0.02] transition-colors duration-300 ${
                  i < howItWorksSteps.length - 1 ? "lg:border-r border-white/5" : ""
                }`}
              >
                {/* Step number */}
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center justify-center w-[52px] h-[52px] shrink-0">
                    <span className="absolute inset-0 rounded-full border border-white/10 group-hover:border-primary-container/40 transition-colors duration-300" />
                    <span className="absolute inset-[6px] rounded-full bg-transparent group-hover:bg-primary-container/10 transition-all duration-300" />
                    <span className="relative font-label-sm text-label-sm text-secondary group-hover:text-primary-container transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  <span className="flex-1 h-[1px] bg-white/5 hidden lg:block" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold text-white leading-snug">{step.title}</h3>
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">{step.desc}</p>
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
        <div className="mt-12 relative overflow-hidden rounded-sm border border-white/5 bg-white/[0.02]">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 40%, rgba(184,29,29,0.06) 100%)",
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