import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../Context/FormContext';
import { useState } from 'react';

const Form = () => {
  const { formData, updateFormData, address} = useFormContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [countryCode, setCountryCode] = useState('+44');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { first_name, last_name, email, mobile } = formData;
  
    if (!first_name || !last_name || !email || !mobile || !address) {
      alert("Please fill all the fields and select an address before proceeding.");
      return;
    }

    setIsLoading(true);
    
    // Simulate loading for 1 second
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    navigate("/send-bish");
  };
  
  return (
    <div className="flex items-center justify-center p-4 mt-[2%]">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] space-y-6 bg-white p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <div className="mt-1 relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <img src="inputIcon.png" className="h-[20px]" />
              </span>
              <input
                required
                type="text"
                id="firstName"
                className="border-[1px] border-[#E2E2E2] pl-10 block w-full rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm h-10 bg-[#F6F6F6]"
                onChange={(e) => updateFormData({ first_name: e.target.value })}
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              required
              type="text"
              id="lastName"
              className="border-[1px] border-[#E2E2E2] mt-1 block w-full rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm h-10 bg-[#F6F6F6]"
              onChange={(e) => updateFormData({ last_name: e.target.value })}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1 relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-10 w-[25px] text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                required
                type="email"
                id="email"
                className="border-[1px] border-[#E2E2E2] pl-10 block w-full rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm h-10 bg-[#F6F6F6]"
                onChange={(e) => updateFormData({ email: e.target.value })}
              />
            </div>
          </div>

          {/* Mobile */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile
            </label>
            <div className="mt-1 flex">
              {/* Country Code Dropdown */}
              <div className="relative mr-2 w-[100px]">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="absolute z-10 top-0 left-0 h-10 w-full opacity-0"
                >
                  <option value="+44">🇬🇧 +44</option>
                </select>
                <div className="border-[1px] border-[#E2E2E2] rounded-md flex items-center justify-center h-10 w-full bg-[#F6F6F6] pointer-events-none">
                  <span className="mr-1">🇬🇧</span>
                  <span>{countryCode}</span>
                </div>
              </div>
              
              {/* Mobile Input */}
              <div className="relative flex-grow">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  id="mobile"
                  required
                  className="border-[1px] border-[#E2E2E2] pl-10 block w-full rounded-md shadow-sm sm:text-sm h-10 bg-[#F6F6F6]"
                  onChange={(e) => updateFormData({ 
                    mobile: `${countryCode}${e.target.value}`
                  })}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full sm:w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FB2A63] focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 font-raleway m-auto ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Checking...
              </div>
            ) : (
              'Check if BISH! codes are available'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;