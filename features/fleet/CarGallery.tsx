"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CarGallery({ gallery }: { gallery: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide functionality when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isOpen, gallery.length]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold text-white mb-6">Gallery</h2>
      
      {/* 6 Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((img, idx) => (
          <div 
            key={idx} 
            onClick={() => openModal(idx)}
            className={`cursor-pointer rounded-lg overflow-hidden relative group ${
              idx === 0 ? 'col-span-2 row-span-2 h-[300px] md:h-[400px]' : 'h-[140px] md:h-[190px]'
            }`}
          >
            <img 
              src={img} 
              alt={`Gallery ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full Screen Modal Slider */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-2 rounded-full transition-colors z-50"
            >
              <X size={24} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-10 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-colors z-50"
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-10 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-colors z-50"
            >
              <ChevronRight size={32} />
            </button>

            <div className="relative w-full max-w-6xl h-[60vh] md:h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                src={gallery[currentIndex]}
                alt={`Gallery Large ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Pagination indicators */}
              <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
                {gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === currentIndex ? "bg-primary-container w-8" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
