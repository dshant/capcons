import React from "react";
import { ProgressBar } from "react-bootstrap";
import styles from "./review.module.css";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Container, Grid, Button } from "@mui/material";

export const ReviewSection = () => {
  return (
    <>
      <section className={`py-3 ${styles.reviewSection}`}>
        <Container>
          <h3 className="text-center mb-4">CUSTOMER REVIEWS</h3>
          <Grid container spacing={2}>
            <Grid item md={8} className="mx-auto">
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <div className={styles.wrapper}>
                    <h3>98%</h3>
                    <p>Recommend this product</p>
                    <div className="d-flex gap-3 align-items-center mb-3">
                      <div className="d-flex gap-1">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStar />
                        <BsStar />
                      </div>
                      <span>65 Reviews</span>
                    </div>
                    <Button className="mb-2" variant="outlined" color='inherit'>
                      Write a Review
                    </Button>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div className={`d-block ${styles.wrapper}`}>
                    <p>RATED BY CUSTOMERS</p>

                    <div className={styles.progressRating}>
                      <div className="d-flex gap-3 align-items-center mb-1">
                        <span>5.0</span>
                        <ProgressBar now={80} />
                      </div>
                      <div className="d-flex gap-3 align-items-center mb-1">
                        <span>4.0</span>
                        <ProgressBar now={80} />
                      </div>
                      <div className="d-flex gap-3 align-items-center mb-1">
                        <span>3.0</span>
                        <ProgressBar now={40} />
                      </div>
                      <div className="d-flex gap-3 align-items-center mb-1">
                        <span>2.0</span>
                        <ProgressBar now={20} />
                      </div>
                      <div className="d-flex gap-3 align-items-center mb-1">
                        <span>1.0</span>
                        <ProgressBar now={10} />
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};
