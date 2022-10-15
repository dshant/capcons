import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { AppLayout, HomeProductCard, SliderCard } from "../components";
import styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <>
      <AppLayout>
        <section className={styles.homeSlider}>
          <div className={`${styles.slides}`}>
            <img src="/images/slider.jpeg" alt="slider" width="100%" />
          </div>
        </section>
        <section className={`${styles.products}`}>
          <Container>
            <Row>
              <Col md={4}>
                <HomeProductCard title="Bestsellers" />
              </Col>
              <Col md={4}>
                <HomeProductCard title="Boots" />
              </Col>
              <Col md={4}>
                <HomeProductCard title="Casuals & Canvas" />
              </Col>
              <Col md={4}>
                <HomeProductCard title="Sneakers" />
              </Col>
              <Col md={4}>
                <HomeProductCard title="Men's Apparel" />
              </Col>
              <Col md={4}>
                <HomeProductCard title="Women's Apparel" />
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Row>
            <Col md={6} className="px-0">
              <div className={`${styles.footwearSection} ${styles.wrapperImg}`}>
                <img src="/images/woodland.webp" alt="woodland" width="300px" />
                <h3>Bags</h3>
              </div>
            </Col>
            <Col md={6} className="px-0">
              <div
                className={`${styles.footwearSection} ${styles.wrapperImg} ${styles.greyBg}`}
              >
                <img src="/images/woodland.webp" alt="woodland" width="300px" />
                <h3>Innerwears</h3>
              </div>
            </Col>
          </Row>
        </section>
        <section className={styles.tShirtSectionWrap}>
          <Container>
            <Row>
              <Col md={3}>
                <div className={styles.tShirtSection}>
                  <div className={styles.Content}>
                    <h3>T-Shirt</h3>
                    <h3>Shop Men | Shop Women</h3>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className={styles.tShirtSection}>
                  <div className={styles.Content}>
                    <h3>T-Shirt</h3>
                    <h3>Shop Men | Shop Women</h3>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className={styles.tShirtSection}>
                  <div className={styles.Content}>
                    <h3>T-Shirt</h3>
                    <h3>Shop Men | Shop Women</h3>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className={styles.tShirtSection}>
                  <div className={styles.Content}>
                    <h3>T-Shirt</h3>
                    <h3>Shop Men | Shop Women</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.footwearSection}>
          <Container>
            <div className={styles.wrapperImg}>
              <img src="/images/woodland.webp" alt="woodland" width="300px" />
              <h3>Footwear Banner</h3>
            </div>
          </Container>
        </section>
        <section className={styles.sliderSection}>
          <div className={styles.wrapper}>
            <Swiper
              spaceBetween={30}
              slidesPerView={4.5}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1.5,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2.5,
                },
                // when window width is >= 1200px
                1200: {
                  slidesPerView: 4.5,
                },
              }}
            >
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <SliderCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className={styles.footwearSection}>
          <Container>
            <div className={styles.wrapperImg}>
              <img src="/images/woodland.webp" alt="woodland" width="300px" />
              <h3>Woodsports (Woodsports Active)</h3>
            </div>
          </Container>
        </section>
        <section className={styles.sliderSection}>
          <div className={styles.wrapper}>
            <Swiper
              spaceBetween={30}
              slidesPerView={4.5}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1.5,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2.5,
                },
                // when window width is >= 1200px
                1200: {
                  slidesPerView: 4.5,
                },
              }}
            >
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <SliderCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section>
          <Row>
            <Col md={4} className="px-0">
              <div className={`${styles.footwearSection} ${styles.wrapperImg}`}>
                <img src="/images/woodland.webp" alt="woodland" width="300px" />
                <h3>Bags</h3>
              </div>
            </Col>
            <Col md={4} className="px-0">
              <div
                className={`${styles.footwearSection} ${styles.wrapperImg} ${styles.greyBg}`}
              >
                <img src="/images/woodland.webp" alt="woodland" width="300px" />
                <h3>Innerwears</h3>
              </div>
            </Col>
            <Col md={4} className="px-0">
              <div className={`${styles.footwearSection} ${styles.wrapperImg}`}>
                <img src="/images/woodland.webp" alt="woodland" width="300px" />
                <h3>Belts & More</h3>
              </div>
            </Col>
          </Row>
        </section>
        <section className={styles.instagramSection}>
          <Container>
            <Row>
              <Col md={12}>
                <h3>AS WORN BY WOODLAND FAM</h3>
                <p>
                  Click to shop & mention us on instagram @woodlandworldwide to
                  be featured
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="d-flex gap-3">
                  <div className={styles.instaCard}></div>
                  <div className={styles.instaCard}></div>
                  <div className={styles.instaCard}></div>
                  <div className={styles.instaCard}></div>
                  <div className={styles.instaCard}></div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <Container>
            <Row>
              <Col md={6} className="px-0">
                <div
                  className={`${styles.footwearSection} ${styles.wrapperImg}`}
                >
                  <img
                    src="/images/woodland.webp"
                    alt="woodland"
                    width="300px"
                  />
                  <h3>Woodsports (Woodsports Active)</h3>
                </div>
              </Col>
              <Col md={6} className="px-0">
                <div
                  className={`${styles.footwearSection} ${styles.greyBg} ${styles.wrapperImg}`}
                >
                  <img
                    src="/images/woodland.webp"
                    alt="woodland"
                    width="300px"
                  />
                  <h3>Woodsports (Woodsports Active)</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </AppLayout>
    </>
  );
}
