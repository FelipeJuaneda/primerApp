import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppContextProvider from "./context/AppContext";
import CartContextProvider from "./context/CartContext";
import NavBar from "./layouts/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import ProductsContainer from "./pages/Products/ProductsContainer/ProductsContainer";
import ProductDetailCont from "./pages/Details/ProductDetailContainer";

function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <div className="App">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/items" element={<ProductsContainer />} />
              <Route path="/items/:category" element={<ProductsContainer />} />
              <Route
                path="/item/:prodId"
                element={<ProductDetailCont type="featuredProduct" />}
              />
              <Route
                path="/product/:prodId"
                element={<ProductDetailCont type="products" />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;
