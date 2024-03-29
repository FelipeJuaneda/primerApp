import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useCartContext();

  return (
    <div className="contenedorCarrito">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          className="colorCarrito"
          d="M6 9h13.938l.5-2H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1V4H2V2h3a1 1 0 0 1 1 1v6zm0 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        />
      </svg>
      <p className="contadorProductoCarrito">{cart.length}</p>
    </div>
  );
};

export default CartWidget;
