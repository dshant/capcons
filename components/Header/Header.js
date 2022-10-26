import React from "react";
import {
  AppBar,
  Toolbar,
  Link as Mat_Link,
  Box,
  TextField,
} from "@mui/material";
import styles from "./header.module.css";
import { BsFillCartFill, BsFillPersonFill, BsSearch } from "react-icons/bs";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Container, Stack } from "@mui/system";

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
    text: "Bags & Gear",
  },

  {
    link: "/",
    text: "About Us",
  },
  {
    link: "/",
    text: "Labs",
  },
  {
    link: "/",
    text: "Sale",
  },
];
const drawerWidth = 240;

export const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Link href="/" passHref>
        <img
          src="/images/logo.svg"
          alt="logo"
          width={"100px"}
          height={"80px"}
        />
      </Link>
      <Divider />
      <List className={styles.mobileLinks}>
        {navLinks.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText>
                <Link href={item?.link}>{item?.text}</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <header>
        <AppBar component="nav" className={`app-bar ${styles.appBar}`}>
          <div className={styles.topHeader}>
            <Container>
              <Box
                py={1}
                display="flex"
                justifyContent={"flex-end"}
                alignItems="center"
                gap={3}
                className="list-unstyled"
              >
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
            </Container>
          </div>
          <Container style={{ padding: "0" }}>
            <Toolbar className={styles.toolBar}>
              <Stack direction="row" alignItems={"flex-end"} spacing={2}>
                <Link href="/" passHref>
                  <img
                    src="/images/logo.svg"
                    alt="logo"
                    width={"100px"}
                    height={"80px"}
                  />
                </Link>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  {navLinks.map((item) => (
                    <Button key={item} sx={{ color: "#fff" }}>
                      <Link href={item?.link}>{item?.text}</Link>
                    </Button>
                  ))}
                </Box>
              </Stack>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <TextField
                  id="outlined-basic"
                  label="search products"
                  variant="standard"
                />
                <span>
                  <BsSearch style={{ color: "#000" }} />
                </span>
              </Box>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon style={{ color: "#000" }} />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        <Box component="nav">
          <Drawer
            className={styles.customDrawer}
            container={container}
            variant="persistent"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </header>
    </>
  );
};
