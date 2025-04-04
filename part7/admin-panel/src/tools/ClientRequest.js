import axios from "axios";
import { showError } from "./Message";

const ClientRequest = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

ClientRequest.interceptors.response.use((response) => (response), (error) => {
    showError('خطایی رخ داده است.');
        
    // Return rejected promise to propagate the error
    return Promise.reject(error);
})
export default ClientRequest