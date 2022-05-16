import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import "./Cart.css";
import ItemCart from "./ItemCart";

const Cart = () => {
  const [productsLength, setProductsLength] = useState(0);

  const { cart, deleteCart } = useCartContext();
  console.log(cart);

  useEffect(() => {
    setProductsLength(
      cart.reduce((prev, current) => prev + current.quantity, 0)
    );
  }, [cart]);

  const total = cart.reduce(
    (prev, current) => prev + current.quantity * current.precio,
    0
  );

  return (
    <div className="contenedorCarritoItems">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <div className="contenedorCarritoVacio">
          <p>Tu carrito esta vacio</p>
          <img
            src="https://pbs.twimg.com/media/EWVoZnkXYAEUrji.jpg"
            alt="Puede darme dinero?"
          />
          <Link to="/">Volver a Productos</Link>
        </div>
      ) : (
        <div>
          <div>
            <div className="columnaInfo">
              <span className="nombreproduct">Nombre del Producto</span>
              <span className="cantproduct">Cantidad</span>
              <span className="precioproduct">Precio por Unidad</span>
              <span className="totalproduct">Total del Producto</span>
            </div>
          </div>
          <div className="carritoConItems">
            {cart.map((item, i) => (
              <ItemCart key={i} item={item} />
            ))}
            <p className="totalCompra">
              Total: <span>${total}</span>
            </p>
            <button className="vaciarCarrito" onClick={() => deleteCart()}>
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
