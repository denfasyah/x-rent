'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const MENU_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'View Fleet', href: '/fleet' },
  { label: 'About', href: '/about' },
  { label: 'Why Choose Us?', href: '/#why-choose-us' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Desktop inline nav — fades out when the overlay menu is open */}
          <nav
            className={`hidden flex-[2] md:mr-20 items-center justify-end gap-8 transition-opacity duration-300 ease-in-out md:flex ${
              isOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger / close button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px]"
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
        {/* status dot accent, top right */}
        <span
          aria-hidden
          className={`absolute right-8 top-24 h-2.5 w-2.5 rounded-full bg-red-600 transition-all duration-500 md:right-10 ${
            isOpen ? 'scale-100 opacity-100 delay-300' : 'scale-0 opacity-0'
          }`}
        />

        <nav className="flex flex-col gap-5 px-6 pt-32 sm:gap-6 sm:pt-40 md:px-16">
          {MENU_LINKS.map((link, i) => (
            <Link
              key={link.label}
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
      </div>
    </>
  );
}