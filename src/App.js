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
  //pruebass
  let pruebaProps = () => {
    let titulo = document.getElementById("tituloScroll");
    titulo.style.color = "green";
  };

  /* -------------------------------------------------- */
  return (
    <div className="App">
      <NavBar menuBurger={menuBurger} />
      <Main cambioColorTitulo={pruebaProps} />
      <h1>Heladeria Artesanal</h1>
      <ItemListContainer/>

    </div>
  );
}

export default App;
