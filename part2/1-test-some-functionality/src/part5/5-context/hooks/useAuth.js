import React, { useEffect, useState } from 'react'
import RequestClient from '../tools/RequestClient';
import { getToken, removeToken, setToken } from '../tools/Token';
import useUser from './useUser';

export default function useAuth() {
    const [user, setUser] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true)

    function login(data) {
        setIsLoading(true)
        RequestClient('/api/login',
            { method: 'POST', data })
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
        if (getToken()) {
            getUser()
        } else {
            setIsLoading(false)
        }
    }, [])

    return ({ user, login, isLoading, isLoggedIn, logout, getUser })
}
