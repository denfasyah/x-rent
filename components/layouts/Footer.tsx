import Link from "next/link";
import { Globe, Mail, Share2, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-14 pb-8 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="font-headline-md text-headline-md font-bold text-white">x—RENT</div>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Kemewahan bukan sekadar mobil, tapi bagaimana setiap momen dihargai. Kami hadir untuk memastikan setiap perjalanan Anda luar biasa.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-white/10 text-secondary hover:border-primary-container hover:text-primary-container transition-all duration-300"
                href="#"
                aria-label="Social"
              >
                <Share2 size={15} />
              </a>
              <a
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-white/10 text-secondary hover:border-primary-container hover:text-primary-container transition-all duration-300"
                href="#"
                aria-label="Website"
              >
                <Globe size={15} />
              </a>
              <a
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-white/10 text-secondary hover:border-primary-container hover:text-primary-container transition-all duration-300"
                href="#"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-white">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/">Home</Link>
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/fleet">Featured Cars</Link>
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/#why-choose-us">Why Choose Us?</Link>
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/#how-it-works">How It Works</Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-white">Support</h4>
            <nav className="flex flex-col gap-3">
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/faq">FAQ</Link>
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/about">About</Link>
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/contact">Contact</Link>
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="#">Privacy Policy</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-white">Contact Us</h4>
            <div className="flex flex-col gap-3 font-body-md text-body-md text-secondary">
              <p className="flex items-start gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5 text-primary-container" />
                Jakarta, Indonesia
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-primary-container" />
                +62 21 555 0123
              </p>
              <p className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-primary-container" />
                concierge@xrent.id
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-secondary/50 uppercase tracking-widest">
          <p>© 2025 xRENT — All Rights Reserved</p>
          <div className="flex gap-6">
            <Link className="hover:text-white transition-colors" href="#">Terms of Service</Link>
            <Link className="hover:text-white transition-colors" href="#">Security</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
