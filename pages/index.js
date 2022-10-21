import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import {
  AppLayout,
  Button,
  DealCard,
  ExploreCard,
  HomeProductCard,
  SliderCard,
} from "../components";
import styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const homeCardData = [
  {
    img: "/images/product-1.jpg",
    title: "Bestsellers",
  },
  {
    img: "/images/product-2.png",
    title: "Sneakers",
  },
  {
    img: "/images/product-3.png",
    title: "Boots",
  },
  {
    img: "/images/product-4.png",
    title: "Casuals & Canvas",
  },
  {
    img: "/images/product-5.png",
    title: "Men’s Apparel",
  },
  {
    img: "/images/product-6.png",
    title: "Women’s Apparel",
  },
];

const threeCards = [
  {
    img: "/images/bags.jpg",
    title: "Bags",
  },
  {
    img: "/images/wears.jpg",
    title: "Innerwear",
  },
  {
    img: "/images/belts.jpg",
    title: "Belts & More",
  },
];
const exploreData = [
  {
    img: "/images/t-shirt.jpg",
    title: "T-Shirt",
    text: "Shop Men | Shop Women",
  },
  {
    img: "/images/shirts.jpg",
    title: "Shirts",
    text: "Shop Men | Shop Women",
  },
  {
    img: "/images/jackets.jpg",
    title: "Jackets",
    text: "Shop Men | Shop Women",
  },
  {
    img: "/images/jeans.jpg",
    title: "Jeans",
    text: "Shop Men | Shop Women",
  },
];

const instaCard = [
  {
    img: "/images/insta-1.jpg",
  },
  {
    img: "/images/insta-2.jpg",
  },
  {
    img: "/images/insta-3.jpg",
  },
  {
    img: "/images/insta-4.jpg",
  },
  {
    img: "/images/insta-5.jpg",
  },
];
const dealCardData = [
  {
    img: "/images/shoe-product.png",
    title: "Creek Boots Olive green",
    orgRate: "10,999",
    rate: "8,999",
  },
  {
    img: "/images/shoe-product.png",
    title: "Excrusion Khaki",
    orgRate: "10,999",
    rate: "8,999",
  },
  {
    img: "/images/shoe-product.png",
    title: "Camel Hiking boots for Men",
    orgRate: "10,999",
    rate: "8,999",
  },
  {
    img: "/images/shoe-product.png",
    title: "Creek Boots Olive green",
    orgRate: "10,999",
    rate: "8,999",
  },
  {
    img: "/images/shoe-product.png",
    title: "Camel Hiking boots for Men",
    orgRate: "10,999",
    rate: "8,999",
  },
];
export default function Home() {
  return (
    <>
      <AppLayout>
        <section className={styles.homeSlider}>
          <div className={`${styles.slides}`}>
            <img src="/images/banner.png" alt="slider" width="100%" />
          </div>
        </section>
        <section className={`${styles.products}`}>
          <Container>
            <Row>
              {homeCardData?.map((data, id) => (
                <Col md={4} key={id}>
                  <HomeProductCard data={data} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section className={styles.bannerSection}>
          <div className={styles.Image}>
            <img src="/images/banner-2.png" alt="banner" width="100%" />
          </div>
          <div className={styles.bannerContent}>
            <Button>Shop Now</Button>
          </div>
        </section>

        <section className={styles.sliderSection}>
          <div className={styles.wrapper}>
            <Swiper
              spaceBetween={30}
              slidesPerView={4.5}
              loop="true"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
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
              {dealCardData?.map((data, id) => (
                <SwiperSlide key={id}>
                  <DealCard data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section>
          <Row className={`mx-0 ${styles.customRow}`}>
            <Col md={6} className="px-0">
              <div
                className={`${styles.footwearSection} ${styles.wrapperImg} img-overlay`}
              >
                <img src="/images/men.jpg" alt="men" width="100%" />
                <div className={`${styles.Content} left-content`}>
                  <h3 className={styles.whiteTitle}>Shop Men’s Apparel</h3>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </Col>
            <Col md={6} className="px-0">
              <div
                className={`${styles.footwearSection} ${styles.wrapperImg} img-overlay`}
              >
                <img src="/images/women.jpg" alt="women" width="100%" />
                <div className={`${styles.Content} right-content`}>
                  <h3 className={styles.whiteTitle}>Shop Women’s Apparel</h3>
                  <Button>Shop Now</Button>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section className={styles.tShirtSectionWrap}>
          <Container>
            <Row>
              {exploreData?.map((data, id) => (
                <Col md={3} key={id}>
                  <ExploreCard data={data} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className={styles.bannerSection}>
          <div className={styles.Image}>
            <img src="/images/banner-3.png" alt="banner" width="100%" />
          </div>
          <div className={styles.bannerContent}>
            <Button>Shop Now</Button>
          </div>
        </section>
        <section className={styles.sliderSection}>
          <div className={styles.wrapper}>
            <Swiper
              spaceBetween={30}
              slidesPerView={4.5}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
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
          <Row className="mx-0">
            {threeCards?.map((data, id) => (
              <Col md={4} className="px-0" key={id}>
                <HomeProductCard customClass={`mb-0`} data={data} />
              </Col>
            ))}
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
                <div className={`d-flex gap-3 ${styles.flexWrap}`}>
                  {instaCard?.map((data, id) => (
                    <div className={styles.instaCard} key={id}>
                      <div className={styles.image}>
                        <img src={data?.img} alt="insta" width="100%" />
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={`py-5 ${styles.lastSection}`}>
          <Container>
            <Row>
              <Col md={6} className="px-0">
                <div
                  className={`${styles.footwearSection} ${styles.wrapperImg} img-overlay img-overlay-2`}
                >
                  <img src="/images/pro.jpg" alt="men" width="100%" />
                  <div className={`${styles.Content} `}>
                    <h3 className={styles.whiteTitle}>Pro Planet</h3>
                    <p>
                      Proplanet is a community that is committed to make our
                      planet a better place to live in. Our ultimate goal is to
                      inspire the next generation and increase their
                      participation in the conservation of nature.
                    </p>
                    <Button>Read More</Button>
                  </div>
                </div>
              </Col>
              <Col md={6} className="px-0">
                <div
                  className={`${styles.footwearSection} ${styles.wrapperImg} img-overlay img-overlay-2`}
                >
                  <img src="/images/research.jpg" alt="women" width="100%" />
                  <div className={`${styles.Content} `}>
                    <h3 className={styles.whiteTitle}>Woodland Research Lab</h3>
                    <p>
                      Woodland's expertise combines activity focused designs and
                      technologically advanced materials available, created in
                      the most innovative and effective manner possible.
                    </p>
                    <Button>Read More</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </AppLayout>
    </>
  );
}
