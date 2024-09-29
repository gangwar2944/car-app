import { useRouter } from 'next/router';
import { getAllCars } from "@/actions/cars";
import CarDetails from "./_components/CarDetails";
import { Car } from "@/actions/type";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const { id } = router.query; // Access the ID from the URL parameters
  const [selectedCarData, setSelectedCarData] = useState<Car | null>(null);

  useEffect(() => {
    const fetchCarData = async () => {
      if (id) {
        const allCars = await getAllCars(); // Fetch all cars
        const findById = allCars.cars.find((item) => item.id === id) as Car; // Find the car by ID
        setSelectedCarData(findById); // Set the selected car data
      }
    };

    fetchCarData();
  }, [id]); // Effect runs when ID changes

  if (!selectedCarData) {
    return <div>Loading...</div>; // Optional: Display a loading state while fetching data
  }

  return <CarDetails selectedCarData={selectedCarData} />;
}
