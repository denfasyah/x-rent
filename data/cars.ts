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
    slug: "porsche-911-carrera-964",
    brand: "Porsche",
    name: "911 Carrera (964)",
    price: "Rp 18.000.000",
    image: "/cars/porsche9114.png",
    gallery: [
      "/cars/porsche9111.png",
      "/cars/porsche9112.png",
      "/cars/porsche9113.png",
      "/cars/porsche9114.png",
      "/cars/porsche9115.png",
      "/cars/porsche9116.png",
    ],
    description:
      "The Porsche 911 Carrera 964 is living automotive history — a classic that defined an era and continues to captivate collectors worldwide. Produced from 1989 to 1994, its air-cooled flat-six engine delivers a mechanical symphony that no modern car can replicate. Driving the 964 is not nostalgia — it is a visceral, unfiltered connection between driver, machine, and road.",
    seats: 2,
    power: 250,
    transmission: "Manual",
    type: "Classic",
    features: [
      "Air-Cooled Flat-Six Engine",
      "Original Recaro Sport Seats",
      "Fully Restored Leather Interior",
      "Classic Porsche Sound System",
      "Sport Exhaust System",
      "Fuchs Alloy Wheels (Restored)",
      "Bilstein Performance Suspension",
      "Matching Numbers Engine & Gearbox",
    ],
    performance: {
      topSpeed: "260 km/h",
      acceleration: "5.4 detik (0–100 km/h)",
      engine: "3.6L Air-Cooled Flat-Six, 250 hp",
    },
  },
   {
    id: 2,
    slug: "ferrari-488-gtb",
    brand: "Ferrari",
    name: "488 GTB",
    price: "Rp 55.000.000",
    image: "/cars/ferrari4883.png",
    gallery: [
      "/cars/ferrari4881.png",
      "/cars/ferrari4882.png",
      "/cars/ferrari4883.png",
      "/cars/ferrari4884.png",
      "/cars/ferrari4885.png",
      "/cars/ferrari4886.png",
    ],
    description:
      "The Ferrari 488 GTB is the purest expression of Maranello's mid-engine philosophy. Born from decades of Formula 1 dominance, its twin-turbocharged V8 howls to 8,000 rpm while delivering 660 horsepower with surgical precision. Every surface of the 488 is aerodynamically functional — sculpted not for style alone, but to pin 325 km/h to the tarmac.",
    seats: 2,
    power: 660,
    transmission: "Automatic",
    type: "Sports Car",
    features: [
      "Ferrari Dynamic Enhancer Plus",
      "Side Slip Control 2 System",
      "Ferrari Telemetry (Race Mode)",
      "Carbon Ceramic Matrix Brakes",
      "Manettino Drive Mode Dial",
      "Forged Aluminum Racing Seats",
      "Apple CarPlay Integration",
      "Scuderia Ferrari Shield Badging",
    ],
    performance: {
      topSpeed: "330 km/h",
      acceleration: "3.0 detik (0–100 km/h)",
      engine: "3.9L Twin-Turbo V8, 660 hp",
    },
  },
   {
    id: 3,
    slug: "mclaren-720s",
    brand: "McLaren",
    name: "720S",
    price: "Rp 45.000.000",
    image: "/cars/mclaren720S4.png",
    gallery: [
      "/cars/mclaren720S1.png",
      "/cars/mclaren720S2.png",
      "/cars/mclaren720S3.png",
      "/cars/mclaren720S4.png",
      "/cars/mclaren720S5.png",
      "/cars/mclaren720S6.png",
    ],
    description:
      "The McLaren 720S is a technical masterpiece — a mid-engine British supercar that redefines what is possible from a road car. Its monocoque carbon fiber chassis, aerodynamic dihedral doors, and twin-turbocharged V8 engine produce a sensory experience unlike anything else. The 720S does not merely move through space — it bends physics around it.",
    seats: 2,
    power: 720,
    transmission: "Automatic",
    type: "Supercar",
    features: [
      "McLaren Track Telemetry System",
      "Bowers & Wilkins Premium Audio",
      "Proactive Chassis Control II",
      "Variable Drift Control",
      "Electrochromic Glass Roof",
      "Active Dynamics Panel",
      "Carbon Fiber Racing Seats",
      "Launch Control System",
    ],
    performance: {
      topSpeed: "341 km/h",
      acceleration: "2.9 detik (0–100 km/h)",
      engine: "4.0L Twin-Turbo V8, 720 hp",
    },
  },
  {
    id: 4,
    slug: "mercedes-benz-e-class-w214",
    brand: "Mercedes-Benz",
    name: "E-Class W214",
    price: "Rp 8.500.000",
    image: "/cars/mercededs4.png",
    gallery: [
      "/cars/mercededs1.png",
      "/cars/mercededs2.png",
      "/cars/mercededs3.png",
      "/cars/mercededs4.png",
      "/cars/mercededs5.png",
      "/cars/mercededs6.png",
    ],
    description:
      "The Mercedes-Benz E-Class W214 represents the pinnacle of executive sedan engineering. With its commanding presence, sumptuous interior crafted from the finest materials, and cutting-edge MBUX technology, every journey becomes an occasion. The E-Class delivers a seamless blend of comfort, performance, and understated luxury that has defined the benchmark for its class.",
    seats: 5,
    power: 333,
    transmission: "Automatic",
    type: "Sedan",
    features: [
      "MBUX Superscreen Dual Display",
      "Burmester 3D Surround Sound",
      "Active Distance Assist DISTRONIC",
      "Air Balance Fragrance System",
      "360° Camera System",
      "Heated & Ventilated Front Seats",
      "Panoramic Sliding Sunroof",
      "Wireless Apple CarPlay & Android Auto",
    ],
    performance: {
      topSpeed: "250 km/h",
      acceleration: "5.1 detik (0–100 km/h)",
      engine: "3.0L Inline-6 Turbo, 333 hp",
    },
  },
  {
    id: 5,
    slug: "bmw-4-series-gran-coupe",
    brand: "BMW",
    name: "4 Series Gran Coupe",
    price: "Rp 9.200.000",
    image: "/cars/bmw44.png",
    gallery: [
      "/cars/bmw41.png",
      "/cars/bmw42.png",
      "/cars/bmw43.png",
      "/cars/bmw44.png",
      "/cars/bmw45.png",
      "/cars/bmw46.png",
    ],
    description:
      "The BMW 4 Series Gran Coupe is the ultimate expression of athletic elegance. Its iconic kidney grille, sculpted flanks, and dramatically sloping roofline turn every street into a runway. Inside, the curved BMW Live Cockpit Professional display and M Sport appointments create a driver-focused environment where technology and luxury converge without compromise.",
    seats: 4,
    power: 374,
    transmission: "Automatic",
    type: "Coupe",
    features: [
      "BMW Live Cockpit Professional",
      "Harman Kardon Surround Sound",
      "M Sport Suspension",
      "Head-Up Display",
      "Active Park Distance Control",
      "Adaptive LED Headlights",
      "Gesture Control",
      "Wireless Charging Pad",
    ],
    performance: {
      topSpeed: "250 km/h",
      acceleration: "4.5 detik (0–100 km/h)",
      engine: "3.0L TwinPower Turbo Inline-6, 374 hp",
    },
  },
  {
    id: 6,
    slug: "lamborghini-urus",
    brand: "Lamborghini",
    name: "Urus",
    price: "Rp 28.000.000",
    image: "/cars/lamborghinihs3.png",
    gallery: [
      "/cars/lamborghinihs1.png",
      "/cars/lamborghinihs2.png",
      "/cars/lamborghinihs3.png",
      "/cars/lamborghinihs4.png",
      "/cars/lamborghinihs5.png",
      "/cars/lamborghinihs6.png",
    ],
    description:
      "The Lamborghini Urus is the world's first Super SUV — a vehicle that defies convention with supercar DNA wrapped in an imposing SUV silhouette. With 650 horsepower on tap, it storms from 0 to 100 km/h in just 3.6 seconds while offering genuine everyday usability. The Urus is not a compromise — it is the full Lamborghini experience, elevated.",
    seats: 5,
    power: 650,
    transmission: "Automatic",
    type: "SUV",
    features: [
      "Lamborghini Infotainment System III",
      "Bang & Olufsen 3D Advanced Sound System",
      "ANIMA Drive Mode Selector",
      "Carbon Ceramic Brakes",
      "4-Zone Climate Control",
      "Active Road Noise Cancellation",
      "Night Vision Assist",
      "Adaptive Air Suspension",
    ],
    performance: {
      topSpeed: "305 km/h",
      acceleration: "3.6 detik (0–100 km/h)",
      engine: "4.0L Twin-Turbo V8, 650 hp",
    },
  },
 
 

];