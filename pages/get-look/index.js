import React from "react";
import { AppLayout } from "../../components";
import { Swiper } from "swiper/react";
import "swiper/css/navigation";
import styles from "./index.module.css";
import { Navigation } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { SwiperSlide } from "swiper/react";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function GetLook() {
  return (
    <>
      <AppLayout>
        <section>
          <div className={styles.GetLook}>
            <Typography variant="h1">GET IN THE LOOK</Typography>
          </div>
          <Container>
            <Grid container spacing={4} style={{ marginTop: "0px" }}>
              <Grid item xs={12} sm={12} md={5} style={{ paddingTop: "0" }}>
                <div className={styles.HalfImg}>
                  <img src="/images/get-look.png" alt="image" />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={7} style={{ paddingTop: "0" }}>
                <div className={styles.HeadingCollection}>
                  <Typography variant="h4">NEW COLLECTION</Typography>
                  <Typography variant="h2">SHOP THE LOOK BOOK</Typography>

                  <Typography>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </Typography>
                  <button>VIEW COLLECTION</button>
                  <div className="swiper-custom-slider">
                    <Swiper
                      modules={[Navigation]}
                      navigation
                      spaceBetween={20}
                      slidesPerView={4}
                      breakpoints={{
                        // when window width is >= 640px
                        0: {
                          slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                          slidesPerView: 2,
                        },
                        // when window width is >= 1200px
                        1200: {
                          slidesPerView: 4,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 182709.png" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 182709.png" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 182729.png" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 182709.png" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 182729.png" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 182729.png" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="swiper-custom-slider">
                    <Swiper
                      modules={[Navigation]}
                      navigation
                      spaceBetween={20}
                      slidesPerView={3}
                      breakpoints={{
                        // when window width is >= 640px
                        0: {
                          slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                          slidesPerView: 2,
                        },
                        // when window width is >= 1200px
                        1200: {
                          slidesPerView: 4,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 182525.png" />
                          <Typography>OLIVE JOGGER PANTS</Typography>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 182525.png" />
                          <Typography>NAVY HALF SLEEVES SHIRT</Typography>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 182525.png" />
                          <Typography>GREY STRAIGHT FIT DENIM</Typography>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 182525.png" />
                          <Typography>CREEK BOLT CAMEL</Typography>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 183522.png" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 183522.png" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
          <div className={styles.RecommendedYou}>
            <Typography variant="h1">Recommended for You</Typography>
          </div>
          <Container>
            <Grid container spacing={2} justifyContent="center">
              <Grid item md={3}>
                <div className={styles.ModelImg}>
                  <img src="images/Screenshot 2022-10-17 185546.png" />
                  <Typography variant="h2">BLUE SHORTS</Typography>
                  <Typography>$ 1326</Typography>
                </div>
              </Grid>
              <Grid item md={3}>
                <div className={styles.ModelImg}>
                  <img src="images/Screenshot 2022-10-17 185607.png" />
                  <Typography variant="h2">WINE SWEAT SHIRT</Typography>
                  <Typography>$ 1326</Typography>
                </div>
              </Grid>
              <Grid item md={3}>
                <div className={styles.ModelImg}>
                  <img src="images/Screenshot 2022-10-17 185627.png" />
                  <Typography variant="h2">SIZE: XS S M L XL XXL</Typography>
                  <Typography>$ 1326</Typography>
                </div>
              </Grid>
              <Grid item md={3}>
                <div className={styles.ModelImg}>
                  <img src="images/Screenshot 2022-10-17 185646.png" />
                  <Typography variant="h2">GREY JOGGER PANTS</Typography>
                  <Typography>$ 1326</Typography>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </AppLayout>
    </>
  );
}
