import React from "react";
import Grid from '@mui/material/Grid';
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footerSection}>
        <Grid container>
          <Grid xs={3} pl={8}>
            <h3>LOGO</h3>
            <p>Lorem ipsum dolor sit amet, doming quaeque an mea gravida.</p>
          </Grid>
          <Grid xs={3} pl={8}>
            <h5>Shop by</h5>
            <ul className={styles.list}>
              <li>All</li>
              <li>Footwear</li>
              <li>Apparels</li>
              <li>Accessories</li>
            </ul>
          </Grid>
          <Grid xs={3}>
            <h5>Broing Stuff</h5>
            <ul className={styles.list}>
              <li>About</li>
              <li>Contact</li>
              <li>Term & Condition</li>
              <li>Shipping, Return & Refund Policy</li>
            </ul>
          </Grid>
          <Grid xs={3}>
            <h5>Connect</h5>
            <ul className={styles.list}>
              <li>Follow US On Instagram</li>
              <li>Add to Facebook</li>
              <li>Pinterest</li>
              <li>Follow us on Twitter</li>
            </ul>
          </Grid>
        </Grid>
        <div className={styles.copyRight}>
          All Rights Reserved. © 2020 Woodland World Wide
        </div>
      </footer>
    </>
  );
};
