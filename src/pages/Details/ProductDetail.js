import React, { useState } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import SaboresContainer from "../../components/Sabores/SaboresContainer";
import BackButtonDetail from "../../components/BackButtonDetail/BackButtonDetail";
import FinishBuy from "../../components/FinishBuy/FinishBuy";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import swal from "sweetalert";

const ProductDetail = ({ prod }) => {
  const [finishBuying, setFinishBuying] = useState(false);
  const [saborElegido, setSaborElegido] = useState([]);
  const onAdd = (qty) => {
    if (prod.saboresElegidos && saborElegido.length === 0) {
      swal({
        title: "Debes agregar sabores primero!",
        text: "seeeeeeeeeeoighjsíg",
        icon: "warning",
        timer: "4500",
      });
      return;
    }
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
      <Container maxWidth="xxl">
        <BackButtonDetail />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Grid
            sx={{
              height: { xs: "100%", md: "420px" },
            }}
            container
            columns={12}
          >
            <Grid item xs={12} md={6}>
              <Box
                component={"img"}
                src={prod.imagen}
                sx={{ width: { xs: "140px", sm: "200px", md: "270px" } }}
                alt="Productos de heladeria"
                className="imgProduct"
              />
              <Typography
                variant="h1"
                sx={{ fontSize: "25px" }}
                className="productName"
              >
                {prod.nombre}
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: "20px" }}
                className="productDescrip"
              >
                {prod.descripcion}
              </Typography>
              <Typography component="span" className="priceProduct">
                Precio: {prod.precio}$
              </Typography>
            </Grid>

            {/* <Divider
            variant="middle"
            // orientation={{ xs: "horizontal", md: "vertical" }}
          /> */}
            <Grid
              item
              sx={{
                height: "100%",
                overflow: "auto",
              }}
              xs={12}
              md={6}
            >
              {prod.saboresElegidos && (
                <SaboresContainer
                  setSaborElegido={setSaborElegido}
                  saborElegido={saborElegido}
                  finishBuying={finishBuying}
                  {...prod}
                />
              )}
            </Grid>
          </Grid>
          {finishBuying ? (
            <FinishBuy />
          ) : (
            <ItemCount
              {...prod}
              product={prod}
              inicial={1}
              onAdd={onAdd}
              saborElegido={saborElegido}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetail;
