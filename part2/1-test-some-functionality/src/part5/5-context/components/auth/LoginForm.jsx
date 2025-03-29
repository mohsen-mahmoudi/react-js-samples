import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import useUser from '../../hooks/useUser'
import useAuth from '../../hooks/useAuth'

export default function LoginForm() {

    const { login } = useUser()

    function loginSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target)
        const username = data.get('username')
        const password = data.get('password')
        login({ username, password })
    }

    return (
        <form onSubmit={loginSubmit}>
            <div className="form-item">
                <label>username : </label>
                <input name="username" />
            </div>
            <div className="form-item">
                <label>password : </label>
                <input name="password" />
            </div>
            <div className="form-item">
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}

