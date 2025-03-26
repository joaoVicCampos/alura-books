import axios from "axios";

const favLivrosAPI = axios.create({ baseURL: "http://localhost:8080/favorites" })

const getFavBooks = async () => {
    const response = await favLivrosAPI.get('/')

    return response.data
}

const postFavBook = async (id) => {
    await favLivrosAPI.post(`/${id}`)
}

const deleteFavBook = async (id) => [
    await favLivrosAPI.delete(`/${id}`)
]

export {
    getFavBooks,
    postFavBook,
    deleteFavBook
}