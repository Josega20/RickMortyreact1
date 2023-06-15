import "./App.css";
import MiApi from "./Componets/MiApi/MiApi";
import "bootstrap/dist/css/bootstrap.min.css";
import rm1 from "./Componets/img/rm1.PNG";
function App() {
  return (
    <div className="App">
      <header>
        <img id="imagen" src={rm1} alt="imagen1" />
      </header>
     
        <MiApi />
    
      <footer className="box">@Rick&MortyConsumoApi</footer>
    </div>
  );
}

export default App;
