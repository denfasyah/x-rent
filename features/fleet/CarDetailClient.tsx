"use client";

import { useState } from "react";
import { Car, getCars } from "@/data/cars";
import CarHero from "./CarHero";
import CarSpecs from "./CarSpecs";
import CarGallery from "./CarGallery";
import CarReservationCard from "./CarReservationCard";
import CarBookingModal from "./CarBookingModal";
import { useLanguage } from "@/lib/LanguageContext";

export default function CarDetailClient({ car: initialCar }: { car: Car }) {
  const { lang } = useLanguage();
  const car = getCars(lang).find(c => c.slug === initialCar.slug) || initialCar;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="pt-20 bg-background min-h-screen pb-20">
      <CarHero car={car} onBook={openModal} />

      <div className="max-w-[1280px] mx-auto px-5 md:px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Main Content (Left) */}
        <div className="lg:col-span-2 space-y-12">
          <CarSpecs car={car} />
          <CarGallery gallery={car.gallery} />
        </div>

        {/* Sidebar Panel (Right) & Mobile Sticky Bar */}
        <CarReservationCard car={car} onBook={openModal} />
        
      </div>

      <CarBookingModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        car={car} 
      />
    </div>
  );
}
