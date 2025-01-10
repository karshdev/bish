function PostCode() {
  return (
    <div className="flex flex-col items-center gap-4 w-full px-4 sm:px-8 py-6">
      <div className="w-full sm:w-[80%] lg:w-[60%] flex flex-col gap-3 bg-white rounded-md shadow-sm p-5">
        {/* Heading */}
        <div>
          <h2 className="font-raleway font-semibold text-[20px] sm:text-[24px] lg:text-[30px]">
            Postcode
          </h2>
        </div>

        {/* Subheading */}
        <div>
          <p className="font-raleway font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 ">
            Enter your postcode
          </p>
        </div>

        {/* Dropdown */}
        <div className="relative">
          {/* Downward Arrow */}
          <span className="absolute right-4 top-[50%] transform -translate-y-[50%] pointer-events-none">
            <img src="Frame.png" className="h-[48px] sm:h-[16px]" alt="Arrow" />
          </span>
          <select
            className="w-full appearance-none border border-gray-300 bg-gray-100 text-black text-[14px] sm:text-[16px] lg:text-[18px] p-3 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="W2">W2   4EB</option>
            <option value="W1">W1</option>
            <option value="E1">E1</option>
          </select>


        </div>
      </div>
      <div className="flex justify-center items-center mt-8 w-full sm:w-1/2 flex-col gap-9">
        <button
          className="flex items-center justify-between w-full max-w-[300px] sm:max-w-[400px] px-4 sm:px-6 py-2 bg-[#FB2A63] text-white text-lg font-medium rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          style={{ filter: "drop-shadow(1px 2px 3px black)" }}
        >
          <div className="w-full flex items-center justify-center">
            <span className="font-bold font-raleway">Find Address</span>
          </div>
          <div className="w-10 h-10 bg-white text-black rounded-full flex justify-center items-center">
            <img src="arrowRight.png" className="p-1" alt="arrow" />
          </div>
        </button>


      </div>
      <div className="flex justify-center w-full">

      </div>
      <div className="flex justify-center w-full">
        <div className="flex justify-center w-full">
          <div
            className="w-[90%] sm:w-[75%] md:w-[60%] appearance-none border bg-gray-100 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500 flex flex-row items-center mt-6"
          >
            <div className="pl-5">
              <img src="LocationIcon.png" className="w-[50px] sm:w-[60px] md:w-[80%]" alt="Location Icon" />
            </div>
            <p className="font-arial font-normal text-sm sm:text-base break-words">
              Flat 11, 23 Pembridge Gardens, London, Great London
            </p>
          </div>
        </div>

      </div>


    </div>
  );
}

export default PostCode;
