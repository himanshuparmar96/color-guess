import { Alert, Box, Button, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import _ from "lodash";
// function getRandomColor() {
//   const base = "0123456789abcdef";
//   let output = "";
//   for (let i = 0; i < 6; i++) {
//     const index = _.random(0, base.length - 1);
//     output += base[index];
//   }
//   return `#${output}`;
// }
// const TOTAL_BUTTONS = 5;

export const ColorButton = ({ validate, optionaColor }) => {
  console.log(validate);
  // const [optionaColor, setoptionalcolor] = useState([]);
  // const [color, setColor] = useState();

  // const [open, setOpen] = useState(false);
  // const [severity, setSeverity] = useState("error");
  // const [score, setScore] = useState(0);

  // useEffect(() => {
  //   const arr = [];
  //   for (let i = 0; i < TOTAL_BUTTONS; i++) {
  //     arr.push(getRandomColor());
  //   }
  //   setoptionalcolor(arr);
  //   const ind = _.random(0, TOTAL_BUTTONS - 1);
  //   setColor(arr[ind]);
  // }, [score]);

  // function validate(random) {
  //   setOpen(false);
  //   if (random === props.colour) {
  //     setSeverity("success");
  //     setScore((score) => score + 1);
  //   } else {
  //     setSeverity("error");
  //     setScore((score) => score - 0.5);
  //   }
  //   setOpen(true);
  // }

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  return (
    <div>
      <Box display={"flex"} justifyContent={"space-around"} height={150}>
        {optionaColor.map((randomColor, index) => {
          return (
            <Button
              fullWidth
              variant="contained"
              key={index}
              onClick={() => validate(randomColor)}
            >
              {randomColor}
            </Button>
          );
        })}
      </Box>
    </div>
  );
};
