import { useState } from "react";
import { useFormContext } from "../../Context/FormContext";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import styles for toasts
import { useNavigate } from "react-router-dom";

function SendMailSms() {
  const { formData, address, postDropDown, updateFormData } = useFormContext();
  const [loading, setIsLoading] = useState(false);
  const [isEditingMobile, setIsEditingMobile] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const navigate = useNavigate();
  const { first_name, last_name, email, mobile } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!first_name || !last_name || !email || !mobile || !address) {
      alert("Please fill all the fields and select the address on the previous page.");
      navigate("/Page3");
      return; // Stop further execution
    }
  
    formData.address = address;
    formData.postalCode = postDropDown._id;
  
    setIsLoading(true);
  
    try {
      const response = await fetch('https://backend-bish-ig0p.onrender.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        toast.success("Form Submitted Successfully");
      } else {
        const errorResponse = await response.json();
        console.log("errorResponse", errorResponse);
  
        if (errorResponse.data && errorResponse.data.errors) {
          errorResponse.data.errors.forEach((error) => {
            toast.error(error.msg || "An error occurred");
          });
        } else {
          toast.error(errorResponse.message || "An error occurred");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditToggle = (field) => {
    if (field === 'mobile') {
      setIsEditingMobile(!isEditingMobile);
    } else if (field === 'email') {
      setIsEditingEmail(!isEditingEmail);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center m-auto w-full h-full mt-10">
      <ToastContainer />
      <div className="flex flex-col sm:flex-row items-center justify-center w-[90%] h-auto sm:h-[30%] gap-5">
        <div className="bg-gradient-to-b max-w-[300px] md:max-w-[400px] from-white to-gray-200 shadow-md shadow-gray-900/50 flex flex-col gap-6 w-full sm:w-[40%] p-5">
          <div className="flex justify-center items-center h-[70px] sm:h-[100px] m-auto pt-5">
            <img src="mobileCardIcon.png" className="object-contain h-full" alt="Mobile Icon" />
          </div>
          <p className="text-[25px] text-center font-bold font-raleway">Your number is </p>
          {isEditingMobile ? (
            <input
              type="text"
              value={mobile}
              onChange={(e) => updateFormData({ mobile: e.target.value })}
              className="text-[20px] text-center font-bold font-raleway w-full p-2 border border-gray-300 rounded"
            />
          ) : (
            <p className="text-[20px] text-center font-bold font-raleway text-wrap break-words">{mobile}</p>
          )}
          <button onClick={() => handleEditToggle('mobile')} className="p-3 text-gray-800 font-semibold rounded-md">
            {isEditingMobile ? 'Save' : 'Edit'}
          </button>
        </div>

        <div className="bg-gradient-to-b max-w-[300px] md:max-w-[400px] from-white to-gray-200 shadow-md shadow-gray-900/50 flex flex-col gap-6 w-full sm:w-[40%] p-5">
          <div className="flex justify-center items-center h-[50px] sm:h-[90px] m-auto pt-5">
            <img src="mailPage4.png" className="object-contain h-full" alt="Mail Icon" />
          </div>
          <p className="text-[25px] text-center font-bold font-raleway">Your email is </p>
          {isEditingEmail ? (
            <input
              type="email"
              value={email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              className="text-[20px] text-center font-bold font-raleway w-full p-2 border border-gray-300 rounded"
            />
          ) : (
            <p className="text-[20px] text-center font-bold font-raleway text-wrap break-words">{email}</p>
          )}
          <button onClick={() => handleEditToggle('email')} className="p-3 text-gray-800 font-semibold rounded-md">
            {isEditingEmail ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>

      <div className="w-full sm:w-1/2 flex items-center justify-center mt-10 p-2">
        <button
          className={`relative flex items-center justify-center w-[60%] h-12 sm:h-14 bg-pink-500 text-white text-sm sm:text-base font-bold rounded-full shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <span className="absolute inset-0 flex items-center justify-center">
              <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full border-t-transparent border-white"></div>
            </span>
          ) : (
            <>
              <span className="absolute inset-0 flex items-center justify-center">
                Send
              </span>
              <img
                src="sendArrow.png"
                alt="Send Icon"
                className="absolute right-5 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default SendMailSms;
