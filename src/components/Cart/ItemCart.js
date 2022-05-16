import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({ item }) => {
  const { deleteFromCart, addToCart, deleteCart } = useCartContext();

  return (
    <div className="carritoItems">
      <div className="tituloImagen">
        <img
          className="carritoImagen"
          src={item.imagen}
          alt="Imagen de productos de heladeria"
        />
        <h2 className="carritoNombre">{item.nombre}</h2>
      </div>
      <div className="agregarMasyCantidad">
        <p className="cantidadParrafo">{item.quantity}</p>
        <button onClick={() => addToCart(item, 1)}>Agregar mas</button>
      </div>
      <span className="carritoPrecio">{item.precio}$</span>
      <i
        className="ri-close-fill botonEliminarItem"
        onClick={() => deleteFromCart(item)}
      ></i>
      <p className="totalProducto">{item.quantity * item.precio}$</p>
    </div>
  );
};

export default ItemCart;
