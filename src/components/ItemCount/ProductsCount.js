import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useCartContext } from "../context/CartContext";
import "./ProductsCount.css"

const ProductsCount = ({ stock, onAdd, inicial, id }) => {
  //estado de contador
  const [qty, setQty] = useState(inicial);
  //funcion contador
  const contadorNum = (num) => {
    setQty(qty + num);
  };
  //contextos de carrito y productos
  const { addToCart } = useCartContext();
  const { productos } = useAppContext();
  //funcion para agregar cantidad de productos
  const funcionAgregar = (id, cantidad) => {
    const findProducto = productos.find((producto) => producto.id === id);
    //si no hay sabores elegidos:
    if (!findProducto) {
      alert("Error!!");
      return;
    }
    addToCart(findProducto, cantidad);
    onAdd(qty);
  };
  return (
    <div className="botonesProdDetail">
      <div className="contenedorBotonesProd">
        <div className="botonesAumDismProd">
          {/* //boton disminuir */}
          <button
            className="botonDisProd"
            onClick={() => contadorNum(-1)}
            disabled={qty === inicial ? true : null}
          >
            -
          </button>

          {/*----- cantidad----- */}
          <b>{qty}</b>

          {/* //boton aumentar */}
          <button
            className="botonAumProd"
            onClick={() => contadorNum(+1)}
            disabled={qty === stock ? true : null}
          >
            +
          </button>
        </div>

        {/* //boton añadir */}
        <div className="botonAñadirContProd">
          <button
            className="ctaAñadirProd"
            onClick={() => funcionAgregar(id, qty)}
            disabled={stock === 0 ? true : null}
          >
            <span className="hover-underline-animationAñadirProd">
              {" "}
              Añadir{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCount;
