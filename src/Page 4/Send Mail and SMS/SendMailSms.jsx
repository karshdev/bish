function SendMailSms() {
  return (
    <div className="flex flex-col items-center justify-center m-auto w-full h-full mt-10">
      <div className="flex items-center justify-center w-[80%] h-[30%] gap-5">
        <div className="bg-[#F6F6F6F6] flex flex-col gap-6 w-[40%]">
          <div className="flex justify-center items-center h-[150px] m-auto pt-10">
            <img src="mobileCardIcon.png" className="object-contain"></img>
          </div>
          <p className="text-[25px] text-center font-bold font-raleway">Your number is </p>
          <p className="text-[20px] text-center font-bold font-raleway">0757645444</p>
          <button>Edit</button>
        </div>
        <div className="bg-[#F6F6F6F6] flex flex-col gap-6 w-[40%]">
          <div className="flex justify-center items-center h-[150px] m-auto pt-10">
            <img src="mailPage4.png" className="object-contain"></img>
          </div>

          <p className="text-[25px] text-center font-bold font-raleway">Your email is </p>
          <p className="text-[20px] text-center font-bold font-raleway">rockhead@gmail.com</p>
          <button>Edit</button>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
export default SendMailSms;