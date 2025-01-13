import { useState } from "react";
import { useFormContext } from "../../Context/FormContext";

const apikey = 'PCWVP-Q8SMV-977GV-J33D3';

function PostCode() {
  const [postcode, setPostcode] = useState(""); // To store user input
  const [loading, setLoading] = useState(false); // To manage loading state
  const [data, setData] = useState([]); // To store fetched data
  const [showDiv, closeDiv] = useState(true);
  const { address, setAddress } = useFormContext();
  const { postValue, setPostValue } = useFormContext();

  const dropDownDiv = (value) => {
    closeDiv(false);
    setAddress(value);
    console.log("Address selected:", value);
  };

  const fetchAddress = async () => {
    if (!postcode.trim()) {
      alert("Please enter a postcode");
      return;
    }

    // Validate first two characters of `postValue` against `postcode`
    if (
      postValue?.substring(0, 2).toUpperCase() !==
      postcode?.substring(0, 2).toUpperCase()
    ) {
      alert("Selected Town and Postcode do not match");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await fetch(
        `https://ws.postcoder.com/pcw/${apikey}/pafaddressbase/${encodeURIComponent(
          postcode
        )}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        console.log("Response Status:", response.status);
        throw new Error("Failed to fetch address");
      }

      const addressData = await response.json();
      console.log("Fetched Address:", addressData || "Address not found");
      setData(addressData); // Update the state with fetched data
      closeDiv(true); // Ensure the dropdown is visible when new data arrives
    } catch (error) {
      console.error(error);
      alert("Error fetching address. Please try again later.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full px-4 sm:px-8 py-6">
      <div className="w-full sm:w-[80%] lg:w-[60%] flex flex-col gap-3 bg-white rounded-md shadow-sm p-5">
        {/* Heading */}
        <div>
          <h2 className="font-raleway font-semibold text-[20px] sm:text-[24px] lg:text-[30px]">
            Postcode
          </h2>
        </div>

        {/* Subheading */}
        <div>
          <p className="font-raleway font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600">
            Enter your postcode
          </p>
        </div>

        {/* Input and Dropdown */}
        <div className="relative w-full">
          {/* Input Field */}
          <span className="absolute left-2 top-[50%] transform -translate-y-[50%] pointer-events-none">
            <img src="Frame.png" className="h-[24px] sm:h-[32px] lg:h-[48px]" alt="Icon" />
          </span>
          <input
            type="text"
            placeholder="W2 4EB"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value.toUpperCase())}
            className="w-full pl-16 appearance-none border border-gray-300 bg-gray-100 text-black text-[14px] sm:text-[16px] lg:text-[18px] p-3 rounded-md cursor-text focus:outline-none focus:ring-2"
          />

          {/* Dropdown */}
          {showDiv && data?.length > 0 && (
            <div
              className="absolute top-full mt-2 w-full bg-white shadow-md rounded-md max-h-60 overflow-y-auto z-10"
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className="py-2 my-1 leading-relaxed block text-gray-800 hover:text-white hover:bg-[#FB2A63] cursor-pointer px-4 rounded-md transition-all duration-150 border-b border-gray-100 last:border-b-0"
                  onClick={() => dropDownDiv(item.summaryline)}
                >
                  {item.summaryline}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-8 w-full sm:w-1/2 flex-col gap-9">
        <button
          className="flex items-center justify-between w-full max-w-[300px] sm:max-w-[400px] px-4 sm:px-6 py-2 bg-[#FB2A63] text-white text-lg font-medium rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          style={{ filter: "drop-shadow(1px 2px 3px black)" }}
          onClick={fetchAddress}
          disabled={loading}
        >
          <div className="w-full flex items-center justify-center">
            <span className="font-bold font-raleway">
              {loading ? "Loading..." : "Find Address"}
            </span>
          </div>
          <div className="w-10 h-10 bg-white text-black rounded-full flex justify-center items-center">
            <img src="arrowRight.png" className="p-1" alt="arrow" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default PostCode;
