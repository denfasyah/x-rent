import Link from "next/link";
import { cars } from "@/data/cars";
import CarCard from "@/features/fleet/CarCard";

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
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}