function MiddleLineLogo() {
  return (
    <div className="mt-5 flex items-center justify-center p-4 gap-4 md:gap-8 md:mx-12" >
      <div className="h-[2px] w-[30%] sm:h-[3px] sm:w-[50%] bg-gray-300"></div>
      <div className="flex justify-center items-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#FB2A63] rounded-md flex justify-center items-center">
          <div className="flex justify-center items-center">
            <img src='Vector.png' className="h-8 w-8 sm:h-10 sm:w-10 md:h-full md:w-full p-2 sm:p-5 md:p-7" />
          </div>
        </div>
      </div>
      <div className="h-[2px] w-[30%] sm:h-[3px] sm:w-[50%] bg-gray-300"></div>
    </div >
  );
}

export default MiddleLineLogo;
