import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./listing.module.css";
import "swiper/css/navigation";
import { Box, Card, Stack, Typography } from "@mui/material";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

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

export const ListingCard = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState("");

  return (
    <>
      <Box className={styles.sliderCard}>
        <Swiper
          className="mySwiper2 image-slider"
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
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
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          style={{ margin: "0 30px" }}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            600: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className={styles.thumbImg}>
              <img src="/images/shoe-product.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.thumbImg}>
              <img src="/images/logo.svg" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={styles.content}>
          <Typography variant="h3">{data?.title}</Typography>
          <Stack direction="row" spacing={2}>
            <Typography className={styles.orgRate}>
              $ {data?.orgRate}
            </Typography>
            <span className={styles.rate}>$ {data?.rate}</span>
          </Stack>
          <Typography className={styles.addOff}>{data?.off}</Typography>
        </div>
      </Box>
    </>
  );
};
