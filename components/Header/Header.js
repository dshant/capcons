import React from "react";
import {
  Container,
  Offcanvas,
  Form,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import styles from "./header.module.css";
import { BsFillCartFill, BsFillPersonFill, BsSearch } from "react-icons/bs";

const navLinks = [
  {
    link: "/",
    text: "Men",
  },
  {
    link: "/",
    text: "Women",
  },
  {
    link: "/",
    text: "Outdoor",
  },
  {
    link: "/",
    text: "About Us",
  },
  {
    link: "/",
    text: "Labs",
  },
];
export const Header = () => {
  return (
    <>
      <header>
        <div className={styles.topHeader}>
          <Container className="py-1">
            <div className="d-flex justify-content-end align-items-center gap-3">
              <ul className="d-flex gap-3 list-unstyled align-items-center mb-0">
                <li>
                  <BsFillCartFill />
                </li>
                <li>
                  <span>Order Status |</span>
                </li>
                <li>
                  <span>Find Store |</span>
                </li>
                <li>
                  <span>Sign In</span>
                </li>
                <li>
                  <BsFillPersonFill />
                </li>
              </ul>
            </div>
          </Container>
        </div>
        <Navbar expand="lg" className={`py-0 ${styles.navBar}`}>
          <Container className={styles.Container}>
            <Navbar.Brand href="#" className="py-0">
              <img
                src="/images/logo.svg"
                alt="logo"
                width={"100px"}
                height={"80px"}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  <img
                    src="/images/logo.svg"
                    alt="logo"
                    width={"100px"}
                    height={"80px"}
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1  px-3">
                  {navLinks?.map((data, id) => (
                    <Nav.Link
                      href={data?.link}
                      key={id}
                      className={styles.navLink}
                    >
                      {data?.text}
                    </Nav.Link>
                  ))}
                </Nav>
                <Form className="d-flex" style={{ paddingBottom: "10px" }}>
                  <div className={`d-flex ${styles.form}`}>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <span>
                      <BsSearch />
                    </span>
                  </div>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
};
