import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import styles from "./colorPicker.module.css";

// const colors = [

// ];

export const ColorPicker = ({
  selectedColor,
  setSelectedColor,
  colorsArray,
}) => {
  return (
    <>
      <div className={styles.colorDiv}>
        <Typography variant="h4">COLOR</Typography>
        <Stack direction="row" spacing={2}>
          {colorsArray?.map((color) => (
            <div
              className={`${styles.option} ${
                selectedColor?.id === color.id ? styles.active : ""
              }`}
              key={color?.id}
              onClick={() => setSelectedColor(color)}
            >
              <img src={color?.colorImage} alt="shoe" />
            </div>
          ))}
        </Stack>
      </div>
    </>
  );
};
