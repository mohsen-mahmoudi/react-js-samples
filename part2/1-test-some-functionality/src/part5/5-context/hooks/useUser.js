import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

export default function useUser() {
    const { isLoggedIn, user } = useContext(UserContext)
    return ({ isLoggedIn, user })
}
