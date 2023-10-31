import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Categories = () => {
  const categories = [
    { name: "Palitos", to: "/items/palito" },
    { name: "Tortas Heladas", to: "/items/torta" },
    { name: "Alfajores", to: "/items/alfajor" },
  ];

  return (
    <Box
      component="div"
      sx={{
        display: "grid",
        gap: "10px",
      }}
      className="categoriasCont"
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "var(--fuente-nav)",
          letterSpacing: "2px",
          color: "var(--color-verdeTransparente)",
        }}
        className="tituloCategorias"
      >
        Categorías
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          height: "55px",
          width: "100%",
          backgroundColor: "secondary.main",
        }}
        className="categoriaItems"
      >
        {categories.map((e) => (
          <Box
            sx={{
              color: "text.primary",
            }}
            style={({ isActive, isPending }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
                textUnderlinePosition: isActive ? "under" : "",
                fontSize: "18px",
              };
            }}
            component={NavLink}
            key={e.name}
            to={e.to}
          >
            <Typography
              component="span"
              sx={{
                color: "text.primary",
                textDecoration: "none",
                fontSize: "17px",
                fontFamily: "monospace",
                transition: "all 0.5s",
              }}
            >
              {e.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
