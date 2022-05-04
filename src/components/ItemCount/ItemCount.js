import { React, useState } from "react";
import "./ItemCount.css";

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
      <div className="botonAñadirCont">
        <button
          className="ctaAñadir"
          onClick={() => onAdd(qty)}
          disabled={stock === 0 ? true : null}
        >
          <span className="hover-underline-animationAñadir"> Añadir </span>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
