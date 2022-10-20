import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./dealcard.module.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

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
      <div className={styles.sliderCard}>
        <Swiper
          className="mySwiper image-slider"
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
        >
          {images?.map((data) => (
            <SwiperSlide>
              <div className={`${styles.footwearSection} ${styles.wrapperImg}`}>
                <span className={styles.off}>40%</span>
                <img src={data?.img} alt="woodland" width="200px" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.content}>
          <h3>{data?.title}</h3>
          <div className="d-flex justify-content-between">
            <p className={styles.orgRate}>$ {data?.orgRate}</p>
            <span className={styles.rate}>$ {data?.rate}</span>
          </div>
        </div>
      </div>
      {/* <div className={styles.sliderCard}>
        <div className={`${styles.footwearSection} ${styles.wrapperImg}`}>
          <img src="/images/woodland.webp" alt="woodland" width="200px" />
        </div>
        <div className={styles.content}>
          <h3>Blue Shorts</h3>
          <div className="d-flex justify-content-between">
            <p className={styles.desc}>by Skating monk Studio</p>
            <span className={styles.rate}>$ 1326</span>
          </div>
        </div>
      </div> */}
    </>
  );
};
