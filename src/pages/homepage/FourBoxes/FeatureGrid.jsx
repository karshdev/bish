import styles from './FeatureGrid.module.css';
import React from 'react';
import { MapPin, Clock, Wrench, Calendar } from 'lucide-react';

const FeatureGrid = () => {
  const features = [
    {
      icon: <MapPin size={40} />, // Reduced icon size
      title: "Local and Reliable",
      bgColor: styles.yellowBg,
    },
    {
      icon: <Wrench size={32} />,
      title: "Insured",
      bgColor: styles.emeraldBg,
    },
    {
      icon: <Clock size={32} />,
      title: "Fast working",
      bgColor: styles.blueBg,
    },
    {
      icon: <Calendar size={32} />,
      title: "Easy to Book",
      bgColor: styles.pinkBg,
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-extrabold font-raleway mb-2">
          Get your home's BISH! code and book a discounted
          expert in minutes
        </h1>
        <p className="text-lg font-raleway font-normal">
          Relax, BISH! traderspeople are...
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-center p-6 rounded-md transform transition-transform duration-200 aspect-[1.35] h-[160px] md:h-[200px]  w-full ${feature.bgColor}`}
          >
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg md:text-xl font-semibold leading-tight font-raleway">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>


  );
};

export default FeatureGrid;