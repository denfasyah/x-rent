"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { cars } from "@/data/cars";
import CarCard from "@/features/fleet/CarCard";

const ITEMS_PER_PAGE = 6;

export default function FleetContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [seatsFilter, setSeatsFilter] = useState("All Seats");
  const [sortPrice, setSortPrice] = useState("Default");
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown states
  const [openDropdown, setOpenDropdown] = useState<"type" | "seats" | "price" | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCars = useMemo(() => {
    return cars
      .filter((car) => {
        // Search
        const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              car.brand.toLowerCase().includes(searchQuery.toLowerCase());
        
        // Type
        const matchesType = typeFilter === "All Types" || car.type.toLowerCase() === typeFilter.toLowerCase();
        
        // Seats
        let matchesSeats = true;
        if (seatsFilter === "2 Seats") matchesSeats = car.seats === 2;
        if (seatsFilter === "4 Seats") matchesSeats = car.seats === 4;
        if (seatsFilter === "5+ Seats") matchesSeats = car.seats >= 5;

        return matchesSearch && matchesType && matchesSeats;
      })
      .sort((a, b) => {
        if (sortPrice === "Default") return 0;
        
        const priceA = parseInt(a.price.replace(/\D/g, ""));
        const priceB = parseInt(b.price.replace(/\D/g, ""));
        
        if (sortPrice === "Low to High") return priceA - priceB;
        if (sortPrice === "High to Low") return priceB - priceA;
        return 0;
      });
  }, [searchQuery, typeFilter, seatsFilter, sortPrice]);

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE) || 1;
  const currentCars = filteredCars.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, typeFilter, seatsFilter, sortPrice]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden border-b border-outline-variant/10 h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="Hero background"
            className="w-full h-full object-cover object-center brightness-75"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-ZZqZwJyahnH62H2krJFjyDaW_SeyMQayXx-fTkpwkj-cZJcSkCKxWYA2WgULl0ZWo2lfuT8NZJ73jY-eM3hud4FUXcYHfPbIQRvmvLdUowBDUAEmkpsLScjdjt-aIEK85ZA2_mjlwSl05uN1hmfYdR3JkvG4R1xYhk80qp6NGiWRh_vkeXj2lvJuad8MEP1DthzlLIgaAiSb7518aqexvHNuUR3ubaEpHJ2HKV6UZrq_MSqr17zk6O8t5_E6rF9TzeLQ1WTqtxdI"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/20"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-5 md:px-6 w-full max-w-[1280px] mx-auto mt-10">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-[40px] md:text-[64px] mb-4 leading-tight text-white font-semibold">
            Discover Our <span className="text-primary-container">Elite Fleet</span>
          </h1>
          <p className="font-body-lg text-[16px] md:text-[18px] text-white/90 max-w-2xl font-light">
            Immerse yourself in a curated collection of the world's finest vehicles, where every car is a masterpiece of design and high performance.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-background/90 backdrop-blur-md border-b border-white/10" ref={dropdownRef}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-primary-container"></div>
            <h2 className="font-headline-md text-[24px] font-medium text-white shrink-0">Our Fleet</h2>
          </div>
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative group flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-primary-container transition-colors" size={18} />
              <input
                className="bg-transparent border border-white/20 pl-10 pr-4 py-2.5 text-white text-[14px] focus:border-primary-container focus:ring-0 w-full md:w-64 transition-all outline-none rounded-sm"
                placeholder="Search fleet..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Dropdowns */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Seats Dropdown */}
              <div className="relative flex-1 md:flex-none">
                <button 
                  onClick={() => setOpenDropdown(openDropdown === "seats" ? null : "seats")}
                  className="w-full flex items-center justify-between gap-2 border border-white/20 px-4 py-2.5 hover:border-primary-container transition-colors rounded-sm bg-black"
                >
                  <span className="text-[12px] text-white uppercase font-semibold tracking-wider whitespace-nowrap">
                    {seatsFilter === "All Seats" ? "Filter By Seats" : seatsFilter}
                  </span>
                  <ChevronDown size={16} className={`text-primary-container transition-transform ${openDropdown === 'seats' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === "seats" && (
                  <div className="absolute top-full left-0 mt-2 w-full min-w-[140px] bg-[#0a0a0a] border border-white/10 rounded-sm py-2 shadow-xl z-50">
                    {["All Seats", "2 Seats", "4 Seats", "5+ Seats"].map(seat => (
                      <button 
                        key={seat}
                        onClick={() => { setSeatsFilter(seat); setOpenDropdown(null); }}
                        className={`w-full text-left px-4 py-2 text-[13px] hover:bg-white/10 transition-colors ${seatsFilter === seat ? "text-primary-container font-semibold" : "text-white/80"}`}
                      >
                        {seat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Type Dropdown */}
              <div className="relative flex-1 md:flex-none">
                <button 
                  onClick={() => setOpenDropdown(openDropdown === "type" ? null : "type")}
                  className="w-full flex items-center justify-between gap-2 border border-white/20 px-4 py-2.5 hover:border-primary-container transition-colors rounded-sm bg-black"
                >
                  <span className="text-[12px] text-white uppercase font-semibold tracking-wider whitespace-nowrap">
                    {typeFilter === "All Types" ? "Filter By Type" : typeFilter}
                  </span>
                  <ChevronDown size={16} className={`text-primary-container transition-transform ${openDropdown === 'type' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === "type" && (
                  <div className="absolute top-full left-0 mt-2 w-full min-w-[160px] bg-[#0a0a0a] border border-white/10 rounded-sm py-2 shadow-xl z-50">
                    {["All Types", "Sedan", "Coupe", "Convertible", "SUV", "Sports Car", "Supercar", "Classic", "Hatchback"].map(type => (
                      <button 
                        key={type}
                        onClick={() => { setTypeFilter(type); setOpenDropdown(null); }}
                        className={`w-full text-left px-4 py-2 text-[13px] hover:bg-white/10 transition-colors ${typeFilter === type ? "text-primary-container font-semibold" : "text-white/80"}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Dropdown */}
              <div className="relative flex-1 md:flex-none">
                <button 
                  onClick={() => setOpenDropdown(openDropdown === "price" ? null : "price")}
                  className="w-full flex items-center justify-between gap-2 border border-white/20 px-4 py-2.5 hover:border-primary-container transition-colors rounded-sm bg-black"
                >
                  <span className="text-[12px] text-white uppercase font-semibold tracking-wider whitespace-nowrap">
                    {sortPrice === "Default" ? "Sort By Price" : sortPrice}
                  </span>
                  <ChevronDown size={16} className={`text-primary-container transition-transform ${openDropdown === 'price' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === "price" && (
                  <div className="absolute top-full right-0 mt-2 w-full min-w-[160px] bg-[#0a0a0a] border border-white/10 rounded-sm py-2 shadow-xl z-50">
                    {["Default", "Low to High", "High to Low"].map(sort => (
                      <button 
                        key={sort}
                        onClick={() => { setSortPrice(sort); setOpenDropdown(null); }}
                        className={`w-full text-left px-4 py-2 text-[13px] hover:bg-white/10 transition-colors ${sortPrice === sort ? "text-primary-container font-semibold" : "text-white/80"}`}
                      >
                        {sort}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-20 min-h-[50vh]">
        {currentCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-white/10 rounded-lg bg-[#0a0a0a]">
            <h3 className="text-xl font-medium text-white mb-2">No vehicles found</h3>
            <p className="text-white/60">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setTypeFilter("All Types");
                setSeatsFilter("All Seats");
                setSortPrice("Default");
              }}
              className="mt-6 text-primary-container hover:text-white transition-colors border-b border-primary-container"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 md:gap-2 mt-16 pt-12 border-t border-white/10 overflow-x-auto pb-4">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="flex items-center gap-1 px-3 py-2 text-white/60 hover:text-white disabled:opacity-30 disabled:hover:text-white/60 transition-colors"
            >
              <ChevronLeft size={16} />
              <span className="text-[12px] uppercase font-semibold tracking-wider hidden sm:inline">Prev</span>
            </button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                // Show first, last, current, and +/- 1 around current.
                if (
                  page === 1 || 
                  page === totalPages || 
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button 
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-[12px] font-semibold rounded-sm transition-colors ${
                        currentPage === page 
                          ? "bg-primary-container text-white" 
                          : "hover:bg-white/10 text-white"
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (
                  page === currentPage - 2 ||
                  page === currentPage + 2
                ) {
                  return <span key={page} className="px-1 md:px-2 text-white/60">...</span>;
                }
                return null;
              })}
            </div>

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className="flex items-center gap-1 px-3 py-2 text-white/60 hover:text-white disabled:opacity-30 disabled:hover:text-white/60 transition-colors"
            >
              <span className="text-[12px] uppercase font-semibold tracking-wider hidden sm:inline">Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 pb-24">
        <div className="relative overflow-hidden bg-[#0a0a0a] border border-white/10 p-8 md:p-24 text-center rounded-lg">
          {/* CTA Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              alt="CTA background"
              className="w-full h-full object-cover brightness-50"
              src={cars[0].image}
            />
            <div className="absolute inset-0 bg-black/75"></div>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-[32px] md:text-[40px] font-medium mb-6 text-white leading-tight">
              Looking for a Specific Model?
            </h2>
            <p className="text-[14px] md:text-[16px] text-white/80 mb-10 font-light">
              If you don't see the vehicle you desire in our current fleet, our exclusive concierge service can source the exact luxury car you're looking for.
            </p>
            <Link href="/contact" className="inline-block bg-primary-container text-white px-8 md:px-10 py-4 rounded-sm text-[12px] font-semibold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all duration-300">
              Contact Concierge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
