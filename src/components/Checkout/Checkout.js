import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useCartContext } from "../../context/CartContext";
import swal from "sweetalert";
import "./Checkout.css";

const Checkout = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { total, cart } = useCartContext();

  const saveData = async (data) => {
    const cartResumida = cart.map(
      ({ id, nombre, quantity, precio, saboresElegidos }) => ({
        id,
        nombre,
        quantity,
        precio,
        saboresElegidos,
      })
    );

    const user = {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
      telefono: data.telefono,
      direccion: data.direccion,
    };

    const cartToSave = {
      user: user,
      cart: cartResumida, // Use cartResumida instead of the original cart
      total: total,
    };

    try {
      const db = getFirestore();
      const cartCollection = collection(db, "cart");
      const docRef = await addDoc(cartCollection, cartToSave);

      swal({
        title: "Pedido Tomado!",
        text: `Muchas gracias ${data.nombre} por su compra! Se ha enviado a su Email: ${data.email} el ticket con la orden de su compra "${docRef.id}"`,
        icon: "success",
      });
    } catch (error) {
      console.error("Error al guardar en Firestore", error);
    }
  };

  return (
    <div className="checkoutContainer">
      <div className="formularioResumenCont">
        <form className="formularioCheckout" onSubmit={handleSubmit(saveData)}>
          <h2>Datos de Envío</h2>
          <div className="nombreApellido">
            <div className="contNombre">
              <input
                className="nombreInput"
                type="text"
                placeholder="Nombre"
                {...register("nombre", {
                  required: "Nombre requerido",
                })}
              />
              {errors.nombre && (
                <p className="nombreReq">{errors.nombre.message}</p>
              )}
            </div>
            <div className="contApellido">
              <input
                className="apellidoInput"
                type="text"
                placeholder="Apellido"
                {...register("apellido", {
                  required: "Apellido requerido",
                })}
              />
              {errors.apellido && (
                <p className="apellidoReq">{errors.apellido.message}</p>
              )}
            </div>
          </div>
          <div className="emailCont">
            <input
              className="emailInput"
              type="text"
              placeholder="Email"
              {...register("email", {
                pattern: {
                  value:
                    // eslint-disable-next-line
                    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Formato de Email incorrecto",
                },
                required: "Email requerido",
              })}
            />
            {errors.email && <p className="emailReq">{errors.email.message}</p>}
          </div>
          <div className="numeroDireccion">
            <div className="numeroCont">
              <input
                className="numeroInput"
                type="number"
                placeholder="Numero de telefono"
                {...register("telefono", {
                  required: "Número de teléfono requerido",
                })}
              />
            </div>
            <div className="direcCont">
              <input
                className="direcInput"
                type="text"
                placeholder="Direccion"
                {...register("direccion", {
                  required: "Dirección requerida",
                })}
              />
            </div>
          </div>

          <button className="ctaCkeckout" type="submit">
            <span className="hover-underline-animationCheckout">Enviar</span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              />
            </svg>
          </button>
        </form>

        <div className="resumenInfo">
          <span className="tituloResumen">Resumen</span>
          {cart.map((item) => (
            <div key={item.id} className="nombreCantidad">
              <p>
                <span className="nombreResumen">
                  {item.nombre} X{item.quantity}
                </span>
              </p>
              <p>Subtotal: {item.precio * item.quantity}$</p>
            </div>
          ))}
          <p className="totalContResumen">
            <span className="totalResumen">Total:</span> {total}$
          </p>
        </div>
      </div>

      <div className="contenedorImgCheck"></div>
    </div>
  );
};

export default Checkout;
