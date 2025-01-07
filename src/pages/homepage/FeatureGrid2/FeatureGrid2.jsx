import styles from './FeatureGrid2.module.css';
import React from 'react';
import { MapPin, Clock, Wrench, Calendar } from 'lucide-react';

const FeatureGrid2 = () => {
  const features = [
    {
      icon: <MapPin size={40} />, // Reduced icon size
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
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>
          Your home’s BISH! code saves you money on
        </h1>
        <h2 className={styles.subtitle}>
          all kinds of plumber jobs.
        </h2>
        <p className={styles.description}>
          Plumbers available now. More
          trades coming soon!
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${styles.card} ${feature.bgColor}`}
          >
            <div className={styles.iconContainer}>
              <img src='Group 4721.png' className={styles.checkIcon}></img>
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

export default FeatureGrid2;