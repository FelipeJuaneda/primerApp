import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { getSaboresData } from "../../data/getSabores";
import {
  Box,
  Checkbox,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const SaboresList = ({
  saboresElegidos,
  limiteSabor,
  setSaborElegido,
  saborElegido,
}) => {
  const [sabores, setSabores] = useState([]);
  useEffect(() => {
    getSaboresData(setSabores);
  }, []);

  const handleAgregarSabor = (id) => {
    const findSabor = sabores.find((sabor) => sabor.id === id);
    const saborIndex = saborElegido.findIndex((sabb) => sabb.id === id);

    if (saborIndex !== -1) {
      const newSabores = saborElegido.filter((sabb) => sabb.id !== id);
      setSaborElegido(newSabores);
      saboresElegidos = saboresElegidos.filter((sabb) => sabb.id !== id);
      return;
    }
    if (saborElegido.length >= limiteSabor) {
      swal({
        title: "Limite de sabores Alcanzado!",
        text: `Puedes agregar hasta ${limiteSabor} sabores`,
        icon: "warning",
        timer: "3400",
      });
    } else {
      setSaborElegido([...saborElegido, findSabor]);
      saboresElegidos.push(findSabor);
    }
  };

  const renderSabor = (sabor) => {
    const isSelected = saborElegido.some((sabb) => sabb.id === sabor.id);
    return (
      <ListItemButton
        key={sabor.id}
        role={undefined}
        dense
        selected={isSelected}
        onClick={() => handleAgregarSabor(sabor.id)}
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={isSelected}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText id={sabor.id} primary={sabor.nombre} />
      </ListItemButton>
    );
  };

  const renderSaborTipo = (tipo) => (
    <Box className={`sabores${tipo}`}>
      <Typography variant={"span"} sx={{ fontSize: "20px" }}>
        {tipo === "Crema" ? "Crema" : "Agua"}
      </Typography>
      {sabores
        .filter((sabor) => sabor.tipo.toLowerCase() === tipo.toLowerCase())
        .map(renderSabor)}
    </Box>
  );

  return (
    <>
      {renderSaborTipo("Crema")}
      {renderSaborTipo("Agua")}
    </>
  );
};

export default SaboresList;
