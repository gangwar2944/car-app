"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Car } from "@/actions/type";

interface CarDetailsProps {
    selectedCarData: Car;
}

const CarDetails = ({ selectedCarData }: CarDetailsProps) => {
    console.log("car",selectedCarData);
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Navigate through carousel images
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedCarData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedCarData.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto p-4">
      {/* Back Button */}
      <button
        className="text-blue-500 font-semibold mb-4 flex items-center space-x-2"
        onClick={() => router.push("/")}
      >
        <ChevronLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </button>

      {/* selectedCarData Info */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image selectedCarDataousel */}
        <div className="lg:w-1/2 w-full">
          <div className="relative">
            <Image
              src={selectedCarData?.images[currentImageIndex]}
              alt={`selectedCarData image ${currentImageIndex + 1}`}
              width={100}
              height={100}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            {/* Previous and Next buttons */}
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow hover:bg-opacity-100"
              onClick={goToPreviousImage}
            >
              <ChevronLeft />
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow hover:bg-opacity-100"
              onClick={goToNextImage}
            >
              <ChevronRight />
            </button>
          </div>
          <div className="flex justify-center space-x-2 mt-2">
            {selectedCarData.images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentImageIndex === index ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* selectedCarData Details */}
        <div className="lg:w-1/2 w-full space-y-4">
          <h2 className="text-2xl font-bold">
            {selectedCarData.make} {selectedCarData.model} ({selectedCarData.year})
          </h2>
          <p className="text-xl text-gray-500">{selectedCarData.price}</p>
          <p className="text-gray-700">{selectedCarData.description}</p>

          {/* Specifications */}
          <h3 className="text-lg font-semibold mt-4">Specifications:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {Object.entries(selectedCarData.specifications).map(([key, value], index) => (
              <li key={index}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
