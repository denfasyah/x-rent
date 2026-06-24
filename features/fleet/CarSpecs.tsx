import { Car } from "@/data/cars";
import { Users, Gauge, Settings, CheckCircle2, Navigation } from "lucide-react";

export default function CarSpecs({ car }: { car: Car }) {
  return (
    <div className="space-y-12">
      {/* Quick Specs Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-lg flex flex-col items-center justify-center text-center gap-2">
          <Users className="text-primary-container" size={24} />
          <div>
            <p className="text-white/50 text-[11px] uppercase tracking-wider">Seats</p>
            <p className="text-white font-semibold">{car.seats} People</p>
          </div>
        </div>
        <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-lg flex flex-col items-center justify-center text-center gap-2">
          <Gauge className="text-primary-container" size={24} />
          <div>
            <p className="text-white/50 text-[11px] uppercase tracking-wider">Power</p>
            <p className="text-white font-semibold">{car.power} HP</p>
          </div>
        </div>
        <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-lg flex flex-col items-center justify-center text-center gap-2">
          <Settings className="text-primary-container" size={24} />
          <div>
            <p className="text-white/50 text-[11px] uppercase tracking-wider">Transmission</p>
            <p className="text-white font-semibold">{car.transmission}</p>
          </div>
        </div>
        <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-lg flex flex-col items-center justify-center text-center gap-2">
          <Navigation className="text-primary-container" size={24} />
          <div>
            <p className="text-white/50 text-[11px] uppercase tracking-wider">Type</p>
            <p className="text-white font-semibold">{car.type}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">About this {car.brand}</h2>
        <p className="text-white/70 leading-relaxed font-light">
          {car.description}
        </p>
      </section>

      {/* Performance */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Performance Details</h2>
        <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-white/50 text-sm mb-1">Engine</p>
              <p className="text-white font-medium">{car.performance.engine}</p>
            </div>
            <div>
              <p className="text-white/50 text-sm mb-1">Acceleration</p>
              <p className="text-white font-medium">{car.performance.acceleration}</p>
            </div>
            <div>
              <p className="text-white/50 text-sm mb-1">Top Speed</p>
              <p className="text-white font-medium">{car.performance.topSpeed}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Premium Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {car.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-[#0a0a0a] border border-white/5 p-4 rounded-lg">
              <CheckCircle2 className="text-primary-container shrink-0" size={20} />
              <span className="text-white/80 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
