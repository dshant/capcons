import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormSelect,
  Modal,
  Row,
} from "react-bootstrap";
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

export default function ProductSingle() {
  const [show, setShow] = useState(false);
  const [mobileShow, mobileSetShow] = useState(false);
  const [desktopActiveImage, setActiveDesktopImage] = useState(images[0].id);
  const [selectedColor, setSelectedColor] = useState(colorsArray[0]);

  const handleClose = () => setShow(false);
  const handleMobileClose = () => mobileSetShow(false);

  return (
    <>
      <AppLayout>
        <section className={`py-5 ${styles.firstSection}`}>
          <Container>
            <Row>
              <Col md={7}>
                <div className={`d-flex flex-wrap ${styles.customCursor}`}>
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
                </div>
                <div className={styles.mobileSlider}>
                  <div className={styles.mobileHead}>
                    <h3 className={styles.title}>Creek Boots Olive Green</h3>
                    <p className={styles.price}> $8,999</p>
                    <p className={styles.orgPrice}> $10,999</p>
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
                      <SwiperSlide key={data?.id}>
                        <div className={`image `}>
                          <img
                            src={data?.path}
                            alt="..."
                            className="img-fluid"
                            onClick={() => mobileSetShow(true)}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Col>
              <Col md={5}>
                <div className={styles.detail}>
                  <div className={styles.deskHead}>
                    <h3 className={styles.title}>Creek Boots Olive Green</h3>
                    <p className={styles.price}> $8,999</p>
                    <p className={styles.orgPrice}> $10,999</p>
                  </div>
                  <ColorPicker
                    setSelectedColor={setSelectedColor}
                    selectedColor={selectedColor}
                    colorsArray={colorsArray}
                  />
                  <SizePicker />
                  <div className={` pt-5 pb-3 ${styles.quantity}`}>
                    <div className="d-flex gap-3">
                      <FormSelect>
                        <option>Qty 2</option>
                        <option>Qty 2</option>
                        <option>Qty 2</option>
                      </FormSelect>
                      <Button variant="black">Add to cart</Button>
                    </div>
                  </div>
                  <div
                    className={`d-flex gap-4 flex-wrap align-items-center ${styles.pinCode}`}
                  >
                    <Form className="d-flex align-items-center gap-2">
                      <Form.Control
                        type="text"
                        placeholder="PIN CODE"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="black">CHECK</Button>
                    </Form>
                    <Link href="">Import, Manufacturing & Packaging Info</Link>
                  </div>
                  <div
                    className={`d-flex text-center pt-5 pb-4 ${styles.benifitsCard}`}
                  >
                    <div className={styles.benifits}>
                      <img src="/images/fingerprint.png" alt="" />
                      <h6>DURABLE</h6>
                    </div>
                    <div className={styles.benifits}>
                      <img src="/images/fingerprint.png" alt="" />
                      <h6>WATERPROOF</h6>
                    </div>
                    <div className={styles.benifits}>
                      <img src="/images/fingerprint.png" alt="" />
                      <h6>TOUGHENED GRIP</h6>
                    </div>
                  </div>
                  <div className={`py-3 breifDetail`}>
                    <ProductDetail />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <ReviewSection />
        <section className={`py-5 ${styles.topSellerSection}`}>
          <Container>
            <h3 className="text-center mb-4">Top Sellers recommened for you</h3>
            <Row>
              <Col md={3}>
                <ProductCard />
              </Col>
              <Col md={3}>
                <ProductCard />
              </Col>
              <Col md={3}>
                <ProductCard />
              </Col>
              <Col md={3}>
                <ProductCard />
              </Col>
            </Row>
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

          <Modal.Body>
            <div>
              <Row>
                <Col md={2}>
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
                </Col>
                <Col md={10}>
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
                </Col>
              </Row>
            </div>
          </Modal.Body>
        </div>
        <Modal
          show={mobileShow}
          onHide={handleMobileClose}
          className={`swiper-modal`}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col md={12}>
                  <div className={`d-flex flex-wrap `}>
                    {selectedColor?.sliderimages.map((i) => (
                      <div className={styles.ImageDiv} key={i.id} id={i.id}>
                        <img src={i?.path} alt="" width="100%" />
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </AppLayout>
    </>
  );
}
