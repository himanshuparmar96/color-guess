import { Box, Button } from "@mui/material";
import React from "react";

const ColorButtons = ({ validate, optionaColor }) => {
  return (
    <div style={{ flexGrow: 1, height: "1px" }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        {optionaColor.map((randomColor, index) => {
          return (
            <Button
              variant="outlined"
              fullWidth
              // sx={{ height: "100%" }}
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

export default ColorButtons;
