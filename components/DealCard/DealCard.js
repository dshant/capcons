import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./dealcard.module.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Box, Card, Stack, Typography } from "@mui/material";

const images = [
  {
    img: "/images/shoe-product.png",
  },
  {
    img: "/images/shoe-product.png",
  },
  {
    img: "/images/shoe-product.png",
  },
];

export const DealCard = ({ data }) => {
  return (
    <>
      <Box className={styles.sliderCard}>
        <Swiper
          className="mySwiper image-slider"
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
        >
          {images?.map((data) => (
            <SwiperSlide>
              <Card
                className={`${styles.footwearSection} ${styles.wrapperImg}`}
              >
                <span className={styles.off}>40%</span>
                <img src={data?.img} alt="woodland" width="200px" />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.content}>
          <Typography variant="h3">{data?.title}</Typography>
          <Stack direction="row" justifyContent="space-between">
            <Typography className={styles.orgRate}>
              $ {data?.orgRate}
            </Typography>
            <span className={styles.rate}>$ {data?.rate}</span>
          </Stack>
        </div>
      </Box>
    </>
  );
};
