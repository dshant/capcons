import Link from "next/link";
import React from "react";
import styles from "./sizePicker.module.css";
import { Button, Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const SizePicker = () => {
  return (
    <>
      <div className={`mt-3 ${styles.sizeDiv}`}>
        <Stack direction="row" justifyContent="space-between" paddingY={2}>
          <Typography variant="h5">SIZE</Typography>
          <Link href="">SIZE GUIDE</Link>
        </Stack>
        <Box sx={{ flexWrap: "wrap" }} display="flex" gap={3}>
          <Button variant="outline">37</Button>
          <Button variant="outline">38</Button>
          <Button variant="outline">39</Button>
          <Button variant="outline">40</Button>
          <Button variant="outline">41</Button>
          <Button variant="outline">42</Button>
          <Button variant="outline">43</Button>
          <Button variant="outline">44</Button>
        </Box>
      </div>
    </>
  );
};
