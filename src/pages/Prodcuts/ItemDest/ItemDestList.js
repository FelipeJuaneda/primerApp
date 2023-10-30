import Loading from "../../../components/Loading/Loading";
import ItemDest from "./ItemDest";

const ItemDestList = ({ products }) => {
  return (
    <>
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <ItemDest
                  nombre={product.nombre}
                  imagen={product.imagen}
                  precio={product.precio}
                  stock={product.stock}
                  id={product.id}
                  descripcion={product.descripcion}
                  saboresElegidos={product.saboresElegidos}
                />
              </div>
            );
          })}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ItemDestList;
