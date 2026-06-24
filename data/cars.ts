export interface Car {
  id: number;
  slug: string;
  brand: string;
  name: string;
  price: string;
  image: string;
  gallery: string[];
  description: string;
  seats: number;
  power: number;
  transmission: string;
  type: string;
  features: string[];
  performance: {
    topSpeed: string;
    acceleration: string;
    engine: string;
  };
}

export const cars: Car[] = [
  {
    id: 1,
    slug: "brabus-gle-coupe",
    brand: "Mercedes-AMG",
    name: "Brabus GLE Coupe",
    price: "Rp 15.000.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADhoST7BzgBOrbeqnCtfSxa9-1Omw0Tcsi1zBs9aL2fRb-iW3f9rz2VUsBwea7SbSM5bTyosKAzLcFOW00BagVWr1zxZNVDBrmCSlEipDTR8Q0Oj0fvY6UJEBg5SRpE8WKYHnWfmx-i2_ZwDqmKBgVQBkiJz4HdvakOrHx9z7pA-lL1-X5iKArQAoxcP-70rD98QRSsn4a8WPSFzpzzenUIaVpNCpP3p_0_uSUIQlgcLDLGONJuc73fVRSKl2WzQ_ct2Sma6DSAx0M",
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2064&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2131&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025&auto=format&fit=crop"
    ],
    description: "The Brabus GLE Coupe combines the agility of an SUV with the elegance of a coupe. Upgraded by Brabus to deliver an astonishing 800 horsepower, this luxurious beast guarantees an exhilarating driving experience while surrounding you in absolute comfort and cutting-edge technology.",
    seats: 5,
    power: 800,
    transmission: "Automatic",
    type: "SUV",
    features: ["Burmester High-End 3D Surround Sound", "Panoramic Sliding Sunroof", "Active Distance Assist DISTRONIC", "MBUX Augmented Reality Navigation", "Heated & Ventilated Front Seats"],
    performance: {
      topSpeed: "280 km/h",
      acceleration: "3.4s 0-100 km/h",
      engine: "4.0L V8 Biturbo"
    }
  },
  {
    id: 2,
    slug: "ferrari-testarossa",
    brand: "Ferrari",
    name: "Testarossa",
    price: "Rp 10.000.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdkmqi3UzBDHNsgkL15l_5j-JClNrCq4Wp_vWAZcV4R4dKGpZ1vqSQHiQnd9UBlIfH9RfKJH0EV7zuI_pRKNASMr3Fq1MX_u2Ii7VZIV-DbdEOHAVDe5bIsWLAsjJWGJPFRkCecrSYH_E2cM66GSdYUySIwBX6imOTWdON8D-T4QJxD3tWx3YWQilIVqRrNuYSOhAsVevn0LMvIqPRnfD_2OtbnmIkUfJ58a0SwQ5anwEEdbbG1TgDiRpTiaJ5pmnSYv8sOHzUgwLI",
    gallery: [
      "https://images.unsplash.com/photo-1592853625601-bb11ba30c51b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2064&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555353540-64fd8b028bfb?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "An icon of the 1980s, the Ferrari Testarossa stands as a testament to pure mechanical driving passion. With its legendary flat-12 engine and striking Pininfarina strakes, driving this classic is an event that commands attention anywhere.",
    seats: 2,
    power: 390,
    transmission: "Manual",
    type: "Classic",
    features: ["Gated 5-Speed Manual", "Connolly Leather Interior", "Pop-up Headlights", "Iconic Side Strakes", "Scuderia Ferrari Shields"],
    performance: {
      topSpeed: "290 km/h",
      acceleration: "5.3s 0-100 km/h",
      engine: "4.9L Flat-12"
    }
  },
  {
    id: 3,
    slug: "mclaren-720s",
    brand: "McLaren",
    name: "720S",
    price: "Rp 25.000.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcM-2CXz0L1YZyEN6G6QSbRTK015_IVx1LXu0Qkc652GduXev0QVsaJCIzBmlYtLvK0tb5VdoLH1CHIUnVcTHaGG6KVLYtyGzZxYFYctgfpRqA2KuAp1ZldLsiVgazYI3AbcMLtKwcyopeJAI-AHRKwiZceJNxqPEUezIZ-lynGn669sYnb3C_cddnqrdN0TgC-VzE_sTpaO3z2HdGJ8pIWYOtw93MehxLmS9S01ZmwqY4znLHW0Wo_1G6WJCtV4Eoc4LXvN1AH8PU",
    gallery: [
      "https://images.unsplash.com/photo-1620882814836-98ecb2f9eb84?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620882814885-3269bb2f3e82?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634820875222-0d1dc9d84c31?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "The McLaren 720S redefines the supercar standard with its ferociously fast acceleration and alien-like aerodynamics. Crafted around a carbon fiber monocoque, it offers unparalleled agility and a driving experience that connects you intimately with the road.",
    seats: 2,
    power: 710,
    transmission: "Automatic",
    type: "Supercar",
    features: ["Carbon Fiber Monocage II", "Dihedral Doors", "Folding Driver Display", "Proactive Chassis Control II", "Bowers & Wilkins Audio System"],
    performance: {
      topSpeed: "341 km/h",
      acceleration: "2.9s 0-100 km/h",
      engine: "4.0L V8 Twin-Turbo"
    }
  },
  {
    id: 4,
    slug: "lamborghini-aventador-svj",
    brand: "Lamborghini",
    name: "Aventador SVJ",
    price: "Rp 35.000.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADhoST7BzgBOrbeqnCtfSxa9-1Omw0Tcsi1zBs9aL2fRb-iW3f9rz2VUsBwea7SbSM5bTyosKAzLcFOW00BagVWr1zxZNVDBrmCSlEipDTR8Q0Oj0fvY6UJEBg5SRpE8WKYHnWfmx-i2_ZwDqmKBgVQBkiJz4HdvakOrHx9z7pA-lL1-X5iKArQAoxcP-70rD98QRSsn4a8WPSFzpzzenUIaVpNCpP3p_0_uSUIQlgcLDLGONJuc73fVRSKl2WzQ_ct2Sma6DSAx0M",
    gallery: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621007947395-5853b1b6ab6c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563720225384-f3153f284b39?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575510659616-2ffecbfae1df?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "The Lamborghini Aventador SVJ is the ultimate expression of the naturally aspirated V12 engine. Equipped with the ALA 2.0 active aerodynamics system, this track-focused monster delivers blistering lap times and an exhaust note that screams pure performance.",
    seats: 2,
    power: 770,
    transmission: "Automatic",
    type: "Supercar",
    features: ["ALA 2.0 Active Aerodynamics", "Naturally Aspirated V12", "Carbon Ceramic Brakes", "Alcantara Interior", "Four-Wheel Steering"],
    performance: {
      topSpeed: "350 km/h",
      acceleration: "2.8s 0-100 km/h",
      engine: "6.5L V12"
    }
  },
  {
    id: 5,
    slug: "porsche-911-gt3-rs",
    brand: "Porsche",
    name: "911 GT3 RS",
    price: "Rp 20.000.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdkmqi3UzBDHNsgkL15l_5j-JClNrCq4Wp_vWAZcV4R4dKGpZ1vqSQHiQnd9UBlIfH9RfKJH0EV7zuI_pRKNASMr3Fq1MX_u2Ii7VZIV-DbdEOHAVDe5bIsWLAsjJWGJPFRkCecrSYH_E2cM66GSdYUySIwBX6imOTWdON8D-T4QJxD3tWx3YWQilIVqRrNuYSOhAsVevn0LMvIqPRnfD_2OtbnmIkUfJ58a0SwQ5anwEEdbbG1TgDiRpTiaJ5pmnSYv8sOHzUgwLI",
    gallery: [
      "https://images.unsplash.com/photo-1503376712341-0048236c53fa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506015391300-4152f4456620?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563214532-62ce93e64a13?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Bred for the track but street-legal, the Porsche 911 GT3 RS is a marvel of German engineering. Its high-revving naturally aspirated flat-six engine and razor-sharp PDK transmission make every corner an opportunity to push the limits of physics.",
    seats: 2,
    power: 520,
    transmission: "Automatic",
    type: "Sports Car",
    features: ["PDK Transmission", "Rear-Axle Steering", "Magnesium Roof", "Carbon Fiber Bucket Seats", "Clubsport Package"],
    performance: {
      topSpeed: "312 km/h",
      acceleration: "3.2s 0-100 km/h",
      engine: "4.0L Flat-6 Naturally Aspirated"
    }
  },
  {
    id: 6,
    slug: "aston-martin-dbs",
    brand: "Aston Martin",
    name: "DBS Superleggera",
    price: "Rp 22.000.000",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcM-2CXz0L1YZyEN6G6QSbRTK015_IVx1LXu0Qkc652GduXev0QVsaJCIzBmlYtLvK0tb5VdoLH1CHIUnVcTHaGG6KVLYtyGzZxYFYctgfpRqA2KuAp1ZldLsiVgazYI3AbcMLtKwcyopeJAI-AHRKwiZceJNxqPEUezIZ-lynGn669sYnb3C_cddnqrdN0TgC-VzE_sTpaO3z2HdGJ8pIWYOtw93MehxLmS9S01ZmwqY4znLHW0Wo_1G6WJCtV4Eoc4LXvN1AH8PU",
    gallery: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603584173852-c845b41ea9ba?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549488344-c6af94ce8b0e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580274455052-eb4126960114?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603584173892-9a0090875e5b?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603584173907-8e6f1f1d167f?q=80&w=2069&auto=format&fit=crop"
    ],
    description: "The Aston Martin DBS Superleggera seamlessly blends brute force with breathtaking beauty. As the ultimate super GT, it wraps a monstrous V12 engine in a sculpted carbon-fiber body, delivering cross-country pace with uncompromising luxury.",
    seats: 4,
    power: 715,
    transmission: "Automatic",
    type: "Coupe",
    features: ["Carbon Fiber Body Panels", "Bang & Olufsen BeoSound Audio", "Ventilated Leather Seats", "Adaptive Damping System", "360-Degree Camera"],
    performance: {
      topSpeed: "340 km/h",
      acceleration: "3.4s 0-100 km/h",
      engine: "5.2L V12 Twin-Turbo"
    }
  }
];
