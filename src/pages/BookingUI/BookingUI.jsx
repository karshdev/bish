import { useState } from "react";

const BookingUI = () => {
  const [expandedItem, setExpandedItem] = useState(1);

  const handleItemClick = (itemNumber) => {
    setExpandedItem(expandedItem === itemNumber ? null : itemNumber);
  };

  return (
    <div className="max-w-6xl md:max-w-[92%] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:my-16">
        {/* Left Section */}
        <div className="flex flex-col bg-gray-100 p-6 rounded-md">
          <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900">
            Experts to your door at your home's exclusive price for 2025
          </h1>

          <p className="mt-4 text-lg text-pink-600 text-center">
            Why waste time searching for local tradespeople when a team of easy
            to book BISH! experts have been allocated to your home already?
          </p>

          <div className="mt-2 flex justify-center">
            <img
              src="Group 471.png"
              alt="Checkmark"
              className="h-12 w-12 object-contain"
            />
          </div>

          <div className="mt-2 text-center">
            <h2 className="text-xl font-semibold">Plumbers available!</h2>
            <p className="text-xl font-semibold">More trades coming soon</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Here's how it works
          </h2>
          <div className="mx-4 text-center mb-2">Got a plumber job? Get your home’s BISH! code in 2 minutes by SMS.</div>

          {/* Accordion Items */}
          <div className="mt-4 space-y-4">
            {/* Accordion Item 1 */}
            <div
              className="bg-gray-100 p-4 rounded-md shadow cursor-pointer"
              onClick={() => handleItemClick(1)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 flex items-center justify-center border border-black text-sm">
                    1
                  </span>
                  <h3 className="font-semibold">
                    Unlock your home's BISH! code
                  </h3>
                </div>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    expandedItem === 1 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {expandedItem === 1 && (
                <p className="mt-2 pl-8 text-sm text-black">
                  Find your address and get your home's BISH! code by SMS.
                </p>
              )}
            </div>

            {/* Accordion Item 2 */}
            <div
              className="bg-gray-100 p-4 rounded-md shadow cursor-pointer"
              onClick={() => handleItemClick(2)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 flex items-center justify-center border border-black text-sm">
                    2
                  </span>
                  <h3 className="font-semibold">Call your local BISH! HQ</h3>
                </div>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    expandedItem === 2 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {expandedItem === 2 && (
                <p className="mt-2 pl-8 text-sm text-black">
                  Find your address and get your home's BISH! code by SMS.
                </p>
              )}
            </div>

            {/* Accordion Item 3 */}
            <div
              className="bg-gray-100 p-4 rounded-md shadow cursor-pointer"
              onClick={() => handleItemClick(3)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 flex items-center justify-center border border-black text-sm">
                    3
                  </span>
                  <h3 className="font-semibold">
                    Same day or next day booking
                  </h3>
                </div>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    expandedItem === 3 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {expandedItem === 3 && (
                <p className="mt-2 pl-8 text-sm text-black">
                  Find your address and get your home's BISH! code by SMS.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingUI;
