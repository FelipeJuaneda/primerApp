import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const BackButtonDetail = () => {
  return (
    <Link to={"/items"}>
      <Button variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
        Volver
      </Button>
    </Link>
  );
};

export default BackButtonDetail;
