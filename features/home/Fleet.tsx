import Image from "next/image";
import Link from "next/link";
import { Users, Gauge, Settings } from "lucide-react";
import { cars } from "@/data/cars";

export default function Fleet() {
  return (
    <section className="py-[160px] bg-black" id="fleet">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-12 md:items-end">
          <div className="md:w-1/2">
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl leading-[1.1] font-medium tracking-tight text-white">
              Discover Our<br />Featured Collection
            </h2>
          </div>
          <div className="md:w-1/2 md:max-w-md flex flex-col justify-end gap-6">
            <p className="font-body-md text-body-md text-secondary">
              Handpicked luxury and sports cars, curated for those who seek more than just a drive — crafted to deliver elegance, power, and an unforgettable journey.
            </p>
            <Link 
              href="/fleet" 
              className="inline-flex items-center gap-3 text-white font-medium hover:text-primary-container transition-colors font-body-md text-body-md"
            >
              <span className="w-6 h-[2px] bg-primary-container"></span>
              View All Cars
            </Link>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <Link href={`/fleet/${car.id}`} key={car.id} className="group relative bg-[#0a0a0a] border border-white/5 hover-lift overflow-hidden flex flex-col rounded-lg cursor-pointer">
              <div className="aspect-[4/3] relative w-full overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={car.name} 
                  src={car.image} 
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-[12px] text-secondary mb-1">{car.brand}</p>
                    <h3 className="text-xl font-medium text-white">{car.name}</h3>
                  </div>
                  <span className="bg-[#b81d1d] text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                    {car.type}
                  </span>
                </div>
                
                <div className="flex items-end gap-1 mt-2 mb-6">
                  <span className="text-2xl font-bold text-white">{car.price}</span>
                  <span className="text-[10px] text-secondary uppercase pb-1">/ Day</span>
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded text-[11px] text-secondary">
                    <Users size={14} className="text-primary-container" /> {car.seats}
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded text-[11px] text-secondary">
                    <Gauge size={14} className="text-primary-container" /> {car.power}
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded text-[11px] text-secondary">
                    <Settings size={14} className="text-primary-container" /> {car.transmission}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
