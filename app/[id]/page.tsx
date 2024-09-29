"use client";
import { getAllCars } from "@/actions/cars";
import CarDetails from "./_components/CarDetails";
import { Car } from "@/actions/type";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [selectedCarData, setSelectedCarData] = useState<Car | null>(null);
  
  useEffect(() => {
    const fetchCarData = async (params) => {
      if (params?.id) {
        const allCars = await getAllCars(); // Fetch all cars        
        const findById = allCars.cars.find(car => car.id === Number(params.id));         
        setSelectedCarData(findById); // Set the selected car data
      }
    };

    fetchCarData(params);
  }, [params?.id]);
  
  if (!selectedCarData) {
    return <div>Loading...</div>; // Optional: Display a loading state while fetching data
  }

  return <CarDetails selectedCarData={selectedCarData} />;
}