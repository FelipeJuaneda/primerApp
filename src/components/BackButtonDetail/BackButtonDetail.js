import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const BackButtonDetail = () => {
  return (
    <Box sx={{ textAlign: "end" }}>
      <Link to={"/items"}>
        <Button
          size="small"
          variant="outlined"
          startIcon={<KeyboardBackspaceIcon />}
        >
          Volver
        </Button>
      </Link>
    </Box>
  );
};

export default BackButtonDetail;
