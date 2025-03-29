import React, { useEffect, useState } from 'react';
import ThemeContext, { themes } from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';
import RequestClient from '../tools/RequestClient';
import { getToken, removeToken, setToken } from '../tools/Token';

export default function AuthProvider({ children }) {

    const [user, setUser] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    function login() {
        setIsLoading(true)
        RequestClient('/api/login', { method: 'POST', data: { username: 'mohsen', password: '123' } })
            .then(response => {
                // handle token in front
                setToken(response.data.token)
                getUser()
            })
            .catch(error => {
                alert(`${error.response.data}`);
            })
        //.finally(() => setIsLoading(false))
    }

    function getUser() {
        RequestClient('/api/user'/*, { headers: { token: getToken() } } */)
            .then(response => {
                setUser(response.data)
                setIsLoggedIn(true)
            })
            .catch(error => {
                alert(`${error.response.data}`);
            })
            .finally(() => setIsLoading(false))
    }

    function logout() {
        setUser({})
        setIsLoggedIn(false)
        removeToken()
    }

    useEffect(() => {
        if (getToken())
            getUser()
    }, [])

    return (
        <UserContext.Provider value={{ user, login, isLoading, isLoggedIn, logout }}>
            {children}
        </UserContext.Provider>
    )
}
