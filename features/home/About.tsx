import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="py-[160px] bg-black" id="about">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 flex flex-col gap-16">

        {/* ── Part 1: Split headline + copy ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 md:items-end">
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg leading-[1.1] tracking-tight text-white">
            Redefining the way<br />you experience luxury
          </h2>
          <div className="flex flex-col gap-6 md:max-w-sm">
            <p className="font-body-md text-body-md text-secondary">
              Elevate your car rental journey with xRENT's unmatched benefits.
              Experience luxury and ease like never before — every feature designed
              for your success.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-white font-medium hover:text-primary-container transition-colors duration-300 font-body-md text-body-md w-fit"
            >
              <span className="w-6 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-8" />
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* ── Part 2: Full-width cinematic banner ── */}
        <div className="relative w-full aspect-[16/7] sm:aspect-[16/6] overflow-hidden rounded-sm">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSQ1kNVeI65ZOSY8XWs3aLXGiAU7xKt0tTSZZ_guXWbdYqC4pU7Yv0uHG_pVICUL2szkKnpVy51AVJzAm7TUutRvq8J9giHEn7wjVvtEKWF68xQHlUdMZg6ZF21f640I73EM2794jhWiXsZz4DsNepVpDbjbj0QoK4oJki4Uw1Umced5auPH2Or_JX4AVVIEZzGP44cB0Y2_RRdRUU5nWDQl9VfYivvrkcfpUsYePuf822KMRpSUer12zGGnxYv4SeJ6pAp4rkEyQw"
            alt="Feel The Thrill of Performance"
            className="w-full h-full object-cover grayscale-[0.15] scale-105 hover:scale-100 transition-transform duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 sm:p-10 max-w-md">
            <h3 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg leading-[1.1] text-white mb-3">
              Feel The Thrill of<br />Performance
            </h3>
            <p className="text-secondary font-body-md text-body-md">
              Feel the adrenaline as world-class engineering meets open roads —
              every drive is pure exhilaration.
            </p>
          </div>
        </div>

        {/* ── Part 3: Bento grid ──
            Mobile  : 1 col, stacked
            Tablet  : 2 col, image left | (red + dark) right stacked
            Desktop : 3 col, image | (red + dark) | image
            Key: explicit grid-rows-2 + fixed height so row-span-2 works correctly
        ── */}

        {/* Mobile / sm: simple stacked */}
        <div className="flex flex-col gap-1 lg:hidden">
          {/* Easy Comfort */}
          <div className="relative overflow-hidden rounded-sm h-[320px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPzN5u9ppNQ8Lkp2-Z_yRwx2YlnEGY76kSHLe3hHVl-7oRiCRPHdY45ftoTxi85nETAelT-Oly4WMIfG8tR94g788nuJ6H4hDL8g-BWxrbghukHmh5pZo8Wsn_k4YrE1WpAr0c4T8Qn46fCOEWYlm2yh_ue7MdAQTxoFsGP6z3VBssjKXVl1r4PGaza2wQS22uvecJY8zCx0nt_do0-a3iIOgjxM_Yja9VtjvXSaGKD60WGUkUKfND5xx2eggC8VQuaG3PqKCgIPIf"
              alt="Easy Comfort"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">Easy Comfort</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[260px]">
                Hand-stitched interiors and advanced tech, crafted to delight your senses.
              </p>
            </div>
          </div>

          {/* Freedom of Choice */}
          <div className="bg-primary-container rounded-sm p-8 flex flex-col justify-between min-h-[260px]">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-white">Freedom of Choice</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Explore a curated fleet of iconic luxury cars, ready for you.
              </p>
            </div>
            <Link href="/fleet" className="group inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all duration-300 mt-8">
              Choose Your Car
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Seamless Process */}
          <div className="bg-[#111111] border border-white/5 rounded-sm p-8 flex flex-col justify-between min-h-[200px]">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-white">Seamless Process</h3>
              <p className="text-secondary text-sm leading-relaxed">
                From booking to driving, every step is fast, easy, and stress-free.
              </p>
            </div>
            <Link href="/#how-it-works" className="group inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all duration-300 mt-6">
              How it Works
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Stress-Free Service */}
          <div className="relative overflow-hidden rounded-sm h-[320px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiUg9lQA8M6zHXZUBe2OTFv4P2ACBE_-mXIypoNDSBcUkNLU5aWanik8FU4XpT7DlTXkXAXRl_D-ZbsX0yvZwiBR5GXeZpJqca6sb2O2w6UxHLLB0ogyyX-d98-LIW4FR1a4ooiN18RkoTMB0iBLCkFabIWiBYC4npcxpHyJDj04UEP1bHGv7wZvcjOa2VZ9O_QG34xBrd3IJg9x48A1aPmxbv0d5JnY0M3xVLxbaiHwI06IZasCOuhZBvAWDGlCdpm4--exenlzgk"
              alt="Stress-Free Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">Stress-Free Service</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[260px]">
                Enjoy a premium, stress-free experience with dedicated support at every step.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop lg+: proper 3-col bento with explicit row heights */}
        <div
          className="hidden lg:grid gap-1"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            height: "560px",
          }}
        >
          {/* Col 1: Easy Comfort — spans both rows */}
          <div
            className="relative overflow-hidden rounded-sm"
            style={{ gridColumn: "1", gridRow: "1 / 3" }}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPzN5u9ppNQ8Lkp2-Z_yRwx2YlnEGY76kSHLe3hHVl-7oRiCRPHdY45ftoTxi85nETAelT-Oly4WMIfG8tR94g788nuJ6H4hDL8g-BWxrbghukHmh5pZo8Wsn_k4YrE1WpAr0c4T8Qn46fCOEWYlm2yh_ue7MdAQTxoFsGP6z3VBssjKXVl1r4PGaza2wQS22uvecJY8zCx0nt_do0-a3iIOgjxM_Yja9VtjvXSaGKD60WGUkUKfND5xx2eggC8VQuaG3PqKCgIPIf"
              alt="Easy Comfort"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">Easy Comfort</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[220px]">
                Hand-stitched interiors and advanced tech, crafted to delight your senses.
              </p>
            </div>
          </div>

          {/* Col 2 top: Freedom of Choice — red card */}
          <div
            className="bg-primary-container rounded-sm p-8 flex flex-col justify-between"
            style={{ gridColumn: "2", gridRow: "1" }}
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold text-white">Freedom of Choice</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Explore a curated fleet of iconic luxury cars, ready for you.
              </p>
            </div>
            <Link href="/fleet" className="group inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all duration-300">
              Choose Your Car
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Col 2 bottom: Seamless Process — dark card */}
          <div
            className="bg-[#111111] border border-white/5 rounded-sm p-8 flex flex-col justify-between"
            style={{ gridColumn: "2", gridRow: "2" }}
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-white">Seamless Process</h3>
              <p className="text-secondary text-sm leading-relaxed">
                From booking to driving, every step is fast, easy, and stress-free.
              </p>
            </div>
            <Link href="/#how-it-works" className="group inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all duration-300">
              How it Works
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Col 3: Stress-Free Service — spans both rows */}
          <div
            className="relative overflow-hidden rounded-sm"
            style={{ gridColumn: "3", gridRow: "1 / 3" }}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiUg9lQA8M6zHXZUBe2OTFv4P2ACBE_-mXIypoNDSBcUkNLU5aWanik8FU4XpT7DlTXkXAXRl_D-ZbsX0yvZwiBR5GXeZpJqca6sb2O2w6UxHLLB0ogyyX-d98-LIW4FR1a4ooiN18RkoTMB0iBLCkFabIWiBYC4npcxpHyJDj04UEP1bHGv7wZvcjOa2VZ9O_QG34xBrd3IJg9x48A1aPmxbv0d5JnY0M3xVLxbaiHwI06IZasCOuhZBvAWDGlCdpm4--exenlzgk"
              alt="Stress-Free Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">Stress-Free Service</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-[220px]">
                Enjoy a premium, stress-free experience with dedicated support at every step.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}