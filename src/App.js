import { Alert, Box, Modal, Snackbar, Typography } from "@mui/material";
import _ from "lodash";
import { useEffect, useState } from "react";
import "./App.css";
import { ColorButton } from "./colorButton";
import { Score } from "./score";
import { Timer } from "./timer";

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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function App() {
  const [timer, setTimer] = useState();
  useEffect(() => {
    var counter = 10;
    var tt = setInterval(function () {
      startTime();
    }, 1000);

    function startTime() {
      if (counter === 0) {
        setTimer(counter);
        clearInterval(tt);
      } else {
        setTimer(counter--);
      }
    }
  }, []);

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
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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

  console.log(color);
  return (
    <div>
      {timer === 0 ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Times up!!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
              Your score is:{score}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              go to leaderboard!
            </Typography>
          </Box>
        </Modal>
      ) : null}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{
          height: 300,
          backgroundColor: color,
        }}
      >
        <Score score={score} />
        <Timer timer={timer} />
      </Box>

      <ColorButton
        colour={color}
        validate={validate}
        optionaColor={optionaColor}
      />

      <Snackbar open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {severity === "success" ? "Correct!!" : "Incorrect guess!"}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
