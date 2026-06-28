import { notFound } from "next/navigation";
import { getCars } from "@/data/cars";
import CarDetailClient from "@/features/fleet/CarDetailClient";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const car = getCars("en").find((c) => c.slug === resolvedParams.slug);
  if (!car) return { title: "Car Not Found" };
  return {
    title: `${car.brand} ${car.name}`,
    description: car.description,
  };
}

export default async function CarDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const car = getCars("en").find((c) => c.slug === resolvedParams.slug);

  if (!car) {
    notFound();
  }

  return (
    <main>
      <CarDetailClient car={car} />
    </main>
  );
}
