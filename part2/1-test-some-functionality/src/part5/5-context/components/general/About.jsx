import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import useAuth from '../../hooks/useAuth'
import UserContext from '../../contexts/UserContext'
import useUser from '../../hooks/useUser'

export default function About(props) {

    // using hooks
    const theme = useContext(ThemeContext)

    return (
        <div className='content box' style={theme}>
            <h2>About Page</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis molestiae soluta porro, sit vitae non molestias eius velit illum! Vero nihil tempora ullam iure error eos quasi esse. Perspiciatis, tenetur?</p>
        </div>
    )
}
