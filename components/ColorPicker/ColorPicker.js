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
        <h4>COLOR</h4>
        <div className="d-flex gap-3">
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
        </div>
      </div>
    </>
  );
};
