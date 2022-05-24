import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import "./Cart.css";
import ItemCart from "./ItemCart";

const Cart = () => {
  //cantidad de productos
  const [productsLength, setProductsLength] = useState(0);

  const { total, cart, deleteCart } = useCartContext();

  const saveCart = () => {
    //usuarios
    const user = {
      name: "feli",
      phone: "jua",
      email: "felipe9@gmail.com",
    };

    //carta sin info irrelevante
    const cartResumida = cart.map(
      ({ id, nombre, quantity, precio, saboresElegidos }) => ({
        id,
        nombre,
        quantity,
        precio,
        saboresElegidos,
      })
    );
    //carta a mandar
    const cartToSave = {
      user: user,
      cart: cartResumida,
      total: total,
    };
    console.log(cartToSave);

    const db = getFirestore();
    const cartCollection = collection(db, "cart");
    addDoc(cartCollection, cartToSave).then((response) =>
      console.log(response.id)
    );
  };

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
            src="https://pbs.twimg.com/media/EWVoZnkXYAEUrji.jpg"
            alt="Puede darme dinero?"
          />
          <Link to="/">Volver a Productos</Link>
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
            <button onClick={saveCart}>Terminar compra!!</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
