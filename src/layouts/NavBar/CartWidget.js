import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const CartWidget = () => {
  const { cart } = useCartContext();

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "10",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5px",
        backgroundColor: "#5c6829d4",
        cursor: "pointer",
      }}
    >
      <ShoppingCartIcon sx={{ color: "#fccc9a" }} />
      <Typography
        sx={{
          textDecoration: "none",
          position: "absolute",
          fontSize: "14px",
          color: "#fccc9a",
          left: "0",
          bottom: "0",
        }}
        component={"span"}
      >
        {cart.length}
      </Typography>
    </Box>
  );
};

export default CartWidget;
