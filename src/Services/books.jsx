import axios from "axios";

const livrosAPI = axios.create({ baseURL: "http//localhost:8030/livros" })

const getBooks = () => {
    const response = livrosAPI.get('/')

    return response.data
}

export {
    getBooks
}