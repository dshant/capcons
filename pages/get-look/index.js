import React from "react";
import { AppLayout } from "../../components";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper } from "swiper/react";
import "swiper/css/navigation";
import styles from "./index.module.css";
import { Navigation } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { SwiperSlide } from "swiper/react";

export default function GetLook() {
  return (
    <>
      <AppLayout>
        <section>
          <div className={styles.GetLook}>
            <h1>GET IN THE LOOK</h1>
          </div>
          <Container>
            <Row>
              <Col sm={12} md={5}>
                <div className={styles.HalfImg}>
                  <img
                    src="/images/Screenshot 2022-10-17 182821.png"
                    alt="image"
                  />
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className={styles.HeadingCollection}>
                  <h4>NEW COLLECTION</h4>
                  <h2>SHOP THE LOOK BOOK</h2>
                  <hr />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </p>
                  <button>VIEW COLLECTION</button>
                  <div className="swiper-custom-slider">
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={30}
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
                    </Swiper>
                  </div>
                  <div className="">
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={30}
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
                          <p>OLIVE JOGGER PANTS</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 182525.png" />
                          <p>NAVY HALF SLEEVES SHIRT</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 182525.png" />
                          <p>GREY STRAIGHT FIT DENIM</p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className={styles.SliderImages}>
                          <img src="images/Screenshot 2022-10-17 182525.png" />
                          <p>CREEK BOLT CAMEL</p>
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
              </Col>
              <div className={styles.RecommendedYou}>
                <h1>Recommended for You</h1>
              </div>
              <Container>
                <Row>
                  <Col md={3}>
                    <div className={styles.ModelImg}>
                      <img src="images/Screenshot 2022-10-17 185546.png" />
                      <h2>BLUE SHORTS</h2>
                      <p>$ 1326</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={styles.ModelImg}>
                      <img src="images/Screenshot 2022-10-17 185607.png" />
                      <h2>WINE SWEAT SHIRT</h2>
                      <p>$ 1326</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={styles.ModelImg}>
                      <img src="images/Screenshot 2022-10-17 185627.png" />
                      <h2>SIZE: XS S M L XL XXL</h2>
                      <p>$ 1326</p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className={styles.ModelImg}>
                      <img src="images/Screenshot 2022-10-17 185646.png" />
                      <h2>GREY JOGGER PANTS</h2>
                      <p>$ 1326</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Row>
          </Container>
        </section>
      </AppLayout>
    </>
  );
}
