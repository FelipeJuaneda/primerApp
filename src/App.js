import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/context/CartContext";
import AppContextProvider from "./components/context/AppContext";
import Contact from "./components/Contacto/Contact";

function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <div className="App">
          <BrowserRouter>
            <NavBar />
            <Main />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;
