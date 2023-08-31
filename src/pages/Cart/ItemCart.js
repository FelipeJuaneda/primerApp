import React from "react";
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ item }) => {
  const { deleteFromCart, addToCart } = useCartContext();

  //si la cantidad es 0 se elimina el producto
  if (item.quantity === 0) {
    deleteFromCart(item);
  }

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
        <i onClick={() => addToCart(item, -1)} className="ri-subtract-line"></i>
        <p className="cantidadParrafo">{item.quantity}</p>
        <i onClick={() => addToCart(item, 1)} className="ri-add-line"></i>
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
