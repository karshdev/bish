import styles from './BookingUI.module.css';
import React, { useState } from 'react';

const BookingUI = () => {
  const [expandedItem, setExpandedItem] = useState(1);

  const handleItemClick = (itemNumber) => {
    setExpandedItem(expandedItem === itemNumber ? null : itemNumber);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h1 className={styles.title}>
            Experts to your door at your home's exclusive price for 2025
          </h1>

          <p className={styles.subtitle}>
            Why waste time searching for local tradespeople when a team of easy to book BISH! experts have been allocated to your home already?
          </p>

          <div className={styles.checkmarkWrapper}>
            <img src='Group 471.png'></img>
          </div>

          <div className={styles.availabilitySection}>
            <h2 className={styles.availabilityTitle}>Plumbers available!</h2>
            <p className={styles.availabilityText}>More trades coming soon</p>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <h2 className={styles.sectionTitle}>Here's how it works</h2>

          {/* Accordion Items */}
          <div className={styles.accordionContainer}>
            <div
              className={styles.accordionItem}
              onClick={() => handleItemClick(1)}
            >
              <div className={styles.accordionHeader}>
                <div className={styles.stepContainer}>
                  <span className={styles.stepNumber}>1</span>
                  <h3 className={styles.stepTitle}>Unlock your home's BISH! code</h3>
                </div>
                <svg
                  className={`${styles.chevron} ${expandedItem === 1 ? styles.rotate : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {expandedItem === 1 && (
                <p className={styles.accordionContent}>
                  Find your address and get your home's BISH! code by SMS.
                </p>
              )}
            </div>

            <div
              className={styles.accordionItem}
              onClick={() => handleItemClick(2)}
            >
              <div className={styles.accordionHeader}>
                <div className={styles.stepContainer}>
                  <span className={styles.stepNumber}>2</span>
                  <h3 className={styles.stepTitle}>Call your local BISH! HQ</h3>
                </div>
                <svg
                  className={`${styles.chevron} ${expandedItem === 2 ? styles.rotate : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div
              className={styles.accordionItem}
              onClick={() => handleItemClick(3)}
            >
              <div className={styles.accordionHeader}>
                <div className={styles.stepContainer}>
                  <span className={styles.stepNumber}>3</span>
                  <h3 className={styles.stepTitle}>Same day or next day booking</h3>
                </div>
                <svg
                  className={`${styles.chevron} ${expandedItem === 3 ? styles.rotate : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingUI;