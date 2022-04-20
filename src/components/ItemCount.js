import { React, useState } from "react";

const ItemCount = () => {
  const [valor, setValor] = useState(0);

  const aumentar = () => {
    setValor(valor + 1);
  };
  const disminuir = () => {
    setValor(valor - 1);
  };

  return (
    <div>
      <button onClick={disminuir} disabled={valor === 0}>-</button>
      <b>{valor}</b>
      <button onClick={aumentar}>+</button>
    </div>
  );
};

export default ItemCount;
