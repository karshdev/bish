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
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>
          Get your home's BISH! code and book
        </h1>
        <h2 className={styles.subtitle}>
          a discounted
        </h2>
        <h2 className={styles.subtitle}>
          expert in minutes
        </h2>
        <p className={styles.description}>
          Relax, BISH! traderspeople are...
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${styles.card} ${feature.bgColor}`}
          >
            <div className={styles.iconContainer}>
              {feature.icon}
            </div>
            <h3 className={styles.cardTitle}>
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;