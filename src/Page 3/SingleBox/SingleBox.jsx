
function SingleBox() {
  return (
    <div className="flex justify-center items-center mt-[20px] p-5">
      <div className="w-full sm:w-2/3 lg:w-1/3 flex flex-col gap-5 p-5 sm:p-8 bg-gradient-to-b max-w-[300px] md:max-w-[400px] from-white to-gray-200 shadow-md shadow-gray-900/50">
        <div>
          <h1 className="text-center font-raleway font-extrabold text-[28px] sm:text-[36px] lg:text-[40px]">
            Let's get started.
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-center w-full sm:w-[90%] lg:w-[78%] font-raleway text-[16px] sm:text-[20px] lg:text-[22px] font-medium">
            Enter your postcode to find your address so we can check BISH! codes are available.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleBox;
