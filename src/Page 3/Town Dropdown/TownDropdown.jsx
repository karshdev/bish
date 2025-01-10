function TownDropdown() {
  return (
    <div className="flex flex-col items-center gap-4 w-full px-4 sm:px-8 py-6">
      <div className="w-full sm:w-[55%] lg:w-[60%] flex flex-col gap-5 bg-white rounded-md shadow-sm p-5">
        {/* Heading */}
        <div>
          <h2 className="font-raleway font-semibold text-[20px] sm:text-[24px] lg:text-[30px]">
            Select a town
          </h2>
        </div>

        {/* Subheading */}
        <div>
          <p className="font-raleway font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 ">
            BISH! codes are only available in these towns right now
          </p>
        </div>

        {/* Dropdown */}
        <div className="relative">
          <select
            className="w-full appearance-none border border-gray-300 bg-gray-100 text-black text-[14px] sm:text-[16px] lg:text-[18px] p-3 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="W2">W2</option>
            <option value="W1">W1</option>
            <option value="E1">E1</option>
          </select>

          {/* Downward Arrow */}
          <span className="absolute right-4 top-[50%] transform -translate-y-[50%] pointer-events-none">
            <img src="arrow.png" className="h-[14px] sm:h-[16px]" alt="Arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TownDropdown;
