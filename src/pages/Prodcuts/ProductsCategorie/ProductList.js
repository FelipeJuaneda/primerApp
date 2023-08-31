import Products from "./Products";
import "./Products.css";
const ProductList = ({ productos }) => {
  //mapeo los productos
  return (
    <>
      {productos.map((product) => {
        return (
          <Products
            key={product.id}
            nombre={product.nombre}
            imagen={product.imagen}
            precio={product.precio}
            stock={product.stock}
            id={product.id}
            descripcion={product.descripcion}
          />
        );
      })}
    </>
  );
};

export default ProductList;
