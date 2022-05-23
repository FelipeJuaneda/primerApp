import React, { useEffect, useState } from "react";
import { getSaboresData } from "../../data/getSabores";
import { useAppContext } from "../context/AppContext";
import Sabores from "./Sabores";
import "./Sabores.css";

const SaboresList = ({ saboresElegidos }) => {
  const [sabores, setSabores] = useState([]);

  useEffect(() => {
    getSaboresData(setSabores);
  }, []);

  const { products } = useAppContext();

  const funcionAgregarSabor = (id) => {
    const findSabor = sabores.find((sabor) => sabor.id === id);
    //pusheo sabores en el array
    saboresElegidos.push(findSabor);
    //si la cantidad de sabores llega a 4=
    if (saboresElegidos.length > 4) {
      alert("Limite de sabores superado");
    }
    if (!findSabor) {
      alert("Error!!");
      return;
    }
  };

  return (
    <>
      {sabores.map((sabor) => {
        return (
          <div onClick={() => funcionAgregarSabor(sabor.id)} key={sabor.id}>
            <Sabores nombre={sabor.nombre} stock={sabor.stock} id={sabor.id} />
          </div>
        );
      })}
    </>
  );
};

export default SaboresList;
