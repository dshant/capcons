import React from "react";
import { AppBar, Toolbar, Link as Mat_Link, Grid, InputBase, Box } from '@mui/material';
import styles from "./header.module.css";
import { BsFillCartFill, BsFillPersonFill, BsSearch } from "react-icons/bs";
import { styled, alpha } from '@mui/material/styles';
import Link from "next/link";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'gray'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

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
          <Box py={1} display="flex" justifyContent={'flex-end'} alignItems='center' gap={3} className="list-unstyled">
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
          </Box>
        </div>

        <React.Fragment>
          <AppBar position='relative' style={{backgroundColor: 'white', boxShadow: 'unset'}}>
            <Toolbar>
              <Box ml={5}>
                <Link href="/" passHref>
                  <img
                    src="/images/logo.svg"
                    alt="logo"
                    width={"100px"}
                    height={"80px"}
                  />
                </Link>
              </Box>

              <Grid container ml={5} justifyContent={'flex-start'} alignItems={'flex-end'}>
                {navLinks?.map((data, id) => (
                  <Mat_Link
                    href={data?.link}
                    key={id}
                    className={styles.navLink}
                  >
                    {data?.text}
                  </Mat_Link>
                ))}
              </Grid>
                
              <Search>
                <SearchIconWrapper>
                  <BsSearch />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </React.Fragment>

        {/* <Navbar expand="lg" className={`py-0 ${styles.navBar}`}>
          <Container className={styles.Container}>
            <Navbar.Brand className="py-0">
              <Link href="/" passHref>
                <img
                  src="/images/logo.svg"
                  alt="logo"
                  width={"100px"}
                  height={"80px"}
                />
              </Link>
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
        </Navbar> */}
      </header>
    </>
  );
};
