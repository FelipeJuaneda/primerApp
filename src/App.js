import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  //FUNCION CLICK PARA MENU BURGER
  let menuBurger = () => {
    let listaDesordenada = document.getElementById("lista");
    listaDesordenada.classList.toggle("toggleBurger");
  };

  /* -------------------------------------------------- */
  return (
    <div className="App">
      <NavBar menuBurger={menuBurger} />
      <Main />
      <h1>Que quieres llevar!? (pedir online)</h1>
      <ItemListContainer />
    </div>
  );
}

export default App;
