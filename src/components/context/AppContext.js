import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

//creo el contexto
const AppContext = createContext();
//lo identifico y exporto para usarlo
export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  //array con los productos
  const [products, setProducts] = useState([]);
  const [productos, setProductos] = useState([]);

  //seteo el item en el array
  useEffect(() => {
    const db = getFirestore();
    const itemsCollect = collection(db, "items");
    getDocs(itemsCollect).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    const productCollect = collection(db, "products");
    getDocs(productCollect).then((snapshot) => {
      setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <AppContext.Provider value={{ products, productos }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
