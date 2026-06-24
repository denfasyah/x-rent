import { Car } from "@/data/cars";
import { Info } from "lucide-react";

interface CarReservationCardProps {
  car: Car;
  onBook: () => void;
}

export default function CarReservationCard({ car, onBook }: CarReservationCardProps) {
  return (
    <>
      {/* Desktop Sidebar Card */}
      <div className="hidden lg:block relative">
        <div className="sticky top-28 bg-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-xl shadow-2xl">
          <h3 className="text-xl font-medium text-white mb-6">Reserve this vehicle</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className="text-white/60 text-sm">Daily Rate</span>
              <span className="text-white font-semibold">{car.price}</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-white/5 group relative">
              <span className="text-white/60 text-sm flex items-center gap-1.5 cursor-help">
                Included Mileage
                <Info size={14} className="text-white/40" />
              </span>
              <span className="text-white font-semibold">Unlimited Mileage</span>
              
              {/* Tooltip */}
              <div className="absolute left-0 bottom-full mb-2 w-full p-2 bg-black/90 border border-white/10 rounded text-[11px] text-white/80 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                Drive as far as you want. No extra charges per kilometer.
              </div>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-white/5 group relative">
              <span className="text-white/60 text-sm flex items-center gap-1.5 cursor-help">
                Insurance
                <Info size={14} className="text-white/40" />
              </span>
              <span className="text-white font-semibold">Premium Cover</span>
              
              {/* Tooltip */}
              <div className="absolute left-0 bottom-full mb-2 w-full p-2 bg-black/90 border border-white/10 rounded text-[11px] text-white/80 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                100% comprehensive insurance. All damages and liabilities are fully covered by xRENT.
              </div>
            </div>
          </div>

          <button
            onClick={onBook}
            className="w-full bg-primary-container hover:brightness-110 text-white font-bold uppercase tracking-widest text-sm py-4 rounded-sm transition-all shadow-lg shadow-primary-container/20 active:scale-95"
          >
            Book via WhatsApp
          </button>

          <p className="text-center text-white/40 text-[11px] mt-4 leading-relaxed">
            You won't be charged yet. Our concierge team will confirm availability and process payment securely.
          </p>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 p-4 z-40 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div>
          <p className="text-white/50 text-[10px] uppercase tracking-wider mb-0.5">Daily Rate</p>
          <p className="text-white font-bold text-lg">{car.price}</p>
        </div>
        <button
          onClick={onBook}
          className="bg-primary-container text-white font-bold uppercase tracking-widest text-xs py-3 px-6 rounded-sm active:scale-95 transition-transform"
        >
          Book Now
        </button>
      </div>
    </>
  );
}
