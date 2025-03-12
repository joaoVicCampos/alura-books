import styled from 'styled-components'

const optList = ['CATEGORIAS', 'FAVORITOS', 'MINHAS ESTANTE']

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
                <Option className='option'><p>{option}</p></Option>
            ))}
        </OptionsContainer>

    )
}

export default Options