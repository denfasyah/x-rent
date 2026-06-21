export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          className="h-full w-full object-cover grayscale-[0.2]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/vidhero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
      </div>



      {/* Content anchored at the bottom, split left / right like the reference layout */}
      <div className="relative z-10 flex h-full w-full flex-col justify-end px-5 pb-16 sm:pb-20 md:px-6 md:pb-24">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
            {/* Left: Headline — forced to exactly 2 lines */}
            <h1 className="font-headline-xl text-headline-xl-mobile max-w-2xl leading-tight md:text-headline-xl">
              <span className="block">Drive Beyond Limits.</span>
              <span className="block text-primary-container">
                Live Beyond Time.
              </span>
            </h1>

            {/* Right: supporting copy + CTA */}
            <div className="flex max-w-sm flex-col gap-6">
              <p className="font-body-lg text-body-lg text-secondary">
                Experience uncompromising luxury and performance. Our exclusive collection is ready to take you on your journey.
              </p>

              {/* CTA — text link with red underline + hover trailing dot */}
              <a
                href="#fleet"
                className="group inline-flex w-fit flex-col gap-3"
              >
                <span className="flex items-center gap-3 text-lg font-semibold text-on-surface transition-colors duration-300 group-hover:text-on-surface/60">
                  Browse Our Fleet
                  <svg
                    className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
                <span className="relative h-[2px] w-full bg-primary-container">
                  <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-0 rounded-full bg-primary-container opacity-0 transition-all duration-300 ease-out group-hover:translate-x-3 group-hover:opacity-100" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}