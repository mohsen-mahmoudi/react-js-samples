import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import LoginForm from './LoginForm'
import useUser from '../../hooks/useUser'
import { Navigate, useLocation } from 'react-router-dom'

export default function Login() {

    const theme = useContext(ThemeContext)

    const { isLoggedIn, isLoading } = useUser()

    const location = useLocation()

    if (isLoading) {
        return <div className='content box' style={theme}>'Waiting...'</div>
    }

    if (isLoggedIn)  {
        return <Navigate to={location.state?.from || '/'} />
    }

    return (
        <div className='content box' style={theme}>
            <h2>Login Page</h2>
            <LoginForm />
        </div>
    )
}

