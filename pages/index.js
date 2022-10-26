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
import { Autoplay, Navigation } from "swiper";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import "swiper/css/navigation";
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
            <Grid container spacing={2}>
              {homeCardData?.map((data, id) => (
                <Grid item xs={12} sm={4} key={id}>
                  <HomeProductCard data={data} />
                </Grid>
              ))}
            </Grid>
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
          <Box className={styles.wrapper}>
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
          </Box>
        </section>
        <section style={{ paddingRight: "1rem" }}>
          <Grid container className={` ${styles.customRow}`}>
            <Grid md={6}>
              <Card
                className={`${styles.footwearSection} ${styles.wrapperImg} img-overlay`}
              >
                <img src="/images/men.jpg" alt="men" width="100%" />
                <div className={`${styles.Content} left-content`}>
                  <Typography variant="h3" className={styles.whiteTitle}>
                    Shop Men’s Apparel
                  </Typography>
                  <Button>Shop Now</Button>
                </div>
              </Card>
            </Grid>
            <Grid md={6}>
              <Card
                className={`${styles.footwearSection} ${styles.wrapperImg} img-overlay`}
              >
                <img src="/images/women.jpg" alt="women" width="100%" />
                <div className={`${styles.Content} right-content`}>
                  <Typography variant="h3" className={styles.whiteTitle}>
                    Shop Women’s Apparel
                  </Typography>
                  <Button>Shop Now</Button>
                </div>
              </Card>
            </Grid>
          </Grid>
        </section>
        <section className={styles.tShirtSectionWrap}>
          <Container>
            <Grid container spacing={2}>
              {exploreData?.map((data, id) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={id}
                  className={styles.customCol}
                >
                  <ExploreCard data={data} />
                </Grid>
              ))}
            </Grid>
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
              navigation
              modules={[Autoplay, Navigation]}
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
          <Grid container>
            {threeCards?.map((data, id) => (
              <Grid item md={4} key={id}>
                <HomeProductCard
                  customClass={styles.marginBottom}
                  data={data}
                />
              </Grid>
            ))}
          </Grid>
        </section>
        <section className={styles.instagramSection}>
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h3">AS WORN BY WOODLAND FAM</Typography>
                <Typography>
                  Click to shop & mention us on instagram @woodlandworldwide to
                  be featured
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  spacing={2}
                  className={`${styles.flexWrap}`}
                >
                  {instaCard?.map((data, id) => (
                    <Card className={styles.instaCard} key={id}>
                      <div className={styles.image}>
                        <img src={data?.img} alt="insta" width="100%" />
                      </div>
                    </Card>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section
          className={` ${styles.lastSection}`}
          style={{ padding: "3rem 0" }}
        >
          <Container>
            <Grid container>
              <Grid md={6}>
                <div
                  className={`${styles.footwearSection} ${styles.wrapperImg} img-overlay img-overlay-2`}
                >
                  <img src="/images/pro.jpg" alt="men" width="100%" />
                  <div className={`${styles.Content} `}>
                    <Typography variant="h3" className={styles.whiteTitle}>
                      Pro Planet
                    </Typography>
                    <Typography>
                      Proplanet is a community that is committed to make our
                      planet a better place to live in. Our ultimate goal is to
                      inspire the next generation and increase their
                      participation in the conservation of nature.
                    </Typography>
                    <Button>Read More</Button>
                  </div>
                </div>
              </Grid>
              <Grid md={6}>
                <div
                  className={`${styles.footwearSection} ${styles.wrapperImg} img-overlay img-overlay-2`}
                >
                  <img src="/images/research.jpg" alt="women" width="100%" />
                  <div className={`${styles.Content} `}>
                    <Typography variant="h3" className={styles.whiteTitle}>
                      Woodland Research Lab
                    </Typography>
                    <Typography>
                      Woodland's expertise combines activity focused designs and
                      technologically advanced materials available, created in
                      the most innovative and effective manner possible.
                    </Typography>
                    <Button>Read More</Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </AppLayout>
    </>
  );
}
