function YellowBox() {
  return (
    <div className="flex justify-center items-center mt-[20px] p-3">
      <div className="w-[70%] sm:w-1/3 flex flex-col justify-start items-center gap-10 sm:gap-2 p-3  bg-[#EEF973]" >
        <div className="h-[87px]">
          <p className="font-bold text-[40px] font-raleway">1</p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="w-[54%] m-auto font-raleway text-center text-[20px] sm:text-[30px] font-bold mt-[-60px] sm:mt-[-30px]">

            Tradesperson
            call out a year</p>

          <p className="font-raleway text-center text-[16px] w-[80%] m-auto sm:text-[20px] font-semibold">
            Get an expert plumber to your
            door at your home’s exclusive
            2025 price
          </p>
          <p className="m-auto font-raleway font-medium">
            *more trades coming soon*
          </p>
        </div>
      </div>
    </div>
  )
}
export default YellowBox;