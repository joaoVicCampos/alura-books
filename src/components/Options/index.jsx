import styled from 'styled-components'
import { Link } from 'react-router-dom'

const optList = ['CATEGORIAS', 'FAVORITES', 'ESTANTE']

const Option = styled.li`
     min-width: 100px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    align-items: center;
`
const OptionsContainer = styled.ul`
     display: flex;
`

const Options = () => {
    return (

        <OptionsContainer className='options'>
            {optList.map((option) => (
                <Option className='option'>
                    <Link to={`/${option.toLowerCase()}`}><p>{option}</p></Link>
                </Option>
            ))}
        </OptionsContainer>

    )
}

export default Options