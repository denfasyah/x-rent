import Link from "next/link";
import { Users, Gauge, Settings, ArrowRight } from "lucide-react";
import { Car } from "@/data/cars";

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="group relative bg-[#0a0a0a] border border-white/5 hover:border-white/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col rounded-lg">
      {/* Image */}
      <div className="aspect-[4/3] relative w-full overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt={car.name}
          src={car.image}
        />
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Brand + name + type badge */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[12px] text-white/60 mb-1 uppercase tracking-tighter">{car.brand}</p>
            <h3 className="text-xl font-medium text-white">{car.name}</h3>
          </div>
          <span className="bg-white/5 text-white/70 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border border-white/10">
            {car.type}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-end gap-1 mt-2 mb-6">
          <span className="text-2xl font-bold text-white">{car.price}</span>
          <span className="text-[10px] text-white/60 uppercase pb-1">/ Day</span>
        </div>

        {/* Specs + Detail button */}
        <div className="flex items-center justify-between gap-3 mt-auto pt-6 border-t border-white/10">
          {/* Spec pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded text-[11px] text-secondary text-white/60">
              <Users size={13} className="text-primary-container shrink-0" />
              {car.seats}
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded text-[11px] text-secondary text-white/60">
              <Gauge size={13} className="text-primary-container shrink-0" />
              {car.power} HP
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded text-[11px] text-secondary text-white/60">
              <Settings size={13} className="text-primary-container shrink-0" />
              {car.transmission}
            </div>
          </div>

          {/* Detail button */}
          <Link
            href={`/fleet/${car.id}`}
            className="shrink-0 flex items-center gap-1.5 bg-primary-container hover:brightness-110 transition-all duration-200 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-2 rounded-sm"
            aria-label={`Detail ${car.name}`}
          >
            Detail
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
