import styled from "styled-components"
import InputSearch from "../InputSearch"
import { useEffect, useState } from "react"
import { getBooks } from "../../Services/books"
import { postFavBook } from "../../Services/favorites"


const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #fff;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Title = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitle = styled.h4`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Search = () => {
    const [bookSearched, setbookSearched] = useState([])
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const booksAPI = await getBooks()
        setBooks(booksAPI)
    }

    const insertFavBook = async (id) => {
        const booksAPI = await getBooks()
        const book = booksAPI.find((book) => book.id === id)
        await postFavBook(id)
        alert(`Livro ${book.nome} foi adicionado a favoritos`)
    }


    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <SearchContainer className="Search">
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre aqui seu livro desejado.</SubTitle>
            <InputSearch
                placeholder="Busque sua próxima leitura"
                onBlur={(event) => {
                    const textInput = event.target.value
                    const searchRes = books.filter((livro) => livro.nome.includes(textInput))
                    setbookSearched(searchRes)
                }}
            />
            {bookSearched.map((livro) => (
                <Resultado onClick={() => insertFavBook(livro.id)}>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt="" />
                </Resultado>

            ))}
        </SearchContainer>
    )
}

export default Search