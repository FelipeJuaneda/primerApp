import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import "./Items.css";

const ItemListContainer = () => {
  //array vacio de productos
  const [products, setProducts] = useState([]);

  //seteo todos los productos en el array
  useEffect(() => {
    const db = getFirestore();
    const itemsCollect = collection(db, "items");
    getDocs(itemsCollect).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div className="contenedorProductos">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
