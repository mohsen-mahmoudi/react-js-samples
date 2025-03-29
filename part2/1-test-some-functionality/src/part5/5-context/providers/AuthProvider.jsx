import React, { useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { getToken } from '../tools/Token';
import useAuth from '../hooks/useAuth';

export default function AuthProvider({ children }) {

    const { user, login, isLoading, isLoggedIn, logout, getUser } = useAuth()

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
