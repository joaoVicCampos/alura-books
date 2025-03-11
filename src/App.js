import './App.css';
import Icons from './components/HeaderIcons/index';
import Logo from './components/Logo'
import Options from './components/Options';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Options />
        <Icons />
      </header>
    </div>
  );
}

export default App; 
