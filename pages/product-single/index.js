import Link from "next/link";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormSelect,
  Modal,
  Row,
} from "react-bootstrap";
import {
  AppLayout,
  ColorPicker,
  ProductCard,
  ProductDetail,
  ReviewSection,
  SizePicker,
} from "../../components";
import styles from "./index.module.css";

export default function ProductSingle() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AppLayout>
        <section className={`py-5 ${styles.firstSection}`}>
          <Container>
            <Row>
              <Col md={7}>
                <div className={`d-flex flex-wrap ${styles.customCursor}`}>
                  <div className={styles.ImageDiv}>
                    <img
                      src="/images/image.png"
                      alt=""
                      width="100%"
                      onClick={handleShow}
                    />
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
                  <div
                    className={`d-flex gap-4 align-items-center ${styles.pinCode}`}
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>dvc</h2>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </AppLayout>
    </>
  );
}
