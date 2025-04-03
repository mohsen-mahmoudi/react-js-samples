import axios from "axios";

const ClientRequest = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

export default ClientRequest