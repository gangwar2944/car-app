"use client";
import { Car } from "@/actions/type";
import Card from "./Card";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import { useState } from "react";

interface HomeProps {
  carData: Car[];
}

export default function Home({ carData }: HomeProps) {
  console.log("cardata", carData);
  const [capsules] = useState<Car[]>(carData);
  const [isLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Filtering state
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [makeFilter, setMakeFilter] = useState<string>("");

  // Calculate indexes for slicing data based on current page and items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Filter cars based on search criteria
  const filteredCapsules = capsules.filter((car) => {
    const matchesSearchTerm =
      car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.make.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear ? car.year === selectedYear : true;
    const matchesMake = makeFilter
      ? car.make.toLowerCase() === makeFilter.toLowerCase()
      : true;

    return matchesSearchTerm && matchesYear && matchesMake;
  });

  const currentItems = filteredCapsules.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Pagination handler
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full lg:w-[60%] md:w-[80%] m-auto">
      {/* Filter section */}
      <div className="p-5 flex gap-3 flex-wrap">
        <input
          type="text"
          placeholder="Search by make or model"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <select
          value={makeFilter}
          onChange={(e) => setMakeFilter(e.target.value)}
          className="border rounded p-2 flex-1"
        >
          <option value="">All Makes</option>
          {/* Replace these with actual makes from your data */}
          {Array.from(new Set(capsules.map((car) => car.make))).map(
            (make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            )
          )}
        </select>
        <select
          value={selectedYear || ""}
          onChange={(e) =>
            setSelectedYear(e.target.value ? Number(e.target.value) : null)
          }
          className="border rounded p-2 flex-1"
        >
          <option value="">All Years</option>
          {/* Replace these with actual years from your data */}
          {Array.from(new Set(capsules.map((car) => car.year))).map(
            (year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            )
          )}
        </select>
      </div>

      <div className="p-5 flex justify-around gap-3 flex-wrap">
        {/* Render the current page's items */}
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Loader className="z-[1002]" />
          </div>
        ) : currentItems.length !== 0 ? (
          currentItems.map((item) => (
            <Card
              key={item.id}
              imageSrc="https://images.unsplash.com/photo-1517271710308-aa99f1519490?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title={item.model}
              content={item.description}
              buttonText="View Details"
              price={item.price}
              id={item.id}
            />
          ))
        ) : (
          <div className="w-full h-[150px] flex justify-center items-center text-gray-500">
            No record found
          </div>
        )}

        {/* Pagination controls */}
        <div className="flex justify-end lg:justify-center w-full">
          <div className="flex border border-[#0055fb] rounded-lg">
            {/* Previous button */}
            <p
              onClick={() => {
                if (currentPage > 1) {
                  paginate(currentPage - 1);
                }
              }}
              className={`px-4 py-2 border-r-2 border-[#0055fb] cursor-pointer flex items-center text-[#0055fb] ${
                currentPage <= 1 && "text-gray-400"
              }`}
            >
              <ChevronLeft />
              Prev
            </p>

            {/* Pagination numbers */}
            {Array.from({
              length: Math.ceil(filteredCapsules.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 cursor-pointer ${
                  index + 1 === currentPage
                    ? "bg-[#0055fb] text-white"
                    : "bg-white text-[#0055fb]"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next button */}
            <p
              onClick={() => {
                if (
                  Math.ceil(filteredCapsules.length / itemsPerPage) >
                  currentPage
                ) {
                  paginate(currentPage + 1);
                }
              }}
              className={`px-4 py-2 border-l-2 border-[#0055fb] cursor-pointer flex items-center text-[#0055fb] ${
                currentPage >=
                  Math.ceil(filteredCapsules.length / itemsPerPage) &&
                "text-gray-400"
              }`}
            >
              Next
              <ChevronRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
