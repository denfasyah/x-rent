"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Mengendarai Brabus GLE adalah impian yang menjadi kenyataan. Proses pemesanan sangat lancar, pengirimannya sempurna, dan kondisi mobil jauh melampaui ekspektasi saya.",
    name: "Michael R.",
    role: "CEO, Tech Innovators",
  },
  {
    quote: "Pelayanan xRENT benar-benar premium dari awal hingga akhir. Mobil tiba tepat waktu, kondisi mewah, dan tim concierge selalu siap membantu. Pengalaman terbaik yang pernah saya rasakan.",
    name: "Aditya S.",
    role: "Founder, Kreativa Studio",
  },
  {
    quote: "Saya sangat terkesan dengan kecepatan booking dan kualitas armada xRENT. Ferrari yang saya sewa tampak seperti baru keluar dari showroom. Tidak ada tempat lain yang bisa menandingi ini.",
    name: "Clarissa W.",
    role: "Director, Luminary Group",
  },
  {
    quote: "Layanan door-to-door nya luar biasa. Mereka mengantarkan Lamborghini langsung ke lobby hotel saya. Sungguh pengalaman yang tidak terlupakan.",
    name: "Reza P.",
    role: "Managing Partner, Apex Capital",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="py-20 md:py-24 bg-black overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="space-y-8">
            {/* Label + heading */}
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-white font-label-sm text-label-sm uppercase tracking-widest">
                Testimonials
              </span>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg leading-[1.1] tracking-tight text-white">
                Journeys That Speak for Themselves
              </h2>
              <p className="font-body-lg text-body-lg text-secondary">
                Klien kami tidak hanya menyewa mobil — mereka menciptakan momen tak terlupakan. Inilah cerita mereka.
              </p>
            </div>

            {/* Quote card */}
            <div className="relative pl-12 border-l-2 border-primary-container">
              <span className="absolute top-0 left-[-40px] text-[80px] text-primary-container/20 font-serif leading-none italic select-none">
                "
              </span>
              <p
                key={current}
                className="font-body-lg text-body-lg italic mb-6 transition-opacity duration-500"
              >
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high" />
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-[10px] text-secondary uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:border-primary-container hover:text-primary-container transition-all duration-300"
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <div className="flex items-center gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Testimonial ${i + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                          i === current ? "w-5 h-1.5 bg-primary-container" : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    aria-label="Next"
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:border-primary-container hover:text-primary-container transition-all duration-300"
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right — image (same as original) */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-container/5 rounded-xl blur-3xl opacity-50" />
            <img
              className="relative rounded-lg w-full aspect-video object-cover grayscale-[0.3] transition-transform duration-700 group-hover:scale-[1.02]"
              alt="Testimonial background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSQ1kNVeI65ZOSY8XWs3aLXGiAU7xKt0tTSZZ_guXWbdYqC4pU7Yv0uHG_pVICUL2szkKnpVy51AVJzAm7TUutRvq8J9giHEn7wjVvtEKWF68xQHlUdMZg6ZF21f640I73EM2794jhWiXsZz4DsNepVpDbjbj0QoK4oJki4Uw1Umced5auPH2Or_JX4AVVIEZzGP44cB0Y2_RRdRUU5nWDQl9VfYivvrkcfpUsYePuf822KMRpSUer12zGGnxYv4SeJ6pAp4rkEyQw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
          </div>

        </div>
      </div>
    </section>
  );
}
