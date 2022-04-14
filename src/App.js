import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';

function App() {
  let alertPrueba =()=>{
    alert('funca')
  }
  return (
    <div className="App">
      <NavBar/>
      <Main alerta={alertPrueba}/>
      <h1>TITULO</h1>
    </div>
  );
}

export default App;
