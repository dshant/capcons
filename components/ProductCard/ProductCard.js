import React from "react";
import styles from "./productcard.module.css";

export const ProductCard = () => {
  return (
    <>
      <div className={styles.productCard}>
        <div className={styles.image}>
          <span className={styles.off}>40%</span>
          <img src="/images/woodland.webp" alt="woodland" />
        </div>
        <div className={styles.Content}>
          <h4>Creek Boots Olive green</h4>
          <div className="d-flex gap-3 align-items-center">
            <span className={styles.orgPrice}>$ 10,999 </span>
            <span className={styles.price}>$ 8,999</span>
          </div>
        </div>
      </div>
    </>
  );
};
