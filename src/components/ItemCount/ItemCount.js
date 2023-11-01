import { React, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import swal from "sweetalert";
import { Box, Typography } from "@mui/material";

const ItemCount = ({ inicial, stock, onAdd, id, product, saboresElegidos }) => {
  const [qty, setQty] = useState(inicial);
  const contadorNum = (num) => {
    setQty(qty + num);
  };
  const { addToCart } = useCartContext();
  const funcionAgregar = (id, cantidad) => {
    if (saboresElegidos) {
      swal({
        title: "Debes agregar sabores Primero!",
        text: "Click en la imagen para Detalles",
        icon: "warning",
        timer: "4500",
      });
      return;
    }
    onAdd(qty);
    addToCart(product, cantidad, id);
  };
  return (
    <Box sx={{ display: "grid", gap: "10px" }} className="contenedorBotones">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          bottom: "75px",
        }}
        className="botonesAumDism"
      >
        {/* //boton disminuir */}
        <Box
          sx={{
            padding: "5px 17px",
            backgroundColor: "primary.main",
            color: "#000",
            borderStyle: "none",
            cursor: "pointer",
          }}
          component={"button"}
          className="botonDis"
          onClick={() => contadorNum(-1)}
          disabled={qty === inicial ? true : null}
        >
          -
        </Box>

        {/*----- cantidad----- */}
        <Typography component={"b"}>{qty}</Typography>

        {/* //boton aumentar */}
        <Box
          component={"button"}
          sx={{
            padding: "5px 17px",
            backgroundColor: "primary.main",
            color: "#000",
            borderStyle: "none",
            cursor: "pointer",
          }}
          className="botonAum"
          onClick={() => contadorNum(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </Box>
      </Box>

      {/* //boton añadir */}
      <Box
        sx={{
          position: "relative",
          height: "65px",
          display: "flex",
          backgroundColor: "primary.main",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="botonAñadirCont"
      >
        <Box
          sx={{
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          component={"button"}
          className="ctaAñadir"
          onClick={() => funcionAgregar(id, qty)}
          disabled={stock === 0 ? true : null}
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
            className="hover-underline-animationAñadir"
          >
            Añadir
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemCount;
