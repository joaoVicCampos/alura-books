import { livros } from './BdLastDrops'
import styled from 'styled-components'
import Title from '../Title'
import CardRecomend from '../CardRecomend'
import livro from '../../imagens/livro2.png'



const LastDropsContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const LastDrops = () => {
    return (
        <LastDropsContainer>
            <Title cor='#000'>Ultimos Lançamentos</Title>
            <NewBooksContainer>
                {
                    livros.map((livro) => (
                        <div>
                            <p>{livro.nome}</p>
                            <img src={livro.src} alt="" />
                        </div>
                    ))
                }
            </NewBooksContainer>
            <CardRecomend
                title='Talvez voce se interesse por...'
                subtitle='Angular 11'
                desc='Construindo uma apliacação do zero'
                img={livro}
            />
        </LastDropsContainer>
    )
}

export default LastDrops