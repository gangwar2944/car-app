"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  CarFront,
  ChevronLeft,
  ChevronRight,
  Church,
  CirclePower,
  DollarSign,
  Heart,
  MemoryStick,
  Share2,
  SquareActivity,
  TramFront,
} from "lucide-react";
import Image from "next/image";
import { Car } from "@/actions/type";

interface CarDetailsProps {
  selectedCarData: Car;
}

const CarDetails = ({ selectedCarData }: CarDetailsProps) => {
  console.log("car", selectedCarData);
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
      <div className="flex flex-col lg:flex-row gap-8  bg-white my-2">
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
        <div className="lg:w-1/2 w-full space-y-4 p-2">
          <h2 className="text-2xl font-bold">
            {selectedCarData.make} {selectedCarData.model} (
            {selectedCarData.year})
          </h2>
          <div className="flex items-center mt-1">
            {/* Star Ratings */}
            <div className="flex text-yellow-500">
              {/* Add 4 full stars and one half star */}
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .288l2.833 8.718h9.167l-7.417 5.39 2.833 8.718-7.416-5.39-7.417 5.39 2.833-8.718-7.417-5.39h9.167z" />
                </svg>
              ))}
              {/* Half star */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .288l2.833 8.718h9.167l-7.417 5.39 2.833 8.718-7.416-5.39v-17.436z" />
              </svg>
            </div>
            {/* Reviews */}
            <span className="ml-2 text-sm text-gray-600">1.2K Reviews</span>
          </div>

          {/* Right Section: Button and Icons */}
          <div className="flex items-center space-x-4">
            {/* Rate & Win Button */}
            <button className="bg-gray-100 text-sm text-gray-800 border border-gray-300 rounded-lg py-1 px-3 hover:bg-gray-200">
              Rate & Win ₹1000
            </button>

            {/* Heart Icon */}
            <Heart />

            {/* Share Icon */}
            <Share2 />
          </div>

          <p className="text-gray-700">{selectedCarData.description}</p>
          <b className="text-xl text-black flex items-center gap-1">
            <DollarSign size={"1.2rem"} />
            {selectedCarData.price}
          </b>

          <div>
            <button className="text-blue-500 border border-blue-500 transition-colors py-2 px-4 rounded-md w-[200px]">
              Check Exciting Offers
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">
          {selectedCarData.make} specs & features
        </h1>

        <div className="flex space-x-8 border-b border-gray-200 pb-3">
          <button className="text-blue-500 border-b-2 border-blue-500 pb-2">
            Key Specifications
          </button>
          <button className="text-gray-500">Top Features</button>
          <button className="text-gray-500">Stand Out Features</button>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-6">
          <div className="flex items-center space-x-4">
            <Church className="w-6 h-6" />
            <div>
              <p className="text-gray-500">Engine</p>
              <p className="text-lg font-semibold">
                {selectedCarData.specifications.engine}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <TramFront />
            <div>
              <p className="text-gray-500">Ground Clearance</p>
              <p className="text-lg font-semibold">
                {selectedCarData.specifications.mpg}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <CirclePower />
            <div>
              <p className="text-gray-500">Power</p>
              <p className="text-lg font-semibold">
                {selectedCarData.specifications.horsepower}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <SquareActivity />
            <div>
              <p className="text-gray-500">Torque</p>
              <p className="text-lg font-semibold">
                {selectedCarData.specifications.torque}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <MemoryStick />
            <div>
              <p className="text-gray-500">Seat Capacity</p>
              <p className="text-lg font-semibold">
                {selectedCarData.specifications.seatCapacity || 4}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <CarFront />
            <div>
              <p className="text-gray-500">Drive Type</p>
              <p className="text-lg font-semibold">
                {selectedCarData.specifications.driveType}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <a href="#" className="text-blue-500 font-semibold hover:underline">
            View All Specs and Features &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
