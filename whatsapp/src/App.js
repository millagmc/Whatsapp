import logo from './logo.svg';
import './App.css';
import Header from './componentes/header/Header'

function App() {
  return (
    <div>
      <Header/>
      <div>corpo da mensagem </div>
      <div>
        <button>Usuario</button>
        <input type='text'>Mensagem </input>
        <button>Enviar</button>
      </div>          
    </div>
  );
}

export default App;
