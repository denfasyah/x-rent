"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Car } from "@/data/cars";
import { WHATSAPP_NUMBER } from "@/data/contact";
import { useLanguage } from "@/lib/LanguageContext";

interface CarBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: Car;
}

const copy = {
  en: {
    title: "Booking Reservation",
    nameLabel: "Full Name",
    namePlaceholder: "Your Name",
    startDate: "Start Date",
    endDate: "End Date",
    location: "Delivery Location",
    locationPlaceholder: "e.g. South Jakarta",
    requests: "Special Requests (Optional)",
    requestsPlaceholder: "Need a baby seat...",
    cancel: "Cancel",
    confirm: "Confirm & Chat",
    validationAlert: "Please fill out all required fields.",
    waGreeting: "Hello xRENT, I would like to book the",
    waName: "Name",
    waStart: "Start Date",
    waEnd: "End Date",
    waLocation: "Location",
    waRequests: "Requests",
    waClosing: "Please confirm availability.",
  },
  id: {
    title: "Reservasi Pemesanan",
    nameLabel: "Nama Lengkap",
    namePlaceholder: "Nama Anda",
    startDate: "Tanggal Mulai",
    endDate: "Tanggal Selesai",
    location: "Lokasi Pengiriman",
    locationPlaceholder: "mis. Jakarta Selatan",
    requests: "Permintaan Khusus (Opsional)",
    requestsPlaceholder: "Butuh kursi bayi...",
    cancel: "Batal",
    confirm: "Konfirmasi & Chat",
    validationAlert: "Harap isi semua kolom yang wajib diisi.",
    waGreeting: "Halo xRENT, saya ingin memesan",
    waName: "Nama",
    waStart: "Tanggal Mulai",
    waEnd: "Tanggal Selesai",
    waLocation: "Lokasi",
    waRequests: "Permintaan",
    waClosing: "Mohon konfirmasi ketersediaannya.",
  },
} as const;

export default function CarBookingModal({ isOpen, onClose, car }: CarBookingModalProps) {
  const { lang } = useLanguage();
  const c = copy[lang];

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [requests, setRequests] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !startDate || !endDate || !location) {
      alert(c.validationAlert);
      return;
    }

    const text = `${c.waGreeting} *${car.brand} ${car.name}*.\n\n*${c.waName}:* ${name}\n*${c.waStart}:* ${startDate}\n*${c.waEnd}:* ${endDate}\n*${c.waLocation}:* ${location}\n*${c.waRequests}:* ${requests ? requests : "-"}\n\n${c.waClosing}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#161616]">
              <h2 className="text-xl font-semibold text-white">{c.title}</h2>
              <button
                onClick={onClose}
                className="text-white/50 hover:text-white transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-white/70 text-sm mb-2">
                  {c.nameLabel} <span className="text-primary-container">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={c.namePlaceholder}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    {c.startDate} <span className="text-primary-container">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    {c.endDate} <span className="text-primary-container">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">
                  {c.location} <span className="text-primary-container">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder={c.locationPlaceholder}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">{c.requests}</label>
                <textarea
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  placeholder={c.requestsPlaceholder}
                  rows={3}
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-lg font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {c.cancel}
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-container hover:brightness-110 text-white font-bold rounded-lg shadow-lg shadow-primary-container/20 active:scale-95 transition-all"
                >
                  {c.confirm}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}