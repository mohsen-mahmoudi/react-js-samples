import Cookies from 'js-cookie'

const TOKEN_NAME = 'token'

export function getToken() {
    return localStorage.getItem(TOKEN_NAME)
    //return Cookies.get(TOKEN_NAME)
}

export function removeToken() {
    return localStorage.removeItem(TOKEN_NAME)
    //return Cookies.remove(TOKEN_NAME)
}

export function setToken(token) {
    return localStorage.setItem(TOKEN_NAME, token)
    //return Cookies.set(TOKEN_NAME, token)
}
