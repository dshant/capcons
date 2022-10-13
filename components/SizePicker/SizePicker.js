import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./sizePicker.module.css";

export const SizePicker = () => {
  return (
    <>
      <div className={`mt-3 ${styles.sizeDiv}`}>
        <div className="d-flex justify-content-between py-3">
          <h5>SIZE</h5>
          <Link href="">SIZE GUIDE</Link>
        </div>
        <div className="d-flex flex-wrap gap-3">
          <Button variant="outline">37</Button>
          <Button variant="outline">38</Button>
          <Button variant="outline">39</Button>
          <Button variant="outline">40</Button>
          <Button variant="outline">41</Button>
          <Button variant="outline">42</Button>
          <Button variant="outline">43</Button>
          <Button variant="outline">44</Button>
        </div>
      </div>
    </>
  );
};
