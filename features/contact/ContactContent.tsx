"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      alert("Please fill out your name and message.");
      return;
    }

    const text = `Hello xRENT, I have an inquiry.\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/6281234567890?text=${encodedText}`, '_blank');
  };

  return (
    <div className="pt-20 bg-background min-h-screen pb-20">
       {/* Hero Section */}
      <section className="relative w-full overflow-hidden border-b border-outline-variant/10 h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            alt="Contact hero background"
            className="w-full h-full object-cover object-center brightness-50"
            src="https://images.unsplash.com/photo-1560046522-835617a26ba7?q=80&w=2938&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/30"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-5 md:px-6 w-full max-w-[1280px] mx-auto mt-10">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-[40px] md:text-[64px] mb-4 leading-tight text-white font-semibold">
            Get in <span className="text-primary-container">Touch</span>
          </h1>
          <p className="font-body-lg text-[16px] md:text-[18px] text-white/80 max-w-2xl font-light">
            Have questions about our fleet or services? Our concierge team is ready to assist you 24/7.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Contact Information</h2>
              <p className="text-white/70 text-lg font-light leading-relaxed mb-10">
                Whether you're looking to reserve a specific model, arrange an airport pickup, or require a long-term lease, our dedicated team is here to provide an unparalleled experience.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-container/20 group-hover:border-primary-container/50 group-hover:text-primary-container transition-all text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Showroom Location</h3>
                  <p className="text-white/60 leading-relaxed">
                    123 Luxury Drive, Automotive District<br />
                    Jakarta Selatan, DKI Jakarta 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-container/20 group-hover:border-primary-container/50 group-hover:text-primary-container transition-all text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Phone Number</h3>
                  <p className="text-white/60 leading-relaxed">
                    +62 812 3456 7890<br />
                    <span className="text-sm opacity-70">24/7 Concierge Hotline</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-container/20 group-hover:border-primary-container/50 group-hover:text-primary-container transition-all text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Email Address</h3>
                  <p className="text-white/60 leading-relaxed">
                    inquiries@xrent.com<br />
                    partnerships@xrent.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary-container/20 group-hover:border-primary-container/50 group-hover:text-primary-container transition-all text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Operating Hours</h3>
                  <p className="text-white/60 leading-relaxed">
                    Monday - Friday: 09:00 AM - 08:00 PM<br />
                    Saturday - Sunday: 10:00 AM - 06:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-transparent"></div>
            <h2 className="text-2xl font-semibold text-white mb-8">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Your Name <span className="text-primary-container">*</span></label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Message <span className="text-primary-container">*</span></label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all resize-none"
                  placeholder="I'm interested in..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-container hover:brightness-110 text-white font-bold uppercase tracking-widest text-sm py-4 rounded-sm transition-all shadow-lg shadow-primary-container/20 active:scale-95 flex items-center justify-center gap-3 mt-4"
              >
                <span>Send to WhatsApp</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-24 lg:mt-32 w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 relative grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.01423450915!2d106.74108873730593!3d-6.284428801931327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d30079f01%3A0x2e74f2341fff266d!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1714488000000!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Showroom Location"
          ></iframe>
          <div className="absolute inset-0 bg-primary-container/10 pointer-events-none mix-blend-overlay"></div>
        </div>
      </section>
    </div>
  );
}
