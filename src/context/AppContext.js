import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollect = collection(db, "items");
    getDocs(itemsCollect).then((snapshot) => {
      setFeaturedProducts(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
    const productCollect = collection(db, "products");
    getDocs(productCollect).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <AppContext.Provider value={{ featuredProducts, products }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
