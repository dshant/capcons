import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./footer.module.css";
import { Container } from "@mui/system";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footerSection}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Typography variant="h3">LOGO</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, doming quaeque an mea gravida.
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h5">Shop by</Typography>
              <List className={styles.list}>
                <ListItem>
                  <ListItemText>All</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Footwear</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Apparels</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Accessories</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h5">Broing Stuff</Typography>
              <List className={styles.list}>
                <ListItem>
                  <ListItemText>About</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Contact</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Term & Condition</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Shipping, Return & Refund Policy</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h5">Connect</Typography>
              <List className={styles.list}>
                <ListItem>
                  <ListItemText>Follow US On Instagram</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Add to Facebook</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Pinterest</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Follow us on Twitter</ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
        <div className={styles.copyRight}>
          All Rights Reserved. © 2020 Woodland World Wide
        </div>
      </footer>
    </>
  );
};
