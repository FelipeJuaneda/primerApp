import GifReload from "../images/heladoGif.gif";
import ItemDest from "./ItemDest";

const ItemDestList = ({ products }) => {
  //mapeo los productos
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
        <div>
          <img
            className="gifHelado"
            src={GifReload}
            alt="gif de helado reload"
          />
        </div>
      )}
    </>
  );
};

export default ItemDestList;
