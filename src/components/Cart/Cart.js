import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import "./Cart.css";
import ItemCart from "./ItemCart";

const Cart = () => {
  //cantidad de productos
  const [productsLength, setProductsLength] = useState(0);

  const { total, cart, deleteCart } = useCartContext();

  useEffect(() => {
    setProductsLength(
      cart.reduce((prev, current) => prev + current.quantity, 0)
    );
  }, [cart]);

  return (
    <div className="contenedorCarritoItems">
      <h2 className="tituloCarrito">Carrito</h2>
      {cart.length === 0 ? (
        <div className="contenedorCarritoVacio">
          <p>Tu carrito esta vacio</p>
          <img className="imageCart"
            src="https://pbs.twimg.com/media/EWVoZnkXYAEUrji.jpg"
            alt="Puede darme dinero?"
          />
          <Link to="/items">Volver a Productos</Link>
        </div>
      ) : (
        <div>
          {/* Columna de info cart */}
          <div>
            <div className="columnaInfo">
              <span className="nombreproduct">Nombre del Producto</span>
              <span className="cantproduct">Cantidad</span>
              <span className="precioproduct">Precio por Unidad</span>
              <span className="totalproduct">Total del Producto</span>
            </div>
          </div>

          {/* mapeo del carrito */}
          <div className="carritoConItems">
            {cart.map((item, i) => (
              <ItemCart key={i} item={item} productsLength={productsLength} />
            ))}

            {/* Total Carrito */}
            <p className="totalCompra">
              Total: <span>${total}</span>
            </p>

            {/* Vaciar carrito */}
            <div>
              <button className="vaciarCarrito" onClick={() => deleteCart()}>
                Vaciar Carrito
              </button>
            </div>

            {/* Terminar compra */}
            <Link to={"/checkout"}>Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
