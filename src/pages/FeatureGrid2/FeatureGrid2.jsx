import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Wrench } from 'lucide-react';

const FeatureGrid2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const features = [
    {
      icon: <MapPin className="h-10 w-10 text-gray-800" />,
      title: "Toilets and Sinks",
      bgColor: "bg-[#EEF973]",
    },
    {
      icon: <Wrench className="h-8 w-8 text-gray-800" />,
      title: "Pipes and Drains",
      bgColor: "bg-[#31D2A7]",
    },
    {
      icon: <Wrench className="h-8 w-8 text-gray-800" />,
      title: "Water Heaters",
      bgColor: "bg-[#EEF973]",
    },
    {
      icon: <Wrench className="h-8 w-8 text-gray-800" />,
      title: "Leak Repairs",
      bgColor: "bg-[#31D2A7]",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const visibleSlides = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return [currentSlide];
    }
    const nextSlide = (currentSlide + 1) % features.length;
    return [currentSlide, nextSlide];
  };

  return (
    <div className="w-full max-w-2xl md:max-w-[70%] mx-auto p-4">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
          Your home's BISH! code saves you money on all kinds of plumber jobs.
        </h1>
        <p className="text-lg md:text-2xl mt-4 font-normal mx-6">
          Plumbers available now. More trades coming soon!
        </p>
      </div>

      <div className="relative">
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="flex justify-center items-center gap-6 overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {visibleSlides().map((slideIndex) => (
              <div
                key={slideIndex}
                className={`
                  mx-auto flex rounded-md flex-col items-center justify-center 
                  text-center p-4 transition-all duration-200 
                  h-[200px] w-[170px] md:h-[300px] md:w-[250px]
                  ${features[slideIndex].bgColor}
                `}
              >
                <div className="mb-4 flex justify-center">
                  {features[slideIndex].icon}
                </div>
                <h3 className="text-xl font-semibold leading-tight font-raleway">
                  {features[slideIndex].title}
                </h3>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-200 ${index === currentSlide ? 'bg-gray-800 w-4' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid2;