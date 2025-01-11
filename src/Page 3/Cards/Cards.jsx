function Cards() {
  return (
    <div className="flex flex-col sm:flex-row w-full mt-[20px] gap-[10px] items-center justify-center p-5 sm:p-10">
      {/* First Card */}
      <div className="w-[85%] sm:w-1/3 flex flex-col justify-start items-center gap-5 sm:gap-10 p-5 sm:p-10 bg-[#F6F6F6] h-auto sm:h-[300px]">
        <div className="flex items-center justify-center h-[50px] w-[50px] sm:h-[100px] sm:w-[100px]">
          <img src="LocationIcon.png" className="object-contain h-full w-full" alt="Frame" />
        </div>

        <div>
          <p className="font-raleway text-center text-[16px] sm:text-[20px] font-semibold">
            Enter your postcode and select your address
          </p>
        </div>
      </div>

      {/* Second Card */}
      <div className="w-[85%] sm:w-1/3 flex flex-col justify-start items-center gap-5 sm:gap-10 p-5 sm:p-10 bg-[#F6F6F6] h-auto sm:h-[300px]">
        <div className="flex items-center justify-center h-[45px] w-[50px] sm:h-[100px] sm:w-[100px]">
          <img src="mobileCardIcon.png" className="object-contain h-full w-full" alt="Frame" />
        </div>
        <div>
          <p className="font-raleway text-center text-[16px] sm:text-[20px] font-semibold">
            We’ll send your home’s BISH! code by SMS
          </p>
        </div>
      </div>

      {/* Third Card */}
      <div className="w-[85%] sm:w-1/3 flex flex-col justify-start items-center gap-5 sm:gap-10 p-5 sm:p-10 bg-[#F6F6F6] h-auto sm:h-[300px]">
        <div className="flex items-center justify-center h-[50px] w-[50px] sm:h-[100px] sm:w-[100px]">
          <img src="rightIcon.png" className="object-contain h-full w-full" alt="Frame" />
        </div>
        <div>
          <p className="font-raleway text-center text-[16px] sm:text-[20px] font-semibold">
            Tell us about your job to get your BISH! price
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
