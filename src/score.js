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
          margin: 5,
          border: "1px solid green",
          height: 50,
          width: 200,
          backgroundColor: "grey",
        }}
      >
        {props.score}
      </Box>
    </div>
  );
};
