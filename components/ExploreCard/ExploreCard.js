import React from "react";
import styles from "./explorecard.module.css";

export const ExploreCard = ({ data }) => {
  return (
    <div className={styles.tShirtSection}>
      <div className={`${styles.image} img-overlay`}>
        <img src={data?.img} alt="t-shirt" />
      </div>
      <div className={styles.Content}>
        <h3>{data?.title}</h3>
        <h4>{data?.text}</h4>
      </div>
    </div>
  );
};
