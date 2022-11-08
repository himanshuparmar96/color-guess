import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

export const Timer = ({ timer }) => {
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
        {timer}
      </Box>
    </div>
  );
};
