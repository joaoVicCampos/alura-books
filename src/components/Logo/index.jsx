import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const Img = styled.img`
  margin-right: 5px;
`

const Logo = () => {
    return (
        <LogoContainer className='logo'>
            <Img src={logo} alt='logoDaEmpresa' className='logo-img'></Img>
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo