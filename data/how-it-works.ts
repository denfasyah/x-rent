export interface HowItWorksStep {
  number: string;
  title: string;
  desc: string;
  detail: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: "01",
    title: "Browse & Choose",
    desc: "Explore our curated collection of luxury and sports cars. Filter by category, specs, or price — then pick the one that calls to you.",
    detail: "50+ vehicles available",
  },
  {
    number: "02",
    title: "Book in Minutes",
    desc: "Select your dates, pick your preferred delivery location, and complete the booking. Instant confirmation — no waiting, no calls required.",
    detail: "Confirmation under 5 min",
  },
  {
    number: "03",
    title: "We Deliver to You",
    desc: "Our team brings the car directly to your door — hotel, airport, office, wherever you are. White-glove handover, every time.",
    detail: "Door-to-door delivery",
  },
  {
    number: "04",
    title: "Drive & Enjoy",
    desc: "Take the wheel and experience the road as it was meant to be driven. Our concierge team stays available 24/7 throughout your journey.",
    detail: "24/7 support on the road",
  },
];
