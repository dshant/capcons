import { Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./sliderCard.module.css";

export const SliderCard = () => {
  return (
    <>
      <Card className={styles.sliderCard}>
        <div className={`${styles.footwearSection} ${styles.wrapperImg}`}>
          <Image
            src="/images/shoe-product.png"
            alt="woodland"
            width={200}
            height={200}
          />
        </div>

        <div className={styles.content}>
          <Typography variant="h3">Blue Shorts</Typography>
          <div className="d-flex justify-content-between">
            <Typography className={styles.desc}>
              by Skating monk Studio
            </Typography>
            <span className={styles.rate}>$ 1326</span>
          </div>
        </div>
      </Card>
    </>
  );
};
