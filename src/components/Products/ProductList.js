import GifReload from "../images/heladoGif.gif";
import Products from "./Products";
import "./Products.css";
const ProductList = ({ productos }) => {
  //mapeo los productos
  return (
    <>
      {productos.map((product) => {
        return (
          <div key={product.id}>
            <Products
              nombre={product.nombre}
              imagen={product.imagen}
              precio={product.precio}
              stock={product.stock}
              id={product.id}
              descripcion={product.descripcion}
            />
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
