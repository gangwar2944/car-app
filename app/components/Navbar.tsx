import { User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 shadow-sm bg-white z-10">
      <div className="flex justify-between items-center py-5 px-5 w-full lg:w-[60%] md:w-[80%] m-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="font-bold text-xl text-orange-500">Suzuki</span>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 flex justify-center">
          <input
            className="h-10 p-2 border border-gray-400 rounded-full w-full lg:w-[60%] pl-5"
            placeholder="Search..."
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center">
          <div className="hidden md:inline-block relative text-left">
            <div>
              <button className="inline-flex justify-center text-gray-700">
                All
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mx-4">
            <User />
          </div>
          <button className="hidden md:block border border-gray-300 rounded-md px-3 py-1 text-gray-600 hover:bg-gray-200">
            Login / Register
          </button>
        </div>
      </div>
    </nav>
  );
}
