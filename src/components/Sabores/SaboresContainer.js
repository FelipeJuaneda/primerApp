import React from "react";
import SaboresList from "./SaboresList";
import { Box } from "@mui/material";

const SaboresContainer = ({
  saboresElegidos,
  limiteSabor,
  setSaborElegido,
  saborElegido,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: "15px", sm: "50px" },
        textAlign: "start",
      }}
      className="saboresContainer"
    >
      <SaboresList
        saboresElegidos={saboresElegidos}
        limiteSabor={limiteSabor}
        setSaborElegido={setSaborElegido}
        saborElegido={saborElegido}
      />
    </Box>
  );
};

export default SaboresContainer;
