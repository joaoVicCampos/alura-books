import './style.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const icons = [perfil, sacola]

const Icons = () => {
    return (
        <ul className='icons'>
            {icons.map((icon) => (
                <li className='icon'><img src={icon} alt='icones'></img></li>
            ))}
        </ul>
    )
}

export default Icons