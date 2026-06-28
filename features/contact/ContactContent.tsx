"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { contactInfoItems } from "@/data/contact";
import { WHATSAPP_NUMBER } from "@/data/contact";
import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/lib/LanguageContext";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const copy = {
  en: {
    infoHeading: "Contact Information",
    infoDesc: "Whether you're looking to reserve a specific model, arrange an airport pickup, or require a long-term lease, our dedicated team is here to provide an unparalleled experience.",
    hours: "Operating Hours",
    concierge: "Concierge Support",
    conciergeVal: "24/7 Available",
    delivery: "Vehicle Delivery",
    deliveryVal: "06:00 - 23:00",
    showroom: "Showroom Visits",
    showroomVal: "By Appointment",
    formTitle: "Send a Message",
    formDesc: "Fill out the form below and we'll connect you directly with our concierge via WhatsApp for an immediate response.",
    nameLabel: "Your Name *",
    namePlaceholder: "Your Name",
    emailLabel: "Email Address",
    emailPlaceholder: "Your Email",
    subjectLabel: "Subject",
    subjectPlaceholder: "e.g. Wedding Car Rental Inquiry",
    messageLabel: "Message *",
    messagePlaceholder: "How can we help you?",
    sendBtn: "Send via WhatsApp",
    validationAlert: "Please fill out your name and message.",
    waGreeting: "Hello xRENT, I have an inquiry.",
    waName: "Name",
    waEmail: "Email",
    waSubject: "Subject",
    waMessage: "Message",
    mapTitle: "Our Location",
    mapDesc: "Visit our showroom in Jakarta by appointment.",
  },
  id: {
    infoHeading: "Informasi Kontak",
    infoDesc: "Apakah Anda ingin mereservasi model tertentu, mengatur penjemputan bandara, atau memerlukan sewa jangka panjang, tim kami siap memberikan pengalaman terbaik.",
    hours: "Jam Operasional",
    concierge: "Dukungan Concierge",
    conciergeVal: "Tersedia 24/7",
    delivery: "Pengiriman Kendaraan",
    deliveryVal: "06:00 - 23:00",
    showroom: "Kunjungan Showroom",
    showroomVal: "Dengan Perjanjian",
    formTitle: "Kirim Pesan",
    formDesc: "Isi formulir di bawah dan kami akan menghubungkan Anda langsung dengan concierge kami via WhatsApp untuk respons segera.",
    nameLabel: "Nama Anda *",
    namePlaceholder: "Your Name",
    emailLabel: "Alamat Email",
    emailPlaceholder: "Your Email",
    subjectLabel: "Subjek",
    subjectPlaceholder: "mis. Penyewaan Mobil Pernikahan",
    messageLabel: "Pesan *",
    messagePlaceholder: "Bagaimana kami bisa membantu Anda?",
    sendBtn: "Kirim via WhatsApp",
    validationAlert: "Harap isi nama dan pesan Anda.",
    waGreeting: "Halo xRENT, saya memiliki pertanyaan.",
    waName: "Nama",
    waEmail: "Email",
    waSubject: "Subjek",
    waMessage: "Pesan",
    mapTitle: "Lokasi Kami",
    mapDesc: "Kunjungi showroom kami di Jakarta dengan perjanjian.",
  },
} as const;

export default function ContactContent() {
  const { t, lang } = useLanguage();
  const c = copy[lang];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      alert(c.validationAlert);
      return;
    }
    const text = `${c.waGreeting}\n\n*${c.waName}:* ${name}\n*${c.waEmail}:* ${email}\n*${c.waSubject}:* ${subject}\n*${c.waMessage}:* ${message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="pt-20 bg-background min-h-screen pb-20">

      {/* ── Hero ── */}
      <PageHero
        eyebrow={t("page.contact.eyebrow")}
        title={
          <>
            {t("page.contact.title1")}{" "}
            <span className="text-primary-container">{t("page.contact.title2")}</span>
          </>
        }
        description={t("page.contact.description")}
        backgroundSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCiUg9lQA8M6zHXZUBe2OTFv4P2ACBE_-mXIypoNDSBcUkNLU5aWanik8FU4XpT7DlTXkXAXRl_D-ZbsX0yvZwiBR5GXeZpJqca6sb2O2w6UxHLLB0ogyyX-d98-LIW4FR1a4ooiN18RkoTMB0iBLCkFabIWiBYC4npcxpHyJDj04UEP1bHGv7wZvcjOa2VZ9O_QG34xBrd3IJg9x48A1aPmxbv0d5JnY0M3xVLxbaiHwI06IZasCOuhZBvAWDGlCdpm4--exenlzgk"
        heightClass="h-[40vh] min-h-[300px]"
      />

      {/* ── Main Content ── */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Contact Info */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                {c.infoHeading}
              </h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                {c.infoDesc}
              </p>
            </motion.div>

            <div className="space-y-8">
              {contactInfoItems.map((item) => (
                <motion.div key={item.title} variants={itemVariants} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary-container/50 group-hover:bg-primary-container/10 transition-all duration-300">
                    <item.icon size={22} className="text-white/70 group-hover:text-primary-container transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-lg">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-primary-container text-sm font-medium mb-1">{item.subtitle}</p>
                    )}
                    {item.lines.map((line, idx) => (
                      <p key={idx} className="text-white/60 font-light">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Operating Hours */}
            <motion.div variants={itemVariants} className="bg-[#0a0a0a] border border-white/5 p-8 rounded-xl">
              <h3 className="text-white font-semibold mb-4 text-lg">{c.hours}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-white/60 font-light border-b border-white/5 pb-3">
                  <span>{c.concierge}</span>
                  <span className="text-white font-medium">{c.conciergeVal}</span>
                </div>
                <div className="flex justify-between items-center text-white/60 font-light border-b border-white/5 pb-3">
                  <span>{c.delivery}</span>
                  <span className="text-white font-medium">{c.deliveryVal}</span>
                </div>
                <div className="flex justify-between items-center text-white/60 font-light">
                  <span>{c.showroom}</span>
                  <span className="text-white font-medium">{c.showroomVal}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-10 sticky top-28">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">{c.formTitle}</h3>
                <p className="text-white/50 text-sm font-light">{c.formDesc}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-semibold ml-1">
                    {c.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                    placeholder={c.namePlaceholder}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-semibold ml-1">
                    {c.subjectLabel}
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                    placeholder={c.subjectPlaceholder}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-semibold ml-1">
                    {c.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all resize-none"
                    placeholder={c.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-container text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all duration-300 mt-4 group"
                >
                  {c.sendBtn}
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Google Maps ── */}
      <motion.section
        className="max-w-[1280px] mx-auto px-5 md:px-6 pb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-white mb-1">{c.mapTitle}</h3>
          <p className="text-white/50 text-sm">{c.mapDesc}</p>
        </div>
        <div className="w-full h-[400px] rounded-xl overflow-hidden border border-white/10">
          <iframe
            title="xRENT Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.29405298236!2d106.75415857832031!3d-6.194900000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.section>

    </div>
  );
}