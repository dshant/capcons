import React from "react";
import styles from "./review.module.css";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Container, Grid, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const ReviewSection = (props) => {
  return (
    <>
      <section className={` ${styles.reviewSection}`}>
        <Container>
          <Typography variant="h3" textAlign="center" marginBottom={3}>
            CUSTOMER REVIEWS
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={8} marginX="auto">
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <div className={styles.wrapper}>
                    <Typography variant="h3" marginBottom={2}>
                      98%
                    </Typography>
                    <Typography marginBottom={2}>
                      Recommend this product
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      marginBottom={2}
                    >
                      <Stack direction="row" spacing={1}>
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStar />
                        <BsStar />
                      </Stack>
                      <span>65 Reviews</span>
                    </Stack>
                    <Button variant="outlined" color="inherit">
                      Write a Review
                    </Button>
                  </div>
                </Grid>
                <Grid item md={6}>
                  <div
                    className={` ${styles.wrapper}`}
                    style={{ display: "block " }}
                  >
                    <Typography marginBottom={2}>RATED BY CUSTOMERS</Typography>

                    <div className={styles.progressRating}>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        marginBottom={1}
                      >
                        <span>5.0</span>
                        <div className={styles.progressBar}>
                          <div
                            className={styles.progressItem}
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        marginBottom={1}
                      >
                        {" "}
                        <span>4.0</span>
                        <div className={styles.progressBar}>
                          <div
                            className={styles.progressItem}
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        marginBottom={1}
                      >
                        <span>3.0</span>
                        <div className={styles.progressBar}>
                          <div
                            className={styles.progressItem}
                            style={{ width: "30%" }}
                          ></div>
                        </div>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        marginBottom={1}
                      >
                        <span>2.0</span>
                        <div className={styles.progressBar}>
                          <div
                            className={styles.progressItem}
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        marginBottom={1}
                      >
                        <span>1.0</span>
                        <div className={styles.progressBar}>
                          <div
                            className={styles.progressItem}
                            style={{ width: "10%" }}
                          ></div>
                        </div>
                      </Stack>
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
