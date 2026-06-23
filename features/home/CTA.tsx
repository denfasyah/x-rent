import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">
        <div className="relative overflow-hidden group rounded-xl">
          <img 
            className="w-full h-[400px] object-cover brightness-50 grayscale-[0.5] transition-transform duration-1000 group-hover:scale-105" 
            alt="Ready to Redefine Your Drive" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPzN5u9ppNQ8Lkp2-Z_yRwx2YlnEGY76kSHLe3hHVl-7oRiCRPHdY45ftoTxi85nETAelT-Oly4WMIfG8tR94g788nuJ6H4hDL8g-BWxrbghukHmh5pZo8Wsn_k4YrE1WpAr0c4T8Qn46fCOEWYlm2yh_ue7MdAQTxoFsGP6z3VBssjKXVl1r4PGaza2wQS22uvecJY8zCx0nt_do0-a3iIOgjxM_Yja9VtjvXSaGKD60WGUkUKfND5xx2eggC8VQuaG3PqKCgIPIf" 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-6">
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg leading-[1.1] tracking-tight text-white">Ready to Redefine Your Drive?</h2>
            <p className="max-w-md font-body-lg text-body-lg text-secondary">
              Dunia kemewahan menanti Anda. Pesan kendaraan impian Anda hari ini dan rasakan sensasi berkendara yang sebenarnya.
            </p>
            <Link 
              href="#" 
              className="bg-primary-container text-white px-12 py-4 font-label-sm uppercase tracking-widest hover:brightness-125 transition-all duration-300 shadow-2xl shadow-primary-container/20"
            >
              Mulai Booking
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
