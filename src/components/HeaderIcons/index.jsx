import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icon = styled.li`
    min-width: 80px;
    display: flex;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    align-items: center;

`
const IconsComponent = styled.ul`
    display: flex;
`
const icons = [perfil, sacola]

const Icons = () => {
    return (
        <IconsComponent className='icons'>
            {icons.map((icon) => (
                <Icon className='icon'><img src={icon} alt='icones'></img></Icon>
            ))}
        </IconsComponent>
    )
}

export default Icons