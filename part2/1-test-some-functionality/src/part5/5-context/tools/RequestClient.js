import axios from "axios";

const RequestClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json'
    }
})

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