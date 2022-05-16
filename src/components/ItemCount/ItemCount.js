import { React, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useCartContext } from "../context/CartContext";
import "./ItemCount.css";

const ItemCount = ({ inicial, stock, onAdd, id }) => {
  //estado de contador
  const [qty, setQty] = useState(inicial);
  //funcion contador
  const contadorNum = (num) => {
    setQty(qty + num);
  };

  //contextos de carrito y productos
  const { addToCart } = useCartContext();
  const { products } = useAppContext();

  //funcion para agregar cantidad de productos
  const funcionAgregar = (id, cantidad) => {
    const findProduct = products.find((producto) => producto.id === id);

    if (!findProduct) {
      alert("Error!!");
      return;
    }

    addToCart(findProduct, cantidad);
    onAdd(qty);
  };

  return (
    <div className="contenedorBotones">
      <div className="botonesAumDism">
        {/* //boton disminuir */}
        <button
          className="botonDis"
          onClick={() => contadorNum(-1)}
          disabled={qty === inicial ? true : null}
        >
          -
        </button>

        <b>{qty}</b>
        {/*----- cantidad----- */}

        {/* //boton aumentar */}
        <button
          className="botonAum"
          onClick={() => contadorNum(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      {/* //boton añadir */}
      <div className="botonAñadirCont">
        <button
          className="ctaAñadir"
          onClick={() => funcionAgregar(id, qty)}
          disabled={stock === 0 ? true : null}
        >
          <span className="hover-underline-animationAñadir"> Añadir </span>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
