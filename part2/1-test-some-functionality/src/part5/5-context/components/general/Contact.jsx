import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import useAuth from '../../hooks/useAuth'
import UserContext from '../../contexts/UserContext'
import useUser from '../../hooks/useUser'

export default function Contact(props) {

    // using hooks
    const theme = useContext(ThemeContext)

    return (
        <div className='content box' style={theme}>
            <h2>Contact Page</h2>
            <p>Contact....</p>
        </div>
    )
}
