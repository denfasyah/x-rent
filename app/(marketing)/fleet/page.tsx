import { Metadata } from "next";
import FleetContent from "@/features/fleet/FleetContent";

export const metadata: Metadata = {
  title: "Fleet",
  description:
    "Browse xRENT's curated luxury car fleet. From Ferrari to Lamborghini — reserve your dream vehicle with 24/7 concierge support.",
};

export default function FleetPage() {
  return (
    <main>
      <FleetContent />
    </main>
  );
}
