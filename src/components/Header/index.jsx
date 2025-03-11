
import Icons from '../HeaderIcons';
import Logo from '../Logo'
import Options from '../Options';
import styled from 'styled-components';


const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
}
`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Options />
            <Icons />
        </HeaderContainer>
    )
}

export default Header