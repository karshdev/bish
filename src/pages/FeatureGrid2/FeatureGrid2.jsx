import styles from './FeatureGrid2.module.css';
import { MapPin, Wrench } from 'lucide-react';

const FeatureGrid2 = () => {
  const features = [
    {
      icon: <MapPin size={40} />,
      title: "Toilets and Sinks",
      bgColor: styles.yellowBg,
    },
    {
      icon: <Wrench size={32} />,
      title: "Pipes and Drains",
      bgColor: styles.emeraldBg,
    }
  ];

  return (
    <div className="w-full max-w-2xl md:max-w-[70%] mx-auto p-4">
      <div className="text-center mb-10">
        <h1 className="text-[24px] md:text-[30px] leading-[28px] md:leading-[50px] lg:text-[44px] font-bold mb-2">
          Your home’s BISH! code saves you money on
          all kinds of plumber jobs.
        </h1>

        <p className="text-lg md:text-[28px] mt-4 font-normal mx-6">
          Plumbers available now. More trades coming soon!
        </p>
      </div>

      <div className="flex w-full justify-center gap-2 items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex rounded-md flex-col items-center justify-center text-center p-4 transition-transform duration-200 aspect-[1.35] h-[200px] w-[170px] md:h-[300px] md:w-[250px] ${feature.bgColor}`}
          >
            <div className="mb-4 w-full flex justify-center">
              <img src="Group 4721.png" className="h-[60px] w-[60px] object-contain" />
            </div>
            <h3 className="text-xl font-semibold leading-tight font-raleway">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>

  );
};

export default FeatureGrid2;