import React from "react";
import { Button } from "../UI";
import styles from "./homeProductCard.module.css";

export const HomeProductCard = ({ data, customClass }) => {
  return (
    <>
      <div className={`${styles.productWrapper} ${customClass}`}>
        <div className={`${styles.image} img-overlay`}>
          <img src={data?.img} alt="product" />
        </div>
        <div className={styles.content}>
          <h3>{data?.title}</h3>
          <Button variant="outline">Shop Now</Button>
        </div>
      </div>
    </>
  );
};
