import axios from "axios";

const livrosAPI = axios.create({ baseURL: "http://localhost:8080/books" })

const getBooks = async () => {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getBooks
}