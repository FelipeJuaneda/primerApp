import { React, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import "./ItemCount.css";
import swal from "sweetalert";

const ItemCount = ({ inicial, stock, onAdd, id, product, saboresElegidos }) => {
  const [qty, setQty] = useState(inicial);
  const contadorNum = (num) => {
    setQty(qty + num);
  };

  //contextos de carrito y productos
  const { addToCart } = useCartContext();

  //funcion para agregar cantidad de productos
  const funcionAgregar = (id, cantidad) => {
    if (saboresElegidos && saboresElegidos.length === 0) {
      swal({
        title: "Debes agregar sabores Primero!",
        text: "Click en la imagen para Detalles",
        icon: "warning",
        timer: "4500",
      });
      return;
    }
    onAdd(qty);
    addToCart(product, cantidad, id);
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

        {/*----- cantidad----- */}
        <b>{qty}</b>

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
