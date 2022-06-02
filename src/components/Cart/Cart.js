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
          <img
            className="imageCart"
            src="https://pbs.twimg.com/media/EWVoZnkXYAEUrji.jpg"
            alt="Puede darme dinero?"
          />
          <Link className="volverAtrasCarrito" to="/items">
            <svg
              className="svgVolver"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 1024 1024"
            >
              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
            </svg>
            <span>Volver</span>
          </Link>
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
