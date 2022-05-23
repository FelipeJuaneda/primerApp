import React, { useEffect, useState } from "react";
import { getSaboresData } from "../../data/getSabores";
import { useAppContext } from "../context/AppContext";
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
    console.log(saboresElegidos);
    //si la cantidad de sabores llega a 4=
    if (saboresElegidos.length > 4) {
      alert("Limite de sabores superado");
    }
    if (!findSabor) {
      alert("Error!!");
      return;
    }
  };

  const findTipoCrema = sabores.filter((sabor) => sabor.tipo === "crema");
  const findTipoAgua = sabores.filter((sabor) => sabor.tipo === "agua");

  return (
    <>
      <div className="saboresCrema">
        <h2>Crema</h2>
        {findTipoCrema.map((sabor) => {
          return (
            <div onClick={() => funcionAgregarSabor(sabor.id)} key={sabor.id}>
              <p>{sabor.nombre}</p>
            </div>
          );
        })}
      </div>
      <div className="saboresAgua">
        <h2>Agua</h2>
        {findTipoAgua.map((sabor) => {
          return (
            <div onClick={() => funcionAgregarSabor(sabor.id)} key={sabor.id}>
              <p>{sabor.nombre}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SaboresList;
