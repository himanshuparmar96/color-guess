import { Box, Button } from "@mui/material";
import React from "react";

export const ColorButton = ({ validate, optionaColor }) => {
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
