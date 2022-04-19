import { React, useState } from "react";

const ItemCount = () => {
  const [valor, setValor] = useState(0);

  const aumentar = () => {
    setValor(valor + 1);
  };
  const disminuir = () => {
    setValor(valor - 1);
    if (valor <= 0) {
      console.log("funca");
    }
  };

  return (
    <div>
      <button onClick={disminuir}>-</button>
      <b>{valor}</b>
      <button onClick={aumentar}>+</button>
    </div>
  );
};

export default ItemCount;
