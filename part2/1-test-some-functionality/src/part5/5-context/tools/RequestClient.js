import axios from "axios";
import { getToken } from "./Token";

const RequestClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json'
    }
})

RequestClient.interceptors.request.use(
    function (config) {
        const token = getToken();
        if (token) {
            config.headers.token = getToken()
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Response interceptor
RequestClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);


// it is based on javascript and we can ignore axios with this approach
/*
function RequestClient(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve({ data }))
            .catch(reject)
    })
}
*/

export default RequestClient