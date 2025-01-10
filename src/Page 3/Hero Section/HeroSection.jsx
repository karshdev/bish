import Navbar from "../../pages/Navbar/Navbar";

function HeroSection() {
  return (
    <div class="w-full h-full">
      <Navbar />
      <div class="w-full bg-[#FB2A63] flex items-center justify-center">
        <div class="w-11/12 sm:w-3/4 md:w-1/2 flex items-center justify-center flex-col p-5 sm:p-10">
          <p class="font-raleway font-extrabold text-[24px] sm:text-[32px] md:text-[40px] text-white text-center">
            Get your home’s
          </p>
          <p class="font-raleway font-extrabold text-[24px] sm:text-[32px] md:text-[40px] text-white text-center">
            BISH! code and price
          </p>
          <p class="font-raleway font-extrabold text-[24px] sm:text-[32px] md:text-[40px] text-white text-center">
            in 3 easy steps
          </p>
        </div>
      </div>
    </div>
  )
}
export default HeroSection;