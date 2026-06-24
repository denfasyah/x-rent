import { Car } from "@/data/cars";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CarHeroProps {
  car: Car;
  onBook: () => void;
}

export default function CarHero({ car, onBook }: CarHeroProps) {
  return (
    <div className="relative w-full h-[50vh] min-h-[400px]">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent"></div>
      
      <div className="absolute top-8 left-5 md:left-10 z-10">
        <Link href="/fleet" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-sm">
          <ArrowLeft size={16} />
          Back to Fleet
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-5 md:p-10 max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="text-primary-container font-semibold tracking-widest uppercase mb-2">{car.brand}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{car.name}</h1>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-white">{car.price}</span>
            <span className="text-white/60 uppercase pb-1">/ Day</span>
          </div>
        </div>
        
        {/* Mobile Booking Button (Only visible on small screens) */}
        <button
          onClick={onBook}
          className="md:hidden mt-2 bg-primary-container text-white font-bold uppercase tracking-widest text-sm py-4 px-8 rounded-sm shadow-lg shadow-primary-container/20 active:scale-95"
        >
          Book via WhatsApp
        </button>
      </div>
    </div>
  );
}
