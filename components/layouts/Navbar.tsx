'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { useLanguage, type Language } from '@/lib/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const NAV_LINKS = [
    { label: t("nav.home"), href: '/' },
    { label: t("nav.fleet"), href: '/fleet' },
    { label: t("nav.about"), href: '/about' },
    { label: t("nav.contact"), href: '/contact' },
  ];

  const MENU_LINKS = [
    { label: t("nav.home"), href: '/' },
    { label: t("nav.viewFleet"), href: '/fleet' },
    { label: t("nav.about"), href: '/about' },
    { label: t("nav.whyChooseUs"), href: '/#why-choose-us' },
    { label: t("nav.howItWorks"), href: '/#how-it-works' },
    { label: t("nav.faq"), href: '/faq' },
    { label: t("nav.contact"), href: '/contact' },
  ];

  // lock body scroll while the overlay menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Click outside lang dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    setLangDropdownOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-black">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center text-xl font-bold tracking-tight text-white"
          >
            <span>x</span>
            <span className="mx-1 mt-[2px] h-[2px] w-5 bg-white" />
            <span>RENT</span>
          </Link>

          {/* Desktop inline nav */}
          <nav
            className={`hidden flex-[2] md:mr-20 items-center justify-end gap-8 transition-opacity duration-300 ease-in-out md:flex ${
              isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher Desktop */}
            <div className="relative ml-4" ref={langRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                <Globe size={16} />
                <span className="uppercase">{lang}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-[#111111] border border-white/10 rounded-sm py-2 shadow-xl min-w-[100px]">
                  <button
                    onClick={() => handleLangChange("id")}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${lang === 'id' ? 'text-primary-container' : 'text-white/70 hover:bg-white/10'}`}
                  >
                    ID - Indonesia
                  </button>
                  <button
                    onClick={() => handleLangChange("en")}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${lang === 'en' ? 'text-primary-container' : 'text-white/70 hover:bg-white/10'}`}
                  >
                    EN - English
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Hamburger / close button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:ml-4"
          >
            <span
              className={`h-[2px] w-6 bg-white transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-y-[4px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-white transition-transform duration-300 ease-in-out ${
                isOpen ? '-translate-y-[4px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-black transition-opacity duration-500 ease-in-out ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <span
          aria-hidden
          className={`absolute right-8 top-24 h-2.5 w-2.5 rounded-full bg-red-600 transition-all duration-500 md:right-10 ${
            isOpen ? 'scale-100 opacity-100 delay-300' : 'scale-0 opacity-0'
          }`}
        />

        <nav className="flex flex-col gap-5 px-6 pt-32 sm:gap-6 sm:pt-40 md:px-16 flex-1">
          {MENU_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${i * 60 + 100}ms` : '0ms' }}
              className={`w-fit text-3xl font-semibold text-white transition-all duration-500 ease-out hover:text-white/60 sm:text-4xl ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Language Switcher */}
        <div 
          className={`px-6 pb-12 md:px-16 transition-all duration-500 ease-out ${
            isOpen ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="flex items-center gap-4 border-t border-white/10 pt-6">
            <span className="text-white/50 text-sm uppercase tracking-widest font-semibold">Language</span>
            <div className="flex gap-2">
              <button 
                onClick={() => setLang("id")}
                className={`px-3 py-1 rounded-sm text-sm font-medium transition-colors ${lang === 'id' ? 'bg-primary-container text-white' : 'text-white/60 border border-white/10'}`}
              >
                ID
              </button>
              <button 
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-sm text-sm font-medium transition-colors ${lang === 'en' ? 'bg-primary-container text-white' : 'text-white/60 border border-white/10'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}