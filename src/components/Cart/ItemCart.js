import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({ item }) => {
  const { deleteFromCart, addToCart, deleteCart } = useCartContext();

  return (
  <div className="carritoItems">
      <img className="carritoImagen" src={item.imagen} alt="Imagen de productos de heladeria"/>
      <h2 className="carritoNombre">{item.nombre}</h2>
      <span className="carritoPrecio">{item.precio}$</span>
      <button onClick={()=> addToCart(item, 1)}>Agregar mas</button>
      <button className="botonEliminarItem" onClick={()=> deleteFromCart(item)}>X</button>
      <div>
          {item.quantity}
          <p>Total: {item.quantity * item.precio}</p>
      </div>
  </div>);
};

export default ItemCart;
