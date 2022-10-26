import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import {
  AppLayout,
  ColorPicker,
  ProductCard,
  ProductDetail,
  ReviewSection,
  SizePicker,
} from "../../components";
import styles from "./index.module.css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

const images = [
  {
    id: "image-1",
    path: "/images/modal.jpeg",
  },
  {
    id: "image-2",
    path: "/images/image.png",
  },
  {
    id: "image-3",
    path: "/images/modal.jpeg",
  },
  {
    id: "image-4",
    path: "/images/image.png",
  },
];

const colorsArray = [
  {
    id: "1",
    colorImage: "/images/shoe.png",
    sliderimages: [
      {
        id: "1",
        path: "/images/modal.jpeg",
      },
      {
        id: "2",
        path: "/images/modal.jpeg",
      },
      {
        id: "3",
        path: "/images/modal.jpeg",
      },
      {
        id: "4",
        path: "/images/modal.jpeg",
      },
    ],
  },
  {
    id: "2",
    colorImage: "/images/shoe.png",
    sliderimages: [
      {
        id: "1",
        path: "/images/image.png",
      },
      {
        id: "2",
        path: "/images/image.png",
      },
      {
        id: "3",
        path: "/images/image.png",
      },
      {
        id: "4",
        path: "/images/image.png",
      },
      // {
      //   id: "5",
      //   path: "/images/image.png",
      // },
    ],
  },
  {
    id: "3",
    colorImage: "/images/shoe.png",
    sliderimages: [
      {
        id: "1",
        path: "/images/modal.jpeg",
      },
      {
        id: "2",
        path: "/images/modal.jpeg",
      },
      {
        id: "3",
        path: "/images/modal.jpeg",
      },
      {
        id: "4",
        path: "/images/modal.jpeg",
      },
    ],
  },
  {
    id: "4",
    colorImage: "/images/shoe.png",
    sliderimages: [
      {
        id: "1",
        path: "/images/image.png",
      },
      {
        id: "2",
        path: "/images/image.png",
      },
      {
        id: "3",
        path: "/images/image.png",
      },
      {
        id: "4",
        path: "/images/image.png",
      },
    ],
  },
];
const style = {
  position: "absolute",
  inset: "0",
  // transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  // p: 4,
};
export default function ProductSingle() {
  const [show, setShow] = useState(false);
  const [mobileShow, mobileSetShow] = useState(false);
  const [desktopActiveImage, setActiveDesktopImage] = useState(images[0].id);
  const [selectedColor, setSelectedColor] = useState(colorsArray[0]);

  const handleClose = () => setShow(false);
  const handleMobileOpen = () => mobileSetShow(true);
  const handleMobileClose = () => mobileSetShow(false);
  const [quant, setQuant] = React.useState("");

  const handleChange = (event) => {
    setQuant(event.target.value);
  };

  return (
    <>
      <AppLayout>
        <section
          className={` ${styles.firstSection}`}
          style={{ padding: "3rem 0" }}
        >
          <Container>
            <Grid container spacing={2}>
              <Grid item md={7}>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  className={`${styles.customCursor}`}
                >
                  {selectedColor?.sliderimages?.map((data) => (
                    <div className={styles.ImageDiv} key={data?.id}>
                      <img
                        src={data?.path}
                        alt=""
                        width="100%"
                        onClick={() => setShow(true)}
                      />
                    </div>
                  ))}
                </Stack>
                <div className={styles.mobileSlider}>
                  <div className={styles.mobileHead}>
                    <Typography variant="h3" className={styles.title}>
                      Creek Boots Olive Green
                    </Typography>
                    <Typography className={styles.price}> $8,999</Typography>
                    <Typography className={styles.orgPrice}>
                      {" "}
                      $10,999
                    </Typography>
                  </div>
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#000",
                      // "--swiper-pagination-color": "#fff",
                    }}
                    pagination={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Pagination]}
                  >
                    {selectedColor?.sliderimages?.map((data) => (
                      <SwiperSlide
                        key={data?.id}
                        className={styles.swiperSlide}
                      >
                        <div className={`image `}>
                          <img
                            src={data?.path}
                            alt="..."
                            className="img-fluid"
                            onClick={handleMobileOpen}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Grid>
              <Grid item md={5}>
                <div className={styles.detail}>
                  <div className={styles.deskHead}>
                    <Typography variant="h3" className={styles.title}>
                      Creek Boots Olive Green
                    </Typography>
                    <Typography className={styles.price}> $8,999</Typography>
                    <Typography className={styles.orgPrice}>
                      {" "}
                      $10,999
                    </Typography>
                  </div>
                  <ColorPicker
                    setSelectedColor={setSelectedColor}
                    selectedColor={selectedColor}
                    colorsArray={colorsArray}
                  />
                  <SizePicker />
                  <div className={` ${styles.quantity}`}>
                    <Stack direction="row" spacing={2}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Quantity
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={quant}
                          label="Quant"
                          onChange={handleChange}
                        >
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                        </Select>
                      </FormControl>

                      <button type="button" variant="black">
                        Add to cart
                      </button>
                    </Stack>
                  </div>
                  <Stack
                    direction="row"
                    spacing={3}
                    alignItems="center"
                    flexWrap="wrap"
                    className={` ${styles.pinCode}`}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <TextField
                        id="outlined-basic"
                        label="PIN CODE"
                        variant="outlined"
                      />
                      <button type="button" variant="black">
                        CHECK
                      </button>
                    </Stack>
                    <Link href="">Import, Manufacturing & Packaging Info</Link>
                  </Stack>
                  <Stack
                    direction="row"
                    textAlign="center"
                    paddingTop={4}
                    paddingBottom={2}
                    className={`${styles.benifitsCard}`}
                  >
                    <div className={styles.benifits}>
                      <img src="/images/fingerprint.png" alt="" />
                      <Typography variant="h6">DURABLE</Typography>
                    </div>
                    <div className={styles.benifits}>
                      <img src="/images/fingerprint.png" alt="" />
                      <Typography variant="h6">WATERPROOF</Typography>
                    </div>
                    <div className={styles.benifits}>
                      <img src="/images/fingerprint.png" alt="" />
                      <Typography variant="h6">TOUGHENED GRIP</Typography>
                    </div>
                  </Stack>
                  <div className={`breifDetail`} style={{ padding: "1rem 0" }}>
                    <ProductDetail />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
        <ReviewSection />
        <section
          className={` ${styles.topSellerSection}`}
          style={{ padding: "3rem 0" }}
        >
          <Container>
            <Typography variant="h3" textAlign="center" marginBottom={2}>
              Top Sellers recommened for you
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={3}>
                <ProductCard />
              </Grid>
              <Grid item md={3}>
                <ProductCard />
              </Grid>
              <Grid item md={3}>
                <ProductCard />
              </Grid>
              <Grid item md={3}>
                <ProductCard />
              </Grid>
            </Grid>
          </Container>
        </section>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "white",
            transition: "all 1s ease",
            height: show ? "100vh" : "0px",
            width: show ? "100vw" : "0px",
            overflow: "auto",
            transformOrigin: "100px 100px",
          }}
          className={`swiper-modal`}
        >
          <button className="close-btn" onClick={handleClose}>
            close
          </button>

          <div>
            <div>
              <Grid container spacing={2}>
                <Grid item sm={2}>
                  <div
                    style={{
                      position: "sticky",
                      width: "250px",
                      top: 0,
                      height: "100vh",
                      display: "flex",
                      flexDirection: "column",
                      gap: 20,
                      overflow: "auto",
                      background: "white",
                    }}
                  >
                    {selectedColor?.sliderimages?.map((i) => (
                      <img
                        style={{
                          border:
                            desktopActiveImage === i.id
                              ? "1px solid black"
                              : null,

                          height: 160,
                          width: 120,
                          margin: "auto",
                        }}
                        src={i.path}
                        alt="..."
                        className="img-fluid"
                        onClick={() => {
                          setActiveDesktopImage(i.id);
                          const link = document.createElement("a");
                          link.href = "#" + i.id;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                      />
                    ))}
                  </div>
                </Grid>
                <Grid item sm={10}>
                  <div style={{ padding: "20px", marginLeft: 20 }}>
                    {selectedColor?.sliderimages.map((i) => (
                      <div
                        key={i.id}
                        id={i.id}
                        className={`image ${styles.Image}`}
                        onClick={handleClose}
                      >
                        <img src={i.path} alt="..." className="img-fluid" />
                      </div>
                    ))}
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>

        <Modal
          open={mobileShow}
          onClose={handleMobileClose}
          className={`swiper-modal`}
        >
          <Box sx={style}>
            <div onClick={() => mobileSetShow(false)}> close </div>
            <div>
              <Container>
                <Grid container spacing={2}>
                  <Grid item md={12}>
                    <Stack direction="row" flexWrap="wrap">
                      {selectedColor?.sliderimages.map((i) => (
                        <div className={styles.ImageDiv} key={i.id} id={i.id}>
                          <img src={i?.path} alt="" width="100%" />
                        </div>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </Box>
        </Modal>
      </AppLayout>
    </>
  );
}
