import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../../components/ItemCount/ItemCount";
import SaboresContainer from "../../../components/Sabores/SaboresContainer";
import BackButtonDetail from "../../../components/BackButtonDetail/BackButtonDetail";
import { Box, Container, Divider, Typography } from "@mui/material";

const ProductDetail = ({ type, prod }) => {
  const [finishBuying, setFinishBuying] = useState(false);
  const onAdd = (qty) => {
    setFinishBuying(true);
  };

  return (
    <Box
      sx={{
        backgroundColor: "primary.parrafo",

        minHeight: {
          xs: "calc(100vh - 64px)",
          sm: "calc(100vh - 79px)",
          md: "calc(100vh - 89px)",
        },
      }}
      className="itemDetailCont"
    >
      <Container maxWidth={"lg"}>
        <BackButtonDetail />
        <Box sx={{ position: "relative" }} className="itemDetailInfo">
          <Box
            sx={{ width: "140px" }}
            component={"img"}
            className="imgProduct"
            src={prod.imagen}
            alt="Productos de heladeria"
          />
          <Typography
            variant={"h1"}
            sx={{ fontSize: "25px" }}
            className="productName"
          >
            {prod.nombre}
          </Typography>
          <Typography
            variant={"h2"}
            sx={{ fontSize: "20px" }}
            className="productDescrip"
          >
            {prod.descripcion}
          </Typography>
          <Typography component={"span"} className="priceProduct">
            Precio: {prod.precio}$
          </Typography>
        </Box>
        <Divider variant="middle" />
        <div>
          {prod.saboresElegidos && (
            <SaboresContainer
              saboresElegidos={prod.saboresElegidos}
              limiteSabor={prod.limiteSabor}
            />
          )}
        </div>
        <Box>
          {finishBuying ? (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
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
                    fontFamily: "familyFont.nav",
                    color: "whiteMod.main",
                    paddingBottom: "20px",
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
                  {" "}
                  Terminar Compra{" "}
                </Typography>
              </Box>
            </Box>
          ) : (
            <ItemCount
              product={prod}
              stock={prod.stock}
              inicial={1}
              onAdd={onAdd}
              id={prod.id}
              saboresElegidos={prod.saboresElegidos}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetail;
