function Cards() {
  return (
    <div className="flex flex-col sm:flex-row w-full mt-[20px] gap-[10px] items-center justify-center p-5 sm:p-10">
      <div className="w-full sm:w-1/4 flex flex-col justify-start items-center gap-5 sm:gap-10 p-5 sm:p-10 bg-[#F6F6F6]">
        <div className="h-[87px]">
          <img src="Frame.png" className="object-cover w-full h-full" alt="Frame" />
        </div>
        <div>
          <p className="font-raleway text-center text-[16px] sm:text-[20px] font-semibold">
            Enter your postcode and select your address
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/3 flex flex-col justify-start items-center gap-5 sm:gap-10 p-5 sm:p-10 bg-[#F6F6F6]">
        <div className="h-[87px]">
          <img src="mobileCardIcon.png" className="object-cover w-full h-full" alt="Mobile Icon" />
        </div>
        <div>
          <p className="font-raleway text-center text-[16px] sm:text-[20px] font-semibold">
            We’ll send your home’s BISH! code by SMS
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/3 flex flex-col justify-start items-center gap-5 sm:gap-10 p-5 sm:p-10 bg-[#F6F6F6]">
        <div className="h-[87px]">
          <img src="rightIcon.png" className="object-cover w-full h-full" alt="Right Icon" />
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