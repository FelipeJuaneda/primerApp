import React from "react";
import SaboresList from "./SaboresList";
import { Box } from "@mui/material";

const SaboresContainer = ({
  saboresElegidos,
  limiteSabor,
  setSaborElegido,
  saborElegido,
  finishBuying,
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
        finishBuying={finishBuying}
      />
    </Box>
  );
};

export default SaboresContainer;
