import React from "react";
import styles from "./colorPicker.module.css";

export const ColorPicker = () => {
  return (
    <>
      <div className={styles.colorDiv}>
        <h4>COLOR</h4>
        <div className="d-flex gap-3">
          <div className={styles.option}>
            <img src="/images/shoe.png" alt="shoe" />
          </div>
          <div className={styles.option}>
            <img src="/images/shoe.png" alt="shoe" />
          </div>
          <div className={styles.option}>
            <img src="/images/shoe.png" alt="shoe" />
          </div>
          <div className={styles.option}>
            <img src="/images/shoe.png" alt="shoe" />
          </div>
        </div>
      </div>
    </>
  );
};
