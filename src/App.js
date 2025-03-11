import './App.css';
import Logo from './components/Logo'
import perfil from './imagens/perfil.svg'
import sacola from './imagens/sacola.svg'

const optList = ['CATEGORIAS', 'FAVORITOS', 'MINHAS ESTANTE']
const icons = [perfil, sacola]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <ul className='options'>
          {optList.map((option) => (
            <li className='option'><p>{option}</p></li>
          ))}
        </ul>
        <ul className='icons'>
          {icons.map((icon) => (
            <li className='icon'><img src={icon} alt='icones'></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
