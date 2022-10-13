import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row, Button, FormSelect, Form } from "react-bootstrap";
import {
  AppLayout,
  ColorPicker,
  ProductCard,
  ProductDetail,
  ReviewSection,
  SizePicker,
} from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <AppLayout>
        <section className={`py-5 ${styles.firstSection}`}>
          <Container>
            <Row>
              <Col md={7}>
                <div className="d-flex flex-wrap">
                  <div className={styles.ImageDiv}>
                    <img src="/images/image.png" alt="" width="100%" />
                  </div>
                  <div className={styles.ImageDiv}>
                    <img src="/images/image.png" alt="" width="100%" />
                  </div>
                  <div className={styles.ImageDiv}>
                    <img src="/images/image.png" alt="" width="100%" />
                  </div>
                  <div className={styles.ImageDiv}>
                    <img src="/images/image.png" alt="" width="100%" />
                  </div>
                  <div className={styles.ImageDiv}>
                    <img src="/images/image.png" alt="" width="100%" />
                  </div>
                </div>
              </Col>
              <Col md={5}>
                <div className={styles.detail}>
                  <h3 className={styles.title}>Creek Boots Olive Green</h3>
                  <p className={styles.price}> $8,999</p>
                  <p className={styles.orgPrice}> $10,999</p>
                  <ColorPicker />
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
                  <div className={`d-flex gap-4 ${styles.pinCode}`}>
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
      </AppLayout>
    </>
  );
}
