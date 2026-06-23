export default function Benefits() {
  return (
    <section className="py-[160px] bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">
        <div className="mb-20">
          <h2 className="font-headline-lg text-headline-lg max-w-2xl mb-4">Redefining the way you experience luxury</h2>
          <p className="font-body-md text-body-md text-secondary max-w-xl">
            Tingkatkan perjalanan Anda dengan layanan tak tertandingi dari Opurent. Nikmati kemewahan dan kemudahan di setiap detail.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-black border border-outline-variant/10 p-10 space-y-6 hover:border-primary-container/30 transition-all duration-300">
            <span className="material-symbols-outlined text-primary-container text-[48px]">airline_seat_recline_extra</span>
            <div className="space-y-3">
              <h3 className="font-headline-md text-headline-md">Easy Comfort</h3>
              <p className="font-body-md text-body-md text-secondary">Interior berlapis kulit premium dan teknologi canggih, dirancang khusus untuk memanjakan indera Anda.</p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="bg-black border border-outline-variant/10 p-10 space-y-6 hover:border-primary-container/30 transition-all duration-300">
            <span className="material-symbols-outlined text-primary-container text-[48px]">directions_car</span>
            <div className="space-y-3">
              <h3 className="font-headline-md text-headline-md">Freedom of Choice</h3>
              <p className="font-body-md text-body-md text-secondary">Pilih dari berbagai armada ikonik kami yang selalu dalam kondisi prima dan siap untuk Anda kendarai.</p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="bg-black border border-outline-variant/10 p-10 space-y-6 hover:border-primary-container/30 transition-all duration-300">
            <span className="material-symbols-outlined text-primary-container text-[48px]">support_agent</span>
            <div className="space-y-3">
              <h3 className="font-headline-md text-headline-md">Stress-Free Service</h3>
              <p className="font-body-md text-body-md text-secondary">Nikmati pengalaman premium bebas hambatan dengan dukungan pelanggan yang berdedikasi di setiap langkah.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
