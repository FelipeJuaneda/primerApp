import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FinishBuy = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "65px",
        display: "flex",
        backgroundColor: "primary.main",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="contTerminarCompra"
    >
      <Box
        sx={{
          border: "none",
          background: "none",
          cursor: "pointer",
          textDecoration: "none",
        }}
        component={Link}
        className="botonTerminarCompra"
        to="/cart"
      >
        <Typography
          sx={{
            letterSpacing: "3px",
            fontSize: "17px",
            textTransform: "uppercase",
            fontFamily: "fontFamily.nav",
            color: "whiteMod.main",
            transition: "color 0.4s",
            "&:hover": {
              color: "secondary.main",
              "&::after": {
                transform: "scaleX(1)",
                transformOrigin: "bottom left",
              },
            },
            "::after": {
              content: "''",
              position: "absolute",
              width: "100%",
              transform: "scaleX(0)",
              height: "3px",
              bottom: 0,
              left: 0,
              backgroundColor: "secondary.main",
              transformOrigin: "bottom right",
              transition: "transform 0.25s ease-out",
            },
          }}
          component="span"
          className="hover-underline-animationTerminar"
        >
          Terminar Compra
        </Typography>
      </Box>
    </Box>
  );
};

export default FinishBuy;
