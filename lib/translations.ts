// ─────────────────────────────────────────────────────────────────────────────
// translations.ts
// Flat key-value translation map for EN and ID.
// Used by useLanguage().t('key') throughout the app.
// ─────────────────────────────────────────────────────────────────────────────

export const translations = {
  en: {
    // ── Navbar ──────────────────────────────────────────────────────────────
    "nav.home": "Home",
    "nav.fleet": "Fleet",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.viewFleet": "View Fleet",
    "nav.whyChooseUs": "Why Choose Us?",
    "nav.howItWorks": "How It Works",
    "nav.faq": "FAQ",

    // ── Footer ──────────────────────────────────────────────────────────────
    "footer.brand.description":
      "Luxury is not just a car — it's how every moment is valued. We are here to ensure every journey you take is extraordinary.",
    "footer.quickLinks": "Quick Links",
    "footer.featuredCars": "Featured Cars",
    "footer.whyChooseUs": "Why Choose Us?",
    "footer.howItWorks": "How It Works",
    "footer.support": "Support",
    "footer.faq": "FAQ",
    "footer.about": "About",
    "footer.contact": "Contact",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.contactUs": "Contact Us",
    "footer.copyright": "© 2025 xRENT — All Rights Reserved",
    "footer.terms": "Terms of Service",
    "footer.security": "Security",

    // ── Hero ────────────────────────────────────────────────────────────────
    "hero.line1": "Drive Beyond Limits.",
    "hero.line2": "Live Beyond Time.",
    "hero.description":
      "Experience uncompromising luxury and performance. Our exclusive collection is ready to take you on your journey.",
    "hero.cta": "Browse Our Fleet",

    // ── Fleet (home section) ─────────────────────────────────────────────────
    "fleet.heading": "Discover Our\nFeatured Collection",
    "fleet.description":
      "Handpicked luxury and sports cars, curated for those who seek more than just a drive — crafted to deliver elegance, power, and an unforgettable journey.",
    "fleet.cta": "View All Cars",

    // ── About (home section) ──────────────────────────────────────────────
    "about.heading": "Redefining the way\nyou experience luxury",
    "about.description":
      "Elevate your car rental journey with xRENT's unmatched benefits. Experience luxury and ease like never before — every feature designed for your success.",
    "about.cta": "Learn More About Us",

    // ── Why Choose Us ────────────────────────────────────────────────────────
    "whychoose.label": "Why Choose Us",
    "whychoose.heading": "The standard for\nluxury car rental",
    "whychoose.description":
      "We don't just rent cars — we curate experiences. Every detail, every vehicle, every interaction is designed to exceed the expectations of those who settle for nothing less than extraordinary.",
    "whychoose.cta": "Browse Our Fleet",

    // ── How It Works ─────────────────────────────────────────────────────────
    "howitworks.label": "How It Works",
    "howitworks.heading": "From browse\nto the open road",
    "howitworks.description":
      "Renting a luxury car should feel as smooth as the ride itself. That's why we've stripped away the friction — from browsing our collection to handing you the keys in minutes.",
    "howitworks.cta": "Start Browsing",
    "howitworks.readycta.heading": "Ready to take the wheel?",
    "howitworks.readycta.body": "Your next unforgettable drive is just a few clicks away.",
    "howitworks.readycta.btn": "Take The Wheel",

    // ── Testimonials ──────────────────────────────────────────────────────────
    "testimonials.label": "Testimonials",
    "testimonials.heading": "Journeys That Speak for Themselves",
    "testimonials.description":
      "Our clients don't just rent cars — they create unforgettable moments. Here are their stories.",
    "testimonials.quote1":
      "Driving the Brabus GLE was a dream come true. The booking process was seamless, delivery was flawless, and the car exceeded every expectation I had.",
    "testimonials.quote2":
      "xRENT's service was truly premium from start to finish. The car arrived on time, in immaculate condition, and the concierge team was always ready to help. The best experience I've ever had.",
    "testimonials.quote3":
      "I was blown away by the speed of booking and the quality of xRENT's fleet. The Ferrari I rented looked like it had just rolled off the showroom floor. Nothing else comes close.",
    "testimonials.quote4":
      "Their door-to-door service was outstanding. They delivered the Lamborghini directly to my hotel lobby. Truly an unforgettable experience.",

    // ── FAQ (home section) ────────────────────────────────────────────────────
    "faq.label": "FAQ",
    "faq.heading": "Your Questions — Answered",
    "faq.description":
      "Our expert team is dedicated to understanding your unique needs. If you have more questions, don't hesitate to reach out to us.",
    "faq.contactLink": "Contact Us",
    "faq.allFaqLink": "View All FAQs",

    // ── CTA ──────────────────────────────────────────────────────────────────
    "cta.heading": "Ready to Redefine Your Drive?",
    "cta.description":
      "A world of luxury awaits you. Book your dream vehicle today and experience the true thrill of the drive.",
    "cta.btn": "Contact Us",

    // ── Page Heroes ───────────────────────────────────────────────────────────
    "page.fleet.eyebrow": "Our Collection",
    "page.fleet.title1": "Discover Our",
    "page.fleet.title2": "Elite Fleet",
    "page.fleet.description":
      "Immerse yourself in a curated collection of the world's finest vehicles, where every car is a masterpiece of design and high performance.",

    "page.about.eyebrow": "Our Story",
    "page.about.title1": "Redefining Luxury",
    "page.about.title2": "Car Rental",
    "page.about.description":
      "Born from a passion for excellence, xRENT has redefined what a car rental experience should be — seamless, luxurious, and unforgettable.",

    "page.contact.eyebrow": "Let's Talk",
    "page.contact.title1": "Get in",
    "page.contact.title2": "Touch",
    "page.contact.description":
      "Have questions about our fleet or services? Our concierge team is ready to assist you 24/7.",

    "page.faq.eyebrow": "Help Center",
    "page.faq.title1": "Frequently Asked",
    "page.faq.title2": "Questions",
    "page.faq.description":
      "Everything you need to know about renting with xRENT. Can't find your answer? Chat with us directly.",

    // ── Fleet Page UI ────────────────────────────────────────────────────────
    "fleet.ui.ourFleet": "Our Fleet",
    "fleet.ui.search": "Search fleet...",
    "fleet.ui.filterSeats": "Filter By Seats",
    "fleet.ui.filterType": "Filter By Type",
    "fleet.ui.sortPrice": "Sort By Price",
    "fleet.ui.noResults": "No vehicles found",
    "fleet.ui.noResultsHint": "Try adjusting your filters or search query.",
    "fleet.ui.resetFilters": "Reset Filters",
    "fleet.ui.ctaTitle": "Looking for a Specific Model?",
    "fleet.ui.ctaDesc": "If you don't see the vehicle you desire in our current fleet, our exclusive concierge service can source the exact luxury car you're looking for.",
    "fleet.ui.ctaBtn": "Contact Concierge",

    // ── About Bento ────────────────────────────────────────────────────────
    "about.bento.thrill": "Feel The Thrill of\nPerformance",
    "about.bento.thrillDesc": "Feel the adrenaline as world-class engineering meets open roads — every drive is pure exhilaration.",
    "about.bento.comfort": "Easy Comfort",
    "about.bento.comfortDesc": "Hand-stitched interiors and advanced tech, crafted to delight your senses.",
    "about.bento.freedom": "Freedom of Choice",
    "about.bento.freedomDesc": "Explore a curated fleet of iconic luxury cars, ready for you.",
    "about.bento.freedomCta": "Choose Your Car",
    "about.bento.seamless": "Seamless Process",
    "about.bento.seamlessDesc": "From booking to driving, every step is fast, easy, and stress-free.",
    "about.bento.seamlessCta": "How it Works",
    "about.bento.stressFree": "Stress-Free Service",
    "about.bento.stressFreeDesc": "Enjoy a premium, stress-free experience with dedicated support at every step.",

    // ── Car Reservation Card ──────────────────────────────────────────────
    "reservation.title": "Reserve this vehicle",
    "reservation.dailyRate": "Daily Rate",
    "reservation.mileage": "Included Mileage",
    "reservation.mileageValue": "Unlimited Mileage",
    "reservation.mileageTip": "Drive as far as you want. No extra charges per kilometer.",
    "reservation.insurance": "Insurance",
    "reservation.insuranceValue": "Premium Cover",
    "reservation.insuranceTip": "100% comprehensive insurance. All damages and liabilities are fully covered by xRENT.",
    "reservation.bookBtn": "Book via WhatsApp",
    "reservation.bookNote": "You won't be charged yet. Our concierge team will confirm availability and process payment securely.",
    "reservation.bookNow": "Book Now",

    // ── Contact Page ──────────────────────────────────────────────────────
    "contact.infoTitle": "Contact Information",
    "contact.infoDesc": "Whether you're looking to reserve a specific model, arrange an airport pickup, or require a long-term lease, our dedicated team is here to provide an unparalleled experience.",
    "contact.hours": "Operating Hours",
    "contact.concierge": "Concierge Support",
    "contact.conciergeVal": "24/7 Available",
    "contact.delivery": "Vehicle Delivery",
    "contact.deliveryVal": "06:00 - 23:00",
    "contact.showroom": "Showroom Visits",
    "contact.showroomVal": "By Appointment",
    "contact.formTitle": "Send a Message",
    "contact.formDesc": "Fill out the form below and we'll connect you directly with our concierge via WhatsApp for an immediate response.",
    "contact.nameLabel": "Your Name *",
    "contact.namePlaceholder": "John Doe",
    "contact.emailLabel": "Email Address",
    "contact.emailPlaceholder": "john@example.com",
    "contact.subjectLabel": "Subject",
    "contact.subjectPlaceholder": "e.g. Wedding Car Rental Inquiry",
    "contact.messageLabel": "Message *",
    "contact.messagePlaceholder": "How can we help you?",
    "contact.sendBtn": "Send via WhatsApp",
    "contact.chatTitle": "Still have questions?",
    "contact.chatDesc": "Our team is available 24/7. Chat with us directly on WhatsApp.",
    "contact.chatBtn": "Chat Now →",

    // ── CTA Section (Footer CTA) ──────────────────────────────────────────
    "cta.footerTitle": "Ready to book your luxury experience?",
    "cta.footerDesc": "Browse our curated fleet and reserve your perfect vehicle today.",
    "cta.footerBtnContact": "Contact Us",
    "cta.footerBtnFleet": "View Fleet",
  },

  id: {
    // ── Navbar ──────────────────────────────────────────────────────────────
    "nav.home": "Beranda",
    "nav.fleet": "Armada",
    "nav.about": "Tentang Kami",
    "nav.contact": "Hubungi Kami",
    "nav.viewFleet": "Lihat Armada",
    "nav.whyChooseUs": "Mengapa Kami?",
    "nav.howItWorks": "Cara Kerja",
    "nav.faq": "FAQ",

    // ── Footer ──────────────────────────────────────────────────────────────
    "footer.brand.description":
      "Kemewahan bukan sekadar mobil, tapi bagaimana setiap momen dihargai. Kami hadir untuk memastikan setiap perjalanan Anda luar biasa.",
    "footer.quickLinks": "Tautan Cepat",
    "footer.featuredCars": "Mobil Unggulan",
    "footer.whyChooseUs": "Mengapa Kami?",
    "footer.howItWorks": "Cara Kerja",
    "footer.support": "Dukungan",
    "footer.faq": "FAQ",
    "footer.about": "Tentang Kami",
    "footer.contact": "Hubungi Kami",
    "footer.privacyPolicy": "Kebijakan Privasi",
    "footer.contactUs": "Kontak Kami",
    "footer.copyright": "© 2025 xRENT — Hak Cipta Dilindungi",
    "footer.terms": "Syarat & Ketentuan",
    "footer.security": "Keamanan",

    // ── Hero ────────────────────────────────────────────────────────────────
    "hero.line1": "Berkendara Tanpa Batas.",
    "hero.line2": "Hidup Tanpa Batas Waktu.",
    "hero.description":
      "Rasakan kemewahan dan performa tanpa kompromi. Koleksi eksklusif kami siap membawa Anda dalam perjalanan tak terlupakan.",
    "hero.cta": "Lihat Armada Kami",

    // ── Fleet (home section) ─────────────────────────────────────────────────
    "fleet.heading": "Temukan Koleksi\nUnggulan Kami",
    "fleet.description":
      "Mobil mewah dan sport pilihan terbaik, dikurasi untuk mereka yang menginginkan lebih dari sekadar berkendara — dirancang untuk menghadirkan keanggunan, tenaga, dan perjalanan tak terlupakan.",
    "fleet.cta": "Lihat Semua Mobil",

    // ── About (home section) ──────────────────────────────────────────────
    "about.heading": "Mendefinisikan ulang cara\nAnda merasakan kemewahan",
    "about.description":
      "Tingkatkan pengalaman sewa mobil Anda dengan keunggulan xRENT yang tak tertandingi. Rasakan kemewahan dan kemudahan seperti belum pernah ada sebelumnya.",
    "about.cta": "Pelajari Lebih Lanjut",

    // ── Why Choose Us ────────────────────────────────────────────────────────
    "whychoose.label": "Mengapa Memilih Kami",
    "whychoose.heading": "Standar untuk\nsewa mobil mewah",
    "whychoose.description":
      "Kami tidak hanya menyewakan mobil — kami menghadirkan pengalaman. Setiap detail, setiap kendaraan, setiap interaksi dirancang untuk melampaui ekspektasi mereka yang tidak mau berkompromi.",
    "whychoose.cta": "Lihat Armada Kami",

    // ── How It Works ─────────────────────────────────────────────────────────
    "howitworks.label": "Cara Kerja",
    "howitworks.heading": "Dari memilih\nhingga jalanan terbuka",
    "howitworks.description":
      "Menyewa mobil mewah seharusnya terasa semulus perjalanannya. Itulah mengapa kami menghilangkan hambatan — dari menelusuri koleksi hingga menyerahkan kunci dalam hitungan menit.",
    "howitworks.cta": "Mulai Mencari",
    "howitworks.readycta.heading": "Siap mengambil kemudi?",
    "howitworks.readycta.body":
      "Perjalanan tak terlupakan Anda berikutnya hanya dengan beberapa klik.",
    "howitworks.readycta.btn": "Ambil Kemudinya",

    // ── Testimonials ──────────────────────────────────────────────────────────
    "testimonials.label": "Testimoni",
    "testimonials.heading": "Perjalanan yang Berbicara Sendiri",
    "testimonials.description":
      "Klien kami tidak hanya menyewa mobil — mereka menciptakan momen tak terlupakan. Inilah cerita mereka.",
    "testimonials.quote1":
      "Mengendarai Brabus GLE adalah impian yang menjadi kenyataan. Proses pemesanan sangat lancar, pengirimannya sempurna, dan kondisi mobil jauh melampaui ekspektasi saya.",
    "testimonials.quote2":
      "Pelayanan xRENT benar-benar premium dari awal hingga akhir. Mobil tiba tepat waktu, kondisi mewah, dan tim concierge selalu siap membantu. Pengalaman terbaik yang pernah saya rasakan.",
    "testimonials.quote3":
      "Saya sangat terkesan dengan kecepatan booking dan kualitas armada xRENT. Ferrari yang saya sewa tampak seperti baru keluar dari showroom. Tidak ada tempat lain yang bisa menandingi ini.",
    "testimonials.quote4":
      "Layanan door-to-door nya luar biasa. Mereka mengantarkan Lamborghini langsung ke lobby hotel saya. Sungguh pengalaman yang tidak terlupakan.",

    // ── FAQ (home section) ────────────────────────────────────────────────────
    "faq.label": "FAQ",
    "faq.heading": "Pertanyaan Anda — Terjawab",
    "faq.description":
      "Tim ahli kami berdedikasi untuk memahami kebutuhan unik Anda. Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi kami.",
    "faq.contactLink": "Hubungi Kami",
    "faq.allFaqLink": "Lihat Semua FAQ",

    // ── CTA ──────────────────────────────────────────────────────────────────
    "cta.heading": "Siap Mendefinisikan Ulang Perjalanan Anda?",
    "cta.description":
      "Dunia kemewahan menanti Anda. Pesan kendaraan impian Anda hari ini dan rasakan sensasi berkendara yang sebenarnya.",
    "cta.btn": "Hubungi Kami",

    // ── Page Heroes ───────────────────────────────────────────────────────────
    "page.fleet.eyebrow": "Koleksi Kami",
    "page.fleet.title1": "Temukan",
    "page.fleet.title2": "Armada Elite Kami",
    "page.fleet.description":
      "Selami koleksi kendaraan terbaik dunia, di mana setiap mobil adalah mahakarya desain dan performa tinggi.",

    "page.about.eyebrow": "Kisah Kami",
    "page.about.title1": "Mendefinisikan Ulang",
    "page.about.title2": "Sewa Mobil Mewah",
    "page.about.description":
      "Lahir dari semangat akan keunggulan, xRENT telah mendefinisikan ulang apa yang seharusnya menjadi pengalaman sewa mobil — lancar, mewah, dan tak terlupakan.",

    "page.contact.eyebrow": "Mari Berbicara",
    "page.contact.title1": "Hubungi",
    "page.contact.title2": "Kami",
    "page.contact.description":
      "Punya pertanyaan tentang armada atau layanan kami? Tim concierge kami siap membantu Anda 24/7.",

    "page.faq.eyebrow": "Pusat Bantuan",
    "page.faq.title1": "Pertanyaan yang Sering",
    "page.faq.title2": "Diajukan",
    "page.faq.description":
      "Semua yang perlu Anda ketahui tentang menyewa dengan xRENT. Tidak menemukan jawaban? Chat langsung dengan kami.",

    // ── Fleet Page UI ────────────────────────────────────────────────────────
    "fleet.ui.ourFleet": "Armada Kami",
    "fleet.ui.search": "Cari armada...",
    "fleet.ui.filterSeats": "Filter Kursi",
    "fleet.ui.filterType": "Filter Tipe",
    "fleet.ui.sortPrice": "Urutkan Harga",
    "fleet.ui.noResults": "Kendaraan tidak ditemukan",
    "fleet.ui.noResultsHint": "Coba sesuaikan filter atau kata kunci pencarian Anda.",
    "fleet.ui.resetFilters": "Reset Filter",
    "fleet.ui.ctaTitle": "Mencari Model Tertentu?",
    "fleet.ui.ctaDesc": "Jika Anda tidak menemukan kendaraan yang diinginkan dalam armada kami, layanan concierge eksklusif kami dapat mencari mobil mewah yang Anda cari.",
    "fleet.ui.ctaBtn": "Hubungi Concierge",

    // ── About Bento ────────────────────────────────────────────────────────
    "about.bento.thrill": "Rasakan Sensasi\nPerforma",
    "about.bento.thrillDesc": "Rasakan adrenalin saat rekayasa kelas dunia bertemu jalanan terbuka — setiap perjalanan adalah keseruan murni.",
    "about.bento.comfort": "Kenyamanan Mudah",
    "about.bento.comfortDesc": "Interior dijahit tangan dan teknologi canggih, dirancang untuk menyenangkan indera Anda.",
    "about.bento.freedom": "Kebebasan Memilih",
    "about.bento.freedomDesc": "Jelajahi armada mobil mewah ikonik yang dikurasi, siap untuk Anda.",
    "about.bento.freedomCta": "Pilih Mobil Anda",
    "about.bento.seamless": "Proses Tanpa Hambatan",
    "about.bento.seamlessDesc": "Dari pemesanan hingga berkendara, setiap langkah cepat, mudah, dan bebas stres.",
    "about.bento.seamlessCta": "Cara Kerja",
    "about.bento.stressFree": "Layanan Tanpa Stres",
    "about.bento.stressFreeDesc": "Nikmati pengalaman premium tanpa stres dengan dukungan berdedikasi di setiap langkah.",

    // ── Car Reservation Card ──────────────────────────────────────────────
    "reservation.title": "Reservasi kendaraan ini",
    "reservation.dailyRate": "Tarif Harian",
    "reservation.mileage": "Kilometer Termasuk",
    "reservation.mileageValue": "Kilometer Tak Terbatas",
    "reservation.mileageTip": "Berkendara sejauh yang Anda mau. Tidak ada biaya tambahan per kilometer.",
    "reservation.insurance": "Asuransi",
    "reservation.insuranceValue": "Perlindungan Premium",
    "reservation.insuranceTip": "Asuransi komprehensif 100%. Semua kerusakan dan kewajiban sepenuhnya ditanggung oleh xRENT.",
    "reservation.bookBtn": "Pesan via WhatsApp",
    "reservation.bookNote": "Anda belum akan dikenakan biaya. Tim concierge kami akan mengkonfirmasi ketersediaan dan memproses pembayaran dengan aman.",
    "reservation.bookNow": "Pesan Sekarang",

    // ── Contact Page ──────────────────────────────────────────────────────
    "contact.infoTitle": "Informasi Kontak",
    "contact.infoDesc": "Apakah Anda ingin mereservasi model tertentu, mengatur penjemputan bandara, atau memerlukan sewa jangka panjang, tim kami siap memberikan pengalaman terbaik.",
    "contact.hours": "Jam Operasional",
    "contact.concierge": "Dukungan Concierge",
    "contact.conciergeVal": "Tersedia 24/7",
    "contact.delivery": "Pengiriman Kendaraan",
    "contact.deliveryVal": "06:00 - 23:00",
    "contact.showroom": "Kunjungan Showroom",
    "contact.showroomVal": "Dengan Perjanjian",
    "contact.formTitle": "Kirim Pesan",
    "contact.formDesc": "Isi formulir di bawah dan kami akan menghubungkan Anda langsung dengan concierge kami via WhatsApp untuk respons segera.",
    "contact.nameLabel": "Nama Anda *",
    "contact.namePlaceholder": "Budi Santoso",
    "contact.emailLabel": "Alamat Email",
    "contact.emailPlaceholder": "budi@contoh.com",
    "contact.subjectLabel": "Subjek",
    "contact.subjectPlaceholder": "mis. Penyewaan Mobil Pernikahan",
    "contact.messageLabel": "Pesan *",
    "contact.messagePlaceholder": "Bagaimana kami bisa membantu Anda?",
    "contact.sendBtn": "Kirim via WhatsApp",
    "contact.chatTitle": "Masih ada pertanyaan?",
    "contact.chatDesc": "Tim kami tersedia 24/7. Chat langsung dengan kami di WhatsApp.",
    "contact.chatBtn": "Chat Sekarang →",

    // ── CTA Section (Footer CTA) ──────────────────────────────────────────
    "cta.footerTitle": "Siap memesan pengalaman mewah Anda?",
    "cta.footerDesc": "Jelajahi armada kami dan reservasi kendaraan sempurna Anda hari ini.",
    "cta.footerBtnContact": "Hubungi Kami",
    "cta.footerBtnFleet": "Lihat Armada",
  },
} as const;
