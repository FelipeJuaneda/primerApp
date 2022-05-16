import React, { useEffect, useState } from "react";
import { getSaboresData } from "../../data/getSabores";
import { useCartContext } from "../context/CartContext";
import Sabores from "./Sabores";
import "./Sabores.css";

const SaboresList = () => {
  const [sabores, setSabores] = useState([]);

  useEffect(() => {
    getSaboresData(setSabores);
  }, []);

  const { addSaborToCart } = useCartContext();

  const funcionAgregarSabor = (id) => {
    const findProduct = sabores.find((sabor) => sabor.id === id);

    if (!findProduct) {
      alert("Error!!");
      return;
    }

    addSaborToCart(findProduct);
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
