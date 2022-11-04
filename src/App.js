import "./App.css";
import { Alert, Box, Button, Snackbar } from "@mui/material";
import _ from "lodash";
import { useEffect, useState } from "react";

function getRandomColor() {
  const base = "0123456789abcdef";
  let output = "";
  for (let i = 0; i < 6; i++) {
    const index = _.random(0, base.length - 1);
    output += base[index];
  }
  return `#${output}`;
}

const TOTAL_BUTTONS = 5;
// const reset = false;
function App() {
  const [color, setColor] = useState();
  const [optionaColor, setoptionalcolor] = useState([]);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [score, setScore] = useState(0);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < TOTAL_BUTTONS; i++) {
      arr.push(getRandomColor());
    }
    setoptionalcolor(arr);
    const ind = _.random(0, TOTAL_BUTTONS - 1);
    setColor(arr[ind]);
  }, [score]);

  function validate(random) {
    setOpen(false);
    if (random === color) {
      setSeverity("success");
      setScore((score) => score + 1);
    } else {
      setSeverity("error");
      setScore((score) => score - 0.5);
    }
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  // console.log(optionaColor);
  return (
    <div>
      <h1>Score: {score}</h1>
      <Box
        sx={{
          height: 300,
          backgroundColor: color,
        }}
      />

      <Box display={"flex"} justifyContent={"space-around"}>
        {optionaColor.map((randomColor, index) => {
          return (
            <Button
              variant="contained"
              key={index}
              onClick={() => validate(randomColor)}
            >
              {randomColor}
            </Button>
          );
        })}
      </Box>
      <Snackbar open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {severity === "success" ? "Correct!!" : "Incorrect guess!"}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
