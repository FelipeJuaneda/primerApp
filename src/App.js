import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  //Algunos estilos
  const estilosItemList ={
    background:'#000',
    color: 'green'
  }
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
      <h1>TITULO</h1>
      <ItemListContainer greeting={estilosItemList}/>
    </div>
  );
}

export default App;
