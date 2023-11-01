import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loading from "../components/Loading/Loading";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItemsFromFirestore = async () => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const snapshot = await getDocs(itemsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const fetchProductsFromFirestore = async () => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const featuredProductsData = await fetchItemsFromFirestore();
        const productsData = await fetchProductsFromFirestore();
        setFeaturedProducts(featuredProductsData);
        setProducts(productsData);
      } catch (error) {
        alert("Error al recuperar datos de Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ featuredProducts, products }}>
      {loading ? <Loading /> : children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
