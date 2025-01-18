import { useFormContext } from "../../Context/FormContext";

function CheckBox() {
  const { address } = useFormContext();
  const displayAddress = address ? address : "";
  return (
    <div className="flex justify-center items-center mt-[5%] p-5">
      <div className="w-[70%] sm:w-1/3 flex flex-col justify-start items-center gap-10 sm:gap-10 p-5 sm:p-10 bg-gradient-to-b max-w-[300px] md:max-w-[400px] from-white to-gray-200 shadow-md shadow-gray-900/50">
        <div className="h-[50px] md:h-[87px]">
          <img src="rightIcon.png" className="object-cover w-full h-full" alt="Right Icon" />
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-raleway text-center text-[16px] sm:text-[20px] font-semibold">
            You told us you live at</p>
          <p className="font-raleway text-center text-[16px] sm:text-[25px] font-bold">
            {displayAddress}
          </p>
        </div>
      </div>
    </div>
  )
}
export default CheckBox;