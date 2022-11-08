import { Box } from "@mui/system";
import React from "react";

export const Timer = ({ timer }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          margin: 5,
          border: "1px solid green",
          height: 50,
          width: 200,
          backgroundColor: "grey",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Time Left:{timer}
      </Box>
    </div>
  );
};
