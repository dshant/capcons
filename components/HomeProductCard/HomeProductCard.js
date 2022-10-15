import React from "react";
import styles from "./homeProductCard.module.css";

export const HomeProductCard = ({ title }) => {
  return (
    <>
      <div className={styles.productWrapper}>
        <div className={styles.image}>
          <img src="/images/woodland.webp" alt="product" />
        </div>
        <h3>{title}</h3>
      </div>
    </>
  );
};
