import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

export default function useUser() {
    const { user, login, isLoading, isLoggedIn, logout, getUser } = useContext(UserContext)
    return ({ user, login, isLoading, isLoggedIn, logout, getUser })
}
