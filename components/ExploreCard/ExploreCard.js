import { Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./explorecard.module.css";

export const ExploreCard = ({ data }) => {
  return (
    <Card className={styles.tShirtSection}>
      <div className={`${styles.image} img-overlay`}>
        <Image
          src={data?.img}
          alt="t-shirt"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
      <div className={styles.Content}>
        <Typography variant="h3">{data?.title}</Typography>
        <Typography variant="h4">{data?.text}</Typography>
      </div>
    </Card>
  );
};
