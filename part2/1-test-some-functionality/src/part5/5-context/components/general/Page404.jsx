import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import useAuth from '../../hooks/useAuth'
import UserContext from '../../contexts/UserContext'
import useUser from '../../hooks/useUser'

export default function Page404(props) {

    // using hooks
    const theme = useContext(ThemeContext)

    return (
        <div className='content box' style={theme}>
            <h2>404 Page</h2>
            <p>where are you going?</p>
        </div>
    )
}
