export default function Testimonials() {
  return (
    <section className="py-[160px] bg-black overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg">Journeys That Speak for Themselves</h2>
              <p className="font-body-lg text-body-lg text-secondary">Klien kami tidak hanya menyewa mobil — mereka menciptakan momen tak terlupakan. Inilah cerita mereka.</p>
            </div>
            <div className="relative pl-12 border-l-2 border-primary-container">
              <span className="absolute top-0 left-[-40px] text-[80px] text-primary-container/20 font-serif leading-none italic">“</span>
              <p className="font-body-lg text-body-lg italic mb-6">&quot;Mengendarai Brabus GLE adalah impian yang menjadi kenyataan. Proses pemesanan sangat lancar, pengirimannya sempurna, dan kondisi mobil jauh melampaui ekspektasi saya.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high"></div>
                <div>
                  <p className="font-bold">Michael R.</p>
                  <p className="text-[10px] text-secondary uppercase tracking-widest">CEO, Tech Innovators</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-container/5 rounded-xl blur-3xl opacity-50"></div>
            <img 
              className="relative rounded-lg w-full aspect-video object-cover grayscale-[0.3]" 
              alt="Testimonial background" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSQ1kNVeI65ZOSY8XWs3aLXGiAU7xKt0tTSZZ_guXWbdYqC4pU7Yv0uHG_pVICUL2szkKnpVy51AVJzAm7TUutRvq8J9giHEn7wjVvtEKWF68xQHlUdMZg6ZF21f640I73EM2794jhWiXsZz4DsNepVpDbjbj0QoK4oJki4Uw1Umced5auPH2Or_JX4AVVIEZzGP44cB0Y2_RRdRUU5nWDQl9VfYivvrkcfpUsYePuf822KMRpSUer12zGGnxYv4SeJ6pAp4rkEyQw" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
