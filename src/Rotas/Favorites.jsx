import { useEffect, useState } from "react"
import styled from "styled-components"
import { deleteFavBook, getFavBooks } from '../Services/favorites'


const FavContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`


const Favorites = () => {
    const [favorites, setFavorites] = useState([])

    const fetchFavBooks = async () => {
        const favBooksApi = await getFavBooks()
        setFavorites(favBooksApi)
    }

    const removeFavBook = async (id) => {
        await deleteFavBook(id)
        await fetchFavBooks()
        alert('Livro removido dos Favoritos')
    }


    useEffect(() => {
        fetchFavBooks()
    }, [])


    return (
        <FavContainer>
            <div>
                <Titulo>Aqui estão seus livros favoritos:</Titulo>
                <ResultadoContainer>
                    {
                        favorites.length !== 0 ? favorites.map(favorito => (
                            <Resultado onClick={() => removeFavBook(favorito.id)}>
                                <p>{favorito.nome}</p>
                            </Resultado>
                        )) : null
                    }
                </ResultadoContainer>
            </div>
        </FavContainer>
    )
}

export default Favorites