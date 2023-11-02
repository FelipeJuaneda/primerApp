import React, { useState } from "react";
import SaboresList from "./SaboresList";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const SaboresContainer = ({
  saboresElegidos,
  limiteSabor,
  setSaborElegido,
  saborElegido,
  finishBuying,
  descripcion,
}) => {
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        textAlign: "start",
      }}
      className="saboresContainer"
    >
      <Accordion
        sx={{
          backgroundColor: "secondary.main",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {descripcion}
        </AccordionSummary>
        <AccordionDetails>
          <SaboresList
            saboresElegidos={saboresElegidos}
            limiteSabor={limiteSabor}
            setSaborElegido={setSaborElegido}
            saborElegido={saborElegido}
            finishBuying={finishBuying}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SaboresContainer;
