import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Button } from "../UI";
import styles from "./homeProductCard.module.css";

export const HomeProductCard = ({ data, customClass }) => {
  return (
    <>
      <Paper className={`${styles.productWrapper} ${customClass}`}>
        <div className={`${styles.image} img-overlay`}>
          <Image
            src={data?.img}
            alt="product"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
        <div className={styles.content}>
          <Typography variant="h3">{data?.title}</Typography>
          <Button variant="outline">Shop Now</Button>
        </div>
      </Paper>
    </>
  );
};
