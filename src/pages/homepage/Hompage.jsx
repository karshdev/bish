import Navbar from './Navbar/Navbar';
import { ArrowRight } from 'lucide-react';

function Homepage() {
  return (
    <div className="w-full bg-white bg-opacity-20">
      <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
        <div className="w-full md:w-1/2 flex flex-col">
          <Navbar />
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="flex flex-col gap-4 bg-[#F6F6F6] shadow-lg p-6 rounded-lg">
              <div className="flex flex-col">
                <p className="font-raleway font-extrabold text-2xl text-center">
                  Plumber prices are crazy. Your home’s BISH! code fixes that
                </p>
                <p className="font-arial text-[16px] mt-3">
                  We got fed up of crazy plumbing quotes and now we’re on a mission to save Homeowners over £1 million on plumbing jobs and more. Get your home’s BISH! code to join the challenge.
                </p>
              </div>
            </div>
            <div className="bg-[#ff3b7d] p-6 rounded-lg shadow-md text-center">
              <p className="text-white font-semibold font-raleway mb-4">GET YOUR HOME’S BISH! CODE</p>
              <div className='relative'>
                <button className="bg-white w-full text-black font-semibold py-2 px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center">
                  Find your address
                </button>
                <span className="absolute top-2 right-3 bg-black rounded-full text-white"><ArrowRight className='p-1' /></span>
              </div>
            </div>
            <div className="bg-[#F6F6F6] shadow-lg p-6 rounded-lg">
              <h3 className="font-raleway font-semibold text-[15px] mb-4">ALREADY GOT YOUR HOME’S BISH! CODE?</h3>
              <p className="font-arial font-medium text-sm">Great. You’re ready to get your BISH! price for your next tradesperson job.</p>
              <div className='relative'>
                <button className="bg-[#FB2A63] w-full text-center text-white font-semibold py-2 px-2 rounded-full shadow-lg hover:bg-[#e0286a] transition-colors flex items-center justify-center mt-4">
                  Get my BISH! Price
                </button>
                <span className="absolute top-2 right-3 bg-white rounded-full text-black"><ArrowRight className='p-1' /></span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative md:block">
          <img src="Vector 2.png" className="w-full h-full object-cover" />
          <img src="Vector3.png" className="absolute top-0 left-5 w-[98%] h-[95%] object-cover" />
          <div className="absolute top-12 left-[24%] w-[57%] h-[84%]">
            <img src="Group 417.png" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>

  )
}
export default Homepage;