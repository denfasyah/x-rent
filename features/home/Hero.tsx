export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 md:px-6">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-headline-xl text-headline-xl-mobile leading-tight md:text-headline-xl">
            Drive Beyond Limits.
            <br />
            <span className="text-primary-container">Live Beyond Time.</span>
          </h1>

          <p className="font-body-lg max-w-lg text-body-lg text-secondary">
            Rasakan kemewahan dan performa tanpa kompromi. Koleksi eksklusif
            kami siap membawa perjalanan Anda ke tingkat yang baru.
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <a
              href="#fleet"
              className="flex items-center justify-center gap-3 bg-primary-container px-10 py-4 font-label-sm text-label-sm uppercase tracking-[0.2em] text-white transition-all duration-500 hover:gap-5"
            >
              Jelajahi Armada Kami
              <svg
                className="h-4 w-4"
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
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-50">
        <span className="font-label-sm text-[10px] uppercase tracking-widest">
          Scroll
        </span>
        <div className="h-12 w-[1px] animate-pulse bg-linear-to-b from-white to-transparent" />
      </div>
    </section>
  );
}