import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footerSection}>
        <Container>
          <Row>
            <Col md={3}>
              <h3>LOGO</h3>
              <p>Lorem ipsum dolor sit amet, doming quaeque an mea gravida.</p>
            </Col>
            <Col md={3}>
              <h5>Shop by</h5>
              <ul className={styles.list}>
                <li>All</li>
                <li>Footwear</li>
                <li>Apparels</li>
                <li>Accessories</li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Broing Stuff</h5>
              <ul className={styles.list}>
                <li>About</li>
                <li>Contact</li>
                <li>Term & Condition</li>
                <li>Shipping, Return & Refund Policy</li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Connect</h5>
              <ul className={styles.list}>
                <li>Follow US On Instagram</li>
                <li>Add to Facebook</li>
                <li>Pinterest</li>
                <li>Follow us on Twitter</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className={styles.copyRight}>
          All Rights Reserved. © 2020 Woodland World Wide
        </div>
      </footer>
    </>
  );
};
