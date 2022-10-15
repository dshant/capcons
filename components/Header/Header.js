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
export const Header = () => {
  return (
    <>
      <header>
        <Container className="py-3">
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
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Logo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1  px-3">
                  <Nav.Link href="#action1">Men</Nav.Link>
                  <Nav.Link href="#action2">Women</Nav.Link>
                  <Nav.Link href="#action2">Outdoor</Nav.Link>
                  <Nav.Link href="#action2">About Us</Nav.Link>
                  <Nav.Link href="#action2">Labs</Nav.Link>
                </Nav>
                <Form className="d-flex">
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
