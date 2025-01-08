const Yellowbox = () => {
  return (
    <div className="flex justify-center items-center min-h-screen md:mx-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="bg-[#EEF973] w-full rounded-sm shadow-md p-6 text-center aspect-square flex flex-col items-center justify-around text-lg font-bold text-black">
          <div className="mt-2 flex justify-center">
            <img
              src="Group 4721.png"
              alt="Checkmark"
              className="h-20 w-20 object-contain"
            />
          </div>
          <div className="text-[24px] font-semibold">Plumber at cost</div>
          <div className="text-[20px] font-medium">
            We don't profit from plumbers so you can save BIG on your next
            plumbing job.
          </div>
        </div>
        <div className="bg-[#EEF973] w-full rounded-sm shadow-md p-6 text-center aspect-square flex flex-col items-center justify-around text-lg font-bold text-black">
          <div className="mt-2 flex justify-center">
            <img
              src="Group 4721.png"
              alt="Checkmark"
              className="h-20 w-20 object-contain"
            />
          </div>
          <div className="text-[24px] font-semibold">No mark ups on parts</div>
          <div className="text-[20px] font-medium">
            Yup, we don't markup parts so you can save more.
          </div>
        </div>
        <div className="bg-[#EEF973] w-full rounded-sm shadow-md p-6 text-center aspect-square flex flex-col items-center justify-around text-lg font-bold text-black">
          <div className="mt-2 flex justify-center">
            <img
              src="Group 4721.png"
              alt="Checkmark"
              className="h-20 w-20 object-contain"
            />
          </div>
          <div className="text-[24px] font-semibold">
            Expert Only, naturally
          </div>
          <div className="text-[20px] font-medium">
            We only work with the best in your area so you're in safe hands.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yellowbox;
