import { useFormContext } from "../../Context/FormContext";

function SendMailSms() {
  // const { formData } = useFormContext();
  // console.log("formData", formData);
  return (
    <div className="flex flex-col items-center justify-center m-auto w-full h-full mt-10">
      {/* Parent container: responsive flex direction */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-[90%] h-auto sm:h-[30%] gap-5">
        {/* Mobile card section */}
        <div className="bg-gradient-to-b max-w-[300px] md:max-w-[400px] from-white to-gray-200 shadow-md shadow-gray-900/50 flex flex-col gap-6 w-full sm:w-[40%] p-5">
          <div className="flex justify-center items-center h-[70px] sm:h-[100px] m-auto pt-5">
            <img src="mobileCardIcon.png" className="object-contain h-full"></img>
          </div>

          <p className="text-[25px] text-center font-bold font-raleway">Your number is </p>
          <p className="text-[20px] text-center font-bold font-raleway text-wrap break-words">
            {/* {formData.email} */}
            0757645444
          </p> <button className="p-3 text-gray-800 font-semibold rounded-md"> Edit </button>
        </div>



        {/* Email card section */}
        <div className="bg-gradient-to-b max-w-[300px] md:max-w-[400px] from-white to-gray-200 shadow-md shadow-gray-900/50 flex flex-col gap-6 w-full sm:w-[40%] p-5">
          <div className="flex justify-center items-center h-[50px] sm:h-[90px] m-auto pt-5">
            <img src="mailPage4.png" className="object-contain h-full"></img>
          </div>
          <p className="text-[25px] text-center font-bold font-raleway">Your email is </p>
          <p className="text-[20px] text-center font-bold font-raleway text-wrap break-words">
            {/* {formData.email} */}
            rockhead@gmail.com
          </p> <button className="p-3 text-gray-800 font-semibold rounded-md"> Edit </button> </div>
      </div>

      {/* Send button section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center mt-10 p-2" >
        <button
          className="relative flex items-center justify-center w-[60%] h-12 sm:h-14 bg-pink-500 text-white text-sm sm:text-base font-bold rounded-full shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transition-all duration-300"
        >
          <span className="absolute inset-0 flex items-center justify-center">
            Send
          </span>
          <img
            src="sendArrow.png"
            alt="Send Icon"
            className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
}

export default SendMailSms;
