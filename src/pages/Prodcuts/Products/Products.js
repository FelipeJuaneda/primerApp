import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ItemCount from "../../../components/ItemCount/ItemCount";

const Products = ({ id, imagen, nombre, precio, stock, product }) => {
  const onAdd = (qty) => {};
  return (
    <Box
      component="div"
      sx={{
        padding: "9px 20px 9px 20px",
        backgroundColor: "primary.main",
        width: "290px",
        height: "395px",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px 10px 0 0",
        position: "relative",
      }}
    >
      <Link to={`/product/${id}`}>
        <Box
          component={"img"}
          src={imagen}
          alt={"productos de heladeria artesanal"}
          className="imageProduct"
          sx={{
            width: "220px",
            height: "220px",
            objectFit: "cover",
            filter: "drop-shadow(0px 9px 13px rgba(0, 0, 0, 0.5))",
            transition: "all 0.3s",
            "&:hover": {
              transform: "translateY(-4px)",
              filter: "drop-shadow(0px 0px 13px rgba(0, 0, 0, 0.5)",
            },
          }}
        />
      </Link>

      <Typography
        sx={{
          fontSize: "17px",
          paddingTop: "13px",
          fontFamily: "fontFamily.nav",
        }}
        component="h2"
        className="productName"
      >
        {nombre}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexFlow: "column",
          paddingTop: "13px",
          gap: "15px",
        }}
        className="precioAñadir"
      >
        <Typography
          sx={{
            fontSize: "17.3px",
            textDecoration: "underline",
            textUnderlinePosition: "under",
          }}
          component={"span"}
          className="priceProduct"
        >
          {precio}$
        </Typography>
        <div>
          <ItemCount
            product={product}
            stock={stock}
            inicial={1}
            onAdd={onAdd}
            id={id}
          />
        </div>
      </Box>
    </Box>
  );
};

export default Products;
