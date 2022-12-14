import styled from "@emotion/styled";
import { Box, Modal, Typography } from "@mui/material";
import _ from "lodash";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "./App.css";
import { getRandomColor } from "./utils/getRandomColor";
import { Score } from "./components/Score";
import { Timer } from "./components/Timer";
import { TOTAL_BUTTONS } from "./const";
import { ColorButtons } from "./components/ColorButtons";

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

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;

    default:
      return state;
  }
};
function App() {
  // const interval=useRef()

  const [timer, dispatchTimer] = useReducer(reducer, 10);
  const [intervalTimer, setIntervalTimer] = useState(null);

  const onTimeUpdated = useCallback(() => {
    // console.log({ timer });

    if (timer === 0) {
      clearInterval(intervalTimer);
      // setTimer(0);
    } else {
      dispatchTimer({ type: "decrement" });
    }
    // console.count("setInterval");
  }, [timer, intervalTimer]);

  useEffect(() => {
    reGenerate();
    // const counter = 10;
    const interval = setInterval(onTimeUpdated, 1000);
    setIntervalTimer(interval);

    return () => clearInterval(intervalTimer);
  }, []);

  const [color, setColor] = useState();
  const [optionaColor, setoptionalcolor] = useState([]);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [score, setScore] = useState(0);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      // setScore(0);
      return;
    }

    setOpen(false);
  };

  function reGenerate() {
    const arr = [];
    for (let i = 0; i < TOTAL_BUTTONS; i++) {
      arr.push(getRandomColor());
    }
    setoptionalcolor(arr);
    const ind = _.random(0, TOTAL_BUTTONS - 1);
    setColor(arr[ind]);
  }

  function validate(random) {
    setOpen(false);
    if (random === color) {
      setScore((score) => score + 1);
      reGenerate();
      notify("success");
    } else {
      setSeverity("error");
      setScore((score) => score - 0.5);
      notify("error");
    }
    setOpen(true);
  }
  const notify = (status) => {
    console.log(status);
    status === "success"
      ? toast.success("Correct!")
      : toast.error("Incorrect!");
  };

  // console.log(color);
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
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
          backgroundColor: color,
          flexGrow: 1,
        }}
      >
        <Score score={score} timer={timer} />
        <Timer timer={timer} />
      </Box>

      <ColorButtons
        colour={color}
        validate={validate}
        optionaColor={optionaColor}
      />
      <ToastContainer autoClose={2000} limit={2} position="top-center" />
    </div>
  );
}

// export default App;
export default styled(App)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
