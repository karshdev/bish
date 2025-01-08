import { useState } from "react";

const Faq = () => {
  const [expandedItem, setExpandedItem] = useState(1);

  const handleItemClick = (itemNumber) => {
    setExpandedItem(expandedItem === itemNumber ? null : itemNumber);
  };

  return (
    <div className="flex flex-col justify-center mt-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center">FAQ</h2>

      <div className="mt-4 space-y-4 mx-4">
        <div
          className="p-4 rounded-md shadow cursor-pointer"
          onClick={() => handleItemClick(1)}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <h3 className="font-bold text-[20px]">
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
            <p className="mt-2 text-sm text-black">
              Find your address and get your home's BISH! code by SMS.
            </p>
          )}
        </div>

        {/* Accordion Item 2 */}
        <div
          className="p-4 rounded-md shadow cursor-pointer"
          onClick={() => handleItemClick(2)}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <h3 className="font-bold text-[20px]">
                Call your local BISH! HQ
              </h3>
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
            <p className="mt-2 text-sm text-black">
              Find your address and get your home's BISH! code by SMS.
            </p>
          )}
        </div>

        {/* Accordion Item 3 */}
        <div
          className="p-4 rounded-md shadow cursor-pointer"
          onClick={() => handleItemClick(3)}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <h3 className="font-bold text-[20px]">
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
            <p className="mt-2 text-sm text-black">
              Find your address and get your home's BISH! code by SMS.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
