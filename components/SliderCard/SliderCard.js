import React from "react";
import styles from "./sliderCard.module.css";

export const SliderCard = () => {
  return (
    <>
      <div className={styles.sliderCard}>
        <div className={`${styles.footwearSection} ${styles.wrapperImg}`}>
          <img src="/images/shoe-product.png" alt="woodland" width="200px" />
        </div>

        <div className={styles.content}>
          <h3>Blue Shorts</h3>
          <div className="d-flex justify-content-between">
            <p className={styles.desc}>by Skating monk Studio</p>
            <span className={styles.rate}>$ 1326</span>
          </div>
        </div>
      </div>
    </>
  );
};
