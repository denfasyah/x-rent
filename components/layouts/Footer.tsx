"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-container-lowest w-full pt-14 pb-8 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="font-headline-md text-headline-md font-bold text-white">x—RENT</div>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              {t("footer.brand.description")}
            </p>
            <div className="flex gap-3 pt-1">
              {/* Instagram */}
              <a
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-white/10 text-secondary hover:border-primary-container hover:text-primary-container transition-all duration-300"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* TikTok */}
              <a
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-white/10 text-secondary hover:border-primary-container hover:text-primary-container transition-all duration-300"
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.5a8.18 8.18 0 0 0 4.78 1.52V6.56a4.85 4.85 0 0 1-1.02.13z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-white/10 text-secondary hover:border-primary-container hover:text-primary-container transition-all duration-300"
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-white">{t("footer.quickLinks")}</h4>
            <nav className="flex flex-col gap-3">
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/">{t("nav.home")}</Link>
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/fleet">{t("footer.featuredCars")}</Link>
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/#why-choose-us">{t("footer.whyChooseUs")}</Link>
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/#how-it-works">{t("footer.howItWorks")}</Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-white">{t("footer.support")}</h4>
            <nav className="flex flex-col gap-3">
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/faq">{t("footer.faq")}</Link>
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/about">{t("footer.about")}</Link>
              <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="/contact">{t("footer.contact")}</Link>
              {/* <Link className="font-body-md text-body-md text-secondary hover:text-primary-container transition-colors duration-300" href="#">{t("footer.privacyPolicy")}</Link> */}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-white">{t("footer.contactUs")}</h4>
            <div className="flex flex-col gap-3 font-body-md text-body-md text-secondary">
              <p className="flex items-start gap-3">
                <MapPin size={16} className="shrink-0 mt-0.5 text-primary-container" />
                Jakarta, Indonesia
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-primary-container" />
                +62 888 8888 888
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
          <p>{t("footer.copyright")}</p>
          {/* <div className="flex gap-6">
            <Link className="hover:text-white transition-colors" href="#">{t("footer.terms")}</Link>
            <Link className="hover:text-white transition-colors" href="#">{t("footer.security")}</Link>
          </div> */}
        </div>

      </div>
    </footer>
  );
}
