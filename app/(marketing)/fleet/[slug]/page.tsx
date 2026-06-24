import { notFound } from "next/navigation";
import { cars } from "@/data/cars";
import CarDetailClient from "@/features/fleet/CarDetailClient";

export default async function CarDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const car = cars.find((c) => c.slug === resolvedParams.slug);

  if (!car) {
    notFound();
  }

  return (
    <main>
      <CarDetailClient car={car} />
    </main>
  );
}
