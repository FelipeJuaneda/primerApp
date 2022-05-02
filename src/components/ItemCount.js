import { React, useState } from "react";
import "./styles/Items.css";

const ItemCount = ({ inicial, stock, onAdd }) => {
  const [qty, setQty] = useState(inicial);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="contenedorBotones">
      <div className="botonesAumDism">
        {/* //boton disminuir */}
        <button
          onClick={() => addProduct(-1)}
          disabled={qty === inicial ? true : null}
        >
          -
        </button>

        <b>{qty}</b>
        {/*----- cantidad----- */}

        {/* //boton aumentar */}
        <button
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      {/* //boton añadir */}
      <button
        className="buttonAdd"
        onClick={() => onAdd(qty)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;
