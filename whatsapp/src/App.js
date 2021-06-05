import './App.css';
import Header from './componentes/header/Header';
import Main from './componentes/main/Main';
import Navigation from './componentes/navigation/Navigation';

function App() {
  return (
    <div className='App'>
      <div className='SidebarLeft'>
        <Header/>
        <Navigation/>
      </div>
      <div className='Main'>
        <Main/>
      </div>
    </div>
  );
}

export default App;
