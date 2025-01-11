import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const FeatureGrid2 = () => {
  const features = [
    {
      icon: <img src='blackRight.png' alt="check" className='h-[40px] md:h-[80px]' />,
      title: "Toilets and Sinks",
      bgColor: "bg-[#EEF973]",
    },
    {
      icon: <img src='blackRight.png' alt="check" className='h-[40px] md:h-[80px]' />,
      title: "Pipes and Drains",
      bgColor: "bg-[#31D2A7]",
    },
    {
      icon: <img src='blackRight.png' alt="check" className='h-[40px] md:h-[80px]' />,
      title: "Toilets and Sinks",
      bgColor: "bg-[#EEF973]",
    },
    {
      icon: <img src='blackRight.png' alt="check" className='h-[40px] md:h-[80px]' />,
      title: "Pipes and Drains",
      bgColor: "bg-[#31D2A7]",
    }
  ];

  return (
    <div className="text-center py-4 md:py-8 px-4 md:mx-12">
      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
          Your home's BISH! code saves you money on all kinds of plumber jobs.
        </h1>
        <p className="text-base md:text-2xl mt-2 md:mt-4 font-normal mx-2 md:mx-6">
          Plumbers available now. More trades coming soon!
        </p>
      </div>
      <Swiper
        spaceBetween={10} // Ensuring proper spacing on mobile screens
        slidesPerView={2} // Ensuring two slides visible at the same time
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        grabCursor={true}
        className="mt-6 md:mt-12 w-full md:w-[65%] mx-auto mySwiper"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-f md:w-[280px] h-[240px] md:h-80 rounded-lg flex flex-col items-center justify-center cursor-pointer mx-auto ${feature.bgColor}`} // Adjusted width for mobile screens
            >
              <div className="mb-4 md:mb-8">
                <div>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-black text-center text-sm md:text-2xl font-medium font-raleway">
                {feature.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="custom-prev hidden sm:block absolute top-1/2 -translate-y-1/2 left-[-2rem] z-10 text-black"
        aria-label="Previous slide"
      >
        &#8592;
      </button>
      <button
        className="custom-next hidden sm:block absolute top-1/2 -translate-y-1/2 right-[-2rem] z-10 text-black"
        aria-label="Next slide"
      >
        &#8594;
      </button>
    </div>
  );
};

export default FeatureGrid2;
