import {
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { AppLayout, ColorPicker, ListingCard } from "../../components";
import styles from "./index.module.css";
import "swiper/css/navigation";

const dealCardData = [
  {
    id: 6,
    img: "/images/shoe-product.png",
    title: "Creek Boots Olive green",
    orgRate: "10,999",
    rate: "8,999",
    off: " Additional 5% Off on Prepaid Orders",
  },
  {
    id: 8,
    img: "/images/shoe-product.png",
    title: "Excrusion Khaki",
    orgRate: "10,999",
    rate: "8,999",
    off: " Additional 5% Off on Prepaid Orders",
  },
  {
    id: 55,
    img: "/images/shoe-product.png",
    title: "Camel Hiking boots for Men",
    orgRate: "10,999",
    rate: "8,999",
    off: " Additional 5% Off on Prepaid Orders",
  },
  {
    id: 77,
    img: "/images/shoe-product.png",
    title: "Creek Boots Olive green",
    orgRate: "10,999",
    rate: "8,999",
    off: " Additional 5% Off on Prepaid Orders",
  },
  {
    id: 99,
    img: "/images/shoe-product.png",
    title: "Camel Hiking boots for Men",
    orgRate: "10,999",
    rate: "8,999",
    off: " Additional 5% Off on Prepaid Orders",
  },
];

export default function ProductListing() {
  const [quant, setQuant] = React.useState("");
  const handleChange = (event) => {
    setQuant(event.target.value);
  };

  return (
    <>
      <AppLayout>
        <section className={styles.homeSlider}>
          <div className={`${styles.slides}`}>
            <img src="/images/banner.png" alt="slider" width="100%" />
          </div>
        </section>
        <section className={styles.breadCrumbSection}>
          <Container>
            <Typography variant="h5" className={styles.h5}>
              HOME / SHOP / MEN / WOMEN
            </Typography>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Typography variant="h3">MENS'S BOOTS</Typography>
              <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Stack>
            <div className={styles.selectList}>
              <div className={styles.left}>
                <h6>FILTER BY</h6>

                <Stack
                  direction="row"
                  alignItems="center"
                  flexWrap="wrap"
                  spacing={2}
                >
                  <select className={styles.selectBox}>
                    <option>SIZE</option>
                    <option>SIZE</option>
                    <option>SIZE</option>
                    <option>SIZE</option>
                  </select>
                  <select className={styles.selectBox}>
                    <option>PRICE</option>
                    <option>SIZE</option>
                    <option>SIZE</option>
                    <option>SIZE</option>
                  </select>
                  <select className={styles.selectBox}>
                    <option>COLOR</option>
                    <option>SIZE</option>
                    <option>SIZE</option>
                    <option>SIZE</option>
                  </select>

                  <select className={styles.selectBox}>
                    <option>CATEGORY</option>
                    <option>SIZE</option>
                    <option>SIZE</option>
                    <option>SIZE</option>
                  </select>

                  <p>Showing 215 of 215 products</p>
                </Stack>
              </div>
              <div className={styles.right}>
                <h6>SORT BY</h6>
                <Stack direction="row">
                  <select className={styles.selectBox}>
                    <option>FEATURED</option>
                    <option>SIZE</option>
                    <option>SIZE</option>
                    <option>SIZE</option>
                  </select>
                </Stack>
              </div>
            </div>
          </Container>
        </section>
        <section className={`${styles.sliderSection}`}>
          <Container>
            <Box className={styles.wrapper}>
              <Swiper
                spaceBetween={30}
                slidesPerView={4}
                loop="true"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  // when window width is >= 640px
                  0: {
                    slidesPerView: 2,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 3,
                  },
                  // when window width is >= 1200px
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {dealCardData?.map((data, id) => (
                  <SwiperSlide key={id}>
                    <ListingCard data={data} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Container>
        </section>
        <section className={`${styles.sliderSection}`}>
          <Container>
            <Box className={styles.wrapper}>
              <Swiper
                spaceBetween={30}
                slidesPerView={4}
                loop="true"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  // when window width is >= 640px
                  0: {
                    slidesPerView: 2,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 3,
                  },
                  // when window width is >= 1200px
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {dealCardData?.map((data, id) => (
                  <SwiperSlide key={id}>
                    <ListingCard data={data} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Container>
        </section>
        <section className={`${styles.sliderSection}`}>
          <Container>
            <Box className={styles.wrapper}>
              <Swiper
                spaceBetween={30}
                slidesPerView={4}
                loop="true"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  // when window width is >= 640px
                  0: {
                    slidesPerView: 2,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 3,
                  },
                  // when window width is >= 1200px
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {dealCardData?.map((data, id) => (
                  <SwiperSlide key={id}>
                    <ListingCard data={data} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Container>
        </section>
      </AppLayout>
    </>
  );
}
