function CheckBox() {
  return (
    <div className="flex justify-center items-center mt-[20px] p-5">
      <div className="w-[70%] sm:w-1/3 flex flex-col justify-start items-center gap-10 sm:gap-10 p-5 sm:p-10 bg-[#F6F6F6]" style={{ filter: "drop-shadow(1px 2px 3px black)" }}>
        <div className="h-[87px]">
          <img src="rightIcon.png" className="object-cover w-full h-full" alt="Right Icon" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-raleway text-center text-[16px] sm:text-[20px] font-semibold">
            You told us you live at</p>
          <p className="font-raleway text-center text-[16px] sm:text-[25px] font-bold">
            Flat 11, 23
            Pembridge Gardens,
            London, Greater
            London, W2 4EB
          </p>
        </div>
      </div>
    </div>
  )
}
export default CheckBox;