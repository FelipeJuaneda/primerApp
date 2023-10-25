import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContextProvider from "./context/AppContext";
import CartContextProvider from "./context/CartContext";
import ItemDestListContainer from "./pages/Prodcuts/ItemDest/ItemDestListContainer";
import ItemDestDetailContainer from "./pages/Details/ItemDestDetail/ItemDestDetailContainer";
import ProductDetailCont from "./pages/Details/ProductsDetail/ProductDetailCont";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NavBar from "./layouts/NavBar/NavBar";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";

function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <div className="App">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
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
