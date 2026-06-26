import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Preloader from "@/components/layouts/Preloader";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "xRENT — Luxury Car Rental",
    template: "%s | xRENT",
  },
  description:
    "xRENT — Indonesia's premier luxury car rental service. Curated fleet of 50+ elite vehicles with 24/7 concierge, door-to-door delivery, and seamless WhatsApp booking.",
  keywords: ["luxury car rental", "sewa mobil mewah", "rental mobil Jakarta", "Ferrari rental", "Lamborghini rental", "xRENT"],
  authors: [{ name: "xRENT" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://xrent.com",
    siteName: "xRENT",
    title: "xRENT — Luxury Car Rental Indonesia",
    description: "Curated fleet of 50+ elite vehicles. 24/7 concierge, door-to-door delivery, seamless booking via WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "xRENT — Luxury Car Rental Indonesia",
    description: "Curated fleet of 50+ elite vehicles. 24/7 concierge, door-to-door delivery, seamless booking via WhatsApp.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}