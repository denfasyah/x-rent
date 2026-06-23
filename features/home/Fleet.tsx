import Link from "next/link";
import { Users, Gauge, Settings, ArrowRight } from "lucide-react";
import { cars } from "@/data/cars";

export default function Fleet() {
  return (
    <section className="py-20 md:py-24 bg-black" id="fleet">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-8 md:items-end">
          <div className="md:w-1/2">
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-lg leading-[1.1] font-medium tracking-tight text-white">
              Discover Our<br />Featured Collection
            </h2>
          </div>
          <div className="md:w-1/2 md:max-w-md flex flex-col justify-end gap-6">
            <p className="font-body-md text-body-md text-secondary">
              Handpicked luxury and sports cars, curated for those who seek more than just a drive — crafted to deliver elegance, power, and an unforgettable journey.
            </p>
            <Link
              href="/fleet"
              className="group inline-flex items-center gap-3 text-white font-medium hover:text-primary-container transition-colors duration-300 font-body-md text-body-md w-fit"
            >
              <span className="w-6 h-[2px] bg-primary-container transition-all duration-300 group-hover:w-8" />
              View All Cars
            </Link>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group relative bg-[#0a0a0a] border border-white/5 hover:border-white/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col rounded-lg"
            >
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
                    <p className="text-[12px] text-secondary mb-1">{car.brand}</p>
                    <h3 className="text-xl font-medium text-white">{car.name}</h3>
                  </div>
                  {/* Type badge: neutral dark, no primary */}
                  <span className="bg-white/10 text-white/70 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border border-white/10">
                    {car.type}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mt-2 mb-6">
                  <span className="text-2xl font-bold text-white">{car.price}</span>
                  <span className="text-[10px] text-secondary uppercase pb-1">/ Day</span>
                </div>

                {/* Specs + Detail button */}
                <div className="flex items-center justify-between gap-3 mt-auto">
                  {/* Spec pills */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded text-[11px] text-secondary">
                      <Users size={13} className="text-primary-container shrink-0" />
                      {car.seats}
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded text-[11px] text-secondary">
                      <Gauge size={13} className="text-primary-container shrink-0" />
                      {car.power}
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded text-[11px] text-secondary">
                      <Settings size={13} className="text-primary-container shrink-0" />
                      {car.transmission}
                    </div>
                  </div>

                  {/* Detail button — primary colored, links to fleet/[id] */}
                  <Link
                    href={`/fleet/${car.id}`}
                    className="shrink-0 flex items-center gap-1.5 bg-primary-container hover:brightness-110 transition-all duration-200 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-2 rounded"
                    aria-label={`Detail ${car.name}`}
                  >
                    Detail
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}