import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-[160px] border-t border-outline-variant/20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="font-headline-md text-headline-md font-bold text-on-surface">OPU—RENT</div>
            <p className="font-body-md text-body-md text-secondary">
              Kemewahan bukan sekadar mobil, tapi bagaimana setiap momen dihargai. Kami hadir untuk memastikan setiap perjalanan Anda luar biasa.
            </p>
            <div className="flex gap-4">
              <a className="text-secondary hover:text-primary-container transition-colors" href="#"><span className="material-symbols-outlined">face_nod</span></a>
              <a className="text-secondary hover:text-primary-container transition-colors" href="#"><span className="material-symbols-outlined">camera_enhance</span></a>
              <a className="text-secondary hover:text-primary-container transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            </div>
          </div>
          {/* Links 1 */}
          <div className="space-y-6">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Home</Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Featured Cars</Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Why Choose Us?</Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">How It Works</Link>
            </nav>
          </div>
          {/* Links 2 */}
          <div className="space-y-6">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Support</h4>
            <nav className="flex flex-col gap-4">
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">FAQ</Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">About</Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Contact</Link>
              <Link className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Privacy Policy</Link>
            </nav>
          </div>
          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Contact Us</h4>
            <div className="space-y-4 font-body-md text-body-md text-secondary">
              <p className="flex items-center gap-3"><span className="material-symbols-outlined text-[18px]">location_on</span> Jakarta, Indonesia</p>
              <p className="flex items-center gap-3"><span className="material-symbols-outlined text-[18px]">call</span> +62 21 555 0123</p>
              <p className="flex items-center gap-3"><span className="material-symbols-outlined text-[18px]">mail</span> concierge@opurent.id</p>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-secondary/60 uppercase tracking-widest">
          <p className="">© 2025 Opurent—All Right Reserved</p>
          <div className="flex gap-8">
            <Link className="hover:text-white transition-colors" href="#">Terms of Service</Link>
            <Link className="hover:text-white transition-colors" href="#">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
