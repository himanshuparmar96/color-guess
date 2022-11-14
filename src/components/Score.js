import { Box } from "@mui/system";
import React from "react";

export const Score = (props) => {
  // const [color, setColor] = useState();
  // const [optionaColor, setoptionalcolor] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [severity, setSeverity] = useState("error");
  // const [score, setScore] = useState(0);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          margin: 5,
          border: "1px solid green",
          height: 50,
          width: 200,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        Score: {props.score}
      </Box>
    </div>
  );
};
