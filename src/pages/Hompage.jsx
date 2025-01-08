import Navbar from "./Navbar/Navbar";
import { ArrowRight } from "lucide-react";

function Homepage() {
  return (
    <div className="w-full relative z-[0] bg-white bg-opacity-20">
      <div className="flex flex-col md:flex-row h-auto">
        <div className="w-full flex flex-col">
          <Navbar />
          <div className="flex flex-col w-full md:w-[50%] lg:w-[40%] gap-4 p-4">
            <div className="flex flex-col gap-4 bg-[#F6F6F6] shadow-lg p-6 rounded-xl md:mt-16 md:ml-14 ">
              <div className="flex flex-col">
                <p className="font-bold text-[24px] md:text-[40px] leading-[30px] md:leading-[45px] text-center md:text-start">
                  Plumber prices are crazy. Your home’s BISH! code fixes that
                </p>
                <p className="font-normal text-[16px] md:text-[22px] md:leading-[30px] mt-3">
                  We got fed up of crazy plumbing quotes and now we’re on a
                  mission to save Homeowners over £1 million on plumbing jobs
                  and more. Get your home’s BISH! code to join the challenge.
                </p>
              </div>
            </div>
            <div className="bg-[#ff3b7d] p-6 rounded-xl shadow-md text-center md:mt-4 md:ml-14">
              <p className="text-white font-semibold text-[16px] md:text-[22px] font-raleway mb-4">
                GET YOUR HOME’S BISH! CODE
              </p>
              <div className="relative">
                <button className="bg-white w-full text-black text-[16px] md:text-[22px] font-semibold py-2 px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center">
                  Find your address
                </button>
                <span className="absolute flex items-center top-[6px] md:top-2 right-2 md:right-3 bg-black rounded-full h-[28px] w-[28px] md:h-[34px] md:w-[34px] text-white">
                  <ArrowRight className="w-full p-1 md:p-0" />
                </span>
              </div>
            </div>
            <div className="bg-[#F6F6F6] shadow-lg p-4 rounded-xl md:mt-2 md:ml-14">
              <h3 className="text-center font-medium md:font-semibold text-[16px] md:text-[22px] mb-4">
                ALREADY GOT YOUR HOME’S BISH! CODE?
              </h3>
              <p className="font-arial font-normal text-[12px] md:text-[20px]">
                Great. You’re ready to get your BISH! price for your next
                tradesperson job.
              </p>
              <div className="relative">
                <button className="bg-[#FB2A63] w-full text-[16px] md:text-[22px] text-center text-white font-semibold py-2 px-2 rounded-full shadow-lg hover:bg-[#e0286a] transition-colors flex items-center justify-center mt-4">
                  Get my BISH! Price
                </button>
                <span className="absolute flex items-center top-[6px] md:top-2 right-2 md:right-3 bg-white rounded-full text-black h-[28px] w-[28px] md:h-[34px] md:w-[34px]">
                  <ArrowRight className="w-full p-1 md:p-0" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%] relative z-[-10] right-0 md:absolute md:top-0">
          <img src="Vector 2.png" className="w-full h-full object-cover" />
          <img
            src="Vector3.png"
            className="absolute top-0 left-5 w-[98%] h-[95%] object-cover"
          />
          <div className="absolute top-12 md:top-32 right-[24%] md:right-[18%] w-[60%] md:w-[45%] h-[90%] md:h-[70%]">
            <img src="Group 417.png" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
