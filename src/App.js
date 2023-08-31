import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/context/CartContext";
import AppContextProvider from "./components/context/AppContext";
import Contact from "./components/Contact/Contact";
import Checkout from "./components/Checkout/Checkout";
import ProductDetailCont from "./components/ProductsDetail/ProductDetailCont";
import ItemDestListContainer from "./components/ItemDest/ItemDestListContainer";
import ItemDestDetailContainer from "./components/ItemDestDetail/ItemDestDetailContainer";

function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <div className="App">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/items" element={<ItemDestListContainer />} />
              <Route
                path="/items/:category"
                element={<ItemDestListContainer />}
              />
              <Route
                path="/item/:itemId"
                element={<ItemDestDetailContainer />}
              />
              <Route path="/product/:prodId" element={<ProductDetailCont />} />
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
