import { React, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useCartContext } from "../context/CartContext";
import swal from "sweetalert";
import "./ItemCount.css";

const ItemCount = ({ inicial, stock, onAdd, id, saboresElegidos, limiteSabor }) => {
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
    //si no hay sabores elegidos:
    if (saboresElegidos.length === 0) {
      swal({
        title: "Debes agregar sabores Primero!",
        text: "Click en la imagen para Detalles",
        icon: "warning",
        timer: "4500",
      });
      return
    }
    
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
